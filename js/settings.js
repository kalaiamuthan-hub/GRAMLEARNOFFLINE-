/**
 * GramLearn AI - Settings & Model Manager Controller
 * Manages WebGPU hardware diagnostics, SmolLM2-360M model caching,
 * memory estimation, offline readiness checks, and student profile preferences.
 */

class SettingsController {
  constructor() {
    this.modelSelectEl = null;
    this.downloadBtn = null;
    this.unloadBtn = null;
    this.progressBarEl = null;
    this.progressFillEl = null;
    this.progressTextEl = null;
    this.hardwareReportEl = null;
    this.storageReportEl = null;
  }

  async init() {
    this.modelSelectEl = document.getElementById('settings-model-select');
    this.downloadBtn = document.getElementById('btn-download-model');
    this.unloadBtn = document.getElementById('btn-unload-model');
    this.progressBarEl = document.getElementById('model-progress-container');
    this.progressFillEl = document.getElementById('model-progress-fill');
    this.progressTextEl = document.getElementById('model-progress-text');
    this.hardwareReportEl = document.getElementById('hardware-report-box');
    this.storageReportEl = document.getElementById('storage-report-box');

    // Populate model dropdown with verified MLC-compatible SmolLM2 models
    if (this.modelSelectEl) {
      this.modelSelectEl.innerHTML = window.gramAI.models
        .map(
          (m) => `
        <option value="${m.id}" ${m.id === window.gramAI.selectedModelId ? 'selected' : ''}>
          ${m.name} (${m.downloadSize})
        </option>
      `
        )
        .join('');

      this.modelSelectEl.addEventListener('change', (e) => {
        window.gramAI.selectedModelId = e.target.value;
        this.updateModelSpecsDisplay();
        this.updateStatusView();
      });
    }

    if (this.downloadBtn) {
      this.downloadBtn.addEventListener('click', () => this.handleDownloadModel());
    }

    if (this.unloadBtn) {
      this.unloadBtn.addEventListener('click', () => this.handleUnloadModel());
    }

    // Subscribe to AI Engine events
    window.gramAI.subscribe((event, data) => {
      if (event === 'download_progress') {
        const pct = Math.round(data.percent !== undefined ? data.percent : (data.progress || 0) * 100);
        this.updateProgress(pct, data.text);
      } else if (event === 'status_change') {
        this.updateStatusView();
      }
    });

    // Student profile inputs
    const nameInput = document.getElementById('settings-student-name');
    if (nameInput) {
      const savedName = await window.gramDB.getSetting('studentName', 'Student');
      nameInput.value = savedName;
      nameInput.addEventListener('change', async (e) => {
        await window.gramDB.setSetting('studentName', e.target.value.trim() || 'Student');
        window.showToast('Student name updated!', 'success');
        if (window.gramApp) window.gramApp.refreshWelcome();
      });
    }

    // Run hardware & storage diagnostic checks
    await this.runHardwareDiagnostics();
    await this.updateStorageReport();
    this.updateModelSpecsDisplay();
    await this.updateStatusView();
  }

  updateModelSpecsDisplay() {
    const specsEl = document.getElementById('model-specs-card');
    if (!specsEl) return;

    const currentModel = window.gramAI.models.find((m) => m.id === window.gramAI.selectedModelId) || window.gramAI.models[0];

    specsEl.innerHTML = `
      <div style="background: var(--primary-50); border-radius: var(--radius-md); padding: 1rem; border: 1px solid var(--primary-200); margin-top: 0.75rem;">
        <div style="font-weight: 700; color: var(--primary-900); font-size: 0.95rem; margin-bottom: 0.25rem;">${currentModel.name}</div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${currentModel.desc}</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem; font-size: 0.8rem;">
          <div><strong style="color: var(--text-muted);">Download:</strong> ${currentModel.downloadSize}</div>
          <div><strong style="color: var(--text-muted);">VRAM Footprint:</strong> ${currentModel.vramRequired}</div>
          <div><strong style="color: var(--text-muted);">Min RAM:</strong> ${currentModel.recommendedRam}</div>
          <div><strong style="color: var(--text-muted);">Shader Requirement:</strong> ${currentModel.requiredFeature || 'None'}</div>
        </div>
      </div>
    `;
  }

  async runHardwareDiagnostics() {
    if (!this.hardwareReportEl) return;

    const check = await window.gramAI.checkHardwareSupport();
    const memory = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Estimated 4-6 GB';
    const cores = navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Cores` : '4 Cores';

    const shaderBadge = check.supported
      ? (check.gpu && check.gpu.hasShaderF16
          ? '<span style="color:var(--accent-emerald);">✅ shader-f16 supported (Ultra-Fast)</span>'
          : '<span style="color:var(--accent-amber);">⚠️ WebGPU standard mode</span>')
      : '<span style="color:var(--text-muted);">N/A</span>';

    this.hardwareReportEl.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div class="card" style="padding: 1rem; background: #ffffff;">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">WebGPU Runtime</div>
          <div style="font-size: 1.1rem; font-weight: 800; margin-top: 0.25rem; color: ${check.supported ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; display: flex; align-items: center; gap: 0.4rem;">
            ${check.supported ? '✅ Supported' : '❌ Unsupported'}
          </div>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">
            ${check.supported ? (check.gpu ? check.gpu.vendor : 'GPU Ready') : 'Requires WebGPU-enabled browser'}
          </p>
          <div style="font-size: 0.75rem; margin-top: 0.35rem;">${shaderBadge}</div>
        </div>

        <div class="card" style="padding: 1rem; background: #ffffff;">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Mobile RAM Target</div>
          <div style="font-size: 1.1rem; font-weight: 800; margin-top: 0.25rem; color: var(--primary-700); display: flex; align-items: center; gap: 0.4rem;">
            4 GB RAM
            <span class="badge badge-emerald" style="font-size: 0.7rem; padding: 0.15rem 0.45rem;">Optimized</span>
          </div>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">
            Mobile target: 4 GB RAM. Ultra-light ~376MB VRAM footprint. (Device: ${memory})
          </p>
        </div>

        <div class="card" style="padding: 1rem; background: #ffffff;">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">CPU Background Threads</div>
          <div style="font-size: 1.1rem; font-weight: 800; margin-top: 0.25rem; color: var(--primary-700);">
            ${cores}
          </div>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">
            Web Worker keeps UI thread at 60fps
          </p>
        </div>
      </div>
    `;
  }

  async updateStorageReport() {
    if (!this.storageReportEl) return;

    if (navigator.storage && navigator.storage.estimate) {
      try {
        const estimate = await navigator.storage.estimate();
        const usageMB = Math.round((estimate.usage || 0) / (1024 * 1024));
        const quotaMB = Math.round((estimate.quota || 0) / (1024 * 1024));
        const quotaGB = (quotaMB / 1024).toFixed(1);

        this.storageReportEl.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem; font-size: 0.88rem;">
            <span><strong>Local Cache & DB Storage:</strong> ${usageMB} MB used of ~${quotaGB} GB quota</span>
            <span style="font-weight: 700; color: var(--primary-600);">${Math.round((usageMB / quotaMB) * 100 || 1)}%</span>
          </div>
          <div class="progress-container">
            <div class="progress-fill" style="width: ${Math.min(100, Math.max(2, (usageMB / quotaMB) * 100))}%;"></div>
          </div>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.4rem;">
            Model weights, IndexedDB curriculum, and textbook OCR scans are stored locally in CacheStorage and IndexedDB.
          </p>
        `;
      } catch (e) {
        console.warn('Storage estimate failed:', e);
      }
    }
  }

  updateProgress(percent, text) {
    if (this.progressBarEl) this.progressBarEl.classList.remove('hidden');
    if (this.progressFillEl) this.progressFillEl.style.width = `${percent}%`;
    if (this.progressTextEl) {
      this.progressTextEl.innerHTML = `
        <span style="font-weight: 700;">${percent}%</span> — ${this.escapeHtml(text)}
      `;
    }
  }

  async updateStatusView() {
    const statusTextEl = document.getElementById('model-current-status-text');
    if (!statusTextEl) return;

    const s = window.gramAI.status;
    const isCached = await window.gramAI.checkCacheStatus();

    if (s === 'READY_NEURAL') {
      statusTextEl.innerHTML = `<span class="badge badge-purple">Active in RAM (Web Worker): ${window.gramAI.selectedModelId}</span>`;
      if (this.downloadBtn) this.downloadBtn.textContent = 'Reload Model';
      if (this.unloadBtn) this.unloadBtn.classList.remove('hidden');
      if (this.progressBarEl) this.progressBarEl.classList.add('hidden');
    } else if (s === 'DOWNLOADING') {
      statusTextEl.innerHTML = `<span class="badge badge-amber">Downloading / Compiling Shaders...</span>`;
      if (this.downloadBtn) this.downloadBtn.disabled = true;
      if (this.unloadBtn) this.unloadBtn.classList.add('hidden');
    } else if (s === 'ERROR') {
      statusTextEl.innerHTML = `<span class="badge badge-rose">Model Error (Offline Brain Active)</span>`;
      if (this.downloadBtn) this.downloadBtn.disabled = false;
    } else {
      // Honest offline status: Only claim offline readiness if verified in browser cache
      if (isCached) {
        statusTextEl.innerHTML = `<span class="badge badge-emerald">✈️ Model Cached Offline & Airplane-Mode Ready (${window.gramAI.selectedModelId})</span>`;
      } else {
        statusTextEl.innerHTML = `<span class="badge badge-amber">Model Not Cached (Requires One-Time Online Download ~230MB)</span>`;
      }

      if (this.downloadBtn) {
        this.downloadBtn.disabled = false;
        this.downloadBtn.textContent = isCached ? 'Load Model into RAM' : 'Download & Cache SmolLM2-360M';
      }
      if (this.unloadBtn) this.unloadBtn.classList.add('hidden');
    }
  }

  async handleDownloadModel() {
    // Low-memory concurrency guard: Do not load weights while OCR is running
    if (window.gramOCR && (window.gramOCR.isScanning || window.gramOCR.isProcessing)) {
      window.showToast('Please wait for textbook OCR scan to finish before downloading/initializing model', 'warning');
      return;
    }

    const isCached = await window.gramAI.checkCacheStatus();
    if (!navigator.onLine && !isCached) {
      window.showToast('You are currently offline. Initial SmolLM2 model download requires an active internet/Wi-Fi connection.', 'error');
      return;
    }

    try {
      this.downloadBtn.disabled = true;
      window.showToast('Starting SmolLM2-360M download & initialization...', 'info');
      await window.gramAI.initializeModel(window.gramAI.selectedModelId);
      window.showToast('SmolLM2-360M Model loaded successfully into Web Worker!', 'success');
      await this.updateStorageReport();
    } catch (err) {
      window.showToast(`Model initialization: ${err.message}`, 'error');
    } finally {
      this.downloadBtn.disabled = false;
      await this.updateStatusView();
    }
  }

  async handleUnloadModel() {
    await window.gramAI.unloadModel();
    window.showToast('Model unloaded. GPU/RAM memory freed.', 'info');
    await this.updateStatusView();
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

// Global Settings Controller Singleton
window.gramSettings = new SettingsController();
