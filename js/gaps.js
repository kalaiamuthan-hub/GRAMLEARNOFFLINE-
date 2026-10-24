/**
 * GramLearn AI - Learning Gap Detection Engine
 * Identifies foundational misconceptions in English grammar, recommends remedial
 * prerequisites and exercises, and tracks mastery over time.
 */

class LearningGapsController {
  constructor() {
    this.currentTopic = 'tenses';
    this.currentQuestionIdx = 0;
    this.userAnswers = [];
    this.container = null;

    // Diagnostic Questions Database mapped to Foundational Misconceptions
    this.topics = {
      tenses: {
        title: 'Verb Tenses & Time Aspects',
        desc: 'Evaluates Simple Past, Present Perfect, Continuous forms, and conditional clauses.',
        questions: [
          {
            q: 'Choose the correct sentence to describe an action completed yesterday:',
            options: [
              'I have seen that movie yesterday.',
              'I saw that movie yesterday.',
              'I had saw that movie yesterday.',
              'I was seen that movie yesterday.'
            ],
            correct: 1,
            gapKey: 'TENSE_TIME_MARKER_CONFUSION',
            gapTitle: 'Confusing Simple Past with Present Perfect',
            gapReason: 'You may be using Present Perfect ("have seen") with specific past time markers ("yesterday", "last night").',
            prerequisite: 'Rules of Definite Past Time Adverbs',
            remedialLesson: 'In English, when a specific past time is mentioned (e.g., yesterday, in 2020, two hours ago), always use Simple Past (V2: "I saw"), never Present Perfect ("have seen"). Present Perfect is only for unspecified past actions connected to the present.',
            remedialExercise: {
              prompt: 'Select the correct sentence:',
              options: ['She finished her degree in 2022.', 'She has finished her degree in 2022.'],
              correct: 0,
              explanation: 'Because "in 2022" is a specific past year, Simple Past ("finished") is required.'
            }
          },
          {
            q: 'Fill in the blank: "Dr. Anand has been working in this hospital _______ 2015."',
            options: ['for', 'since', 'from', 'during'],
            correct: 1,
            gapKey: 'FOR_VS_SINCE_CONFUSION',
            gapTitle: 'Misunderstanding "For" vs "Since" with Perfect Tenses',
            gapReason: 'Difficulty differentiating between a starting point in time versus a duration/period of time.',
            prerequisite: 'Time Expressions with Perfect Continuous Tenses',
            remedialLesson: 'Use "since" when naming a specific starting point (since 2015, since Monday, since childhood). Use "for" when specifying the duration or length of time (for 8 years, for two hours).',
            remedialExercise: {
              prompt: '"We have waited here _______ two hours."',
              options: ['for', 'since'],
              correct: 0,
              explanation: '"Two hours" represents a duration of time, so "for" is correct.'
            }
          },
          {
            q: 'Complete the conditional sentence: "If it _______ tomorrow, the school sports day will be postponed."',
            options: ['will rain', 'rains', 'is raining', 'rained'],
            correct: 1,
            gapKey: 'CONDITIONAL_TIME_CLAUSE_TENSE',
            gapTitle: 'Double Future Tense in Conditional Clauses',
            gapReason: 'Tendency to use "will" in both the "if" clause and the main clause.',
            prerequisite: 'First Conditional Sentence Structure (If + Present, Will + Verb)',
            remedialLesson: 'In First Conditional sentences about the future, never put "will" inside the "if" conditional clause. Use Simple Present in the if-clause: "If it rains (present), we will stay (future)."',
            remedialExercise: {
              prompt: '"If you _______ hard, you will pass the exam."',
              options: ['will study', 'study'],
              correct: 1,
              explanation: 'Simple present "study" is required inside the if-condition.'
            }
          }
        ]
      },
      subject_verb_agreement: {
        title: 'Subject-Verb Agreement',
        desc: 'Evaluates singular vs plural agreement with compound subjects and indefinite pronouns.',
        questions: [
          {
            q: 'Choose the correct verb: "Each of the new participants _______ a welcome certificate."',
            options: ['receive', 'receives', 'are receiving', 'have received'],
            correct: 1,
            gapKey: 'INDEFINITE_PRONOUN_AGREEMENT',
            gapTitle: 'Misidentifying Singular Indefinite Pronouns',
            gapReason: 'Being distracted by the plural noun inside a prepositional phrase ("participants") instead of the true subject ("Each").',
            prerequisite: 'Prepositional Phrase Subject Shielding',
            remedialLesson: 'Words like "Each", "Every", "Everyone", "Someone" are grammatically singular. The words following "of" (like "of the participants") are prepositional phrases and do NOT change the subject number. "Each... receives".',
            remedialExercise: {
              prompt: '"One of the engines _______ not working."',
              options: ['is', 'are'],
              correct: 0,
              explanation: 'The true subject is "One", which is singular; "engines" is inside the prepositional phrase.'
            }
          },
          {
            q: 'Choose the correct form: "Neither the principal nor the students _______ happy with the decision."',
            options: ['was', 'were', 'is', 'has been'],
            correct: 1,
            gapKey: 'NEITHER_NOR_PROXIMITY_RULE',
            gapTitle: 'Proximity Rule with Correlative Conjunctions',
            gapReason: 'Applying plural agreement to the first subject instead of the subject closest to the verb.',
            prerequisite: 'Correlative Conjunctions (Either/or, Neither/nor)',
            remedialLesson: 'When two subjects are connected by "Neither... nor" or "Either... or", the verb agrees with the subject closest (nearest) to it. Since "students" is plural and adjacent to the verb, use "were".',
            remedialExercise: {
              prompt: '"Neither the students nor the principal _______ present."',
              options: ['was', 'were'],
              correct: 0,
              explanation: 'Here "principal" is adjacent to the verb and is singular, so "was" is correct.'
            }
          },
          {
            q: 'Select the sentence with correct agreement:',
            options: [
              'The committee has submitted its annual budget report.',
              'The committee have submitted its annual budget report.',
              'The committee are submitted its annual budget report.',
              'The committee have submit its annual budget report.'
            ],
            correct: 0,
            gapKey: 'COLLECTIVE_NOUN_AGREEMENT',
            gapTitle: 'Collective Noun Singular/Plural Unit Logic',
            gapReason: 'Uncertainty over whether collective nouns (team, committee, audience, family) act as a single unit.',
            prerequisite: 'Collective Noun Grammatical Number',
            remedialLesson: 'When a collective group acts together as a single harmonious unit (indicated by the pronoun "its"), it takes a singular verb ("has submitted").',
            remedialExercise: {
              prompt: '"The jury _______ reached a unanimous verdict."',
              options: ['has', 'have'],
              correct: 0,
              explanation: 'The jury is acting as one united body, taking the singular verb "has".'
            }
          }
        ]
      },
      prepositions_articles: {
        title: 'Prepositions & Articles',
        desc: 'Evaluates phonetic article usage (a/an) and precise spatial/temporal prepositions.',
        questions: [
          {
            q: 'Select the sentence with correct article usage:',
            options: [
              'He is a honest teacher who graduated from an university.',
              'He is an honest teacher who graduated from a university.',
              'He is a honest teacher who graduated from a university.',
              'He is an honest teacher who graduated from an university.'
            ],
            correct: 1,
            gapKey: 'PHONETIC_ARTICLE_SELECTION',
            gapTitle: 'Letter-based vs Sound-based Article Selection',
            gapReason: 'Relying on the written letter (H or U) rather than the spoken phonetic sound (vowel sound vs consonant sound).',
            prerequisite: 'English Vowel Sound Phonetics for Articles',
            remedialLesson: '"An" is used before vowel sounds, not just vowel letters! "Honest" begins with a silent \'h\', producing an /ɒ/ vowel sound ("an honest"). Conversely, "university" begins with a /j/ consonant sound (like "you"), requiring "a university".',
            remedialExercise: {
              prompt: '"She arrived _______ hour before the meeting."',
              options: ['a', 'an'],
              correct: 1,
              explanation: '"Hour" has a silent \'h\' and starts with a vowel sound, taking "an".'
            }
          },
          {
            q: 'Fill in both blanks: "Our session begins _______ 10:00 AM _______ Monday."',
            options: ['in / on', 'at / on', 'on / at', 'at / in'],
            correct: 1,
            gapKey: 'TEMPORAL_PREPOSITION_HIERARCHY',
            gapTitle: 'Temporal Hierarchy (At vs On vs In)',
            gapReason: 'Confusing precise clock time prepositions with calendar day prepositions.',
            prerequisite: 'Preposition of Time Pyramid (In > On > At)',
            remedialLesson: 'Remember the time pyramid: AT for exact clock times (at 10:00 AM); ON for days and dates (on Monday, on July 14th); IN for months, years, and long periods (in October, in 2026).',
            remedialExercise: {
              prompt: '"The train leaves _______ midnight."',
              options: ['at', 'on', 'in'],
              correct: 0,
              explanation: '"Midnight" is a specific precise time, requiring "at".'
            }
          }
        ]
      }
    };
  }

  init() {
    this.container = document.getElementById('gaps-view-content');
    if (!this.container) return;
    this.renderTopicSelector();
    this.renderHistory();
  }

  renderTopicSelector() {
    const selectorContainer = document.getElementById('gaps-topic-selection');
    if (!selectorContainer) return;

    selectorContainer.innerHTML = Object.keys(this.topics)
      .map((key) => {
        const t = this.topics[key];
        const isSelected = key === this.currentTopic;
        return `
        <div class="card quick-action-card" style="border-color: ${isSelected ? 'var(--primary-600)' : 'var(--border-light)'}; background: ${isSelected ? 'var(--primary-50)' : '#ffffff'};" onclick="window.gramGaps.selectTopic('${key}')">
          <div class="quick-action-icon" style="background: ${isSelected ? 'var(--primary-600)' : 'var(--primary-100)'}; color: ${isSelected ? '#ffffff' : 'var(--primary-700)'};">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <div>
            <div class="quick-action-title">${t.title}</div>
            <div class="quick-action-desc">${t.desc}</div>
          </div>
        </div>
      `;
      })
      .join('');
  }

  selectTopic(topicKey) {
    this.currentTopic = topicKey;
    this.currentQuestionIdx = 0;
    this.userAnswers = [];
    this.renderTopicSelector();
    this.startDiagnosticQuiz();
  }

  startDiagnosticQuiz() {
    const quizArea = document.getElementById('gaps-quiz-area');
    if (!quizArea) return;

    const topicData = this.topics[this.currentTopic];
    const totalQ = topicData.questions.length;
    const q = topicData.questions[this.currentQuestionIdx];

    quizArea.innerHTML = `
      <div class="card" style="padding: 1.75rem; margin-top: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="badge badge-sky">${topicData.title}</span>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">Question ${this.currentQuestionIdx + 1} of ${totalQ}</span>
        </div>

        <div class="progress-container" style="margin-bottom: 1.5rem;">
          <div class="progress-fill" style="width: ${((this.currentQuestionIdx) / totalQ) * 100}%;"></div>
        </div>

        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.25rem;">
          ${q.q}
        </h3>

        <div style="display: flex; flex-direction: column; gap: 0.65rem;">
          ${q.options
            .map(
              (opt, idx) => `
            <button class="btn btn-secondary" style="justify-content: flex-start; text-align: left; padding: 0.85rem 1rem; border-radius: var(--radius-md);" onclick="window.gramGaps.submitAnswer(${idx})">
              <span style="width: 24px; height: 24px; border-radius: 50%; background: var(--primary-100); color: var(--primary-800); display: inline-flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; margin-right: 0.75rem; flex-shrink: 0;">${String.fromCharCode(65 + idx)}</span>
              ${this.escapeHtml(opt)}
            </button>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  submitAnswer(selectedIdx) {
    const topicData = this.topics[this.currentTopic];
    const q = topicData.questions[this.currentQuestionIdx];

    this.userAnswers.push({
      question: q,
      selected: selectedIdx,
      isCorrect: selectedIdx === q.correct
    });

    this.currentQuestionIdx++;

    if (this.currentQuestionIdx < topicData.questions.length) {
      this.startDiagnosticQuiz();
    } else {
      this.generateDiagnosticReport();
    }
  }

  async generateDiagnosticReport() {
    const quizArea = document.getElementById('gaps-quiz-area');
    if (!quizArea) return;

    const topicData = this.topics[this.currentTopic];
    const totalQ = this.userAnswers.length;
    const correctCount = this.userAnswers.filter((a) => a.isCorrect).length;
    const scorePct = Math.round((correctCount / totalQ) * 100);

    // Identify Gaps
    const identifiedGaps = this.userAnswers
      .filter((a) => !a.isCorrect)
      .map((a) => ({
        key: a.question.gapKey,
        title: a.question.gapTitle,
        reason: a.question.gapReason,
        prerequisite: a.question.prerequisite,
        remedialLesson: a.question.remedialLesson,
        exercise: a.question.remedialExercise
      }));

    // Save assessment record to IndexedDB
    const assessmentRecord = {
      topic: topicData.title,
      score: scorePct,
      correctCount: correctCount,
      totalQuestions: totalQ,
      identifiedGapsCount: identifiedGaps.length,
      status: identifiedGaps.length === 0 ? 'Mastered' : 'Needs Review',
      date: new Date().toISOString()
    };

    await window.gramDB.saveGapResult(assessmentRecord);
    await this.renderHistory();

    // Render Diagnostic Report View
    quizArea.innerHTML = `
      <div class="card" style="padding: 1.75rem; margin-top: 1.5rem; animation: fadeIn 0.3s ease;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <span class="badge ${scorePct >= 80 ? 'badge-emerald' : scorePct >= 50 ? 'badge-amber' : 'badge-rose'}">
              Diagnostic Assessment Score: ${scorePct}% (${correctCount}/${totalQ})
            </span>
            <h2 style="margin-top: 0.5rem; font-size: 1.35rem;">Diagnostic Analysis for ${topicData.title}</h2>
          </div>
          <button class="btn btn-sm btn-outline" onclick="window.gramGaps.startDiagnosticQuiz()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>
            Retake Diagnostic
          </button>
        </div>

        <!-- Scientific Disclaimer -->
        <div class="alert alert-info" style="font-size: 0.82rem; margin-bottom: 1.5rem;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <div>
            <strong>Educational Heuristic Notice:</strong> This automated assessment identifies common foundational grammar misconceptions using algorithmic error classification. It is designed to guide self-study and is not a standardized clinical or psychometric examination.
          </div>
        </div>

        ${
          identifiedGaps.length === 0
            ? `
          <div style="text-align: center; padding: 2rem 1rem;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--accent-emerald-light); color: var(--accent-emerald); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width: 28px; height: 28px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 style="color: var(--accent-emerald); margin-bottom: 0.5rem;">Excellent! Foundational Mastery Demonstrated</h3>
            <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto;">No significant foundational gaps were detected for this topic. You have a solid grasp of these grammar mechanics.</p>
          </div>
        `
            : `
          <h3 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--accent-rose); display: flex; align-items: center; gap: 0.5rem;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            ${identifiedGaps.length} Foundational Learning ${identifiedGaps.length === 1 ? 'Gap' : 'Gaps'} Identified
          </h3>

          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${identifiedGaps
              .map(
                (gap, idx) => `
              <div class="card" style="background: var(--bg-subtle); border-color: rgba(225, 29, 72, 0.2); padding: 1.25rem;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
                  <h4 style="color: var(--text-primary); font-size: 1rem;">${idx + 1}. ${gap.title}</h4>
                  <span class="badge badge-rose">Gap Detected</span>
                </div>
                
                <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
                  <strong>Underlying Misconception:</strong> ${gap.reason}
                </p>

                <div style="background: #ffffff; border-radius: var(--radius-md); padding: 1rem; border: 1px solid var(--border-light); margin-bottom: 0.85rem;">
                  <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--primary-700); margin-bottom: 0.25rem;">
                    💡 Recommended Prerequisite & Lesson: ${gap.prerequisite}
                  </div>
                  <p style="font-size: 0.88rem; color: var(--text-primary); line-height: 1.55;">
                    ${gap.remedialLesson}
                  </p>
                </div>

                <!-- Remedial Practice Question -->
                <div id="exercise-${idx}" style="background: var(--primary-50); border-radius: var(--radius-md); padding: 1rem; border: 1px solid var(--primary-200);">
                  <div style="font-size: 0.82rem; font-weight: 700; color: var(--primary-900); margin-bottom: 0.5rem;">
                    🎯 Remedial Practice Check: ${gap.exercise.prompt}
                  </div>
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    ${gap.exercise.options
                      .map(
                        (opt, optIdx) => `
                      <button class="btn btn-sm btn-secondary" onclick="window.gramGaps.checkRemedialExercise(${idx}, ${optIdx}, ${gap.exercise.correct}, '${encodeURIComponent(
                          gap.exercise.explanation
                        )}')">
                        ${this.escapeHtml(opt)}
                      </button>
                    `
                      )
                      .join('')}
                  </div>
                  <div id="exercise-feedback-${idx}" style="margin-top: 0.65rem; font-size: 0.82rem; display: none;"></div>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        `
        }
      </div>
    `;
  }

  checkRemedialExercise(gapIdx, selectedOptIdx, correctOptIdx, encodedExplanation) {
    const feedbackEl = document.getElementById(`exercise-feedback-${gapIdx}`);
    if (!feedbackEl) return;

    const explanation = decodeURIComponent(encodedExplanation);
    feedbackEl.style.display = 'block';

    if (selectedOptIdx === correctOptIdx) {
      feedbackEl.innerHTML = `
        <div style="color: var(--accent-emerald); font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Correct! ${explanation}
        </div>
      `;
      window.showToast('Remedial exercise answered correctly!', 'success');
    } else {
      feedbackEl.innerHTML = `
        <div style="color: var(--accent-rose); font-weight: 600;">
          Not quite. Hint: ${explanation}
        </div>
      `;
    }
  }

  async renderHistory() {
    const historyContainer = document.getElementById('gaps-history-list');
    if (!historyContainer) return;

    const gaps = await window.gramDB.getAllGaps();

    if (gaps.length === 0) {
      historyContainer.innerHTML = `
        <p style="color: var(--text-muted); font-size: 0.88rem; text-align: center; padding: 1rem;">No diagnostic assessments recorded yet. Select a topic above to begin.</p>
      `;
      return;
    }

    historyContainer.innerHTML = gaps
      .slice(0, 5)
      .map(
        (g) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid var(--border-light);">
          <div>
            <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary);">${this.escapeHtml(g.topic)}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${new Date(g.date).toLocaleDateString()}</div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="badge ${g.score >= 80 ? 'badge-emerald' : 'badge-amber'}">${g.score}%</span>
            <span class="badge ${g.status === 'Mastered' ? 'badge-emerald' : 'badge-rose'}">${g.status}</span>
          </div>
        </div>
      `
      )
      .join('');
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

// Global Learning Gaps Singleton
window.gramGaps = new LearningGapsController();
