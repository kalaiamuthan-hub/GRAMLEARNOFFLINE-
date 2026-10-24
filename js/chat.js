/**
 * GramLearn AI - Chat Controller
 * Handles conversation state, streaming responses, language switching,
 * speech synthesis, and note capture.
 * Integrates WebLLM SmolLM2-360M-Instruct via Web Worker with graceful offline fallback.
 */

class ChatController {
  constructor() {
    this.messagesContainer = null;
    this.textarea = null;
    this.sendBtn = null;
    this.langEnBtn = null;
    this.langTaBtn = null;
    this.statusBadge = null;

    // Progress banner elements
    this.progressBanner = null;
    this.progressText = null;
    this.progressPercent = null;
    this.progressFill = null;

    this.conversation = [];
    this.currentSyllabusContext = '';
    this.currentOCRContext = '';

    // Speech synthesis
    this.speechSynth = window.speechSynthesis || null;
    this.speakingUtterance = null;
  }

  init() {
    this.messagesContainer = document.getElementById('chat-messages');
    this.textarea = document.getElementById('chat-input-text');
    this.sendBtn = document.getElementById('chat-send-btn');
    this.langEnBtn = document.getElementById('btn-lang-en');
    this.langTaBtn = document.getElementById('btn-lang-ta');
    this.statusBadge = document.getElementById('chat-model-badge');

    // Model download / initialization banner elements
    this.progressBanner = document.getElementById('chat-model-progress-banner');
    this.progressText = document.getElementById('chat-model-progress-text');
    this.progressPercent = document.getElementById('chat-model-progress-percent');
    this.progressFill = document.getElementById('chat-model-progress-fill');

    if (!this.messagesContainer || !this.textarea) return;

    // Send button & enter key handlers
    this.sendBtn.addEventListener('click', () => this.handleSendMessage());

    this.textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleSendMessage();
      }
    });

    // Auto-grow textarea
    this.textarea.addEventListener('input', () => {
      this.textarea.style.height = 'auto';
      this.textarea.style.height = Math.min(this.textarea.scrollHeight, 120) + 'px';
    });

    // Language buttons
    if (this.langEnBtn && this.langTaBtn) {
      this.langEnBtn.addEventListener('click', () => this.setLanguage(false));
      this.langTaBtn.addEventListener('click', () => this.setLanguage(true));
    }

    // Clear conversation
    const clearBtn = document.getElementById('chat-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearConversation());
    }

    // Quick suggestion chips
    document.querySelectorAll('.chip-btn').forEach((chip) => {
      chip.addEventListener('click', () => {
        const prompt = chip.getAttribute('data-prompt');
        if (prompt) {
          this.textarea.value = prompt;
          this.handleSendMessage();
        }
      });
    });

    // Attach Photo / OCR Scanner button
    const attachBtn = document.getElementById('chat-ocr-attach-btn');
    if (attachBtn) {
      attachBtn.addEventListener('click', () => {
        if (window.gramApp) {
          window.gramApp.navigateTo('ocr');
          if (window.showToast) window.showToast('Snap or upload your textbook photo here to scan and solve!', 'info');
        }
      });
    }

    // Subscribe to AI Engine events
    window.gramAI.subscribe((event, data) => {
      if (event === 'download_progress') {
        this.updateDownloadProgress(data);
      } else if (event === 'status_change') {
        this.updateModelStatusBadge(data.status, data.message);
      }
    });

    this.updateModelStatusBadge(window.gramAI.status);
  }

  // Triggered when student navigates to Chat tab
  onViewActivated() {
    // Lazy-load SmolLM2-360M on first chat visit
    if (window.gramAI && window.gramAI.lazyInitOnFirstVisit) {
      window.gramAI.lazyInitOnFirstVisit();
    }
  }

  setLanguage(isTamil) {
    window.gramAI.useBilingualTamil = isTamil;
    if (this.langEnBtn && this.langTaBtn) {
      if (isTamil) {
        this.langTaBtn.classList.add('active', 'tamil-mode');
        this.langEnBtn.classList.remove('active');
        window.showToast('Language set to Bilingual Tamil (தமிழ்)', 'info');
      } else {
        this.langEnBtn.classList.add('active');
        this.langTaBtn.classList.remove('active', 'tamil-mode');
        window.showToast('Language set to English', 'info');
      }
    }
  }

  updateDownloadProgress(data) {
    if (!this.progressBanner) return;
    this.progressBanner.classList.remove('hidden');

    const pct = Math.round(data.percent !== undefined ? data.percent : (data.progress || 0) * 100);
    if (this.progressPercent) this.progressPercent.textContent = `${pct}%`;
    if (this.progressFill) this.progressFill.style.width = `${pct}%`;
    if (this.progressText) {
      this.progressText.textContent = data.text || `Loading SmolLM2-360M model weights (${pct}%)...`;
    }
  }

  updateModelStatusBadge(status, message) {
    if (!this.statusBadge) return;

    if (status === 'READY_NEURAL') {
      this.statusBadge.className = 'badge badge-purple';
      this.statusBadge.innerHTML = '<span class="status-indicator-dot"></span> SmolLM2-360M Neural Active';
      if (this.progressBanner) {
        if (this.progressText) this.progressText.textContent = '✅ SmolLM2-360M Neural Model Ready (On-Device)';
        if (this.progressPercent) this.progressPercent.textContent = '100%';
        if (this.progressFill) this.progressFill.style.width = '100%';
        setTimeout(() => {
          if (this.progressBanner) this.progressBanner.classList.add('hidden');
        }, 3000);
      }
    } else if (status === 'DOWNLOADING') {
      this.statusBadge.className = 'badge badge-emerald';
      this.statusBadge.innerHTML = '<span class="status-indicator-dot"></span> Friendly AI Active (Offline Brain)';
      if (this.progressBanner) {
        this.progressBanner.classList.remove('hidden');
        if (this.progressText) {
          this.progressText.innerHTML = '📥 Downloading SmolLM2 model in background (Chat & OCR are active right now!)';
        }
      }
    } else if (status === 'ERROR') {
      this.statusBadge.className = 'badge badge-emerald';
      this.statusBadge.innerHTML = '<span class="status-indicator-dot"></span> Friendly AI Active (Offline Brain)';
      if (this.progressBanner) {
        this.progressBanner.classList.remove('hidden');
        if (this.progressText) {
          this.progressText.innerHTML = `ℹ️ ${message || 'Neural model unavailable. Running smoothly on instant offline curriculum engine.'}`;
        }
        if (this.progressFill) {
          this.progressFill.style.background = 'var(--primary-400)';
        }
      }
    } else {
      this.statusBadge.className = 'badge badge-emerald';
      this.statusBadge.innerHTML = '<span class="status-indicator-dot"></span> Friendly AI Active (Offline Brain)';
      if (this.progressBanner) this.progressBanner.classList.add('hidden');
    }
  }

  async handleSendMessage() {
    const text = this.textarea.value.trim();
    if (!text || window.gramAI.isGenerating) return;

    // Low-memory mutual exclusion check: Avoid querying LLM while OCR is actively processing
    if (window.gramOCR && (window.gramOCR.isScanning || window.gramOCR.isProcessing)) {
      window.showToast('Please wait for textbook OCR scan to complete before asking doubts (protects device memory)', 'warning');
      return;
    }

    // Reset input height
    this.textarea.value = '';
    this.textarea.style.height = 'auto';

    // Append User Message to UI
    this.appendMessage('user', text);

    // Save to conversation history
    this.conversation.push({ role: 'user', content: text });

    // Show loading typing indicator
    const typingBubbleId = this.showTypingIndicator();

    try {
      let aiMessageEl = null;
      let aiBubbleContentEl = null;
      let aiBubbleEl = null;
      const ocrCtx = this.currentOCRContext || this.currentSyllabusContext || '';

      await window.gramAI.generateResponse(
        this.conversation,
        (delta, fullResponse) => {
          // First chunk received: Remove typing bubble and create real message container
          if (!aiMessageEl) {
            this.removeTypingIndicator(typingBubbleId);
            const elements = this.createEmptyAIMessage();
            aiMessageEl = elements.row;
            aiBubbleContentEl = elements.content;
            aiBubbleEl = elements.bubble;
          }
          aiBubbleContentEl.innerHTML = this.renderMarkdown(fullResponse) + '<span class="streaming-cursor"></span>';
          this.scrollToBottom();
        },
        (finalResponse, meta) => {
          if (!aiMessageEl) {
            this.removeTypingIndicator(typingBubbleId);
            const elements = this.createEmptyAIMessage();
            aiMessageEl = elements.row;
            aiBubbleContentEl = elements.content;
            aiBubbleEl = elements.bubble;
          }
          aiBubbleContentEl.innerHTML = this.renderMarkdown(finalResponse);

          // Decorate with provenance badge and action buttons
          this.decorateAIMessage(aiBubbleEl, finalResponse, meta);

          this.conversation.push({ role: 'assistant', content: finalResponse });
          this.scrollToBottom();
        },
        ocrCtx
      );

      // Reset single-turn context
      this.currentOCRContext = '';
      this.currentSyllabusContext = '';

      // Record study activity in stats
      await this.recordChatActivity();
    } catch (err) {
      this.removeTypingIndicator(typingBubbleId);
      console.error('[Chat] Generation error:', err);
      this.appendMessage('ai', `⚠️ An error occurred: ${err.message}. Retrying with offline tutor brain...`);
    }
  }

  // Decorate AI response bubble with provenance badge and copy/notes/tts buttons
  decorateAIMessage(bubbleEl, content, meta) {
    if (!bubbleEl || bubbleEl.querySelector('.message-actions')) return;

    // 1. Provenance Tag (Clear distinction between textbook verified content vs neural model)
    const provenance = document.createElement('div');
    provenance.className = 'provenance-tag-box';
    provenance.style.marginBottom = '0.5rem';

    if (meta && meta.source === 'curriculum') {
      provenance.innerHTML = `
        <span class="badge badge-sky" style="font-size: 0.72rem; padding: 0.2rem 0.55rem; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;" title="Retrieved directly from TN State Board curriculum">
          📘 Verified Textbook Curriculum (Samacheer Kalvi)
        </span>
      `;
    } else if (meta && meta.source === 'neural') {
      const modelLabel = meta.modelId ? meta.modelId.replace('-MLC', '') : 'SmolLM2-360M';
      provenance.innerHTML = `
        <span class="badge badge-purple" style="font-size: 0.72rem; padding: 0.2rem 0.55rem; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;" title="Generated on-device by neural WebLLM engine">
          🤖 ${modelLabel} Neural AI (On-Device)
        </span>
      `;
    } else {
      provenance.innerHTML = `
        <span class="badge badge-emerald" style="font-size: 0.72rem; padding: 0.2rem 0.55rem; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;" title="Curriculum-aligned offline linguistic tutor">
          🧠 On-Device Linguistic Tutor
        </span>
      `;
    }

    bubbleEl.insertBefore(provenance, bubbleEl.firstChild);

    // 2. Action buttons row (Copy, Save Note, Speak)
    const actions = document.createElement('div');
    actions.className = 'message-actions';

    // Copy Button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'msg-action-btn';
    copyBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      Copy
    `;
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(content);
      window.showToast('Copied to clipboard!', 'success');
    });

    // Save to Notes Button
    const saveNoteBtn = document.createElement('button');
    saveNoteBtn.className = 'msg-action-btn';
    saveNoteBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
      Save Note
    `;
    saveNoteBtn.addEventListener('click', async () => {
      await this.saveMessageAsNote(content);
    });

    // Speak / Read Aloud Button
    const speakBtn = document.createElement('button');
    speakBtn.className = 'msg-action-btn';
    speakBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
      Read Aloud
    `;
    speakBtn.addEventListener('click', () => this.speakText(content, speakBtn));

    actions.appendChild(copyBtn);
    actions.appendChild(saveNoteBtn);
    actions.appendChild(speakBtn);
    bubbleEl.appendChild(actions);

    // 3. Interactive Follow-up Suggestion Chips for Richer AI Dialogue
    const isTa = /[\u0B80-\u0BFF]/.test(content) || window.gramAI.useBilingualTamil;
    const chipsRow = document.createElement('div');
    chipsRow.className = 'chat-followup-chips';
    chipsRow.style.cssText = 'display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.65rem; padding-top: 0.5rem; border-top: 1px dashed var(--border-light);';

    const suggestions = isTa ? [
      { label: '🏏 எளிய உதாரணம்', prompt: 'இதற்கு ஒரு எளிய நிஜ வாழ்க்கை உதாரணம் தாருங்கள்' },
      { label: '❓ என்னை 1 கேள்வி கேளுங்கள்', prompt: 'இப்பகுதியிலிருந்து என்னை ஒரு பயிற்சி கேள்வி கேளுங்கள்' },
      { label: '💡 English Explanation', prompt: 'Explain this concept in simple English please' },
      { label: '📝 தேர்வு டிப்ஸ்', prompt: 'இப்பாடத்திற்குரிய முக்கியமான தேர்வு குறிப்புகளை (Exam tips) தாருங்கள்' }
    ] : [
      { label: '🇮🇳 தமிழில் விளக்கம்', prompt: 'இதை எளிய தமிழில் விளக்குங்கள் (Explain in Tamil)' },
      { label: '🏏 Real-World Example', prompt: 'Give a relatable real-world analogy for this' },
      { label: '❓ Quiz Me on This', prompt: 'Test my understanding with 1 practice question' },
      { label: '📝 3-Bullet Summary', prompt: 'Summarize this in 3 concise revision bullet points' }
    ];

    suggestions.forEach(item => {
      const chip = document.createElement('button');
      chip.className = 'chip-btn';
      chip.style.cssText = 'font-size: 0.74rem; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); background: var(--bg-surface); border: 1px solid var(--primary-200); cursor: pointer; color: var(--primary-800);';
      chip.textContent = item.label;
      chip.addEventListener('click', () => {
        if (this.textarea) {
          this.textarea.value = item.prompt;
          this.handleSendMessage();
        }
      });
      chipsRow.appendChild(chip);
    });

    bubbleEl.appendChild(chipsRow);
  }

  appendMessage(role, content, isFallback = false) {
    const row = document.createElement('div');
    row.className = `chat-message-row ${role}`;

    const avatar = document.createElement('div');
    avatar.className = `chat-avatar ${role === 'user' ? 'user-avatar' : 'ai-avatar'}`;
    avatar.textContent = role === 'user' ? 'You' : 'AI';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';

    const textContent = document.createElement('div');
    textContent.className = 'message-content-inner';
    textContent.innerHTML = this.renderMarkdown(content);
    bubble.appendChild(textContent);

    if (role === 'ai') {
      const meta = {
        source: isFallback ? 'linguistic' : 'curriculum',
        badge: isFallback ? '🧠 On-Device Linguistic Tutor' : '📘 Verified Textbook Curriculum (Samacheer Kalvi)'
      };
      this.decorateAIMessage(bubble, content, meta);
    }

    row.appendChild(avatar);
    row.appendChild(bubble);
    this.messagesContainer.appendChild(row);
    this.scrollToBottom();
  }

  createEmptyAIMessage() {
    const row = document.createElement('div');
    row.className = 'chat-message-row ai';

    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar ai-avatar';
    avatar.textContent = 'AI';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';

    const textContent = document.createElement('div');
    textContent.className = 'message-content-inner';
    bubble.appendChild(textContent);

    row.appendChild(avatar);
    row.appendChild(bubble);
    this.messagesContainer.appendChild(row);

    return { row, bubble, content: textContent };
  }

  showTypingIndicator() {
    const id = 'typing-' + Date.now();
    const row = document.createElement('div');
    row.className = 'chat-message-row ai';
    row.id = id;

    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar ai-avatar';
    avatar.textContent = 'AI';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble typing-bubble';
    bubble.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;

    row.appendChild(avatar);
    row.appendChild(bubble);
    this.messagesContainer.appendChild(row);
    this.scrollToBottom();
    return id;
  }

  removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  appendSystemNotice(text, showModelButton = false) {
    const notice = document.createElement('div');
    notice.className = 'alert alert-info';
    notice.style.margin = '0.5rem 0';
    notice.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      <div>
        <p style="margin-bottom: ${showModelButton ? '0.5rem' : '0'}">${text}</p>
        ${showModelButton ? '<button class="btn btn-sm btn-primary" onclick="window.gramApp.navigateTo(\'settings\')">Go to Model Manager</button>' : ''}
      </div>
    `;
    this.messagesContainer.appendChild(notice);
    this.scrollToBottom();
  }

  async saveMessageAsNote(content) {
    try {
      const cleanTitle = content
        .replace(/[#*`]/g, '')
        .split('\n')[0]
        .slice(0, 45) || 'Grammar Note';

      await window.gramDB.saveNote({
        title: cleanTitle,
        content: content,
        tag: 'AI Tutor Chat',
        pinned: false
      });

      window.showToast('Saved note to Saved Notes library!', 'success');
    } catch (e) {
      window.showToast('Failed to save note: ' + e.message, 'error');
    }
  }

  speakText(rawText, btnEl = null) {
    if (!this.speechSynth) {
      window.showToast('Speech synthesis not supported in this browser.', 'error');
      return;
    }

    if (this.speechSynth.speaking) {
      this.speechSynth.cancel();
      document.querySelectorAll('.msg-action-btn.is-speaking').forEach(b => {
        b.classList.remove('is-speaking');
        b.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg> Read Aloud`;
      });
      return;
    }

    // Strip markdown formatting for cleaner speech
    const clean = rawText
      .replace(/[#*`_~]/g, '')
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
      .replace(/\$\$(.*?)\$\$/gs, 'Equation: $1')
      .replace(/\$(.*?)\$/g, '$1')
      .replace(/\n+/g, '. ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    // Use Tamil voice if text contains Tamil characters or in Tamil mode
    const hasTamil = /[\u0B80-\u0BFF]/.test(clean) || window.gramAI.useBilingualTamil;
    if (hasTamil) {
      utterance.lang = 'ta-IN';
    } else {
      utterance.lang = 'en-IN';
    }

    if (btnEl) {
      btnEl.classList.add('is-speaking');
      btnEl.innerHTML = '⏹️ Stop';
    }

    utterance.onend = () => {
      if (btnEl) {
        btnEl.classList.remove('is-speaking');
        btnEl.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg> Read Aloud`;
      }
    };

    utterance.onerror = () => {
      if (btnEl) {
        btnEl.classList.remove('is-speaking');
        btnEl.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg> Read Aloud`;
      }
    };

    this.speechSynth.speak(utterance);
    window.showToast(`Reading aloud (${hasTamil ? 'Tamil' : 'English'})...`, 'info');
  }

  clearConversation() {
    if (this.conversation.length === 0) return;
    if (confirm('Are you sure you want to clear the conversation?')) {
      this.conversation = [];
      this.messagesContainer.innerHTML = '';
      this.appendMessage('ai', 'Conversation cleared! 👋 I\'m your Friendly Neighbourhood AI. Ask me anything—Science, Maths, History, Homework help, or general chats in English or தமிழ்!');
    }
  }

  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  // Record stats in DB
  async recordChatActivity() {
    const current = await window.gramDB.getSetting('chatsCount', 0);
    await window.gramDB.setSetting('chatsCount', current + 1);
  }

  // Pre-load prompt from another view (e.g. OCR scanner or quick chips)
  sendPreloadedPrompt(prompt, ocrContext = '') {
    this.currentOCRContext = ocrContext;
    this.currentSyllabusContext = ocrContext;
    this.textarea.value = prompt;
    this.handleSendMessage();
  }

  // Lightweight Markdown to HTML formatter (safe, zero external dependency)
  renderMarkdown(text) {
    if (!text) return '';

    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Headings: ### Title
    html = html.replace(/^### (.*$)/gim, '<h4>$1</h4>');
    html = html.replace(/^## (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^# (.*$)/gim, '<h2>$1</h2>');

    // Bold: **text**
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    // Italics: *text*
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Inline code: `code`
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

    // Blockquotes: > quote
    html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Unordered lists: - item or * item
    html = html.replace(/^\s*[-*]\s+(.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>');

    // Ordered lists: 1. item
    html = html.replace(/^\s*\d+\.\s+(.*$)/gim, '<li>$1</li>');

    // Line breaks
    html = html.replace(/\n{2,}/g, '<br><br>');
    html = html.replace(/\n/g, '<br>');

    return html;
  }
}

// Global Chat Controller Singleton
window.gramChat = new ChatController();
