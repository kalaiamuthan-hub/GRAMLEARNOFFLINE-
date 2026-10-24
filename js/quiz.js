/**
 * GramLearn AI - Interactive Student Quiz & Assessment Controller
 * 5-Step Guided User Journey for Tamil Nadu Samacheer Kalvi Classes 6–10 (Maths & Science):
 * Step 1: Select Class (Class 6 - 10)
 * Step 2: Select Subject (Mathematics, Science)
 * Step 3: Select Chapter (Only chapters with available questions)
 * Step 4: Select Quiz Mode (Quick Practice, Chapter Quiz, Mixed Revision, Previous Mistakes)
 * Step 5: Attend Quiz (MCQ runner, anti-double submission lock, instant explanation feedback, optional timer, results & review)
 */

class QuizController {
  constructor() {
    // Guided Wizard State
    this.currentStep = 1; // 1: Class, 2: Subject, 3: Chapter, 4: Mode, 5: Runner
    this.selectedClass = null; // 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'
    this.selectedSubject = null; // 'Mathematics', 'Science'
    this.selectedChapter = null; // Chapter name or 'ALL'
    this.selectedMode = 'quick'; // 'quick', 'chapter', 'revision', 'mistakes'
    this.selectedDifficulty = 'ALL'; // 'ALL', 'Easy', 'Medium', 'Hard'

    // Active Quiz Execution State
    this.currentQuiz = null;
    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswerSubmitted = false;
    this.timerEnabled = false;
    this.timerSeconds = 0;
    this.timerInterval = null;
    this.quizStartTime = null;

    // View Containers
    this.wizardView = null;
    this.runnerView = null;
    this.resultsView = null;
    this.reviewView = null;
  }

  init() {
    this.wizardView = document.getElementById('quiz-wizard-container');
    this.runnerView = document.getElementById('quiz-runner-container');
    this.resultsView = document.getElementById('quiz-results-container');
    this.reviewView = document.getElementById('quiz-review-container');

    // Breadcrumb navigation clicks
    const stepNodes = [
      { id: 'step-node-1', step: 1 },
      { id: 'step-node-2', step: 2 },
      { id: 'step-node-3', step: 3 },
      { id: 'step-node-4', step: 4 }
    ];

    stepNodes.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          // Can navigate back to already configured steps
          if (item.step < this.currentStep) {
            this.goToStep(item.step);
          }
        });
      }
    });

    // Populate initial Step 1 Class Cards
    this.renderStep1Classes();
  }

  /**
   * Reset wizard to Step 1 (e.g. when opening quiz view or clicking New Quiz)
   */
  async resetWizardToStep1() {
    // If student has a saved grade, pre-suggest it but start on Step 1
    const student = await window.gramDB.getCurrentStudent();
    if (student && student.grade) {
      const norm = window.gramDB.normalizeClass(student.grade);
      this.selectedClass = norm || 'Class 10';
    } else {
      this.selectedClass = 'Class 10';
    }

    this.selectedSubject = null;
    this.selectedChapter = null;
    this.selectedMode = 'quick';
    this.selectedDifficulty = 'ALL';

    this.showView('wizard');
    this.renderStep1Classes();
    this.goToStep(1);
  }

  /**
   * Navigate between Wizard Steps (1 to 4)
   */
  goToStep(stepNum) {
    this.currentStep = stepNum;

    // Update Breadcrumb Nodes
    for (let i = 1; i <= 4; i++) {
      const node = document.getElementById(`step-node-${i}`);
      if (node) {
        node.classList.toggle('active', i === stepNum);
        node.classList.toggle('completed', i < stepNum);
      }
    }

    // Toggle Panels
    for (let i = 1; i <= 4; i++) {
      const panel = document.getElementById(`wizard-panel-step${i}`);
      if (panel) {
        panel.classList.toggle('hidden', i !== stepNum);
      }
    }

    // Back Button Visibility
    const backBtn = document.getElementById('wizard-btn-back');
    if (backBtn) {
      backBtn.classList.toggle('hidden', stepNum <= 1);
    }

    this.showView('wizard');
  }

  /**
   * Go back one step in the wizard
   */
  wizardBack() {
    if (this.currentStep > 1) {
      this.goToStep(this.currentStep - 1);
    }
  }

  /**
   * Show/hide overall quiz sub-containers
   */
  showView(viewName) {
    if (this.wizardView) this.wizardView.classList.toggle('hidden', viewName !== 'wizard');
    if (this.runnerView) this.runnerView.classList.toggle('hidden', viewName !== 'runner');
    if (this.resultsView) this.resultsView.classList.toggle('hidden', viewName !== 'results');
    if (this.reviewView) this.reviewView.classList.toggle('hidden', viewName !== 'review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // STEP 1: Select Class
  // =========================================================================
  renderStep1Classes() {
    const container = document.getElementById('wizard-class-cards-container');
    if (!container || !window.TNQuizData) return;

    const classes = [
      { id: 'Class 6', label: 'Class 6', icon: '🎒', desc: 'Samacheer Kalvi Foundations (Maths & Science)' },
      { id: 'Class 7', label: 'Class 7', icon: '📐', desc: 'Intermediate Concepts, Equations & Life Science' },
      { id: 'Class 8', label: 'Class 8', icon: '🔭', desc: 'Core Mechanics, Rational Numbers & Cellular Science' },
      { id: 'Class 9', label: 'Class 9', icon: '🧪', desc: 'Pre-Board Preparation, Advanced Algebra & Physics' },
      { id: 'Class 10', label: 'Class 10', icon: '🎓', desc: 'SSLC Board Exam Master Practice & High-Yield MCQs' }
    ];

    container.innerHTML = classes.map(c => {
      const count = window.TNQuizData.getQuestions({ class: c.id }).length;
      const isSelected = this.selectedClass === c.id;

      return `
        <div class="quiz-wizard-card ${isSelected ? 'selected' : ''}" onclick="window.gramQuiz.selectClass('${c.id}')">
          <div>
            <div class="wizard-card-icon">${c.icon}</div>
            <div class="wizard-card-title">${c.label}</div>
            <div class="wizard-card-desc">${c.desc}</div>
          </div>
          <div class="wizard-card-footer">
            <span class="badge badge-sky">${count} Verified Questions</span>
            <span style="color: var(--primary-700); font-weight: 700;">Select →</span>
          </div>
        </div>
      `;
    }).join('');
  }

  selectClass(classLevel) {
    this.selectedClass = window.gramDB.normalizeClass(classLevel) || classLevel;
    this.renderStep2Subjects();
    this.goToStep(2);
  }

  // =========================================================================
  // STEP 2: Select Subject
  // =========================================================================
  renderStep2Subjects() {
    const container = document.getElementById('wizard-subject-cards-container');
    const classBadge = document.getElementById('wizard-step2-class-badge');
    const classNameText = document.getElementById('wizard-step2-class-name');

    if (classBadge) classBadge.textContent = this.selectedClass;
    if (classNameText) classNameText.textContent = this.selectedClass;

    if (!container || !window.TNQuizData) return;

    const subjects = [
      {
        id: 'Mathematics',
        label: 'Mathematics',
        icon: '📐',
        desc: 'Algebra, Geometry, Arithmetic, Trigonometry & Practical Problem Solving.'
      },
      {
        id: 'Science',
        label: 'Science',
        icon: '🔬',
        desc: 'Physics, Chemistry, Biology & Applied Scientific Principles.'
      }
    ];

    container.innerHTML = subjects.map(s => {
      const count = window.TNQuizData.getQuestions({ class: this.selectedClass, subject: s.id }).length;
      const chapters = window.TNQuizData.getChapters(this.selectedClass, s.id);
      const isSelected = this.selectedSubject === s.id;

      return `
        <div class="quiz-wizard-card ${isSelected ? 'selected' : ''}" onclick="window.gramQuiz.selectSubject('${s.id}')">
          <div>
            <div class="wizard-card-icon">${s.icon}</div>
            <div class="wizard-card-title">${s.label}</div>
            <div class="wizard-card-desc">${s.desc}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.85rem;">
              Chapters: <strong>${chapters.slice(0, 2).join(', ')}${chapters.length > 2 ? '...' : ''}</strong>
            </div>
          </div>
          <div class="wizard-card-footer">
            <span class="badge badge-emerald">${count} Questions Available</span>
            <span style="color: var(--primary-700); font-weight: 700;">Select →</span>
          </div>
        </div>
      `;
    }).join('');
  }

  selectSubject(subjectName) {
    this.selectedSubject = subjectName;
    this.renderStep3Chapters();
    this.goToStep(3);
  }

  // =========================================================================
  // STEP 3: Select Chapter (No empty chapters displayed!)
  // =========================================================================
  renderStep3Chapters() {
    const container = document.getElementById('wizard-chapter-cards-container');
    const classBadge = document.getElementById('wizard-step3-class-badge');
    const subjectBadge = document.getElementById('wizard-step3-subject-badge');

    if (classBadge) classBadge.textContent = this.selectedClass;
    if (subjectBadge) subjectBadge.textContent = this.selectedSubject;

    if (!container || !window.TNQuizData) return;

    // Load chapters strictly with questions available
    const chapterDetails = window.TNQuizData.getChapterDetails(this.selectedClass, this.selectedSubject);
    const totalSubjectQ = window.TNQuizData.getQuestions({ class: this.selectedClass, subject: this.selectedSubject }).length;

    // Option 1: Full Subject / Mixed Chapters card
    let html = `
      <div class="quiz-wizard-card ${this.selectedChapter === 'ALL' ? 'selected' : ''}" onclick="window.gramQuiz.selectChapter('ALL')">
        <div>
          <div class="wizard-card-icon">📚</div>
          <div class="wizard-card-title">All Chapters (Full Subject Practice)</div>
          <div class="wizard-card-desc">Practice questions blended from all available chapters for complete syllabus coverage.</div>
        </div>
        <div class="wizard-card-footer">
          <span class="badge badge-purple">${totalSubjectQ} Questions Total</span>
          <span style="color: var(--primary-700); font-weight: 700;">Select Full Subject →</span>
        </div>
      </div>
    `;

    // Option 2: Individual Chapter cards
    chapterDetails.forEach((ch, idx) => {
      const isSelected = this.selectedChapter === ch.chapter;
      const topicsPreview = ch.topics.slice(0, 3).join(', ');

      html += `
        <div class="quiz-wizard-card ${isSelected ? 'selected' : ''}" onclick="window.gramQuiz.selectChapter('${this.escapeHtmlAttr(ch.chapter)}')">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <span class="badge badge-sky" style="font-size: 0.72rem;">Chapter ${idx + 1}</span>
              <span class="badge badge-emerald" style="font-size: 0.72rem;">${ch.questionCount} Questions</span>
            </div>
            <div class="wizard-card-title" style="font-size: 1.05rem;">${this.escapeHtml(ch.chapter)}</div>
            <div class="wizard-card-desc" style="margin-bottom: 0.5rem;">
              Topics: ${this.escapeHtml(topicsPreview)}${ch.topics.length > 3 ? '...' : ''}
            </div>
          </div>
          <div class="wizard-card-footer">
            <span style="font-size: 0.75rem; color: var(--text-muted);">${ch.difficulties.join(' · ')}</span>
            <span style="color: var(--primary-700); font-weight: 700;">Select Chapter →</span>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  selectChapter(chapterName) {
    this.selectedChapter = chapterName;
    this.renderStep4Modes();
    this.goToStep(4);
  }

  // =========================================================================
  // STEP 4: Select Quiz Mode
  // =========================================================================
  async renderStep4Modes() {
    const container = document.getElementById('wizard-quiz-modes-container');
    const classBadge = document.getElementById('wizard-step4-class-badge');
    const subjectBadge = document.getElementById('wizard-step4-subject-badge');
    const chapterBadge = document.getElementById('wizard-step4-chapter-badge');

    if (classBadge) classBadge.textContent = this.selectedClass;
    if (subjectBadge) subjectBadge.textContent = this.selectedSubject;
    if (chapterBadge) {
      chapterBadge.textContent = this.selectedChapter === 'ALL' ? 'All Chapters' : this.selectedChapter;
    }

    // Check Previous Mistakes for active student in this class & subject
    let mistakesCount = 0;
    try {
      const student = await window.gramDB.getCurrentStudent();
      const mistakes = await window.gramDB.getStudentPreviousMistakes(student?.id || 'student-1', this.selectedClass, this.selectedSubject);
      mistakesCount = mistakes.length;
    } catch (e) {
      console.warn('Could not check previous mistakes:', e);
    }

    const modes = [
      {
        id: 'quick',
        icon: '⚡',
        title: 'Quick Practice',
        desc: '5 rapid-fire questions to quickly reinforce fundamental formulas and concepts.',
        badge: '5 Questions • ~5 Min',
        badgeClass: 'badge-sky',
        disabled: false
      },
      {
        id: 'chapter',
        icon: '📖',
        title: 'Chapter Quiz',
        desc: `Comprehensive assessment covering key topics for ${this.selectedChapter === 'ALL' ? 'this subject' : this.selectedChapter}.`,
        badge: '10 Questions • In-Depth',
        badgeClass: 'badge-purple',
        disabled: false
      },
      {
        id: 'revision',
        icon: '🔄',
        title: 'Mixed Revision Quiz',
        desc: 'Curated mix of Easy, Medium, and Hard exam-oriented questions for balanced practice.',
        badge: '8 Questions • Balanced',
        badgeClass: 'badge-amber',
        disabled: false
      },
      {
        id: 'mistakes',
        icon: '🎯',
        title: 'Previous Mistakes Quiz',
        desc: mistakesCount > 0
          ? `Targeted revision re-testing ${mistakesCount} question${mistakesCount === 1 ? '' : 's'} you answered incorrectly previously.`
          : 'No previous mistakes recorded for this subject! Complete other quizzes to unlock this mode.',
        badge: mistakesCount > 0 ? `${mistakesCount} Missed Questions` : '0 Mistakes',
        badgeClass: mistakesCount > 0 ? 'badge-rose' : 'badge-emerald',
        disabled: mistakesCount === 0
      }
    ];

    if (container) {
      container.innerHTML = modes.map(m => {
        const isSelected = this.selectedMode === m.id;
        const disabledStyle = m.disabled ? 'opacity: 0.55; cursor: not-allowed; pointer-events: none;' : 'cursor: pointer;';

        return `
          <div class="quiz-mode-card ${isSelected ? 'selected' : ''}" style="${disabledStyle}" onclick="window.gramQuiz.selectMode('${m.id}')">
            <div class="quiz-mode-icon">${m.icon}</div>
            <div class="quiz-mode-title">${m.title}</div>
            <div class="quiz-mode-desc">${m.desc}</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.85rem;">
              <span class="badge ${m.badgeClass}">${m.badge}</span>
              ${isSelected ? '<span style="font-weight: 800; color: var(--primary-700);">✓ Selected</span>' : ''}
            </div>
          </div>
        `;
      }).join('');
    }

    this.updateWizardSummary();
  }

  selectMode(modeId) {
    this.selectedMode = modeId;
    this.renderStep4Modes();
  }

  updateWizardSummary() {
    const diffSelect = document.getElementById('wizard-difficulty-select');
    this.selectedDifficulty = diffSelect ? diffSelect.value : 'ALL';

    const countIndicator = document.getElementById('wizard-question-count-indicator');
    const summaryText = document.getElementById('wizard-step4-summary-text');

    // Calculate available questions pool
    const filter = {
      class: this.selectedClass,
      subject: this.selectedSubject
    };
    if (this.selectedChapter && this.selectedChapter !== 'ALL') {
      filter.chapter = this.selectedChapter;
    }
    if (this.selectedDifficulty !== 'ALL') {
      filter.difficulty = this.selectedDifficulty;
    }

    const availablePool = window.TNQuizData.getQuestions(filter);
    let targetCount = 5;
    if (this.selectedMode === 'chapter') targetCount = Math.min(10, availablePool.length || 5);
    else if (this.selectedMode === 'revision') targetCount = Math.min(8, availablePool.length || 5);
    else if (this.selectedMode === 'quick') targetCount = Math.min(5, availablePool.length || 5);

    if (countIndicator) {
      countIndicator.innerHTML = `
        🎯 <strong>${targetCount} Questions</strong> selected from a pool of <strong>${availablePool.length} verified questions</strong>
      `;
    }

    if (summaryText) {
      summaryText.textContent = `Preparing ${this.selectedClass} • ${this.selectedSubject} • ${this.selectedChapter === 'ALL' ? 'All Chapters' : this.selectedChapter}`;
    }
  }

  // =========================================================================
  // STEP 5: Launch & Attend Quiz
  // =========================================================================
  async launchFromWizard() {
    const timerToggle = document.getElementById('wizard-timer-toggle');
    this.timerEnabled = timerToggle ? timerToggle.checked : false;

    let selectedQuestions = [];

    if (this.selectedMode === 'mistakes') {
      // Fetch student previous mistakes
      try {
        const student = await window.gramDB.getCurrentStudent();
        const mistakes = await window.gramDB.getStudentPreviousMistakes(student?.id || 'student-1', this.selectedClass, this.selectedSubject);
        if (mistakes.length > 0) {
          // Map to questions
          selectedQuestions = mistakes.map(m => window.TNQuizData.getQuestionById(m.questionId)).filter(Boolean);
        }
      } catch (e) {
        console.warn('Error fetching mistakes for quiz:', e);
      }

      if (selectedQuestions.length === 0) {
        window.showToast('No mistakes found to re-test. Loading practice questions instead.', 'info');
        this.selectedMode = 'quick';
      }
    }

    if (selectedQuestions.length === 0) {
      const filter = {
        class: this.selectedClass,
        subject: this.selectedSubject
      };
      if (this.selectedChapter && this.selectedChapter !== 'ALL') {
        filter.chapter = this.selectedChapter;
      }
      if (this.selectedDifficulty !== 'ALL') {
        filter.difficulty = this.selectedDifficulty;
      }

      let available = window.TNQuizData.getQuestions(filter);

      // Fallback to broader difficulty if filtered too small
      if (available.length < 3 && this.selectedDifficulty !== 'ALL') {
        const broaderFilter = { class: this.selectedClass, subject: this.selectedSubject };
        if (this.selectedChapter && this.selectedChapter !== 'ALL') broaderFilter.chapter = this.selectedChapter;
        available = window.TNQuizData.getQuestions(broaderFilter);
      }

      // Shuffle
      const shuffled = [...available].sort(() => 0.5 - Math.random());
      let qLimit = 5;
      if (this.selectedMode === 'chapter') qLimit = 10;
      else if (this.selectedMode === 'revision') qLimit = 8;

      selectedQuestions = shuffled.slice(0, Math.min(qLimit, shuffled.length));
    }

    if (selectedQuestions.length === 0) {
      window.showToast('No questions available for this selection. Try choosing All Chapters.', 'warning');
      return;
    }

    const quizConfig = {
      id: `quiz-${Date.now()}`,
      title: this.selectedChapter === 'ALL'
        ? `${this.selectedClass} ${this.selectedSubject} Comprehensive Quiz`
        : `${this.selectedChapter} (${this.selectedSubject})`,
      classLevel: this.selectedClass,
      subject: this.selectedSubject,
      chapter: this.selectedChapter === 'ALL' ? 'Comprehensive' : this.selectedChapter,
      difficulty: this.selectedDifficulty,
      type: this.selectedMode,
      questions: selectedQuestions
    };

    this.launchQuiz(quizConfig);
  }

  /**
   * Launch a quiz directly (from wizard, dashboard recommendation, or review retry)
   */
  launchQuiz(quizConfig) {
    this.currentQuiz = quizConfig;
    this.questions = quizConfig.questions;
    this.currentIndex = 0;
    this.userAnswers = new Array(this.questions.length).fill(null);
    this.isAnswerSubmitted = false;
    this.quizStartTime = Date.now();

    this.showView('runner');

    // Timer handling
    if (this.timerEnabled) {
      this.timerSeconds = this.questions.length * 60; // 60 seconds per question
      this.startTimer();
    } else {
      this.stopTimer();
      const timerEl = document.getElementById('quiz-timer-display');
      if (timerEl) {
        timerEl.textContent = '⏱️ Untimed';
        timerEl.style.color = 'var(--text-primary)';
      }
    }

    this.renderCurrentQuestion();
  }

  startTimer() {
    this.stopTimer();
    const timerEl = document.getElementById('quiz-timer-display');

    const updateDisplay = () => {
      const mins = Math.floor(this.timerSeconds / 60);
      const secs = this.timerSeconds % 60;
      if (timerEl) {
        timerEl.textContent = `⏱️ ${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if (this.timerSeconds <= 30) {
          timerEl.style.color = 'var(--accent-rose)';
        } else {
          timerEl.style.color = 'var(--text-primary)';
        }
      }
    };

    updateDisplay();
    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      if (this.timerSeconds <= 0) {
        this.stopTimer();
        window.showToast('Time is up! Submitting your answers...', 'info');
        this.finishQuiz();
      } else {
        updateDisplay();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  /**
   * Render single question with 4 options and anti-double submission lock
   */
  renderCurrentQuestion() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    this.isAnswerSubmitted = !!this.userAnswers[this.currentIndex];

    // Counter & Progress Bar
    const counterEl = document.getElementById('quiz-question-counter');
    const fillEl = document.getElementById('quiz-progress-fill');
    const titleEl = document.getElementById('quiz-runner-title');
    const diffBadge = document.getElementById('quiz-difficulty-badge');

    if (counterEl) {
      counterEl.textContent = `Question ${this.currentIndex + 1} of ${this.questions.length}`;
    }
    if (fillEl) {
      const pct = Math.round(((this.currentIndex) / this.questions.length) * 100);
      fillEl.style.width = `${pct}%`;
    }
    if (titleEl) {
      titleEl.textContent = this.currentQuiz.title;
    }
    if (diffBadge) {
      diffBadge.textContent = q.difficulty || 'Standard';
      diffBadge.className = `badge ${q.difficulty === 'Hard' ? 'badge-rose' : (q.difficulty === 'Easy' ? 'badge-emerald' : 'badge-amber')}`;
    }

    // Question Text & Chapter Topic tag
    const topicTag = document.getElementById('quiz-question-topic');
    const textEl = document.getElementById('quiz-question-text');
    if (topicTag) topicTag.textContent = `${q.classLevel || q.class || ''} • ${q.chapter} • ${q.topic}`;
    if (textEl) textEl.textContent = q.question;

    // Render Options
    const optionsContainer = document.getElementById('quiz-options-grid');
    if (!optionsContainer) return;
    optionsContainer.innerHTML = '';

    const savedAns = this.userAnswers[this.currentIndex];

    q.options.forEach((optText, idx) => {
      const optBtn = document.createElement('button');
      optBtn.className = 'quiz-option-btn';
      optBtn.setAttribute('data-index', idx);

      const letter = String.fromCharCode(65 + idx); // A, B, C, D
      optBtn.innerHTML = `
        <span class="quiz-option-letter">${letter}</span>
        <span class="quiz-option-text">${this.escapeHtml(optText)}</span>
      `;

      // If already answered, lock button and show right/wrong states
      if (savedAns) {
        optBtn.disabled = true;
        if (idx === q.correct) {
          optBtn.classList.add('correct');
        }
        if (savedAns.selectedIdx === idx && !savedAns.isCorrect) {
          optBtn.classList.add('incorrect');
        }
      } else {
        // Anti-double submission lock is applied immediately upon click
        optBtn.addEventListener('click', () => this.handleOptionSelect(idx));
      }

      optionsContainer.appendChild(optBtn);
    });

    // Explanation Box
    const expBox = document.getElementById('quiz-explanation-box');
    const expText = document.getElementById('quiz-explanation-text');
    if (expBox && expText) {
      if (savedAns) {
        expBox.classList.remove('hidden');
        expBox.className = `quiz-explanation-card ${savedAns.isCorrect ? 'correct' : 'incorrect'}`;
        expText.innerHTML = `
          <strong>${savedAns.isCorrect ? '✅ Correct Answer!' : '❌ Incorrect.'}</strong>
          <p style="margin-top: 0.35rem; line-height: 1.5;">${this.escapeHtml(q.explanation)}</p>
        `;
      } else {
        expBox.classList.add('hidden');
      }
    }

    // Navigation Controls
    const prevBtn = document.getElementById('quiz-btn-prev');
    const nextBtn = document.getElementById('quiz-btn-next');
    const finishBtn = document.getElementById('quiz-btn-finish');

    if (prevBtn) {
      prevBtn.disabled = this.currentIndex === 0;
      prevBtn.onclick = () => this.goToPreviousQuestion();
    }

    const isLast = this.currentIndex === this.questions.length - 1;
    if (nextBtn) {
      nextBtn.classList.toggle('hidden', isLast);
      nextBtn.disabled = !this.userAnswers[this.currentIndex];
      nextBtn.onclick = () => this.goToNextQuestion();
    }

    if (finishBtn) {
      finishBtn.classList.toggle('hidden', !isLast);
      finishBtn.disabled = !this.userAnswers[this.currentIndex];
      finishBtn.onclick = () => this.finishQuiz();
    }
  }

  /**
   * Anti-double submission option handler: locks immediately and checks verified key
   */
  handleOptionSelect(selectedIdx) {
    if (this.isAnswerSubmitted) return;
    this.isAnswerSubmitted = true;

    // IMMEDIATELY LOCK ALL BUTTONS to prevent double clicks / rapid submissions
    const optionBtns = document.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => {
      btn.disabled = true;
      btn.style.pointerEvents = 'none';
    });

    const q = this.questions[this.currentIndex];
    const isCorrect = selectedIdx === q.correct;

    const answerRecord = {
      questionId: q.id,
      questionText: q.question,
      topic: q.topic,
      chapter: q.chapter,
      subject: q.subject,
      classLevel: q.classLevel || q.class,
      difficulty: q.difficulty,
      conceptKey: q.conceptKey,
      selectedIdx: selectedIdx,
      selectedOption: q.options[selectedIdx],
      correctIdx: q.correct,
      correctOption: q.options[q.correct],
      isCorrect: isCorrect,
      explanation: q.explanation
    };

    this.userAnswers[this.currentIndex] = answerRecord;

    // Highlight options
    optionBtns.forEach((btn, idx) => {
      if (idx === q.correct) {
        btn.classList.add('correct');
      }
      if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('incorrect');
      }
    });

    // Reveal instant explanation card
    const expBox = document.getElementById('quiz-explanation-box');
    const expText = document.getElementById('quiz-explanation-text');
    if (expBox && expText) {
      expBox.classList.remove('hidden');
      expBox.className = `quiz-explanation-card ${isCorrect ? 'correct' : 'incorrect'}`;
      expText.innerHTML = `
        <strong>${isCorrect ? '✅ Well done! Correct answer.' : '❌ Incorrect.'}</strong>
        <p style="margin-top: 0.35rem; line-height: 1.5;">${this.escapeHtml(q.explanation)}</p>
      `;
    }

    // Enable Next or Finish
    const isLast = this.currentIndex === this.questions.length - 1;
    if (isLast) {
      const finishBtn = document.getElementById('quiz-btn-finish');
      if (finishBtn) finishBtn.disabled = false;
    } else {
      const nextBtn = document.getElementById('quiz-btn-next');
      if (nextBtn) nextBtn.disabled = false;
    }
  }

  goToPreviousQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderCurrentQuestion();
    }
  }

  goToNextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.renderCurrentQuestion();
    }
  }

  /**
   * Finalize quiz, calculate score from verified answer key, save to IndexedDB with class isolation
   */
  async finishQuiz() {
    this.stopTimer();

    const timeSpent = Math.max(1, Math.round((Date.now() - (this.quizStartTime || Date.now())) / 1000));
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    const answers = this.questions.map((q, idx) => {
      const ans = this.userAnswers[idx];
      if (!ans) {
        unansweredCount++;
        return {
          questionId: q.id,
          questionText: q.question,
          topic: q.topic,
          chapter: q.chapter,
          subject: q.subject,
          classLevel: q.classLevel || q.class,
          difficulty: q.difficulty,
          conceptKey: q.conceptKey,
          selectedIdx: -1,
          selectedOption: 'Unanswered',
          correctIdx: q.correct,
          correctOption: q.options[q.correct],
          isCorrect: false,
          explanation: q.explanation
        };
      }
      if (ans.isCorrect) correctCount++;
      else incorrectCount++;
      return ans;
    });

    const totalQ = this.questions.length;
    const scorePct = Math.round((correctCount / totalQ) * 100);

    const activeStudent = await window.gramDB.getCurrentStudent();
    const studentId = activeStudent?.id || 'student-1';

    const normalizedClass = window.gramDB.normalizeClass(this.currentQuiz.classLevel) || this.currentQuiz.classLevel;

    const attemptRecord = {
      studentId: studentId,
      studentName: activeStudent?.name || 'Student',
      quizId: this.currentQuiz.id,
      title: this.currentQuiz.title,
      classLevel: normalizedClass,
      class: normalizedClass,
      subject: this.currentQuiz.subject,
      chapter: this.currentQuiz.chapter,
      difficulty: this.currentQuiz.difficulty,
      type: this.currentQuiz.type || 'practice',
      score: correctCount,
      totalQuestions: totalQ,
      correctCount: correctCount,
      incorrectCount: incorrectCount,
      unansweredCount: unansweredCount,
      percentage: scorePct,
      timeSpentSec: timeSpent,
      date: new Date().toISOString(),
      answers: answers
    };

    // Save strictly isolated in IndexedDB
    try {
      await window.gramDB.saveQuizAttempt(attemptRecord);
      window.showToast(`Results saved to ${normalizedClass} progress profile!`, 'success');
    } catch (e) {
      console.error('[Quiz] Error saving attempt to IndexedDB:', e);
      window.showToast('Results displayed locally (offline save notice)', 'info');
    }

    // Refresh Dashboard if visible or in background
    if (window.gramApp && window.gramApp.refreshDashboard) {
      window.gramApp.refreshDashboard();
    }

    this.renderResults(attemptRecord);
  }

  /**
   * Render final quiz results summary
   */
  renderResults(record) {
    this.showView('results');

    const scoreNum = document.getElementById('quiz-result-score-num');
    const scorePct = document.getElementById('quiz-result-percentage');
    const correctEl = document.getElementById('quiz-result-correct');
    const incorrectEl = document.getElementById('quiz-result-incorrect');
    const timeEl = document.getElementById('quiz-result-time');
    const feedbackTitle = document.getElementById('quiz-result-feedback-title');
    const feedbackDesc = document.getElementById('quiz-result-feedback-desc');

    if (scoreNum) scoreNum.textContent = `${record.correctCount} / ${record.totalQuestions}`;
    if (scorePct) scorePct.textContent = `${record.percentage}%`;
    if (correctEl) correctEl.textContent = record.correctCount;
    if (incorrectEl) incorrectEl.textContent = record.incorrectCount;

    const mins = Math.floor(record.timeSpentSec / 60);
    const secs = record.timeSpentSec % 60;
    if (timeEl) timeEl.textContent = `${mins}m ${secs}s`;

    // Personalized feedback
    let title = '';
    let desc = '';

    if (record.percentage >= 80) {
      title = '🌟 Outstanding Mastery!';
      desc = `Excellent work, ${record.studentName || 'Student'}! You demonstrated strong conceptual understanding of ${record.chapter} (${record.classLevel}). Keep up the great work!`;
    } else if (record.percentage >= 60) {
      title = '👍 Good Effort — Clear Progress!';
      desc = `You scored ${record.percentage}%. You have solid foundational knowledge, but a quick review of the missed questions will help you reach full mastery.`;
    } else {
      title = '💡 Learning Opportunity — Practice Makes Perfect!';
      desc = `Don't worry! Making mistakes is an essential part of learning. Use Review mode below to read the verified explanations, or save these questions to Study Notes for quick revision.`;
    }

    if (feedbackTitle) feedbackTitle.textContent = title;
    if (feedbackDesc) feedbackDesc.textContent = desc;

    // Action Buttons
    const reviewBtn = document.getElementById('btn-quiz-review');
    if (reviewBtn) {
      reviewBtn.onclick = () => this.startReviewMode(record);
    }

    const retryBtn = document.getElementById('btn-quiz-retry');
    if (retryBtn) {
      retryBtn.onclick = () => {
        this.launchQuiz(this.currentQuiz);
      };
    }

    const saveNotesBtn = document.getElementById('btn-quiz-save-notes');
    if (saveNotesBtn) {
      saveNotesBtn.onclick = () => this.saveMissedQuestionsAsNote(record);
    }

    const newQuizBtn = document.getElementById('btn-quiz-new');
    if (newQuizBtn) {
      newQuizBtn.onclick = () => this.resetWizardToStep1();
    }
  }

  /**
   * Save missed questions as offline study note
   */
  async saveMissedQuestionsAsNote(record) {
    const missed = record.answers.filter(a => !a.isCorrect);
    if (!missed.length) {
      window.showToast('You answered all questions correctly! No missed questions to save.', 'info');
      return;
    }

    let noteContent = `### 🎯 Quiz Revision: ${record.title} (${record.classLevel})\n`;
    noteContent += `*Date: ${new Date(record.date).toLocaleDateString()} | Score: ${record.correctCount}/${record.totalQuestions} (${record.percentage}%)*\n\n`;
    noteContent += `Here are the key concepts and formulas to revise:\n\n`;

    missed.forEach((m, idx) => {
      noteContent += `#### ${idx + 1}. ${m.questionText}\n`;
      noteContent += `• **Correct Answer:** ${m.correctOption}\n`;
      noteContent += `• **Your Answer:** ${m.selectedOption}\n`;
      noteContent += `• **Explanation:** ${m.explanation}\n\n`;
    });

    try {
      await window.gramDB.saveNote({
        title: `[Revision] ${record.chapter} (${record.classLevel} ${record.subject})`,
        tag: 'Revision Notes',
        content: noteContent,
        pinned: true
      });
      window.showToast(`Saved ${missed.length} revision questions to Study Notes!`, 'success');
      if (window.gramNotes && window.gramNotes.renderNotes) {
        window.gramNotes.renderNotes();
      }
    } catch (e) {
      window.showToast('Failed to save note: ' + e.message, 'error');
    }
  }

  /**
   * Interactive Review Mode: step through every question with full verified explanations
   */
  startReviewMode(record) {
    this.showView('review');
    const container = document.getElementById('quiz-review-list');
    if (!container) return;

    container.innerHTML = `
      <div style="margin-bottom: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary);">Question-by-Question Review</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">${record.title} • ${record.classLevel} • Score: ${record.percentage}%</p>
        </div>
        <button class="btn btn-outline btn-sm" onclick="window.gramQuiz.showView('results')">← Back to Results</button>
      </div>
    `;

    record.answers.forEach((ans, idx) => {
      const card = document.createElement('div');
      card.className = `card review-question-card ${ans.isCorrect ? 'correct' : 'incorrect'}`;
      card.style.marginBottom = '1.25rem';
      card.style.borderLeft = `4px solid ${ans.isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'}`;

      const originalQ = window.TNQuizData.getQuestionById(ans.questionId) || this.questions[idx];

      let optionsHtml = '';
      if (originalQ && originalQ.options) {
        optionsHtml = originalQ.options.map((opt, optIdx) => {
          let badge = '';
          let bg = 'var(--bg-subtle)';
          let border = 'var(--border-light)';
          let textColor = 'var(--text-primary)';

          if (optIdx === ans.correctIdx) {
            badge = '<span class="badge badge-emerald" style="margin-left: auto;">Correct</span>';
            bg = 'var(--accent-emerald-light)';
            border = 'var(--accent-emerald)';
            textColor = '#14532d';
          } else if (optIdx === ans.selectedIdx && !ans.isCorrect) {
            badge = '<span class="badge badge-rose" style="margin-left: auto;">Your Choice</span>';
            bg = 'var(--accent-rose-light)';
            border = 'var(--accent-rose)';
            textColor = '#881337';
          }

          return `
            <div style="display: flex; align-items: center; padding: 0.55rem 0.85rem; border-radius: var(--radius-sm); background: ${bg}; border: 1px solid ${border}; margin-bottom: 0.35rem; font-size: 0.9rem; color: ${textColor};">
              <span style="font-weight: 700; width: 24px;">${String.fromCharCode(65 + optIdx)}.</span>
              <span>${this.escapeHtml(opt)}</span>
              ${badge}
            </div>
          `;
        }).join('');
      }

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">Question ${idx + 1} of ${record.totalQuestions} • ${this.escapeHtml(ans.topic || '')}</span>
          <span class="badge ${ans.isCorrect ? 'badge-emerald' : 'badge-rose'}">${ans.isCorrect ? '✅ Correct' : '❌ Incorrect'}</span>
        </div>
        <h4 style="font-size: 1rem; margin-bottom: 0.85rem; line-height: 1.45; color: var(--text-primary);">${this.escapeHtml(ans.questionText)}</h4>
        <div style="margin-bottom: 0.85rem;">
          ${optionsHtml}
        </div>
        <div style="background: var(--primary-50); border: 1px solid var(--primary-200); border-radius: var(--radius-sm); padding: 0.75rem 1rem; font-size: 0.88rem; line-height: 1.5;">
          <strong style="color: var(--primary-900);">💡 Concept Explanation:</strong>
          <p style="margin-top: 0.25rem; color: var(--text-secondary);">${this.escapeHtml(ans.explanation)}</p>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // =========================================================================
  // Shortcut Methods for Dashboard Recommendations
  // =========================================================================
  startSpecificChapterQuiz(classLevel, subject, chapter) {
    this.selectedClass = window.gramDB.normalizeClass(classLevel) || classLevel;
    this.selectedSubject = subject;
    this.selectedChapter = chapter;
    this.selectedMode = 'chapter';
    this.selectedDifficulty = 'ALL';

    const questions = window.TNQuizData.getQuestions({
      class: this.selectedClass,
      subject: this.selectedSubject,
      chapter: this.selectedChapter
    });

    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(10, shuffled.length));

    if (window.gramApp) {
      window.gramApp.navigateTo('quiz');
    }

    this.launchQuiz({
      id: `quiz-rec-${Date.now()}`,
      title: `${this.selectedChapter} (${this.selectedSubject})`,
      classLevel: this.selectedClass,
      subject: this.selectedSubject,
      chapter: this.selectedChapter,
      difficulty: 'Medium',
      type: 'chapter',
      questions: selected
    });
  }

  async startPreviousMistakesQuiz(classLevel, subject) {
    this.selectedClass = window.gramDB.normalizeClass(classLevel) || classLevel;
    this.selectedSubject = subject;
    this.selectedChapter = 'ALL';
    this.selectedMode = 'mistakes';

    try {
      const student = await window.gramDB.getCurrentStudent();
      const mistakes = await window.gramDB.getStudentPreviousMistakes(student?.id || 'student-1', this.selectedClass, this.selectedSubject);
      const questions = mistakes.map(m => window.TNQuizData.getQuestionById(m.questionId)).filter(Boolean);

      if (questions.length === 0) {
        window.showToast('No mistakes to revise for this subject! Starting practice quiz.', 'info');
        this.startSpecificChapterQuiz(classLevel, subject, 'ALL');
        return;
      }

      if (window.gramApp) {
        window.gramApp.navigateTo('quiz');
      }

      this.launchQuiz({
        id: `quiz-mistakes-${Date.now()}`,
        title: `⚡ Previous Mistakes Revision (${this.selectedClass} ${this.selectedSubject})`,
        classLevel: this.selectedClass,
        subject: this.selectedSubject,
        chapter: 'Mistakes Revision',
        difficulty: 'Mixed',
        type: 'mistakes',
        questions: questions.slice(0, 10)
      });
    } catch (e) {
      console.error('Error starting previous mistakes quiz:', e);
    }
  }

  startTargetedRevisionQuiz(topicName, classLevel = 'Class 10', subject = 'Science') {
    const normClass = window.gramDB.normalizeClass(classLevel) || 'Class 10';
    const matching = window.TNQuizData.getQuestions({ topic: topicName });
    const pool = matching.length > 0 ? matching : window.TNQuizData.getQuestions({ class: normClass, subject: subject });

    const selected = pool.slice(0, 5);
    const config = {
      id: `rev-quiz-${Date.now()}`,
      title: `⚡ Targeted Revision: ${topicName}`,
      classLevel: normClass,
      subject: subject,
      chapter: selected[0]?.chapter || 'Revision Chapter',
      difficulty: 'Medium',
      type: 'revision',
      questions: selected
    };

    if (window.gramApp) {
      window.gramApp.navigateTo('quiz');
    }
    this.launchQuiz(config);
  }

  async reviewAttemptById(attemptId) {
    try {
      const student = await window.gramDB.getCurrentStudent();
      const attempts = await window.gramDB.getStudentAttempts(student?.id || 'student-1');
      const record = attempts.find(a => String(a.id) === String(attemptId));
      if (record) {
        if (window.gramApp) {
          window.gramApp.navigateTo('quiz');
        }
        this.startReviewMode(record);
      } else {
        window.showToast('Attempt record not found', 'warning');
      }
    } catch (e) {
      console.error('Error opening attempt review:', e);
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  escapeHtmlAttr(str) {
    if (!str) return '';
    return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
}

// Global Singleton
window.gramQuiz = new QuizController();
