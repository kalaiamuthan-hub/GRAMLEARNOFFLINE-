/**
 * GramLearn AI - IndexedDB Local Database Layer
 * Completely offline storage for Notes, Syllabus Documents, Learning Gaps,
 * Quiz Attempts, Topic-Level Mastery, Chapter Completion, and Student Streaks.
 * Version 2: Multi-student data separation, versioned upgrades, and safe data handling.
 */

const DB_NAME = 'GramLearnAIDB';
const DB_VERSION = 2;

class Database {
  constructor() {
    this.db = null;
    this.initPromise = this.init();
  }

  async init() {
    if (typeof indexedDB === 'undefined') {
      return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        console.log(`[DB] Upgrading database to version ${event.newVersion}`);

        // 1. Notes Store
        if (!db.objectStoreNames.contains('notes')) {
          const notesStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
          notesStore.createIndex('tags', 'tag', { unique: false });
          notesStore.createIndex('updatedAt', 'updatedAt', { unique: false });
        }

        // 2. Syllabus Store
        if (!db.objectStoreNames.contains('syllabus')) {
          const syllabusStore = db.createObjectStore('syllabus', { keyPath: 'id', autoIncrement: true });
          syllabusStore.createIndex('uploadedAt', 'uploadedAt', { unique: false });
        }

        // 3. Learning Gaps Store
        if (!db.objectStoreNames.contains('gaps')) {
          const gapsStore = db.createObjectStore('gaps', { keyPath: 'id', autoIncrement: true });
          gapsStore.createIndex('topic', 'topic', { unique: false });
          gapsStore.createIndex('status', 'status', { unique: false });
        }

        // 4. User Settings & Profiles Store
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'key' });
        }

        // 5. Quiz Attempts Store (New in v2)
        if (!db.objectStoreNames.contains('quiz_attempts')) {
          const attemptsStore = db.createObjectStore('quiz_attempts', { keyPath: 'id', autoIncrement: true });
          attemptsStore.createIndex('studentId', 'studentId', { unique: false });
          attemptsStore.createIndex('subject', 'subject', { unique: false });
          attemptsStore.createIndex('classLevel', 'classLevel', { unique: false });
          attemptsStore.createIndex('date', 'date', { unique: false });
        }

        // 6. Topic-Level Mastery Store (New in v2)
        if (!db.objectStoreNames.contains('topic_mastery')) {
          const topicStore = db.createObjectStore('topic_mastery', { keyPath: 'key' });
          topicStore.createIndex('studentId', 'studentId', { unique: false });
          topicStore.createIndex('subject', 'subject', { unique: false });
          topicStore.createIndex('status', 'status', { unique: false });
        }

        // 7. Chapter Progress Store (New in v2)
        if (!db.objectStoreNames.contains('chapter_progress')) {
          const chapterStore = db.createObjectStore('chapter_progress', { keyPath: 'key' });
          chapterStore.createIndex('studentId', 'studentId', { unique: false });
          chapterStore.createIndex('subject', 'subject', { unique: false });
        }

        // 8. Daily Study Activity & Streaks Store (New in v2)
        if (!db.objectStoreNames.contains('daily_activity')) {
          const activityStore = db.createObjectStore('daily_activity', { keyPath: 'key' });
          activityStore.createIndex('studentId', 'studentId', { unique: false });
          activityStore.createIndex('dateStr', 'dateStr', { unique: false });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = (event) => {
        console.error('[DB] IndexedDB error:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  async getStore(storeName, mode = 'readonly') {
    await this.initPromise;
    const tx = this.db.transaction(storeName, mode);
    return tx.objectStore(storeName);
  }

  // ================= Notes Methods =================
  async getAllNotes() {
    const store = await this.getStore('notes', 'readonly');
    return new Promise((resolve, reject) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || new Date(b.updatedAt) - new Date(a.updatedAt)));
      req.onerror = () => reject(req.error);
    });
  }

  async saveNote(note) {
    const store = await this.getStore('notes', 'readwrite');
    note.updatedAt = new Date().toISOString();
    if (!note.createdAt) note.createdAt = note.updatedAt;

    return new Promise((resolve, reject) => {
      const req = note.id ? store.put(note) : store.add(note);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async deleteNote(id) {
    const store = await this.getStore('notes', 'readwrite');
    return new Promise((resolve, reject) => {
      const req = store.delete(Number(id));
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  // ================= OCR Scans & Textbook Capture Methods =================
  async getAllScans() {
    try {
      const store = await this.getStore('syllabus', 'readonly');
      return new Promise((resolve) => {
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result.sort((a, b) => new Date(b.uploadedAt || b.timestamp) - new Date(a.uploadedAt || a.timestamp)));
        req.onerror = () => resolve([]);
      });
    } catch {
      return [];
    }
  }

  async saveScan(scan) {
    try {
      const store = await this.getStore('syllabus', 'readwrite');
      scan.uploadedAt = new Date().toISOString();
      scan.timestamp = scan.uploadedAt;
      return new Promise((resolve, reject) => {
        const req = scan.id ? store.put(scan) : store.add(scan);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    } catch (e) {
      console.warn('[DB] Error saving scan:', e);
      return null;
    }
  }

  async deleteScan(id) {
    try {
      const store = await this.getStore('syllabus', 'readwrite');
      return new Promise((resolve, reject) => {
        const req = store.delete(Number(id));
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch (e) {
      console.warn('[DB] Error deleting scan:', e);
    }
  }

  // Backwards compatibility alias
  async getAllSyllabus() { return this.getAllScans(); }
  async saveSyllabus(doc) { return this.saveScan(doc); }
  async deleteSyllabus(id) { return this.deleteScan(id); }

  // ================= Learning Gaps Methods =================
  async getAllGaps() {
    try {
      const store = await this.getStore('gaps', 'readonly');
      return new Promise((resolve, reject) => {
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result.sort((a, b) => new Date(b.date) - new Date(a.date)));
        req.onerror = () => reject(req.error);
      });
    } catch {
      return [];
    }
  }

  async saveGapResult(gapData) {
    try {
      const store = await this.getStore('gaps', 'readwrite');
      gapData.date = new Date().toISOString();
      return new Promise((resolve, reject) => {
        const req = gapData.id ? store.put(gapData) : store.add(gapData);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    } catch (e) {
      console.warn('[DB] Error saving gap:', e);
    }
  }

  // ================= Settings / Profile Methods =================
  async getSetting(key, defaultValue = null) {
    try {
      const store = await this.getStore('settings', 'readonly');
      return new Promise((resolve) => {
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result ? req.result.value : defaultValue);
        req.onerror = () => resolve(defaultValue);
      });
    } catch {
      return defaultValue;
    }
  }

  async setSetting(key, value) {
    try {
      const store = await this.getStore('settings', 'readwrite');
      return new Promise((resolve, reject) => {
        const req = store.put({ key, value });
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch (e) {
      console.warn('[DB] Setting save error:', e);
    }
  }

  // ================= Student Authentication & Profile =================
  async getCurrentStudent() {
    const defaultStudent = {
      id: 'student-1',
      name: 'Priya',
      grade: 'Class 10',
      avatar: '👩‍🎓',
      language: 'Tamil & English',
      isLoggedIn: true
    };
    return await this.getSetting('activeStudent', defaultStudent);
  }

  async saveCurrentStudent(student) {
    student.isLoggedIn = true;
    student.updatedAt = new Date().toISOString();
    await this.setSetting('activeStudent', student);
    await this.setSetting('studentName', student.name);

    // Save to students list
    const list = await this.getAllStudents();
    const existingIndex = list.findIndex(s => s.id === student.id || s.name === student.name);
    if (existingIndex >= 0) {
      list[existingIndex] = student;
    } else {
      list.push(student);
    }
    await this.setSetting('studentsList', list);
    return student;
  }

  async getAllStudents() {
    return await this.getSetting('studentsList', [
      { id: 'student-1', username: 'priya', name: 'Priya', password: '123', grade: 'Class 10', avatar: '👩‍🎓', language: 'Tamil & English' },
      { id: 'student-2', username: 'karthik', name: 'Karthik', password: '123', grade: 'Class 9', avatar: '🧑‍🎓', language: 'Tamil & English' }
    ]);
  }

  async authenticateStudent(usernameOrName, password) {
    const list = await this.getAllStudents();
    const query = (usernameOrName || '').trim().toLowerCase();
    const enteredPass = (password || '').trim();

    if (!query) {
      return { success: false, error: 'Please enter your username or student name.' };
    }
    if (!enteredPass) {
      return { success: false, error: 'Please enter your password.' };
    }

    const student = list.find((s) => {
      const u = (s.username || '').toLowerCase();
      const n = (s.name || '').toLowerCase();
      const id = (s.id || '').toLowerCase();
      return u === query || n === query || id === query;
    });

    if (!student) {
      return { success: false, error: 'User not found. Please check your username or register as new student.' };
    }

    // Verify password (default '123' if not set yet on existing student)
    const expectedPassword = student.password || '123';
    if (expectedPassword !== enteredPass) {
      return { success: false, error: 'Incorrect password! Please try again.' };
    }

    return { success: true, student };
  }

  async logoutStudent() {
    await this.setSetting('activeStudent', {
      id: 'guest',
      name: 'Guest Learner',
      grade: 'Class 10',
      avatar: '🌟',
      language: 'Tamil & English',
      isLoggedIn: false
    });
    await this.setSetting('studentName', 'Guest Learner');
  }

  // ================= Student Personalization Logic =================
  async getPersonalization() {
    const student = await this.getCurrentStudent();
    const defaultData = {
      grade: student?.grade || 'Class 10 (SSLC)',
      learningStyle: 'Bilingual Tanglish (தமிழ் விளக்கம்)',
      pace: 'Clear & Relatable',
      interests: ['Science & Space', 'Everyday Life', 'Cricket & Sports'],
      difficulty: 'Standard Board Exam',
      enableSpeech: false
    };
    return await this.getSetting('studentPersonalization', defaultData);
  }

  async savePersonalization(data) {
    await this.setSetting('studentPersonalization', data);
    const student = await this.getCurrentStudent();
    if (student && data.grade && student.grade !== data.grade) {
      student.grade = data.grade;
      await this.saveCurrentStudent(student);
    }
    return data;
  }

  // =========================================================================
  // QUIZ SYSTEM & STUDENT PROGRESS TRACKING (NEW IN V2)
  // =========================================================================

  /**
   * Standardize class representation (e.g. '6th' -> 'Class 6')
   */
  normalizeClass(c) {
    if (!c) return '';
    const str = String(c).toLowerCase().trim();
    if (str.includes('6')) return 'Class 6';
    if (str.includes('7')) return 'Class 7';
    if (str.includes('8')) return 'Class 8';
    if (str.includes('9')) return 'Class 9';
    if (str.includes('10')) return 'Class 10';
    return c;
  }

  /**
   * Save a completed quiz attempt, update topic mastery, chapter completion,
   * daily study streak activity, and overall learning stats.
   */
  async saveQuizAttempt(attemptData) {
    try {
      const student = await this.getCurrentStudent();
      const studentId = attemptData.studentId || student?.id || 'student-1';
      const nowIso = new Date().toISOString();
      const dateStr = nowIso.split('T')[0]; // YYYY-MM-DD
      const normClass = this.normalizeClass(attemptData.classLevel || attemptData.class || student?.grade || 'Class 10');

      const record = {
        ...attemptData,
        studentId: studentId,
        classLevel: normClass,
        class: normClass,
        date: attemptData.date || nowIso,
        percentage: Math.round((attemptData.score / (attemptData.totalQuestions || 1)) * 100)
      };

      // 1. Save attempt record
      const attemptsStore = await this.getStore('quiz_attempts', 'readwrite');
      const attemptId = await new Promise((resolve, reject) => {
        const req = attemptsStore.add(record);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
      record.id = attemptId;

      // 2. Update Topic-Level Mastery
      if (Array.isArray(attemptData.answers)) {
        const topicStore = await this.getStore('topic_mastery', 'readwrite');
        for (const ans of attemptData.answers) {
          const topicName = ans.topic || attemptData.topic || 'General Practice';
          const topicKey = `${studentId}::${normClass}::${topicName}`;

          const existing = await new Promise(res => {
            const getReq = topicStore.get(topicKey);
            getReq.onsuccess = () => res(getReq.result || null);
            getReq.onerror = () => res(null);
          });

          const totalQ = (existing?.totalQuestions || 0) + 1;
          const correctQ = (existing?.correctCount || 0) + (ans.isCorrect ? 1 : 0);
          const wrongQ = (existing?.wrongCount || 0) + (ans.isCorrect ? 0 : 1);
          const accuracy = Math.round((correctQ / totalQ) * 100);
          const attemptCount = (existing?.attemptCount || 0) + 1;

          // Transparent rules based on sufficient attempts
          let status = 'Needs Practice';
          if (attemptCount < 2 && totalQ < 3) {
            status = accuracy >= 80 ? 'Improving' : 'Needs Practice';
          } else {
            if (accuracy >= 80) {
              status = 'Mastered';
            } else if (accuracy >= 60) {
              status = 'Improving';
            } else {
              status = 'Needs Practice';
            }
          }

          const missedList = existing?.missedQuestions || [];
          if (!ans.isCorrect && ans.questionText) {
            if (!missedList.some(m => m.text === ans.questionText)) {
              missedList.push({
                text: ans.questionText,
                explanation: ans.explanation,
                selectedOption: ans.selectedOption,
                correctOption: ans.correctOption,
                questionId: ans.questionId,
                date: nowIso
              });
            }
          }

          const topicRecord = {
            key: topicKey,
            studentId: studentId,
            topic: topicName,
            subject: attemptData.subject || 'Science',
            classLevel: normClass,
            class: normClass,
            chapter: attemptData.chapter || '',
            totalQuestions: totalQ,
            correctCount: correctQ,
            wrongCount: wrongQ,
            accuracy: accuracy,
            attemptCount: attemptCount,
            status: status,
            lastUpdated: nowIso,
            missedQuestions: missedList.slice(-5) // keep last 5 mistakes
          };

          await new Promise(res => {
            const putReq = topicStore.put(topicRecord);
            putReq.onsuccess = () => res();
            putReq.onerror = () => res();
          });
        }
      }

      // 3. Update Chapter Progress
      if (attemptData.chapter) {
        const chapterStore = await this.getStore('chapter_progress', 'readwrite');
        const chapterKey = `${studentId}::${normClass}::${attemptData.chapter}`;

        const existingChap = await new Promise(res => {
          const req = chapterStore.get(chapterKey);
          req.onsuccess = () => res(req.result || null);
          req.onerror = () => res(null);
        });

        const attemptsCount = (existingChap?.attemptsCount || 0) + 1;
        const bestScore = Math.max(existingChap?.bestScore || 0, record.percentage);
        const isCompleted = bestScore >= 70; // 70%+ constitutes chapter mastery

        const chapterRecord = {
          key: chapterKey,
          studentId: studentId,
          classLevel: normClass,
          class: normClass,
          subject: attemptData.subject || 'Science',
          chapter: attemptData.chapter,
          attemptsCount: attemptsCount,
          bestScore: bestScore,
          lastScore: record.percentage,
          isCompleted: isCompleted,
          lastAttemptDate: nowIso
        };

        await new Promise(res => {
          const req = chapterStore.put(chapterRecord);
          req.onsuccess = () => res();
          req.onerror = () => res();
        });
      }

      // 4. Record Daily Study Activity
      const activityStore = await this.getStore('daily_activity', 'readwrite');
      const actKey = `${studentId}::${dateStr}`;
      const existingAct = await new Promise(res => {
        const req = activityStore.get(actKey);
        req.onsuccess = () => res(req.result || null);
        req.onerror = () => res(null);
      });

      const actRecord = {
        key: actKey,
        studentId: studentId,
        dateStr: dateStr,
        quizzesCount: (existingAct?.quizzesCount || 0) + 1,
        questionsCount: (existingAct?.questionsCount || 0) + (attemptData.totalQuestions || 0),
        lastTimestamp: nowIso
      };

      await new Promise(res => {
        const req = activityStore.put(actRecord);
        req.onsuccess = () => res();
        req.onerror = () => res();
      });

      console.log(`[DB] Successfully recorded quiz attempt #${attemptId} for student ${studentId}`);
      return record;
    } catch (e) {
      console.error('[DB] Failed to save quiz attempt:', e);
      throw e;
    }
  }

  /**
   * Get all quiz attempts for a student, sorted by date descending.
   */
  async getStudentAttempts(studentId) {
    try {
      const store = await this.getStore('quiz_attempts', 'readonly');
      return new Promise((resolve) => {
        const req = store.getAll();
        req.onsuccess = () => {
          const list = (req.result || [])
            .filter(a => a.studentId === studentId)
            .sort((a, b) => new Date(b.date) - new Date(a.date));
          resolve(list);
        };
        req.onerror = () => resolve([]);
      });
    } catch {
      return [];
    }
  }

  /**
   * Get topic-level performance and learning gap records for a student.
   */
  async getStudentTopicMastery(studentId) {
    try {
      const store = await this.getStore('topic_mastery', 'readonly');
      return new Promise((resolve) => {
        const req = store.getAll();
        req.onsuccess = () => {
          const list = (req.result || []).filter(t => t.studentId === studentId);
          resolve(list);
        };
        req.onerror = () => resolve([]);
      });
    } catch {
      return [];
    }
  }

  /**
   * Get chapter completion records for a student.
   */
  async getStudentChapterProgress(studentId) {
    try {
      const store = await this.getStore('chapter_progress', 'readonly');
      return new Promise((resolve) => {
        const req = store.getAll();
        req.onsuccess = () => {
          const list = (req.result || []).filter(c => c.studentId === studentId);
          resolve(list);
        };
        req.onerror = () => resolve([]);
      });
    } catch {
      return [];
    }
  }

  /**
   * Calculate current learning streak based on actual calendar dates of study.
   */
  async getStudentDailyStreak(studentId) {
    try {
      const store = await this.getStore('daily_activity', 'readonly');
      const activities = await new Promise((resolve) => {
        const req = store.getAll();
        req.onsuccess = () => resolve((req.result || []).filter(a => a.studentId === studentId));
        req.onerror = () => resolve([]);
      });

      if (!activities.length) return 0;

      const activeDates = new Set(activities.map(a => a.dateStr));
      const today = new Date();
      let streak = 0;

      // Check today or yesterday as streak anchor
      let checkDate = new Date(today);
      const todayStr = checkDate.toISOString().split('T')[0];

      if (!activeDates.has(todayStr)) {
        // Check if yesterday was active
        checkDate.setDate(checkDate.getDate() - 1);
        const yesterdayStr = checkDate.toISOString().split('T')[0];
        if (!activeDates.has(yesterdayStr)) {
          return 0; // Streak broken
        }
      }

      // Count backwards consecutive days
      while (true) {
        const dateStr = checkDate.toISOString().split('T')[0];
        if (activeDates.has(dateStr)) {
          streak++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
      }

      return streak;
    } catch {
      return 0;
    }
  }

  /**
   * Calculate comprehensive real statistics for the student dashboard.
   * Supports class-specific isolation (e.g. Class 6 vs Class 9).
   * Zero hardcoded sample numbers.
   */
  async getStudentStatsSummary(studentId, classFilter = null) {
    const rawAttempts = await this.getStudentAttempts(studentId);
    const rawTopics = await this.getStudentTopicMastery(studentId);
    const rawChapters = await this.getStudentChapterProgress(studentId);
    const streak = await this.getStudentDailyStreak(studentId);

    const normFilter = (classFilter && classFilter !== 'ALL') ? this.normalizeClass(classFilter) : null;

    // Filter by class if specified
    const attempts = rawAttempts.filter(a => {
      if (!normFilter) return true;
      return this.normalizeClass(a.classLevel) === normFilter || this.normalizeClass(a.class) === normFilter;
    });

    const topics = rawTopics.filter(t => {
      if (!normFilter) return true;
      return this.normalizeClass(t.classLevel) === normFilter || this.normalizeClass(t.class) === normFilter;
    });

    const chapters = rawChapters.filter(c => {
      if (!normFilter) return true;
      return this.normalizeClass(c.classLevel) === normFilter || this.normalizeClass(c.class) === normFilter;
    });

    // Calculate metrics
    const totalQuizzes = attempts.length;
    let totalQuestions = 0;
    let totalCorrect = 0;
    let scoreSum = 0;
    let bestScore = 0;
    let latestScore = 0;

    let mathsQuizzes = 0;
    let mathsQuestions = 0;
    let mathsCorrect = 0;

    let scienceQuizzes = 0;
    let scienceQuestions = 0;
    let scienceCorrect = 0;

    if (totalQuizzes > 0) {
      latestScore = attempts[0].percentage || 0;
      attempts.forEach(a => {
        const qCount = a.totalQuestions || 0;
        const cCount = a.correctCount || 0;
        totalQuestions += qCount;
        totalCorrect += cCount;
        scoreSum += (a.percentage || 0);
        if ((a.percentage || 0) > bestScore) {
          bestScore = a.percentage;
        }

        if (a.subject === 'Mathematics') {
          mathsQuizzes++;
          mathsQuestions += qCount;
          mathsCorrect += cCount;
        } else {
          scienceQuizzes++;
          scienceQuestions += qCount;
          scienceCorrect += cCount;
        }
      });
    }

    const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const averageScore = totalQuizzes > 0 ? Math.round(scoreSum / totalQuizzes) : 0;
    const completedChapters = chapters.filter(c => c.isCompleted).length;

    // Study sessions = distinct days of activity for this scope
    const sessionDates = new Set(attempts.map(a => a.date ? a.date.split('T')[0] : ''));
    const totalSessions = sessionDates.size;

    // Topics that need practice
    const needsPracticeTopics = topics
      .filter(t => t.status === 'Needs Practice')
      .sort((a, b) => a.accuracy - b.accuracy);

    // Score trend points (chronological for chart, up to last 15 attempts)
    const scoreTrend = attempts
      .slice(0, 15)
      .reverse()
      .map((a, idx) => ({
        index: idx + 1,
        date: a.date ? a.date.split('T')[0].slice(5) : `Quiz ${idx + 1}`, // MM-DD
        score: a.percentage || 0,
        subject: a.subject || 'General',
        title: a.chapter || a.title || `Quiz ${idx + 1}`
      }));

    // Recommended Next Chapter Quiz
    let recommendedNextChapter = null;
    const targetClass = normFilter || 'Class 10';
    if (window.TNQuizData) {
      const allClassChapters = [
        ...window.TNQuizData.getChapterDetails(targetClass, 'Science').map(c => ({ ...c, subject: 'Science' })),
        ...window.TNQuizData.getChapterDetails(targetClass, 'Mathematics').map(c => ({ ...c, subject: 'Mathematics' }))
      ];

      // Find first unattempted or in-progress chapter
      for (const ch of allClassChapters) {
        const prog = chapters.find(c => c.chapter === ch.chapter && c.subject === ch.subject);
        if (!prog || !prog.isCompleted) {
          recommendedNextChapter = {
            chapter: ch.chapter,
            subject: ch.subject,
            classLevel: targetClass,
            bestScore: prog ? prog.bestScore : 0,
            status: prog ? 'In Progress' : 'Not Started'
          };
          break;
        }
      }

      // If all completed, recommend chapter with lowest score
      if (!recommendedNextChapter && allClassChapters.length > 0) {
        let lowestScore = 101;
        let lowestChap = allClassChapters[0];
        allClassChapters.forEach(ch => {
          const prog = chapters.find(c => c.chapter === ch.chapter && c.subject === ch.subject);
          const sc = prog ? prog.bestScore : 100;
          if (sc < lowestScore) {
            lowestScore = sc;
            lowestChap = ch;
          }
        });
        recommendedNextChapter = {
          chapter: lowestChap.chapter,
          subject: lowestChap.subject,
          classLevel: targetClass,
          bestScore: lowestScore,
          status: 'Review Revision'
        };
      }
    }

    return {
      activeClassFilter: normFilter || 'ALL',
      totalQuizzes,
      totalQuestions,
      totalCorrect,
      overallAccuracy,
      averageScore,
      bestScore,
      latestScore,
      totalSessions,
      completedChapters,
      currentStreak: streak,
      maths: {
        quizzes: mathsQuizzes,
        questions: mathsQuestions,
        accuracy: mathsQuestions > 0 ? Math.round((mathsCorrect / mathsQuestions) * 100) : 0
      },
      science: {
        quizzes: scienceQuizzes,
        questions: scienceQuestions,
        accuracy: scienceQuestions > 0 ? Math.round((scienceCorrect / scienceQuestions) * 100) : 0
      },
      chapters: chapters.sort((a, b) => (b.bestScore || 0) - (a.bestScore || 0)),
      topics: topics,
      needsPracticeTopics: needsPracticeTopics,
      scoreTrend: scoreTrend,
      recentAttempts: attempts.slice(0, 8),
      recommendedNextChapter: recommendedNextChapter
    };
  }

  /**
   * Retrieve previously missed questions for a student in a specific class and subject.
   */
  async getStudentPreviousMistakes(studentId, classLevel = null, subject = null) {
    const attempts = await this.getStudentAttempts(studentId);
    const normClass = classLevel ? this.normalizeClass(classLevel) : null;
    const missedMap = new Map();

    for (const a of attempts) {
      if (normClass && this.normalizeClass(a.classLevel) !== normClass && this.normalizeClass(a.class) !== normClass) {
        continue;
      }
      if (subject && subject !== 'ALL' && a.subject !== subject) {
        continue;
      }

      if (Array.isArray(a.answers)) {
        for (const ans of a.answers) {
          if (!ans.isCorrect && (ans.questionId || ans.questionText)) {
            const key = ans.questionId || ans.questionText;
            if (!missedMap.has(key)) {
              let fullQ = null;
              if (ans.questionId && window.TNQuizData) {
                fullQ = window.TNQuizData.getQuestionById(ans.questionId);
              }
              if (!fullQ && ans.questionText) {
                fullQ = {
                  id: ans.questionId || `mistake-${Date.now()}`,
                  classLevel: normClass || a.classLevel || 'Class 10',
                  class: normClass || a.class || '10th',
                  subject: ans.subject || a.subject || 'Science',
                  chapter: ans.chapter || a.chapter || 'Previous Mistakes',
                  topic: ans.topic || 'Revision',
                  difficulty: 'Medium',
                  question: ans.questionText,
                  options: ans.options || [ans.correctOption, ans.selectedOption, 'Option C', 'Option D'],
                  correct: 0,
                  correctAnswer: ans.correctOption,
                  explanation: ans.explanation
                };
              }
              if (fullQ) {
                missedMap.set(key, fullQ);
              }
            }
          }
        }
      }
    }

    return Array.from(missedMap.values());
  }

  /**
   * Reset / clear progress specifically for one student profile.
   * Keeps other students' data completely untouched.
   */
  async clearStudentProgress(studentId) {
    try {
      const storesToClear = ['quiz_attempts', 'topic_mastery', 'chapter_progress', 'daily_activity'];

      for (const storeName of storesToClear) {
        const store = await this.getStore(storeName, 'readwrite');
        const allItems = await new Promise((resolve) => {
          const req = store.getAll();
          req.onsuccess = () => resolve(req.result || []);
          req.onerror = () => resolve([]);
        });

        for (const item of allItems) {
          if (item.studentId === studentId) {
            const key = item.id !== undefined ? item.id : item.key;
            await new Promise((res) => {
              const req = store.delete(key);
              req.onsuccess = () => res();
              req.onerror = () => res();
            });
          }
        }
      }

      console.log(`[DB] Completely cleared progress data for student ${studentId}`);
      return true;
    } catch (e) {
      console.error('[DB] Error clearing student progress:', e);
      throw e;
    }
  }
}

// Global Database Singleton
window.gramDB = new Database();
