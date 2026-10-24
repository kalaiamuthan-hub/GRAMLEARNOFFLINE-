/**
 * GramLearn AI - Application Controller & Router
 * Manages view switching, online/offline detection, PWA service worker registration,
 * dashboard metrics, and global toast notifications.
 */

class AppController {
  constructor() {
    this.currentView = 'dashboard';
    this.views = ['dashboard', 'quiz', 'chat', 'ocr', 'gaps', 'notes', 'settings'];
    this.activeClassFilter = 'Class 10';
  }

  setClassFilter(className) {
    this.activeClassFilter = className;
    this.updateClassFilterUI();
    this.refreshDashboard();
  }

  updateClassFilterUI() {
    const pills = document.querySelectorAll('#dash-class-pills .class-filter-pill');
    pills.forEach((p) => {
      const c = p.getAttribute('data-class');
      p.classList.toggle('active', c === this.activeClassFilter);
    });

    const indicator = document.getElementById('dash-class-scope-indicator');
    if (indicator) {
      if (this.activeClassFilter === 'ALL') {
        indicator.textContent = 'Showing All Classes (Aggregated Records)';
      } else {
        indicator.textContent = `Showing ${this.activeClassFilter} Records`;
      }
    }
  }

  async init() {
    console.log('[GramLearn AI] Initializing mobile-first offline tutor...');

    // Setup Navigation Handlers
    this.setupNavigation();

    // Setup Online/Offline Network Listeners
    this.setupNetworkStatusListener();

    // Register Service Worker for PWA
    this.registerServiceWorker();

    // Initialize sub-controllers
    if (window.gramQuiz) window.gramQuiz.init();
    if (window.gramChat) window.gramChat.init();
    if (window.gramOCR) window.gramOCR.init();
    if (window.gramGaps) window.gramGaps.init();
    if (window.gramNotes) window.gramNotes.init();
    if (window.gramSettings) await window.gramSettings.init();

    // Setup Student Profile & Authentication
    await this.initStudentAuth();

    // Load initial dashboard statistics
    await this.refreshDashboard();

    // Check hash for initial route
    const hash = window.location.hash.replace('#', '');
    if (hash && this.views.includes(hash)) {
      this.navigateTo(hash);
    } else {
      this.navigateTo('dashboard');
    }
  }

  setupNavigation() {
    // Desktop sidebar nav links
    document.querySelectorAll('.sidebar .nav-item').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = btn.getAttribute('data-view');
        if (targetView) this.navigateTo(targetView);
      });
    });

    // Mobile bottom nav links
    document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = btn.getAttribute('data-view');
        if (targetView) this.navigateTo(targetView);
      });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      const hash = window.location.hash.replace('#', '') || 'dashboard';
      if (this.views.includes(hash)) {
        this.navigateTo(hash, false);
      }
    });
  }

  navigateTo(viewId, updateHistory = true) {
    if (!this.views.includes(viewId)) return;

    this.currentView = viewId;

    // Toggle active view in DOM
    document.querySelectorAll('.app-view').forEach((view) => {
      view.classList.remove('active');
    });

    const activeViewEl = document.getElementById(`view-${viewId}`);
    if (activeViewEl) {
      activeViewEl.classList.add('active');
      window.scrollTo(0, 0);
    }

    // Update Desktop Nav Active States
    document.querySelectorAll('.sidebar .nav-item').forEach((btn) => {
      if (btn.getAttribute('data-view') === viewId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Mobile Bottom Nav Active States
    document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach((btn) => {
      if (btn.getAttribute('data-view') === viewId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (updateHistory) {
      window.location.hash = viewId;
    }

    // Refresh views on enter
    if (viewId === 'dashboard') {
      this.refreshDashboard();
    } else if (viewId === 'quiz' && window.gramQuiz) {
      if (!window.gramQuiz.currentQuiz || window.gramQuiz.runnerView?.classList.contains('hidden')) {
        if (window.gramQuiz.resultsView?.classList.contains('hidden') && window.gramQuiz.reviewView?.classList.contains('hidden')) {
          window.gramQuiz.resetWizardToStep1();
        }
      }
    } else if (viewId === 'notes' && window.gramNotes) {
      window.gramNotes.renderNotes();
    } else if (viewId === 'ocr' && window.gramOCR) {
      window.gramOCR.onViewActivated();
    } else if (viewId === 'chat' && window.gramChat) {
      window.gramChat.onViewActivated();
    }
  }

  setupNetworkStatusListener() {
    const updateNetworkUI = () => {
      const isOnline = navigator.onLine;
      const statusDots = document.querySelectorAll('.status-indicator-dot');
      const statusLabels = document.querySelectorAll('.network-status-text');

      statusDots.forEach((dot) => {
        if (isOnline) {
          dot.className = 'status-indicator-dot';
        } else {
          dot.className = 'status-indicator-dot offline';
        }
      });

      statusLabels.forEach((label) => {
        label.textContent = isOnline ? 'Online' : 'Offline (Airplane Mode)';
      });

      const dashStatusWidget = document.getElementById('dash-offline-status-pill');
      if (dashStatusWidget) {
        if (isOnline) {
          dashStatusWidget.className = 'badge badge-emerald';
          dashStatusWidget.innerHTML = '<span class="status-indicator-dot"></span> Internet Connected';
        } else {
          dashStatusWidget.className = 'badge badge-amber';
          dashStatusWidget.innerHTML = '<span class="status-indicator-dot offline"></span> Airplane / Offline Mode Active';
        }
      }
    };

    window.addEventListener('online', () => {
      updateNetworkUI();
      window.showToast('Back online. You can now download model assets.', 'info');
    });

    window.addEventListener('offline', () => {
      updateNetworkUI();
      window.showToast('You are offline. GramLearn AI is running locally from cache.', 'info');
    });

    updateNetworkUI();
  }

  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('./sw.js');
        await registration.update();
        console.log('[PWA] Service Worker registered & updated:', registration.scope);
      } catch (err) {
        console.warn('[PWA] Service Worker registration failed:', err);
      }
    }
  }

  async refreshDashboard() {
    // 1. Welcome Greeting
    await this.refreshWelcome();

    // Ensure filter pills UI reflects current active class filter
    this.updateClassFilterUI();

    // 2. Compute Real Learning Metrics for Active Student from IndexedDB (with class isolation)
    try {
      const student = await window.gramDB.getCurrentStudent();
      const studentId = student?.id || 'student-1';
      const stats = await window.gramDB.getStudentStatsSummary(studentId, this.activeClassFilter);

      // Stat Metric Cards (matching index.html element IDs)
      const statQuizzes = document.getElementById('stat-quizzes-count');
      const statQuestions = document.getElementById('stat-questions-count');
      const statAccuracy = document.getElementById('stat-accuracy-rate') || document.getElementById('stat-accuracy-val');
      const statAccuracySub = document.getElementById('stat-accuracy-sub');
      const statAvgScore = document.getElementById('stat-average-score') || document.getElementById('stat-avg-score');
      const statBestScore = document.getElementById('stat-best-score');
      const statLatestLabel = document.getElementById('stat-latest-label');
      const statChapters = document.getElementById('stat-chapters-count');
      const statSessionsLabel = document.getElementById('stat-sessions-label');
      const streakPill = document.getElementById('dash-streak-pill');
      const streakSub = document.getElementById('dash-streak-sub');

      if (statQuizzes) statQuizzes.textContent = stats.totalQuizzes;
      if (statQuestions) statQuestions.textContent = stats.totalQuestions;
      if (statAccuracy) statAccuracy.textContent = `${stats.overallAccuracy}%`;
      if (statAccuracySub) {
        statAccuracySub.textContent = stats.totalQuestions > 0 
          ? `${stats.totalCorrect} of ${stats.totalQuestions} questions correct` 
          : 'Based on verified answers';
      }
      if (statAvgScore) statAvgScore.textContent = `${stats.averageScore}%`;
      if (statBestScore) statBestScore.textContent = `${stats.bestScore}%`;
      if (statLatestLabel) {
        statLatestLabel.textContent = stats.totalQuizzes > 0 
          ? `Best Score (Latest: ${stats.latestScore}%)` 
          : 'Best Score (No attempts yet)';
      }
      if (statChapters) statChapters.textContent = stats.completedChapters;
      if (statSessionsLabel) {
        statSessionsLabel.textContent = `Chapters Mastered (${stats.totalSessions} Study ${stats.totalSessions === 1 ? 'Day' : 'Days'})`;
      }
      if (streakPill) {
        streakPill.textContent = `🔥 ${stats.currentStreak} Day Streak`;
        if (stats.currentStreak === 0) {
          streakPill.style.background = 'var(--bg-subtle)';
          streakPill.style.borderColor = 'var(--border-light)';
        } else {
          streakPill.style.background = 'var(--accent-amber-light)';
          streakPill.style.borderColor = 'rgba(217, 119, 6, 0.3)';
        }
      }
      if (streakSub) {
        streakSub.textContent = stats.currentStreak > 0
          ? `${stats.currentStreak} consecutive study days logged`
          : 'Take a quiz today to start your learning streak!';
      }

      // Empty State vs Populated Data Area Toggle
      const emptyStateEl = document.getElementById('dash-empty-state');
      const dataAreaEl = document.getElementById('dash-has-data-area');

      if (stats.totalQuizzes === 0) {
        if (emptyStateEl) emptyStateEl.classList.remove('hidden');
        if (dataAreaEl) dataAreaEl.classList.add('hidden');
      } else {
        if (emptyStateEl) emptyStateEl.classList.add('hidden');
        if (dataAreaEl) dataAreaEl.classList.remove('hidden');

        // 1. Render Score Progression Trend Chart
        this.renderScoreTrendChart(stats.scoreTrend);

        // Score improvement badge
        const improvementEl = document.getElementById('dash-trend-improvement-pill');
        if (improvementEl) {
          if (stats.scoreTrend && stats.scoreTrend.length >= 2) {
            const first = stats.scoreTrend[0].score;
            const latest = stats.scoreTrend[stats.scoreTrend.length - 1].score;
            const diff = latest - first;
            if (diff > 0) {
              improvementEl.innerHTML = `<span class="badge badge-emerald">📈 +${diff}% Score Improvement</span>`;
            } else if (diff === 0) {
              improvementEl.innerHTML = `<span class="badge badge-sky">🎯 Consistent Performance</span>`;
            } else {
              improvementEl.innerHTML = `<span class="badge badge-amber">⚡ Practice needed (${diff}%)</span>`;
            }
          } else {
            improvementEl.innerHTML = `<span class="badge badge-sky">1 Attempt Logged</span>`;
          }
        }

        // 2. Subject Mastery Indicators
        const subjectRatio = document.getElementById('dash-subject-ratio');
        if (subjectRatio) {
          subjectRatio.textContent = this.activeClassFilter === 'ALL' ? 'All Classes' : this.activeClassFilter;
        }

        const mathsAcc = document.getElementById('dash-maths-accuracy');
        const mathsBar = document.getElementById('dash-maths-bar-fill') || document.getElementById('dash-maths-bar');
        const mathsMeta = document.getElementById('dash-maths-subtext') || document.getElementById('dash-maths-meta');
        if (mathsAcc) mathsAcc.textContent = `${stats.maths.accuracy}% Accuracy`;
        if (mathsBar) mathsBar.style.width = `${stats.maths.accuracy}%`;
        if (mathsMeta) mathsMeta.textContent = `${stats.maths.quizzes} quizzes (${stats.maths.questions} questions solved)`;

        const sciAcc = document.getElementById('dash-science-accuracy');
        const sciBar = document.getElementById('dash-science-bar-fill') || document.getElementById('dash-science-bar');
        const sciMeta = document.getElementById('dash-science-subtext') || document.getElementById('dash-science-meta');
        if (sciAcc) sciAcc.textContent = `${stats.science.accuracy}% Accuracy`;
        if (sciBar) sciBar.style.width = `${stats.science.accuracy}%`;
        if (sciMeta) sciMeta.textContent = `${stats.science.quizzes} quizzes (${stats.science.questions} questions solved)`;

        // 3. Chapter Progress Mini-List
        const chapList = document.getElementById('dash-chapter-progress-list');
        if (chapList) {
          if (!stats.chapters || stats.chapters.length === 0) {
            chapList.innerHTML = `<p style="font-size: 0.82rem; color: var(--text-muted); padding: 0.5rem 0;">No chapter-specific attempts yet for this selection.</p>`;
          } else {
            chapList.innerHTML = stats.chapters.slice(0, 5).map(c => `
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.45rem 0.65rem; background: var(--bg-subtle); border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-size: 0.84rem;">
                <div>
                  <strong style="color: var(--text-primary);">${this.escapeHtml(c.chapter)}</strong>
                  <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.4rem;">(${c.subject})</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="font-weight: 700; color: ${c.bestScore >= 70 ? 'var(--accent-emerald)' : 'var(--primary-700)'};">${c.bestScore}%</span>
                  <span class="badge ${c.isCompleted ? 'badge-emerald' : 'badge-amber'}" style="font-size: 0.7rem;">
                    ${c.isCompleted ? 'Mastered' : 'In Progress'}
                  </span>
                </div>
              </div>
            `).join('');
          }
        }

        // 4. Learning-Gap Alerts List
        const gapsBadge = document.getElementById('dash-gaps-badge');
        const gapsList = document.getElementById('dash-gaps-list');

        if (gapsBadge) {
          gapsBadge.textContent = `${stats.needsPracticeTopics.length} ${stats.needsPracticeTopics.length === 1 ? 'Concept' : 'Concepts'} to Revise`;
          gapsBadge.className = stats.needsPracticeTopics.length > 0 ? 'badge badge-rose' : 'badge badge-emerald';
        }

        if (gapsList) {
          if (stats.needsPracticeTopics.length === 0) {
            gapsList.innerHTML = `
              <div style="text-align: center; padding: 1.5rem 1rem; background: var(--accent-emerald-light); border-radius: var(--radius-md); border: 1px solid rgba(45, 106, 79, 0.2);">
                <div style="font-size: 1.8rem; margin-bottom: 0.35rem;">🎉</div>
                <h4 style="font-size: 0.95rem; font-weight: 700; color: #14532d; margin-bottom: 0.25rem;">No Critical Learning Gaps!</h4>
                <p style="font-size: 0.82rem; color: #166534; line-height: 1.45;">
                  You have answered accurately across your recent attempts. Take on Hard difficulty questions or explore new chapters to keep advancing!
                </p>
              </div>
            `;
          } else {
            gapsList.innerHTML = stats.needsPracticeTopics.map(t => `
              <div style="padding: 0.75rem 0.85rem; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 0.65rem; display: flex; justify-content: space-between; align-items: center; gap: 0.75rem;">
                <div>
                  <div style="display: flex; align-items: center; gap: 0.45rem;">
                    <span class="badge badge-rose" style="font-size: 0.72rem;">Needs Practice</span>
                    <strong style="font-size: 0.88rem; color: var(--text-primary);">${this.escapeHtml(t.topic)}</strong>
                  </div>
                  <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">
                    ${this.escapeHtml(t.chapter || t.subject)} · Accuracy: <strong>${t.accuracy}%</strong> (${t.wrongCount} missed in ${t.attemptCount} attempts)
                  </div>
                </div>
                <button class="btn btn-sm btn-primary" style="white-space: nowrap; font-size: 0.78rem; padding: 0.35rem 0.75rem;" onclick="window.gramQuiz.startTargetedRevisionQuiz('${this.escapeHtml(t.topic)}', '${t.classLevel || 'Class 10'}', '${t.subject || 'Science'}')">
                  ⚡ Revise
                </button>
              </div>
            `).join('');
          }
        }

        // 5. Recommended Next Chapter Quiz & Revision Card
        const recCard = document.getElementById('dash-recommendation-card');
        if (recCard) {
          let mistakes = [];
          try {
            mistakes = await window.gramDB.getStudentPreviousMistakes(studentId, this.activeClassFilter === 'ALL' ? null : this.activeClassFilter);
          } catch (err) {
            console.warn('Error checking mistakes for recommendation card:', err);
          }

          if (stats.recommendedNextChapter) {
            const rec = stats.recommendedNextChapter;
            recCard.innerHTML = `
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                    <span class="badge badge-purple">🎯 Recommended Next Assessment</span>
                    <span class="badge badge-sky">${this.escapeHtml(rec.classLevel)}</span>
                  </div>
                  <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">
                    ${this.escapeHtml(rec.chapter)} (${this.escapeHtml(rec.subject)})
                  </h3>
                  <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">
                    Next recommended chapter in Tamil Nadu Samacheer Kalvi syllabus to advance your subject mastery.
                  </p>
                </div>
                <div style="display: flex; gap: 0.65rem; flex-wrap: wrap; align-items: center;">
                  ${mistakes.length > 0 ? `
                    <button class="btn btn-secondary" style="font-size: 0.88rem;" onclick="window.gramQuiz.startPreviousMistakesQuiz('${this.escapeHtml(rec.classLevel)}', '${this.escapeHtml(mistakes[0].subject || 'Science')}')">
                      ⚡ Practice ${mistakes.length} Missed Questions
                    </button>
                  ` : ''}
                  <button class="btn btn-primary" style="font-size: 0.88rem;" onclick="window.gramQuiz.startSpecificChapterQuiz('${this.escapeHtml(rec.classLevel)}', '${this.escapeHtml(rec.subject)}', '${this.escapeHtml(rec.chapter)}')">
                    🚀 Start Chapter Quiz
                  </button>
                </div>
              </div>
            `;
          } else if (mistakes.length > 0) {
            recCard.innerHTML = `
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                    <span class="badge badge-rose">⚡ Targeted Revision Available</span>
                    <span class="badge badge-sky">${this.activeClassFilter === 'ALL' ? 'All Classes' : this.activeClassFilter}</span>
                  </div>
                  <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">
                    You have ${mistakes.length} previous mistake${mistakes.length === 1 ? '' : 's'} ready to re-test!
                  </h3>
                  <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">
                    Re-test the specific questions you previously missed to achieve 100% conceptual clarity.
                  </p>
                </div>
                <button class="btn btn-primary" onclick="window.gramQuiz.startPreviousMistakesQuiz('${this.activeClassFilter === 'ALL' ? 'Class 10' : this.activeClassFilter}', '${this.escapeHtml(mistakes[0].subject || 'Science')}')">
                  🎯 Start Mistakes Quiz (${mistakes.length})
                </button>
              </div>
            `;
          } else {
            recCard.innerHTML = `
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                    <span class="badge badge-emerald">🌟 All Available Chapters Mastered!</span>
                  </div>
                  <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">
                    Phenomenal work in ${this.activeClassFilter === 'ALL' ? 'all classes' : this.activeClassFilter}!
                  </h3>
                  <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">
                    Try a Hard difficulty revision quiz or switch classes to expand your knowledge.
                  </p>
                </div>
                <button class="btn btn-primary" onclick="window.gramApp.navigateTo('quiz')">
                  Take Another Quiz
                </button>
              </div>
            `;
          }
        }

        // 6. Recent Quiz Attempts Table
        const recentAttemptsContainer = document.getElementById('dash-recent-attempts-container');
        if (recentAttemptsContainer) {
          if (!stats.recentAttempts || stats.recentAttempts.length === 0) {
            recentAttemptsContainer.innerHTML = `<p style="color: var(--text-muted); padding: 1.5rem; text-align: center;">No attempts recorded yet for this class selection.</p>`;
          } else {
            recentAttemptsContainer.innerHTML = `
              <table style="width: 100%; border-collapse: collapse; font-size: 0.86rem;">
                <thead>
                  <tr style="border-bottom: 2px solid var(--border-light); text-align: left; color: var(--text-muted);">
                    <th style="padding: 0.6rem 0.75rem;">Date</th>
                    <th style="padding: 0.6rem 0.75rem;">Class</th>
                    <th style="padding: 0.6rem 0.75rem;">Quiz / Chapter</th>
                    <th style="padding: 0.6rem 0.75rem;">Subject</th>
                    <th style="padding: 0.6rem 0.75rem;">Difficulty</th>
                    <th style="padding: 0.6rem 0.75rem;">Score</th>
                    <th style="padding: 0.6rem 0.75rem; text-align: right;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${stats.recentAttempts.map(a => `
                    <tr style="border-bottom: 1px solid var(--border-light);">
                      <td style="padding: 0.6rem 0.75rem; color: var(--text-muted); font-size: 0.8rem; white-space: nowrap;">
                        ${new Date(a.date).toLocaleDateString()}
                      </td>
                      <td style="padding: 0.6rem 0.75rem;">
                        <span class="badge badge-sky" style="font-size: 0.74rem;">${a.classLevel || a.class || 'Class 10'}</span>
                      </td>
                      <td style="padding: 0.6rem 0.75rem; font-weight: 600; color: var(--text-primary);">
                        ${this.escapeHtml(a.title || a.chapter || 'Quiz')}
                      </td>
                      <td style="padding: 0.6rem 0.75rem;">
                        <span class="badge ${a.subject === 'Mathematics' ? 'badge-purple' : 'badge-emerald'}" style="font-size: 0.75rem;">
                          ${a.subject}
                        </span>
                      </td>
                      <td style="padding: 0.6rem 0.75rem;">
                        <span class="badge ${a.difficulty === 'Hard' ? 'badge-rose' : a.difficulty === 'Medium' ? 'badge-amber' : 'badge-sky'}" style="font-size: 0.75rem;">
                          ${a.difficulty || 'Mixed'}
                        </span>
                      </td>
                      <td style="padding: 0.6rem 0.75rem; font-weight: 800; font-size: 0.95rem; color: ${a.percentage >= 80 ? 'var(--accent-emerald)' : a.percentage >= 60 ? 'var(--primary-700)' : 'var(--accent-rose)'};">
                        ${a.percentage}%
                      </td>
                      <td style="padding: 0.6rem 0.75rem; text-align: right; white-space: nowrap;">
                        <button class="btn btn-sm btn-ghost" style="padding: 0.25rem 0.65rem; font-size: 0.78rem;" onclick="window.gramQuiz.reviewAttemptById('${a.id}')">
                          🔍 Review
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            `;
          }
        }
      }

      // Refresh Personalization summary badge
      await this.refreshPersonalizationUI();

      // Recent Notes preview in Dashboard
      const notes = await window.gramDB.getAllNotes();
      const recentNotesContainer = document.getElementById('dash-recent-notes');
      if (recentNotesContainer) {
        if (notes.length === 0) {
          recentNotesContainer.innerHTML = `
            <p style="color: var(--text-muted); font-size: 0.88rem; text-align: center; padding: 1.5rem 0;">No saved notes yet. Start learning or save quiz solutions!</p>
          `;
        } else {
          recentNotesContainer.innerHTML = notes
            .slice(0, 3)
            .map(
              (n) => `
            <div style="padding: 0.75rem 0; border-bottom: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <h4 style="font-size: 0.92rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.15rem;">${this.escapeHtml(n.title)}</h4>
                <span class="badge ${window.gramNotes ? window.gramNotes.getTagBadgeClass(n.tag) : 'badge-sky'}">${n.tag}</span>
              </div>
              <button class="btn btn-sm btn-ghost" onclick="window.gramApp.navigateTo('notes')">View</button>
            </div>
          `
            )
            .join('');
        }
      }

      // Model status banner on dashboard
      const dashModelWidget = document.getElementById('dash-model-status-card');
      if (dashModelWidget) {
        const s = window.gramAI.status;
        if (s === 'READY_NEURAL') {
          dashModelWidget.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span class="status-indicator-dot"></span>
                <strong>Offline SmolLM2 360M Model Loaded in RAM</strong>
              </div>
              <button class="btn btn-sm btn-primary" onclick="window.gramApp.navigateTo('chat')">Start Tutoring Chat</button>
            </div>
          `;
        } else if (window.gramAI.isOfflineCached) {
          dashModelWidget.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span class="status-indicator-dot"></span>
                <span>SmolLM2 model weights cached offline! Click to initialize in memory.</span>
              </div>
              <button class="btn btn-sm btn-secondary" onclick="window.gramApp.navigateTo('settings')">Initialize Model</button>
            </div>
          `;
        } else {
          dashModelWidget.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
              <div>
                <strong>Offline SmolLM2 360M Ready to Cache</strong>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">Ultra-compact (~230MB) model optimized for fast mobile offline inference in airplane mode.</p>
              </div>
              <button class="btn btn-sm btn-secondary" onclick="window.gramApp.navigateTo('settings')">Download Model (~230MB)</button>
            </div>
          `;
        }
      }
    } catch (e) {
      console.warn('Dashboard metrics refresh error:', e);
    }
  }

  /**
   * Render high-resolution responsive SVG score trend chart
   */
  renderScoreTrendChart(trendData) {
    const container = document.getElementById('dash-score-chart-container');
    if (!container) return;

    if (!trendData || trendData.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2rem 0; color: var(--text-muted);">
          <p>No attempts recorded yet. Take your first quiz to generate a trend line!</p>
        </div>
      `;
      return;
    }

    if (trendData.length === 1) {
      const p = trendData[0];
      container.innerHTML = `
        <div style="text-align: center; padding: 1.5rem; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary-700); margin-bottom: 0.25rem;">${p.score}%</div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">First Attempt: ${this.escapeHtml(p.title)}</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">Date: ${p.date} • Complete another quiz to start drawing the progress curve!</div>
        </div>
      `;
      return;
    }

    const w = 600;
    const h = 180;
    const padL = 40;
    const padR = 30;
    const padT = 25;
    const padB = 30;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    const points = trendData.map((d, i) => {
      const x = padL + (i / (trendData.length - 1)) * plotW;
      const y = padT + (1 - (d.score / 100)) * plotH;
      return { x, y, score: d.score, date: d.date, title: d.title };
    });

    const linePointsStr = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    const areaPointsStr = `M ${points[0].x.toFixed(1)},${padT + plotH} ` +
      points.map(p => `L ${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') +
      ` L ${points[points.length - 1].x.toFixed(1)},${padT + plotH} Z`;

    const svgHtml = `
      <svg viewBox="0 0 ${w} ${h}" style="width: 100%; height: 180px; display: block; overflow: visible;" preserveAspectRatio="none">
        <defs>
          <linearGradient id="scoreAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#4a3728" stop-opacity="0.32" />
            <stop offset="100%" stop-color="#4a3728" stop-opacity="0.02" />
          </linearGradient>
        </defs>

        <!-- Horizontal Guide Lines -->
        <line x1="${padL}" y1="${padT}" x2="${w - padR}" y2="${padT}" stroke="var(--border-light)" stroke-dasharray="4,4" stroke-width="1" />
        <text x="${padL - 8}" y="${padT + 4}" font-size="10" fill="var(--text-muted)" text-anchor="end">100%</text>

        <line x1="${padL}" y1="${padT + plotH * 0.5}" x2="${w - padR}" y2="${padT + plotH * 0.5}" stroke="var(--border-light)" stroke-dasharray="4,4" stroke-width="1" />
        <text x="${padL - 8}" y="${padT + plotH * 0.5 + 4}" font-size="10" fill="var(--text-muted)" text-anchor="end">50%</text>

        <line x1="${padL}" y1="${padT + plotH}" x2="${w - padR}" y2="${padT + plotH}" stroke="var(--border-light)" stroke-width="1" />
        <text x="${padL - 8}" y="${padT + plotH + 4}" font-size="10" fill="var(--text-muted)" text-anchor="end">0%</text>

        <!-- Filled Gradient Area -->
        <path d="${areaPointsStr}" fill="url(#scoreAreaGrad)" />

        <!-- Line Chart Path -->
        <polyline points="${linePointsStr}" fill="none" stroke="var(--primary-600)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Data Point Nodes & Labels -->
        ${points.map((p) => `
          <g>
            <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4.5" fill="var(--bg-surface)" stroke="var(--primary-600)" stroke-width="2.5">
              <title>${this.escapeHtml(p.title)}: ${p.score}% (${p.date})</title>
            </circle>
            <text x="${p.x.toFixed(1)}" y="${(p.y - 8).toFixed(1)}" font-size="10" font-weight="700" fill="var(--text-primary)" text-anchor="middle">
              ${p.score}%
            </text>
            <text x="${p.x.toFixed(1)}" y="${(h - 10).toFixed(1)}" font-size="10" fill="var(--text-muted)" text-anchor="middle">
              ${p.date}
            </text>
          </g>
        `).join('')}
      </svg>
    `;

    container.innerHTML = svgHtml;
  }

  // ================= Clear Progress Modal Handlers =================
  openClearProgressModal() {
    const modal = document.getElementById('clear-progress-modal');
    const nameEl = document.getElementById('clear-progress-student-name');
    if (nameEl && this.currentStudent) {
      nameEl.textContent = this.currentStudent.name || 'Active Student';
    }
    if (modal) modal.classList.add('open');
  }

  closeClearProgressModal() {
    const modal = document.getElementById('clear-progress-modal');
    if (modal) modal.classList.remove('open');
  }

  async handleClearProgress() {
    if (!this.currentStudent) return;
    try {
      await window.gramDB.clearStudentProgress(this.currentStudent.id);
      this.closeClearProgressModal();
      await this.refreshDashboard();
      window.showToast(`Progress records cleared successfully for ${this.currentStudent.name}.`, 'success');
    } catch (e) {
      console.error('Clear progress error:', e);
      window.showToast('Failed to clear progress records.', 'error');
    }
  }

  async initStudentAuth() {
    this.selectedAvatar = '👩‍🎓';

    // Setup avatar selection click listeners (both in modal and entrance portal)
    document.querySelectorAll('.avatar-choice-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const parent = btn.closest('.avatar-grid');
        if (parent) {
          parent.querySelectorAll('.avatar-choice-btn').forEach((b) => b.classList.remove('selected'));
        } else {
          document.querySelectorAll('.avatar-choice-btn').forEach((b) => b.classList.remove('selected'));
        }
        btn.classList.add('selected');
        this.selectedAvatar = btn.getAttribute('data-avatar') || '👩‍🎓';
      });
    });

    // Populate registered students in both entrance portal & modal
    await this.populateExistingStudents();

    // Load active student
    const currentStudent = await window.gramDB.getCurrentStudent();
    this.updateStudentProfileUI(currentStudent);

    // Setup Entrance Portal State on Launch
    const portal = document.getElementById('entrance-portal');
    const isSessionAuth = sessionStorage.getItem('gramlearn_session_auth') === 'true';

    if (!isSessionAuth && portal) {
      // First time entering the site / starting the app: SHOW entrance portal with smooth entrance
      portal.classList.remove('portal-hidden');
      const userInput = document.getElementById('entrance-login-username');
      if (userInput && currentStudent && currentStudent.name && currentStudent.id !== 'guest') {
        userInput.value = currentStudent.username || currentStudent.name.toLowerCase();
      }
    } else if (portal) {
      portal.classList.add('portal-hidden');
    }
  }

  async populateExistingStudents() {
    const list = await window.gramDB.getAllStudents();
    const current = await window.gramDB.getCurrentStudent();
    const currentId = current?.id || (list[0] ? list[0].id : null);

    // Modal Select (fallback)
    const select = document.getElementById('student-select-existing');
    if (select) {
      select.innerHTML = list
        .map(
          (s) => `
        <option value="${s.id}" ${s.id === currentId ? 'selected' : ''}>${s.avatar} ${this.escapeHtml(s.name)} (${s.grade || 'Student'})</option>
      `
        )
        .join('');
    }
  }

  togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      if (btn) btn.textContent = '🙈';
    } else {
      input.type = 'password';
      if (btn) btn.textContent = '👁️';
    }
  }

  switchEntranceTab(tab) {
    const loginForm = document.getElementById('entrance-form-login');
    const registerForm = document.getElementById('entrance-form-register');
    const tabLogin = document.getElementById('entrance-tab-btn-login');
    const tabRegister = document.getElementById('entrance-tab-btn-register');

    if (tab === 'login') {
      if (loginForm) loginForm.classList.remove('hidden');
      if (registerForm) registerForm.classList.add('hidden');
      if (tabLogin) tabLogin.classList.add('active');
      if (tabRegister) tabRegister.classList.remove('active');
    } else {
      if (loginForm) loginForm.classList.add('hidden');
      if (registerForm) registerForm.classList.remove('hidden');
      if (tabRegister) tabRegister.classList.add('active');
      if (tabLogin) tabLogin.classList.remove('active');
    }
  }

  openStudentLoginModal(tab = 'login') {
    this.openEntrancePortal(tab);
  }

  closeStudentLoginModal() {
    this.closeEntrancePortal();
    const modal = document.getElementById('student-login-modal');
    if (modal) modal.classList.remove('open');
  }

  openEntrancePortal(tab = 'login') {
    const portal = document.getElementById('entrance-portal');
    if (!portal) return;

    this.switchEntranceTab(tab);
    portal.classList.remove('portal-hidden');

    // Hide transition loader if previously showing
    const loader = document.getElementById('entrance-transition-loader');
    if (loader) loader.classList.add('hidden');

    // Clear password field for security
    const pass = document.getElementById('entrance-login-password');
    if (pass) pass.value = '';
  }

  closeEntrancePortal() {
    const portal = document.getElementById('entrance-portal');
    if (portal) portal.classList.add('portal-hidden');
  }

  async handleEntranceLogin() {
    const userInput = document.getElementById('entrance-login-username');
    const passInput = document.getElementById('entrance-login-password');

    const username = userInput ? userInput.value.trim() : '';
    const password = passInput ? passInput.value.trim() : '';

    if (!username) {
      window.showToast('Please enter your username / பெயரை உள்ளிடவும்', 'error');
      if (userInput) userInput.focus();
      return;
    }
    if (!password) {
      window.showToast('Please enter your password / கடவுச்சொல்லை உள்ளிடவும்', 'error');
      if (passInput) passInput.focus();
      return;
    }

    const authResult = await window.gramDB.authenticateStudent(username, password);
    if (!authResult.success) {
      window.showToast(authResult.error, 'error');
      if (passInput) passInput.focus();
      return;
    }

    await window.gramDB.saveCurrentStudent(authResult.student);
    await this.transitionIntoApp(authResult.student);
  }

  async handleEntranceRegister() {
    const nameInput = document.getElementById('entrance-reg-name');
    const gradeInput = document.getElementById('entrance-reg-grade');
    const langInput = document.getElementById('entrance-reg-lang');
    const passInput = document.getElementById('entrance-reg-password');
    const confirmPassInput = document.getElementById('entrance-reg-confirm-password');

    const name = nameInput ? nameInput.value.trim() : '';
    const grade = gradeInput ? gradeInput.value.trim() : 'Class 10';
    const lang = langInput ? langInput.value : 'Tamil & English';
    const password = passInput ? passInput.value.trim() : '';
    const confirmPassword = confirmPassInput ? confirmPassInput.value.trim() : '';

    if (!name) {
      window.showToast('Please enter student name / மாணவர் பெயரை உள்ளிடவும்', 'error');
      if (nameInput) nameInput.focus();
      return;
    }

    if (!password || password.length < 3) {
      window.showToast('Password must be at least 3 characters / கடவுச்சொல் குறைந்தது 3 எழுத்துகள் வேண்டும்', 'error');
      if (passInput) passInput.focus();
      return;
    }

    if (password !== confirmPassword) {
      window.showToast('Passwords do not match / கடவுச்சொற்கள் பொருந்தவில்லை', 'error');
      if (confirmPassInput) confirmPassInput.focus();
      return;
    }

    const newStudent = {
      id: 'student-' + Date.now(),
      username: name.toLowerCase().replace(/\s+/g, ''),
      name: name,
      password: password,
      grade: grade,
      avatar: this.selectedAvatar || '👩‍🎓',
      language: lang,
      isLoggedIn: true
    };

    await window.gramDB.saveCurrentStudent(newStudent);
    await this.transitionIntoApp(newStudent);
  }

  async handleEntranceGuest() {
    await window.gramDB.logoutStudent();
    const guest = await window.gramDB.getCurrentStudent();
    await this.transitionIntoApp(guest);
  }

  async transitionIntoApp(student) {
    if (!student) return;

    // Show smooth entrance loader animation
    const loader = document.getElementById('entrance-transition-loader');
    const greetingEl = document.getElementById('entrance-loader-greeting');
    const subEl = document.getElementById('entrance-loader-sub');

    if (greetingEl) {
      greetingEl.textContent = `வணக்கம், ${student.name}! 🎓`;
    }
    if (subEl) {
      subEl.textContent = `Loading ${student.grade || 'Samacheer'} syllabus & offline AI tutor...`;
    }
    if (loader) loader.classList.remove('hidden');

    // Save session authentication
    sessionStorage.setItem('gramlearn_session_auth', 'true');
    localStorage.setItem('gramlearn_student_auth', 'true');

    // Update UI and stats
    this.updateStudentProfileUI(student);
    await this.refreshDashboard();

    // After brief smooth animation, dismiss entrance portal with smooth exit
    setTimeout(() => {
      const portal = document.getElementById('entrance-portal');
      if (portal) {
        portal.classList.add('portal-hidden');
      }
      setTimeout(() => {
        if (loader) loader.classList.add('hidden');
      }, 500);

      window.showToast(`Welcome to GramLearn AI, ${student.name}!`, 'success');
    }, 600);
  }

  updateStudentProfileUI(student) {
    if (!student) return;
    this.currentStudent = student;

    // Default active class filter to student grade only if not already set by user
    if (!this.activeClassFilter && student.grade) {
      const norm = window.gramDB.normalizeClass(student.grade);
      if (norm) {
        this.activeClassFilter = norm;
      }
    }

    // Update Sidebar Profile Widget
    const sidebarAvatar = document.getElementById('sidebar-student-avatar');
    const sidebarName = document.getElementById('sidebar-student-name');
    const sidebarGrade = document.getElementById('sidebar-student-grade');

    if (sidebarAvatar) sidebarAvatar.textContent = student.avatar || '👩‍🎓';
    if (sidebarName) sidebarName.textContent = student.name || 'Student';
    if (sidebarGrade) sidebarGrade.textContent = student.grade || 'Class 10';

    // Update Mobile Header Student Avatar
    const mobileAvatar = document.getElementById('mobile-student-avatar');
    if (mobileAvatar) mobileAvatar.textContent = student.avatar || '👩‍🎓';

    // Update Top-Right Header Student Pills across all views
    document.querySelectorAll('.header-student-pill .pill-avatar').forEach((el) => {
      el.textContent = student.avatar || '👩‍🎓';
    });
    document.querySelectorAll('.header-student-pill .pill-name').forEach((el) => {
      el.textContent = student.name || 'Student';
    });

    // Dynamic Time-of-Day Greeting (Good Morning / Afternoon / Evening)
    const hour = new Date().getHours();
    let greetingPrefix = 'Good Morning';
    if (hour >= 12 && hour < 17) greetingPrefix = 'Good Afternoon';
    else if (hour >= 17) greetingPrefix = 'Good Evening';

    const greetingTitle = document.querySelector('.view-main-title');
    if (greetingTitle && greetingTitle.textContent.includes('Good')) {
      greetingTitle.innerHTML = `${greetingPrefix}, <span id="dash-welcome-name">${this.escapeHtml(student.name || 'Student')}</span>! 👋 <span id="dash-welcome-grade" style="font-size: 1.1rem; color: var(--primary-600); font-weight: 600;">${student.grade ? `(${this.escapeHtml(student.grade)})` : ''}</span>`;
    } else {
      const welcomeEl = document.getElementById('dash-welcome-name');
      if (welcomeEl) welcomeEl.textContent = student.name || 'Student';
      const welcomeGrade = document.getElementById('dash-welcome-grade');
      if (welcomeGrade) welcomeGrade.textContent = student.grade ? `(${student.grade})` : '';
    }
  }

  switchAuthTab(tab) {
    this.switchEntranceTab(tab);
  }

  async handleStudentLogin() {
    await this.handleEntranceLogin();
  }

  async handleModalLogin() {
    const userInput = document.getElementById('modal-login-username');
    const passInput = document.getElementById('modal-login-password');
    const username = userInput ? userInput.value.trim() : '';
    const password = passInput ? passInput.value.trim() : '';

    if (!username || !password) {
      window.showToast('Please enter both username and password', 'error');
      return;
    }

    const authResult = await window.gramDB.authenticateStudent(username, password);
    if (!authResult.success) {
      window.showToast(authResult.error, 'error');
      return;
    }

    await window.gramDB.saveCurrentStudent(authResult.student);
    sessionStorage.setItem('gramlearn_session_auth', 'true');
    localStorage.setItem('gramlearn_student_auth', 'true');
    this.closeStudentLoginModal();
    this.updateStudentProfileUI(authResult.student);
    await this.refreshDashboard();
    window.showToast(`Welcome back, ${authResult.student.name}!`, 'success');
  }

  async handleStudentRegister() {
    await this.handleEntranceRegister();
  }

  async handleStudentLogout() {
    await window.gramDB.logoutStudent();
    sessionStorage.removeItem('gramlearn_session_auth');
    localStorage.removeItem('gramlearn_student_auth');
    const guest = await window.gramDB.getCurrentStudent();
    this.updateStudentProfileUI(guest);
    await this.refreshDashboard();
    window.showToast('Logged out. Please choose a profile or sign up.', 'info');
    this.openEntrancePortal('login');
  }

  async refreshWelcome() {
    const currentStudent = await window.gramDB.getCurrentStudent();
    this.updateStudentProfileUI(currentStudent);
  }

  // ================= Personalization Management =================
  async refreshPersonalizationUI() {
    if (!window.gramDB) return;
    const p = await window.gramDB.getPersonalization();
    if (!p) return;

    // Update AI Engine
    if (window.gramAI) {
      window.gramAI.setPersonalization(p);
    }

    // Update Dashboard Personalization Card
    const dashBadge = document.getElementById('dash-personalization-card');
    if (dashBadge) {
      const interestsStr = (p.interests || ['Science & Space', 'Everyday Life']).slice(0, 3).join(', ');
      dashBadge.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
              <span class="badge badge-emerald">🎯 AI Personalization Active</span>
              <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary);">${this.escapeHtml(p.grade)}</span>
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted);">
              Style: <strong>${this.escapeHtml(p.learningStyle)}</strong> · Analogies: <strong>${this.escapeHtml(interestsStr)}</strong>
            </div>
          </div>
          <button class="btn btn-sm btn-outline" onclick="window.gramApp.openPersonalizationModal()">
            ⚙️ Customize Learning Style
          </button>
        </div>
      `;
    }
  }

  async openPersonalizationModal() {
    const modal = document.getElementById('personalization-modal');
    if (!modal) return;

    const p = await window.gramDB.getPersonalization();
    const gradeSelect = document.getElementById('pers-grade');
    const styleSelect = document.getElementById('pers-style');
    const paceSelect = document.getElementById('pers-pace');

    if (gradeSelect) gradeSelect.value = p.grade || 'Class 10 (SSLC)';
    if (styleSelect) styleSelect.value = p.learningStyle || 'Bilingual Tanglish (தமிழ் விளக்கம்)';
    if (paceSelect) paceSelect.value = p.pace || 'Clear & Relatable';

    // Interest Checkboxes
    document.querySelectorAll('.pers-interest-checkbox').forEach(cb => {
      cb.checked = (p.interests || []).includes(cb.value);
    });

    modal.classList.add('open');
  }

  closePersonalizationModal() {
    const modal = document.getElementById('personalization-modal');
    if (modal) modal.classList.remove('open');
  }

  async savePersonalizationForm() {
    const grade = document.getElementById('pers-grade')?.value || 'Class 10 (SSLC)';
    const style = document.getElementById('pers-style')?.value || 'Bilingual Tanglish (தமிழ் விளக்கம்)';
    const pace = document.getElementById('pers-pace')?.value || 'Clear & Relatable';

    const selectedInterests = [];
    document.querySelectorAll('.pers-interest-checkbox:checked').forEach(cb => {
      selectedInterests.push(cb.value);
    });

    const updated = {
      grade,
      learningStyle: style,
      pace,
      interests: selectedInterests.length > 0 ? selectedInterests : ['Science & Space', 'Everyday Life', 'Cricket & Sports']
    };

    await window.gramDB.savePersonalization(updated);
    if (window.gramAI) {
      window.gramAI.setPersonalization(updated);
    }
    await this.refreshPersonalizationUI();
    await this.refreshWelcome();
    this.closePersonalizationModal();
    window.showToast('AI Tutor Personalization saved! Tone and analogies updated.', 'success');
  }

  // ================= TN State Board Syllabus Explorer (Screen 5 Reference) =================
  openSyllabusModal() {
    const modal = document.getElementById('syllabus-modal');
    if (!modal) return;
    this.renderSyllabusUnits();
    modal.classList.add('open');
  }

  closeSyllabusModal() {
    const modal = document.getElementById('syllabus-modal');
    if (modal) modal.classList.remove('open');
  }

  renderSyllabusUnits() {
    const container = document.getElementById('syllabus-units-container');
    if (!container) return;

    const classVal = document.getElementById('syllabus-class-select')?.value || '10th';
    const subjectVal = document.getElementById('syllabus-subject-select')?.value || 'Science';

    let units = [];
    if (window.TNSyllabusEngine) {
      units = window.TNSyllabusEngine.getUnitsForClassAndSubject(classVal, subjectVal);
    }

    if (!units || units.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
          <p>No specific chapters loaded for this selection. Try selecting <strong>10th</strong>, <strong>12th</strong>, <strong>11th</strong>, <strong>9th</strong>, <strong>8th</strong>, <strong>7th</strong>, or <strong>6th</strong> Standard.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = units.map(u => `
      <div class="syllabus-unit-card" id="card-${u.id}">
        <div class="syllabus-unit-header" onclick="window.gramApp.toggleSyllabusUnit('${u.id}')">
          <div class="syllabus-unit-title">
            <span class="syllabus-unit-badge">${u.unit}</span>
            <span>${this.escapeHtml(u.title)}</span>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px; color: var(--text-muted);"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <div class="syllabus-unit-body" id="body-${u.id}">
          <div style="font-weight: 700; color: var(--primary-700); font-size: 0.88rem; margin-bottom: 0.35rem;">
            🇮🇳 ${this.escapeHtml(u.tamilTitle || u.tamil || '')}
          </div>
          <p style="margin-bottom: 0.5rem; font-size: 0.86rem; line-height: 1.45;">
            ${this.escapeHtml(u.summaryEn || u.desc || '')}
          </p>
          ${u.formulas ? `<div style="padding: 0.45rem 0.65rem; background: var(--primary-50); border-radius: var(--radius-sm); border: 1px solid var(--primary-200); font-size: 0.8rem; margin-bottom: 0.65rem; font-family: monospace;">${this.escapeHtml(u.formulas)}</div>` : ''}
          <div class="syllabus-unit-actions">
            <button class="btn btn-sm btn-primary" onclick="window.gramApp.studySyllabusUnit('Explain Tamil Nadu ${classVal} Standard ${subjectVal} - ${this.escapeHtml(u.title)} (${this.escapeHtml(u.tamilTitle || '')}) in detail with formulas and real-life examples.', 'explain')">
              📖 Study with AI Tutor
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.gramApp.studySyllabusUnit('Explain Tamil Nadu ${classVal} Standard ${subjectVal} - ${this.escapeHtml(u.title)} (${this.escapeHtml(u.tamilTitle || '')}) completely in simple Tamil.', 'tamil')">
              🇮🇳 தமிழில் படி (Tamil)
            </button>
            <button class="btn btn-sm btn-outline" onclick="window.gramApp.studySyllabusUnit('Provide 3 high-yield board exam practice questions on Tamil Nadu ${classVal} Standard ${subjectVal} - ${this.escapeHtml(u.title)} with answers.', 'quiz')">
              ❓ Practice 3 Questions
            </button>
            <button class="btn btn-sm btn-outline" style="border-color: var(--primary-600); color: var(--primary-800);" onclick="window.gramApp.saveSyllabusUnitToNotes('${u.id}', '${classVal}', '${subjectVal}')">
              📝 Save to Study Notes
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  async saveSyllabusUnitToNotes(unitId, classVal, subjectVal) {
    if (!window.TNSyllabusEngine || !window.gramDB) return;
    const units = window.TNSyllabusEngine.getUnitsForClassAndSubject(classVal, subjectVal);
    const unit = units.find(u => u.id === unitId);
    if (!unit) return;

    const tag = classVal.includes('10') ? '10th SSLC' :
                classVal.includes('12') ? '12th HSC' :
                classVal.includes('11') ? '11th HSC' :
                classVal.includes('9') ? '9th Std' : '6th-8th Std';

    const noteTitle = `[${classVal} ${subjectVal}] ${unit.title}`;
    const noteContent = `📘 தமிழ்நாடு மாநிலப் பாடத்திட்டம் (TN Board ${classVal} Standard) - ${subjectVal}
Unit: ${unit.unit} - ${unit.title} (${unit.tamilTitle || ''})

💡 எளிய விளக்கம் (Simple Concept):
${unit.summaryTa}

📖 ஆங்கில விளக்கம் (English Definition):
${unit.summaryEn}

${unit.formulas ? `📐 முக்கிய சூத்திரங்கள் & விதிகள் (Formulas & Laws):\n${unit.formulas}\n` : ''}
🏏 நிஜ வாழ்க்கை உதாரணம் (Everyday Analogy):
${unit.analogy}

🌟 தேர்வில் அதிக மதிப்பெண் பெற (Board Exam Key Points):
${unit.keyPoints ? unit.keyPoints.map(p => `• ${p}`).join('\n') : ''}

💡 தேர்வு டிப்ஸ் (Exam Tips):
${unit.examTips || ''}`;

    try {
      await window.gramDB.saveNote({
        title: noteTitle,
        content: noteContent,
        tag: tag,
        pinned: false
      });
      window.showToast(`Saved "${unit.title}" to Study Notes for offline access!`, 'success');
      if (window.gramNotes) {
        await window.gramNotes.renderNotes();
      }
    } catch (e) {
      window.showToast('Failed to save note: ' + e.message, 'error');
    }
  }

  toggleSyllabusUnit(unitId) {
    const body = document.getElementById(`body-${unitId}`);
    if (body) {
      body.style.display = body.style.display === 'none' ? 'block' : 'none';
    }
  }

  studySyllabusUnit(basePrompt, mode) {
    this.closeSyllabusModal();
    this.navigateTo('chat');

    let fullPrompt = basePrompt;
    if (mode === 'tamil') {
      fullPrompt = `${basePrompt} Please explain this thoroughly in simple, friendly Tamil (எளிய தமிழில் விளக்குக).`;
      if (window.gramAI) window.gramAI.useBilingualTamil = true;
    } else if (mode === 'quiz') {
      fullPrompt = `${basePrompt} Please provide 3 high-yield board exam practice questions on this unit with complete answers.`;
    }

    if (window.gramChat) {
      window.gramChat.sendPreloadedPrompt(fullPrompt);
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

// Global Toast Notification Helper
window.showToast = function (message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px; color: var(--primary-600);"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  `;
  if (type === 'success') {
    icon = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px; color: var(--accent-emerald);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    `;
  } else if (type === 'error') {
    icon = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px; color: var(--accent-rose);"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
    `;
  }

  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 250);
  }, 3600);
};

// Initialize Application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.gramApp = new AppController();
  window.gramApp.init();
});
