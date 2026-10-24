/**
 * GramLearn AI - Saved Notes & Offline Study Archive Controller
 * Manages offline syllabus revision notes (6th to 12th standard), custom notes,
 * tag filtering, search, full reader modal, and direct AI Tutor study.
 */

class NotesController {
  constructor() {
    this.notesListEl = null;
    this.searchEl = null;
    this.tagFilter = 'All';
    this.searchQuery = '';
    this.activeEditingNoteId = null;
    this.activeReadingNoteId = null;
  }

  async init() {
    this.notesListEl = document.getElementById('notes-grid');
    this.searchEl = document.getElementById('notes-search-input');

    if (this.searchEl) {
      this.searchEl.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderNotes();
      });
    }

    // Category filter pills
    this.bindFilterPills();

    // Check if offline notes are empty, auto-seed with Tamil Nadu 6th to 12th syllabus notes
    try {
      const existingNotes = await window.gramDB.getAllNotes();
      if (!existingNotes || existingNotes.length === 0) {
        await this.seedDefaultSyllabusNotes(false);
      } else {
        await this.renderNotes();
      }
    } catch (err) {
      console.warn('[Notes] Init seeding error:', err);
      this.renderNotes();
    }
  }

  bindFilterPills() {
    document.querySelectorAll('.note-filter-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.note-filter-pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        this.tagFilter = pill.getAttribute('data-tag') || 'All';
        this.renderNotes();
      });
    });
  }

  // Pre-seed offline notes with comprehensive Tamil Nadu 6th to 12th syllabus study sheets
  async seedDefaultSyllabusNotes(force = false) {
    if (!window.gramDB) return;

    if (!force) {
      const existing = await window.gramDB.getAllNotes();
      if (existing && existing.length > 0) return;
    }

    const syllabusData = (typeof window !== 'undefined' && window.TNSyllabusData) || (typeof global !== 'undefined' && global.TNSyllabusData);
    if (!syllabusData) {
      console.warn('[Notes] TNSyllabusData not found for seeding.');
      return;
    }

    const seededNotes = [];

    // Helper to format unit into a structured offline study note
    const formatUnitNote = (unit, cls, subj, isPinned = false) => {
      const tag = cls.includes('10') ? '10th SSLC' :
                  cls.includes('12') ? '12th HSC' :
                  cls.includes('11') ? '11th HSC' :
                  cls.includes('9') ? '9th Std' : '6th-8th Std';

      return {
        title: `[${cls} ${subj}] ${unit.title}`,
        content: `📘 தமிழ்நாடு மாநிலப் பாடத்திட்டம் (Tamil Nadu State Board ${cls} Standard) - ${subj}
பாடம் (Chapter): ${unit.unit} - ${unit.title} (${unit.tamilTitle || ''})

💡 எளிய விளக்கம் (Tamil Concept):
${unit.summaryTa}

📖 ஆங்கில விளக்கம் (English Definition):
${unit.summaryEn}

${unit.formulas ? `📐 முக்கிய சூத்திரங்கள் & விதிகள் (Formulas & Laws):\n${unit.formulas}\n` : ''}
🏏 நிஜ வாழ்க்கை உதாரணம் (Everyday Analogy):
${unit.analogy}

🌟 தேர்வில் அதிக மதிப்பெண் பெற (Board Exam Key Points):
${unit.keyPoints ? unit.keyPoints.map(p => `• ${p}`).join('\n') : ''}

💡 தேர்வு டிப்ஸ் (Exam Tips):
${unit.examTips || ''}`,
        tag: tag,
        standard: cls,
        subject: subj,
        pinned: isPinned,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    };

    // Iterate through all classes in TNSyllabusData (6th to 12th)
    for (const [cls, subjects] of Object.entries(syllabusData)) {
      for (const [subj, units] of Object.entries(subjects)) {
        for (const unit of units) {
          const isHighPriority = (cls === '10th' && (unit.id.includes('sci-u1') || unit.id.includes('sci-u3') || unit.id.includes('math-u2'))) ||
                                 (cls === '12th' && (unit.id.includes('phy-u1') || unit.id.includes('chem-u1')));
          seededNotes.push(formatUnitNote(unit, cls, subj, isHighPriority));
        }
      }
    }

    // Save all to IndexedDB
    for (const note of seededNotes) {
      await window.gramDB.saveNote(note);
    }

    if (window.showToast) {
      window.showToast(`Loaded ${seededNotes.length} Tamil Nadu Syllabus Study Notes offline!`, 'success');
    }
    await this.renderNotes();
  }

  async renderNotes() {
    if (!this.notesListEl) return;

    let notes = await window.gramDB.getAllNotes();

    // Filter by tag or category
    if (this.tagFilter !== 'All') {
      notes = notes.filter((n) => {
        const tag = (n.tag || '').toLowerCase();
        const title = (n.title || '').toLowerCase();
        const target = this.tagFilter.toLowerCase();

        if (this.tagFilter === '10th SSLC') {
          return tag.includes('10th') || title.includes('10th');
        }
        if (this.tagFilter === '12th HSC') {
          return tag.includes('12th') || title.includes('12th');
        }
        if (this.tagFilter === '11th HSC') {
          return tag.includes('11th') || title.includes('11th');
        }
        if (this.tagFilter === '9th Std') {
          return tag.includes('9th') || title.includes('9th');
        }
        if (this.tagFilter === '6th-8th Std') {
          return tag.includes('6th') || tag.includes('7th') || tag.includes('8th') ||
                 title.includes('6th') || title.includes('7th') || title.includes('8th');
        }
        if (this.tagFilter === 'Science') {
          return title.includes('science') || title.includes('physics') || title.includes('chemistry') || tag.includes('science');
        }
        if (this.tagFilter === 'Mathematics') {
          return title.includes('math') || title.includes('கணிதம்') || tag.includes('math');
        }
        return n.tag === this.tagFilter;
      });
    }

    // Filter by search query
    if (this.searchQuery) {
      notes = notes.filter(
        (n) =>
          n.title.toLowerCase().includes(this.searchQuery) ||
          n.content.toLowerCase().includes(this.searchQuery) ||
          (n.tag && n.tag.toLowerCase().includes(this.searchQuery))
      );
    }

    if (notes.length === 0) {
      this.notesListEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <svg style="width: 48px; height: 48px; margin-bottom: 0.75rem; opacity: 0.4;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <p style="font-weight: 700; font-size: 1.05rem;">No notes found</p>
          <p style="font-size: 0.88rem; margin-top: 0.35rem; margin-bottom: 1.25rem;">
            Click below to load all Tamil Nadu 6th to 12th standard revision notes, or create your own custom note!
          </p>
          <button class="btn btn-primary btn-sm" onclick="window.gramNotes.seedDefaultSyllabusNotes(true)">
            📚 Load TN Syllabus Notes (6th-12th)
          </button>
        </div>
      `;
      return;
    }

    this.notesListEl.innerHTML = notes
      .map(
        (note) => `
      <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 3px solid ${note.pinned ? 'var(--primary-600)' : 'var(--primary-200)'}; transition: transform 0.2s ease, box-shadow 0.2s ease;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="badge ${this.getTagBadgeClass(note.tag)}">${this.escapeHtml(note.tag || 'General')}</span>
            <button class="btn btn-icon-sm btn-ghost" title="${note.pinned ? 'Unpin' : 'Pin to top'}" onclick="window.gramNotes.togglePin(${note.id}, ${!note.pinned})">
              <svg viewBox="0 0 24 24" fill="${note.pinned ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" style="color: ${note.pinned ? 'var(--primary-600)' : 'var(--text-disabled)'};"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>
            </button>
          </div>
          <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem; line-height: 1.35; cursor: pointer;" onclick="window.gramNotes.openReadModal(${note.id})">
            ${this.escapeHtml(note.title)}
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; white-space: pre-wrap; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 1rem; cursor: pointer;" onclick="window.gramNotes.openReadModal(${note.id})">
            ${this.escapeHtml(note.content)}
          </p>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.75rem; border-top: 1px solid var(--border-light); font-size: 0.75rem; color: var(--text-muted); flex-wrap: wrap; gap: 0.5rem;">
          <span>${new Date(note.updatedAt || Date.now()).toLocaleDateString()}</span>
          <div style="display: flex; gap: 0.3rem; align-items: center;">
            <button class="btn btn-sm btn-outline" style="padding: 0.25rem 0.6rem; font-size: 0.78rem;" onclick="window.gramNotes.openReadModal(${note.id})" title="Read Full Note">
              📖 Read
            </button>
            <button class="btn btn-sm btn-ghost" style="padding: 0.25rem 0.5rem; font-size: 0.78rem;" onclick="window.gramNotes.studyWithAI(${note.id})" title="Study with AI Tutor">
              🤖 AI Tutor
            </button>
            <button class="btn btn-sm btn-ghost" title="Edit Note" onclick="window.gramNotes.openEditModal(${note.id})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </button>
            <button class="btn btn-sm btn-ghost" style="color: var(--accent-rose);" title="Delete Note" onclick="window.gramNotes.deleteNote(${note.id})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `
      )
      .join('');
  }

  getTagBadgeClass(tag) {
    switch (tag) {
      case '10th SSLC':
        return 'badge-amber';
      case '12th HSC':
        return 'badge-rose';
      case '11th HSC':
        return 'badge-purple';
      case '9th Std':
        return 'badge-emerald';
      case '6th-8th Std':
        return 'badge-sky';
      case 'AI Tutor Chat':
        return 'badge-purple';
      case 'Syllabus Excerpt':
        return 'badge-amber';
      case 'Grammar Rule':
        return 'badge-sky';
      case 'Vocabulary':
        return 'badge-emerald';
      default:
        return 'badge-sky';
    }
  }

  // Open Full Note Reader Modal
  async openReadModal(noteId) {
    const notes = await window.gramDB.getAllNotes();
    const note = notes.find((n) => n.id === noteId);
    if (!note) return;

    this.activeReadingNoteId = note.id;

    const titleEl = document.getElementById('note-reader-title');
    const tagEl = document.getElementById('note-reader-tag');
    const dateEl = document.getElementById('note-reader-date');
    const contentEl = document.getElementById('note-reader-content');

    if (titleEl) titleEl.textContent = note.title;
    if (tagEl) {
      tagEl.textContent = note.tag || 'General';
      tagEl.className = `badge ${this.getTagBadgeClass(note.tag)}`;
    }
    if (dateEl) {
      dateEl.textContent = new Date(note.updatedAt || Date.now()).toLocaleDateString();
    }
    if (contentEl) {
      contentEl.textContent = note.content;
    }

    const modal = document.getElementById('note-reader-modal');
    if (modal) modal.classList.add('open');
  }

  closeReadModal() {
    const modal = document.getElementById('note-reader-modal');
    if (modal) modal.classList.remove('open');
    this.activeReadingNoteId = null;
  }

  async copyCurrentNote() {
    if (!this.activeReadingNoteId) return;
    const notes = await window.gramDB.getAllNotes();
    const note = notes.find((n) => n.id === this.activeReadingNoteId);
    if (!note) return;

    await navigator.clipboard.writeText(`${note.title}\n\n${note.content}`);
    window.showToast('Note copied to clipboard!', 'success');
  }

  async studyCurrentNoteWithAI() {
    if (!this.activeReadingNoteId) return;
    const notes = await window.gramDB.getAllNotes();
    const note = notes.find((n) => n.id === this.activeReadingNoteId);
    if (!note) return;

    this.closeReadModal();
    if (window.gramApp) {
      window.gramApp.navigateTo('chat');
    }
    if (window.gramChat) {
      window.gramChat.sendPreloadedPrompt(`Please explain this Tamil Nadu syllabus revision note thoroughly and give me 2 practice questions:\n${note.title}`);
    }
  }

  async studyWithAI(noteId) {
    const notes = await window.gramDB.getAllNotes();
    const note = notes.find((n) => n.id === noteId);
    if (!note) return;

    if (window.gramApp) {
      window.gramApp.navigateTo('chat');
    }
    if (window.gramChat) {
      window.gramChat.sendPreloadedPrompt(`Please explain this Tamil Nadu syllabus revision note thoroughly and give me 2 practice questions:\n${note.title}`);
    }
  }

  openCreateModal() {
    this.activeEditingNoteId = null;
    document.getElementById('note-modal-title').textContent = 'Create New Note';
    document.getElementById('note-title-input').value = '';
    document.getElementById('note-content-input').value = '';
    document.getElementById('note-tag-select').value = '10th SSLC';

    const modal = document.getElementById('note-editor-modal');
    if (modal) modal.classList.add('open');
  }

  async openEditModal(noteId) {
    const notes = await window.gramDB.getAllNotes();
    const note = notes.find((n) => n.id === noteId);
    if (!note) return;

    this.activeEditingNoteId = note.id;
    document.getElementById('note-modal-title').textContent = 'Edit Note';
    document.getElementById('note-title-input').value = note.title;
    document.getElementById('note-content-input').value = note.content;
    document.getElementById('note-tag-select').value = note.tag || '10th SSLC';

    const modal = document.getElementById('note-editor-modal');
    if (modal) modal.classList.add('open');
  }

  closeEditorModal() {
    const modal = document.getElementById('note-editor-modal');
    if (modal) modal.classList.remove('open');
    this.activeEditingNoteId = null;
  }

  async saveNoteFromModal() {
    const title = document.getElementById('note-title-input').value.trim();
    const content = document.getElementById('note-content-input').value.trim();
    const tag = document.getElementById('note-tag-select').value;

    if (!title || !content) {
      window.showToast('Please enter both a title and content for your note.', 'error');
      return;
    }

    const noteRecord = {
      title: title,
      content: content,
      tag: tag
    };

    if (this.activeEditingNoteId) {
      noteRecord.id = this.activeEditingNoteId;
    }

    await window.gramDB.saveNote(noteRecord);
    window.showToast(this.activeEditingNoteId ? 'Note updated!' : 'Note saved offline!', 'success');
    this.closeEditorModal();
    await this.renderNotes();
  }

  async togglePin(noteId, isPinned) {
    const notes = await window.gramDB.getAllNotes();
    const note = notes.find((n) => n.id === noteId);
    if (!note) return;

    note.pinned = isPinned;
    await window.gramDB.saveNote(note);
    await this.renderNotes();
  }

  async deleteNote(noteId) {
    if (confirm('Delete this note from your offline library?')) {
      await window.gramDB.deleteNote(noteId);
      window.showToast('Note deleted.', 'info');
      await this.renderNotes();
    }
  }

  async exportNotesAsJson() {
    const notes = await window.gramDB.getAllNotes();
    if (notes.length === 0) {
      window.showToast('No notes to export.', 'info');
      return;
    }

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(notes, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `gramlearn_notes_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    window.showToast('Notes backup downloaded successfully!', 'success');
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

// Global Notes Controller Singleton
window.gramNotes = new NotesController();
