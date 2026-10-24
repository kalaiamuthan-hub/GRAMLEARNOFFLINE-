/**
 * GramLearn AI - Syllabus Library Controller
 * Uses PDF.js for offline selectable PDF text extraction and TXT parsing.
 * Supports text search, text selection actions ("Explain with AI", "Save to Note"),
 * and scanned PDF detection.
 */

class SyllabusController {
  constructor() {
    this.dropzone = null;
    this.fileInput = null;
    this.docListContainer = null;
    this.readerContainer = null;
    this.activeDoc = null;
    this.selectedText = '';
  }

  init() {
    this.dropzone = document.getElementById('syllabus-dropzone');
    this.fileInput = document.getElementById('syllabus-file-input');
    this.docListContainer = document.getElementById('syllabus-doc-list');
    this.readerContainer = document.getElementById('syllabus-reader-modal');

    if (!this.dropzone || !this.fileInput) return;

    // Configure local PDF.js worker
    if (window.pdfjsLib) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = './vendor/pdfjs/pdf.worker.min.js';
    }

    // Drag and drop handlers
    this.dropzone.addEventListener('click', () => this.fileInput.click());

    this.dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      this.dropzone.classList.add('dragover');
    });

    this.dropzone.addEventListener('dragleave', () => {
      this.dropzone.classList.remove('dragover');
    });

    this.dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      this.dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        this.processFile(e.dataTransfer.files[0]);
      }
    });

    this.fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        this.processFile(e.target.files[0]);
      }
    });

    // Reader modal text selection listener
    document.addEventListener('selectionchange', () => {
      const selection = window.getSelection();
      const text = selection.toString().trim();
      const popup = document.getElementById('selection-action-bar');
      if (!popup) return;

      if (text.length > 10 && this.activeDoc) {
        this.selectedText = text;
        popup.classList.remove('hidden');
      } else {
        if (!selection.rangeCount || selection.isCollapsed) {
          popup.classList.add('hidden');
        }
      }
    });

    // In-document search
    const searchInput = document.getElementById('syllabus-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.searchDocumentText(e.target.value));
    }

    this.renderDocumentList();
  }

  async processFile(file) {
    const fileName = file.name;
    const fileExt = fileName.split('.').pop().toLowerCase();
    const fileSizeStr = (file.size / 1024).toFixed(1) + ' KB';

    if (fileExt !== 'pdf' && fileExt !== 'txt') {
      window.showToast('Please upload a PDF or TXT document.', 'error');
      return;
    }

    window.showToast(`Importing ${fileName}...`, 'info');

    try {
      let extractedText = '';
      let pageCount = 1;
      let isScanned = false;

      if (fileExt === 'txt') {
        extractedText = await file.text();
      } else if (fileExt === 'pdf') {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        pageCount = pdf.numPages;

        let totalText = [];
        for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const content = await page.getTextContent();
          const pageStrings = content.items.map((item) => item.str).join(' ');
          totalText.push(`--- Page ${pageNum} ---\n` + pageStrings);
        }

        extractedText = totalText.join('\n\n');

        // Scanned PDF detection heuristic:
        // If average text length per page is under 15 characters, it's likely a photo/scanned PDF without OCR
        const rawContent = extractedText.replace(/--- Page \d+ ---/g, '').trim();
        if (rawContent.length < pageCount * 15) {
          isScanned = true;
        }
      }

      if (isScanned) {
        window.showToast('Notice: This PDF appears to be a scanned image without selectable text.', 'error');
      }

      const docRecord = {
        name: fileName,
        type: fileExt.toUpperCase(),
        size: fileSizeStr,
        pageCount: pageCount,
        extractedText: extractedText,
        isScanned: isScanned,
        uploadedAt: new Date().toISOString()
      };

      await window.gramDB.saveSyllabus(docRecord);
      window.showToast(`Imported ${fileName} successfully!`, 'success');

      await this.renderDocumentList();
      this.fileInput.value = '';
    } catch (err) {
      console.error('[Syllabus] Error reading document:', err);
      window.showToast(`Failed to parse ${fileName}: ${err.message}`, 'error');
    }
  }

  async renderDocumentList() {
    if (!this.docListContainer) return;

    const docs = await window.gramDB.getAllSyllabus();

    if (docs.length === 0) {
      this.docListContainer.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          <svg style="width: 44px; height: 44px; margin-bottom: 0.75rem; opacity: 0.5;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          <p style="font-weight: 600;">No syllabus documents imported yet.</p>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">Upload a chapter, syllabus guide, or notes above to read and query.</p>
        </div>
      `;
      return;
    }

    this.docListContainer.innerHTML = docs
      .map(
        (doc) => `
        <div class="card" style="margin-bottom: 1rem; padding: 1.15rem 1.35rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.9rem;">
            <div style="width: 42px; height: 42px; border-radius: var(--radius-md); background: ${doc.type === 'PDF' ? 'var(--accent-rose-light)' : 'var(--primary-100)'}; color: ${doc.type === 'PDF' ? 'var(--accent-rose)' : 'var(--primary-700)'}; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.82rem;">
              ${doc.type}
            </div>
            <div>
              <h4 style="font-size: 0.98rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem;">${this.escapeHtml(doc.name)}</h4>
              <p style="font-size: 0.78rem; color: var(--text-muted); display: flex; gap: 0.75rem; align-items: center;">
                <span>${doc.pageCount} ${doc.pageCount === 1 ? 'page' : 'pages'}</span>
                <span>•</span>
                <span>${doc.size}</span>
                ${doc.isScanned ? '<span class="badge badge-amber">Scanned (No OCR text)</span>' : '<span class="badge badge-emerald">Selectable Text</span>'}
              </p>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button class="btn btn-sm btn-secondary" onclick="window.gramSyllabus.openDocumentReader(${doc.id})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Read & Query
            </button>
            <button class="btn btn-sm btn-outline" style="color: var(--accent-rose);" onclick="window.gramSyllabus.deleteDocument(${doc.id})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>
      `
      )
      .join('');
  }

  async openDocumentReader(docId) {
    const docs = await window.gramDB.getAllSyllabus();
    this.activeDoc = docs.find((d) => d.id === docId);
    if (!this.activeDoc) return;

    const modal = document.getElementById('syllabus-reader-modal');
    const titleEl = document.getElementById('reader-doc-title');
    const contentEl = document.getElementById('reader-doc-content');

    if (!modal || !contentEl) return;

    titleEl.textContent = this.activeDoc.name;

    if (this.activeDoc.isScanned) {
      contentEl.innerHTML = `
        <div class="alert alert-warning">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <div>
            <strong>Scanned Document Warning:</strong>
            <p>This PDF appears to be a scanned image without digital selectable text. Scanned PDFs are not supported until optical character recognition (OCR) is integrated. Please use text-based PDFs or .txt files.</p>
          </div>
        </div>
      `;
    } else {
      contentEl.innerHTML = `
        <div class="alert alert-info" style="margin-bottom: 1rem; font-size: 0.85rem;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <div>
            💡 <strong>Interactive Learning Tip:</strong> Highlight any sentence or paragraph in the text below to trigger AI Explanations, Tamil translations, or save it to your Notes library.
          </div>
        </div>
        <div id="syllabus-raw-text" style="white-space: pre-wrap; font-family: inherit; font-size: 0.92rem; line-height: 1.6; color: var(--text-primary); user-select: text;">${this.escapeHtml(this.activeDoc.extractedText)}</div>
      `;
    }

    modal.classList.add('open');
  }

  closeDocumentReader() {
    const modal = document.getElementById('syllabus-reader-modal');
    if (modal) modal.classList.remove('open');
    this.activeDoc = null;
    this.selectedText = '';
  }

  searchDocumentText(keyword) {
    if (!this.activeDoc) return;
    const textContainer = document.getElementById('syllabus-raw-text');
    if (!textContainer) return;

    const originalText = this.activeDoc.extractedText;
    if (!keyword || keyword.trim() === '') {
      textContainer.innerHTML = this.escapeHtml(originalText);
      return;
    }

    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedKeyword})`, 'gi');

    const highlighted = this.escapeHtml(originalText).replace(
      regex,
      '<mark style="background: #fde047; padding: 1px 3px; border-radius: 2px;">$1</mark>'
    );

    textContainer.innerHTML = highlighted;
  }

  // Action: Ask AI to explain the selected text
  askAIToExplainSelected() {
    if (!this.selectedText) return;

    const excerpt = this.selectedText;
    this.closeDocumentReader();

    // Navigate to Chat view
    window.gramApp.navigateTo('chat');

    // Preload chat with context prompt
    const prompt = window.gramAI.useBilingualTamil
      ? `தயவுசெய்து இந்த பாடப்பகுதியை எளிய தமிழில் விளக்கவும் (Please explain this excerpt): "${excerpt.slice(0, 300)}"`
      : `Please explain this excerpt from my syllabus step-by-step with examples: "${excerpt.slice(0, 300)}"`;

    window.gramChat.sendPreloadedPrompt(prompt, excerpt);
  }

  // Action: Generate practice quiz based on selected text
  askAIToQuizSelected() {
    if (!this.selectedText) return;

    const excerpt = this.selectedText;
    this.closeDocumentReader();

    window.gramApp.navigateTo('chat');

    const prompt = `Based on this syllabus excerpt: "${excerpt.slice(0, 250)}", create 2 interactive practice questions with multiple-choice options to test my understanding.`;
    window.gramChat.sendPreloadedPrompt(prompt, excerpt);
  }

  // Action: Save selected text directly to notes
  async saveSelectedToNote() {
    if (!this.selectedText) return;

    try {
      const excerpt = this.selectedText;
      const title = `Excerpt from ${this.activeDoc ? this.activeDoc.name : 'Syllabus'}: ${excerpt.slice(0, 35)}...`;

      await window.gramDB.saveNote({
        title: title,
        content: `### 📖 Syllabus Note\n**Source:** ${this.activeDoc ? this.activeDoc.name : 'Uploaded Document'}\n\n> "${excerpt}"\n\n*Added on ${new Date().toLocaleDateString()}*`,
        tag: 'Syllabus Excerpt',
        pinned: false
      });

      window.showToast('Saved selected passage to your Notes library!', 'success');
      const popup = document.getElementById('selection-action-bar');
      if (popup) popup.classList.add('hidden');
    } catch (e) {
      window.showToast('Failed to save note: ' + e.message, 'error');
    }
  }

  async deleteDocument(id) {
    if (confirm('Delete this imported syllabus document from offline storage?')) {
      await window.gramDB.deleteSyllabus(id);
      window.showToast('Document removed.', 'info');
      await this.renderDocumentList();
    }
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

// Global Syllabus Controller Singleton
window.gramSyllabus = new SyllabusController();
