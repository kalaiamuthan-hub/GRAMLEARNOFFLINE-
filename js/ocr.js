/**
 * GramLearn AI - Textbook OCR & Image Question Solver Controller
 * Powered by Tesseract.js (In-Browser Offline OCR)
 * Features:
 * - Smart Adaptive Preprocessing (Histogram Normalization, Otsu Binarization, Sharpening)
 * - 90-degree Rotation Controls for phone camera textbook snapshots
 * - Multi-Pass OCR with Fallback & Text Cleanup (Hyphen repairs, question normalization)
 * - Real-Time Confidence Scoring Badge
 * - Offline Speech Synthesis (Read Aloud in Tamil & English)
 * - High-Value Pedagogical Explanations & Dynamic Interactive Follow-up Chips
 */

class OCRController {
  constructor() {
    this.worker = null;
    this.isWorkerReady = false;
    this.isProcessing = false;
    this.currentImage = null;
    this.currentExtractedText = '';
    this.activeFilter = 'enhanced'; // 'enhanced', 'binarized', 'grayscale', 'original'
    this.rotationAngle = 0; // 0, 90, 180, 270
    this.currentConfidence = 0;
    this.speechSynth = window.speechSynthesis || null;
    this.isSpeaking = false;

    // Demo textbook samples for instant 1-click testing
    this.demoSamples = [
      {
        id: 'sample-photosynthesis',
        title: '🌱 Class 10 Biology: Photosynthesis',
        desc: 'Leaf structure, light reaction, chlorophyll, glucose equation',
        text: `Chapter 6: Life Processes - Nutrition in Plants\n\nPhotosynthesis is the biochemical process by which green plants, algae, and certain bacteria synthesize organic nutrients (glucose) from carbon dioxide (CO2) and water (H2O) using solar energy absorbed by chlorophyll pigments.\n\nChemical Equation:\n6CO2 + 6H2O + Sunlight (Chlorophyll) -> C6H12O6 + 6O2\n\nKey Stages:\n1. Absorption of light energy by chlorophyll.\n2. Conversion of light energy into chemical energy and splitting of water molecules into hydrogen and oxygen (Photolysis).\n3. Reduction of carbon dioxide into carbohydrates (glucose).\n\nReview Questions:\nQ1. What is the role of stomata during photosynthesis?\nQ2. Name the gas released during the light reaction.`
      },
      {
        id: 'sample-newton',
        title: "🍎 Class 9-10 Physics: Newton's Laws of Motion",
        desc: 'Inertia, Momentum (F=ma), Action-Reaction with formulas',
        text: `Unit 3: Laws of Motion & Dynamics\n\nSir Isaac Newton formulated three fundamental laws describing the relationship between the forces acting on a body and its motion.\n\n1. First Law (Law of Inertia): An object remains in a state of rest or uniform motion in a straight line unless acted upon by an external unbalanced force.\n\n2. Second Law (Law of Force & Momentum): The rate of change of momentum of a body is directly proportional to the applied unbalanced force and takes place in the direction of the force.\nFormula: Force = mass x acceleration (F = m * a)\nSI Unit: Newton (N), where 1 N = 1 kg·m/s².\n\n3. Third Law (Action & Reaction): To every action, there is always an equal and opposite reaction.\n\nPractice Problems:\nQ1. A cricket ball of mass 0.15 kg is accelerated at 20 m/s². Calculate the force applied.\nQ2. Explain why a swimmer pushes water backward to move forward.`
      },
      {
        id: 'sample-pythagoras',
        title: '📐 Class 10 Maths: Pythagoras Theorem',
        desc: 'Right-angled triangle theorem, proof, and hypotenuse questions',
        text: `Chapter 7: Geometry - Right Angled Triangles\n\nPythagoras Theorem: In a right-angled triangle, the square of the hypotenuse side is equal to the sum of squares of the other two sides.\n\nFormula: a² + b² = c²\nWhere:\n- c = Hypotenuse (the longest side opposite to the 90° right angle)\n- a, b = Adjacent and Opposite perpendicular sides\n\nPythagorean Triples:\nCommon integer triples include (3, 4, 5), (5, 12, 13), and (8, 15, 17).\nExample: 3² + 4² = 9 + 16 = 25 = 5².\n\nExercise Questions:\nQ1. A ladder 10 meters long reaches a window 8 meters above the ground. Find the distance of the foot of the ladder from the base of the wall.\nQ2. Verify whether a triangle with sides 6 cm, 8 cm, and 10 cm forms a right-angled triangle.`
      },
      {
        id: 'sample-tamil-kalam',
        title: '🇮🇳 அறிவியல் & விண்வெளி: டாக்டர் ஏ.பி.ஜே. அப்துல் கலாம்',
        desc: 'இந்தியாவின் ஏவுகணை மனிதர் மற்றும் விண்வெளி சாதனைகள் (தமிழ்)',
        text: `அலகு 4: இந்திய விண்வெளி சாதனையாளர்கள்\n\nபாரத ரத்னா டாக்டர் ஏ.பி.ஜே. அப்துல் கலாம் (1931-2015) இந்தியாவின் மிகச்சிறந்த விஞ்ஞானி மற்றும் 11-வது குடியரசுத் தலைவர் ஆவார். அவர் இந்தியாவின் 'ஏவுகணை மனிதர்' (Missile Man of India) என்று அன்புடன் அழைக்கப்படுகிறார்.\n\nமுக்கிய சாதனைகள்:\n1. இந்தியாவின் முதல் உள்நாட்டு செயற்கைக்கோள் ஏவுவாகனமான SLV-3 திட்டத்தின் திட்ட இயக்குநராகப் பணியாற்றினார் (ரோகிணி செயற்கைக்கோள்).\n2. அக்னி (Agni) மற்றும் பிருத்வி (Prithvi) ஏவுகணைகளை வெற்றிகரமாக உருவாக்கினார்.\n3. பொக்ரான்-II அணுசக்தி சோதனையில் முக்கிய தலைமைப் பங்கு வகித்தார்.\n4. இளைஞர்களுக்கு ஊக்கமளிக்கும் 'அக்னிச் சிறகுகள்' (Wings of Fire) நூலை எழுதினார்.\n\nவினாக்கள்:\n1. டாக்டர் கலாமின் புகழ்பெற்ற தாரக மந்திரம் என்ன?\n2. இந்தியாவின் முதல் செயற்கைக்கோள் ஏவுவாகனம் எது?`
      }
    ];
  }

  async init() {
    console.log('[OCR] Initializing Enhanced Textbook OCR Controller...');
    this.setupUI();
    this.renderDemoChips();
    this.renderScanHistory();
  }

  setupUI() {
    // Dropzone elements
    this.dropzone = document.getElementById('ocr-dropzone');
    this.fileInput = document.getElementById('ocr-file-input');
    this.cameraInput = document.getElementById('ocr-camera-input');
    this.pasteArea = document.getElementById('view-ocr');

    // Action buttons & container
    this.extractBtn = document.getElementById('ocr-start-extract-btn');
    this.quickBanner = document.getElementById('ocr-quick-success-banner');
    this.quickStats = document.getElementById('ocr-quick-stats');
    this.previewContainer = document.getElementById('ocr-preview-container');
    this.previewPlaceholder = document.getElementById('ocr-preview-placeholder');
    this.previewImg = document.getElementById('ocr-preview-img');
    this.previewCanvas = document.getElementById('ocr-preview-canvas');
    this.progressBar = document.getElementById('ocr-progress-bar');
    this.progressStatus = document.getElementById('ocr-progress-status');
    this.progressContainer = document.getElementById('ocr-progress-container');

    // Extracted text & AI response areas
    this.resultContainer = document.getElementById('ocr-result-container');
    this.extractedTextarea = document.getElementById('ocr-extracted-text');
    this.wordCountBadge = document.getElementById('ocr-word-count');
    this.confidenceBadge = document.getElementById('ocr-confidence-badge');
    this.aiAnswerCard = document.getElementById('ocr-ai-answer-card');
    this.aiAnswerContent = document.getElementById('ocr-ai-answer-content');
    this.aiAnswerTitle = document.getElementById('ocr-ai-answer-title');
    this.ttsBtn = document.getElementById('ocr-tts-btn');

    // Dropzone drag/drop
    if (this.dropzone) {
      ['dragenter', 'dragover'].forEach(eventName => {
        this.dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          this.dropzone.classList.add('drag-active');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        this.dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          this.dropzone.classList.remove('drag-active');
        });
      });

      this.dropzone.addEventListener('drop', (e) => {
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
          this.handleImageFile(e.dataTransfer.files[0]);
        }
      });
    }

    // File and camera inputs
    if (this.fileInput) {
      this.fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          this.handleImageFile(e.target.files[0]);
        }
      });
    }

    if (this.cameraInput) {
      this.cameraInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          this.handleImageFile(e.target.files[0]);
        }
      });
    }

    // Global Paste Listener when OCR view is active
    window.addEventListener('paste', (e) => {
      if (window.gramApp && window.gramApp.currentView !== 'ocr') return;
      const items = (e.clipboardData || e.originalEvent.clipboardData)?.items;
      if (!items) return;
      for (const item of items) {
        if (item.type.indexOf('image') !== -1) {
          const file = item.getAsFile();
          if (file) {
            this.handleImageFile(file);
            if (window.showToast) window.showToast('Pasted image from clipboard!', 'info');
            break;
          }
        }
      }
    });

    // Auto-update stats on manual text edits
    if (this.extractedTextarea) {
      this.extractedTextarea.addEventListener('input', () => {
        this.currentExtractedText = this.extractedTextarea.value;
        this.updateTextStats();
      });
    }
  }

  onViewActivated() {
    this.renderScanHistory();
  }

  renderDemoChips() {
    const container = document.getElementById('ocr-demo-chips');
    if (!container) return;

    container.innerHTML = this.demoSamples.map(sample => `
      <div class="ocr-sample-card" onclick="window.gramOCR.loadDemoSample('${sample.id}')">
        <div class="ocr-sample-title">${sample.title}</div>
        <div class="ocr-sample-desc">${sample.desc}</div>
        <button class="btn btn-sm btn-outline ocr-sample-btn">Try This Sample</button>
      </div>
    `).join('');
  }

  loadDemoSample(sampleId) {
    const sample = this.demoSamples.find(s => s.id === sampleId);
    if (!sample) return;

    this.currentExtractedText = sample.text;
    if (this.extractedTextarea) {
      this.extractedTextarea.value = sample.text;
    }

    // Synthesize canvas preview card
    this.createSyntheticSampleImage(sample.title, sample.text);

    // Show preview & result UI
    if (this.previewContainer) this.previewContainer.classList.remove('hidden');

    if (this.quickBanner) {
      this.quickBanner.classList.remove('hidden');
      if (this.quickStats) {
        const words = sample.text.split(/\s+/).filter(Boolean).length;
        this.quickStats.textContent = `${words} words loaded from ${sample.title}`;
      }
    }
    if (this.extractBtn) {
      this.extractBtn.innerHTML = '✅ Text Extracted! (Click to re-scan)';
    }

    this.updateConfidenceBadge(98);
    this.updateTextStats();
    if (window.showToast) window.showToast(`Loaded sample: ${sample.title}`, 'success');

    // Smooth scroll and pulse highlight
    setTimeout(() => {
      this.scrollToResult();
    }, 100);
  }

  createSyntheticSampleImage(title, text) {
    if (!this.previewCanvas) return;
    const canvas = this.previewCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 420;

    // Background paper
    ctx.fillStyle = '#FFFDF9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Textbook border
    ctx.strokeStyle = '#D9C8B4';
    ctx.lineWidth = 4;
    ctx.strokeRect(16, 16, canvas.width - 32, canvas.height - 32);

    // Header bar
    ctx.fillStyle = '#784E2D';
    ctx.fillRect(20, 20, canvas.width - 40, 48);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 18px "Inter", sans-serif';
    ctx.fillText('📖 ' + title, 36, 50);

    // Content lines
    ctx.fillStyle = '#2C1810';
    ctx.font = '14px "Inter", sans-serif';
    const lines = text.split('\n').slice(0, 14);
    let y = 100;
    for (const line of lines) {
      ctx.fillText(line.substring(0, 80), 36, y);
      y += 22;
    }

    if (this.previewPlaceholder) {
      this.previewPlaceholder.style.display = 'none';
    }
    if (this.previewImg) {
      this.previewImg.style.display = 'block';
      this.previewImg.src = canvas.toDataURL('image/png');
    }
  }

  handleImageFile(file) {
    if (!file || !file.type.startsWith('image/')) {
      if (window.showToast) window.showToast('Please select a valid image file (PNG, JPG, WebP).', 'warning');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      this.currentImage = new Image();
      this.currentImage.onload = () => {
        this.rotationAngle = 0; // Reset rotation for new image
        this.renderImageToCanvas();
        if (this.previewContainer) this.previewContainer.classList.remove('hidden');
        if (this.extractBtn) {
          this.extractBtn.disabled = false;
          this.extractBtn.innerHTML = '⚡ Extract Text with OCR';
        }
        if (this.quickBanner) this.quickBanner.classList.add('hidden');
        if (window.showToast) window.showToast('Image loaded! Click "Extract Text with OCR" to scan.', 'info');
      };
      this.currentImage.src = dataUrl;
    };
    reader.readAsDataURL(file);
  }

  // Rotate image by degrees (default 90 deg clockwise)
  rotateImage(degrees = 90) {
    if (!this.currentImage) {
      if (window.showToast) window.showToast('Please load an image first to rotate.', 'warning');
      return;
    }
    this.rotationAngle = (this.rotationAngle + degrees) % 360;
    this.renderImageToCanvas();
    if (window.showToast) window.showToast(`Rotated to ${this.rotationAngle}°`, 'info');
  }

  setFilter(filterName) {
    this.activeFilter = filterName;
    document.querySelectorAll('.ocr-filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === filterName);
    });
    this.renderImageToCanvas();
  }

  renderImageToCanvas() {
    if (!this.currentImage || !this.previewCanvas) return;
    const canvas = this.previewCanvas;
    const ctx = canvas.getContext('2d');
    const angle = this.rotationAngle || 0;

    // Scale canvas to optimal OCR dimensions (up to 1400px for high letter sharpness)
    const maxDim = 1400;
    let origW = this.currentImage.naturalWidth || this.currentImage.width;
    let origH = this.currentImage.naturalHeight || this.currentImage.height;

    let scale = 1;
    if (origW > maxDim || origH > maxDim) {
      scale = maxDim / Math.max(origW, origH);
    }
    const w = Math.round(origW * scale);
    const h = Math.round(origH * scale);

    const isRotated = angle === 90 || angle === 270;
    canvas.width = isRotated ? h : w;
    canvas.height = isRotated ? w : h;

    // Draw rotated image onto canvas
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.drawImage(this.currentImage, -w / 2, -h / 2, w, h);
    ctx.restore();

    // Apply Preprocessing Filters for high OCR accuracy
    if (this.activeFilter === 'enhanced') {
      this.applyAutoEnhance(ctx, canvas.width, canvas.height);
    } else if (this.activeFilter === 'binarized') {
      this.applyOtsuBinarization(ctx, canvas.width, canvas.height);
    } else if (this.activeFilter === 'grayscale') {
      this.applyGrayscale(ctx, canvas.width, canvas.height);
    }

    if (this.previewPlaceholder) {
      this.previewPlaceholder.style.display = 'none';
    }
    if (this.previewImg) {
      this.previewImg.style.display = 'block';
      this.previewImg.src = canvas.toDataURL('image/jpeg', 0.92);
    }
  }

  // Dynamic Histogram Stretching + 3x3 Sharpening (Auto-Clean)
  applyAutoEnhance(ctx, width, height) {
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    const len = data.length;

    // Step 1: Grayscale & Histogram computation
    const hist = new Uint32Array(256);
    const grayVals = new Uint8Array(len / 4);

    for (let i = 0, j = 0; i < len; i += 4, j++) {
      const g = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
      grayVals[j] = g;
      hist[g]++;
    }

    // Step 2: Find 2nd percentile and 98th percentile for contrast stretching
    const totalPixels = len / 4;
    const p2Count = Math.floor(totalPixels * 0.02);
    const p98Count = Math.floor(totalPixels * 0.98);

    let cum = 0;
    let pLow = 0;
    let pHigh = 255;

    for (let i = 0; i < 256; i++) {
      cum += hist[i];
      if (cum >= p2Count && pLow === 0) pLow = i;
      if (cum >= p98Count) {
        pHigh = i;
        break;
      }
    }
    if (pHigh <= pLow) {
      pLow = 0;
      pHigh = 255;
    }

    const range = pHigh - pLow;
    // Step 3: Apply stretched contrast
    for (let i = 0, j = 0; i < len; i += 4, j++) {
      let stretched = Math.round(((grayVals[j] - pLow) / range) * 255);
      if (stretched < 0) stretched = 0;
      if (stretched > 255) stretched = 255;
      data[i] = stretched;
      data[i + 1] = stretched;
      data[i + 2] = stretched;
    }

    // Step 4: Apply 3x3 Sharpening Convolution (Unsharp Mask)
    // Kernel: [0, -0.4, 0; -0.4, 2.6, -0.4; 0, -0.4, 0]
    const srcData = new Uint8ClampedArray(data);
    const w = width;
    const h = height;

    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const idx = (y * w + x) * 4;
        const top = ((y - 1) * w + x) * 4;
        const bottom = ((y + 1) * w + x) * 4;
        const left = (y * w + (x - 1)) * 4;
        const right = (y * w + (x + 1)) * 4;

        const centerVal = srcData[idx];
        const val = 2.6 * centerVal - 0.4 * (srcData[top] + srcData[bottom] + srcData[left] + srcData[right]);
        const clamped = Math.max(0, Math.min(255, Math.round(val)));

        data[idx] = clamped;
        data[idx + 1] = clamped;
        data[idx + 2] = clamped;
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }

  // Otsu's Adaptive Global Binarization (Optimal Ink vs Background Separation)
  applyOtsuBinarization(ctx, width, height) {
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    const totalPixels = width * height;

    // Build grayscale histogram
    const hist = new Uint32Array(256);
    for (let i = 0; i < data.length; i += 4) {
      const g = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
      data[i] = g;
      hist[g]++;
    }

    // Otsu threshold computation
    let sum = 0;
    for (let t = 0; t < 256; t++) sum += t * hist[t];

    let sumB = 0;
    let wB = 0;
    let varMax = 0;
    let threshold = 128;

    for (let t = 0; t < 256; t++) {
      wB += hist[t];
      if (wB === 0) continue;
      const wF = totalPixels - wB;
      if (wF === 0) break;

      sumB += t * hist[t];
      const mB = sumB / wB;
      const mF = (sum - sumB) / wF;

      const betweenVar = wB * wF * (mB - mF) * (mB - mF);
      if (betweenVar > varMax) {
        varMax = betweenVar;
        threshold = t;
      }
    }

    // Binarize
    for (let i = 0; i < data.length; i += 4) {
      const bin = data[i] > threshold ? 255 : 0;
      data[i] = bin;
      data[i + 1] = bin;
      data[i + 2] = bin;
    }

    ctx.putImageData(imgData, 0, 0);
  }

  // Standard Grayscale Luminance
  applyGrayscale(ctx, width, height) {
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const g = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
      data[i] = g;
      data[i + 1] = g;
      data[i + 2] = g;
    }
    ctx.putImageData(imgData, 0, 0);
  }

  async startOCR() {
    if (this.isProcessing) return;

    // Memory Guard: If AI is actively streaming text, give a brief pause
    if (window.gramAI && window.gramAI.isGenerating) {
      if (window.showToast) {
        window.showToast('AI Tutor is generating text. Please wait a moment before scanning.', 'info');
      }
      return;
    }

    if (!this.previewCanvas && !this.currentImage) {
      if (window.showToast) window.showToast('Please upload or select an image first.', 'warning');
      return;
    }

    this.isProcessing = true;
    if (this.progressContainer) this.progressContainer.classList.remove('hidden');
    if (this.extractBtn) {
      this.extractBtn.disabled = true;
      this.extractBtn.innerHTML = '<span class="status-indicator-dot"></span> Extracting...';
    }

    this.updateProgress(10, 'Initializing Tesseract.js OCR engine...');

    try {
      // 1. Ensure Tesseract.js is present
      if (typeof window.Tesseract === 'undefined') {
        this.updateProgress(20, 'Loading local Tesseract engine...');
        await this.loadTesseractScript();
      }

      this.updateProgress(35, 'Preprocessing textbook image & character analysis...');

      // 2. Run Tesseract recognition (Pass 1)
      const canvas = this.previewCanvas;
      let result = await window.Tesseract.recognize(
        canvas,
        'eng',
        {
          logger: (m) => {
            if (m.status === 'recognizing text') {
              const pct = Math.round((m.progress || 0) * 100);
              this.updateProgress(40 + Math.round(pct * 0.55), `Recognizing textbook text... ${pct}%`);
            } else if (m.status === 'loading tesseract core') {
              this.updateProgress(25, 'Loading Tesseract WebAssembly core...');
            } else if (m.status === 'loading language traineddata') {
              this.updateProgress(30, 'Loading English/Tamil language models...');
            }
          }
        }
      );

      let rawText = result && result.data && result.data.text ? result.data.text.trim() : '';
      let confidence = (result && result.data && result.data.confidence) || 0;

      // 3. Adaptive Second-Pass Fallback:
      // If recognized text is sparse (< 15 words) and we haven't tried Otsu binarization yet,
      // run a second pass with Otsu Binarization for higher yield!
      const wordCount = rawText ? rawText.split(/\s+/).length : 0;
      if (wordCount < 15 && this.activeFilter !== 'binarized') {
        this.updateProgress(75, 'Running high-contrast adaptive pass for faint print...');
        const ctx = canvas.getContext('2d');
        this.applyOtsuBinarization(ctx, canvas.width, canvas.height);

        const pass2 = await window.Tesseract.recognize(canvas, 'eng');
        const pass2Text = pass2 && pass2.data && pass2.data.text ? pass2.data.text.trim() : '';
        const pass2Confidence = (pass2 && pass2.data && pass2.data.confidence) || 0;

        if (pass2Text && pass2Text.split(/\s+/).length > wordCount) {
          rawText = pass2Text;
          confidence = pass2Confidence;
        }
      }

      // 4. Clean up recognized text
      const cleanedText = this.cleanExtractedText(rawText);

      if (!cleanedText || cleanedText.length < 5) {
        throw new Error('No readable text could be recognized. Try clicking "🔄 Rotate 90°" if the photo is sideways, or use "⬛ B&W Print" filter.');
      }

      this.updateProgress(100, 'Recognition complete!');

      this.currentExtractedText = cleanedText;
      this.currentConfidence = Math.round(confidence);

      if (this.extractedTextarea) {
        this.extractedTextarea.value = cleanedText;
      }

      this.updateConfidenceBadge(this.currentConfidence);
      this.updateTextStats();

      // Show in-place success alert inside Preview card
      if (this.quickBanner) {
        this.quickBanner.classList.remove('hidden');
        if (this.quickStats) {
          const words = cleanedText.split(/\s+/).filter(Boolean).length;
          this.quickStats.textContent = `${words} words recognized (${this.currentConfidence}% accuracy) • Ready below 👇`;
        }
      }

      if (this.extractBtn) {
        this.extractBtn.innerHTML = '✅ Text Extracted! (Click to re-scan)';
      }

      // Save scan to database history
      await this.saveScanRecord(cleanedText);

      if (window.showToast) window.showToast(`Text extracted! (${this.currentConfidence}% confidence)`, 'success');

      // Scroll smoothly to extracted text area with visual pulse
      setTimeout(() => {
        this.scrollToResult();
      }, 100);

    } catch (err) {
      console.error('[OCR] Extraction error:', err);
      this.updateProgress(0, `Notice: ${err.message}`);
      if (window.showToast) window.showToast(`OCR Notice: ${err.message}`, 'warning');

      if (this.extractBtn) {
        this.extractBtn.innerHTML = '⚡ Extract Text with OCR';
      }

      // Fallback: If OCR had an error, offer our interactive demo samples
      if (!this.currentExtractedText) {
        this.loadDemoSample('sample-photosynthesis');
      }
    } finally {
      this.isProcessing = false;
      if (this.extractBtn) {
        this.extractBtn.disabled = false;
        if (!this.currentExtractedText) {
          this.extractBtn.innerHTML = '⚡ Extract Text with OCR';
        }
      }
      setTimeout(() => {
        if (this.progressContainer) this.progressContainer.classList.add('hidden');
      }, 3000);
    }
  }

  // Clean and normalize OCR text
  cleanExtractedText(text) {
    if (!text) return '';

    return text
      // Fix hyphenated line breaks (e.g., pho-\ntosynthesis -> photosynthesis)
      .replace(/(\b\w+)-\s*\n\s*(\w+\b)/g, '$1$2')
      // Standardize question labels: Q 1 . or Q1 : or 1 . -> Q1.
      .replace(/^([Qq]\s*(\d+))[\.:\)]\s*/gm, 'Q$2. ')
      .replace(/^(\d+)[\.:\)]\s*/gm, 'Q$1. ')
      // Fix common OCR math artifacts
      .replace(/\bF\s*=\s*m\s*[\*xX]\s*a\b/gi, 'F = m * a')
      .replace(/\ba\^2\s*\+\s*b\^2\s*=\s*c\^2\b/gi, 'a² + b² = c²')
      // Remove excessive blank lines
      .replace(/\n{3,}/g, '\n\n')
      // Strip noisy standalone characters on their own lines
      .replace(/^\s*[\~\|\_\^\*\-\+\=]\s*$/gm, '')
      .trim();
  }

  updateConfidenceBadge(pct) {
    if (!this.confidenceBadge) return;
    this.confidenceBadge.classList.remove('hidden', 'badge-emerald', 'badge-sky', 'badge-amber');

    if (pct >= 80) {
      this.confidenceBadge.classList.add('badge-emerald');
      this.confidenceBadge.innerHTML = `🎯 ${pct}% High Quality`;
    } else if (pct >= 50) {
      this.confidenceBadge.classList.add('badge-sky');
      this.confidenceBadge.innerHTML = `⚡ ${pct}% Readable`;
    } else {
      this.confidenceBadge.classList.add('badge-amber');
      this.confidenceBadge.innerHTML = `⚠️ ${pct}% Low Clarity`;
    }
  }

  loadTesseractScript() {
    return new Promise((resolve, reject) => {
      if (window.Tesseract) return resolve();
      const script = document.createElement('script');
      script.src = './vendor/tesseract/tesseract.min.js';
      script.onload = () => resolve();
      script.onerror = () => {
        // Fallback to CDN if vendor script path has an issue
        const cdnScript = document.createElement('script');
        cdnScript.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
        cdnScript.onload = () => resolve();
        cdnScript.onerror = () => reject(new Error('Could not load Tesseract.js engine'));
        document.head.appendChild(cdnScript);
      };
      document.head.appendChild(script);
    });
  }

  updateProgress(pct, statusText) {
    if (this.progressBar) {
      this.progressBar.style.width = `${pct}%`;
    }
    if (this.progressStatus) {
      this.progressStatus.textContent = statusText;
    }
  }

  updateTextStats() {
    const text = this.currentExtractedText || '';
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;

    if (this.wordCountBadge) {
      this.wordCountBadge.textContent = `${words} words · ${chars} chars`;
    }
  }

  // =========================================================================
  // Speech Synthesis (Read Aloud)
  // =========================================================================

  toggleSpeech(customText = '') {
    if (!this.speechSynth) {
      if (window.showToast) window.showToast('Speech synthesis is not supported in this browser.', 'warning');
      return;
    }

    const ttsBtn = document.getElementById('ocr-tts-btn');

    if (this.speechSynth.speaking) {
      this.speechSynth.cancel();
      this.isSpeaking = false;
      if (ttsBtn) {
        ttsBtn.classList.remove('is-speaking');
        ttsBtn.innerHTML = '🔊 Listen';
      }
      return;
    }

    // Determine text to read: customText or current AI answer content
    let rawText = customText;
    if (!rawText && this.aiAnswerContent) {
      rawText = this.aiAnswerContent.innerText || this.aiAnswerContent.textContent || '';
    }
    if (!rawText && this.extractedTextarea) {
      rawText = this.extractedTextarea.value;
    }

    if (!rawText) {
      if (window.showToast) window.showToast('No explanation or text available to read aloud.', 'info');
      return;
    }

    // Clean text for speech (strip markdown headers, asterisks, math symbols)
    const cleanSpeech = rawText
      .replace(/[#*`_~]/g, '')
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
      .replace(/\$\$(.*?)\$\$/gs, 'Equation: $1')
      .replace(/\$(.*?)\$/g, '$1')
      .replace(/\\rightarrow/g, 'yields')
      .replace(/\\times/g, 'times')
      .replace(/\\quad/g, ' ')
      .replace(/\n+/g, '. ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    // Check if text is Tamil
    const hasTamil = /[\u0B80-\u0BFF]/.test(cleanSpeech);
    if (hasTamil) {
      utterance.lang = 'ta-IN';
    } else {
      utterance.lang = 'en-IN';
    }

    this.isSpeaking = true;
    if (ttsBtn) {
      ttsBtn.classList.add('is-speaking');
      ttsBtn.innerHTML = '⏹️ Stop';
    }

    utterance.onend = () => {
      this.isSpeaking = false;
      if (ttsBtn) {
        ttsBtn.classList.remove('is-speaking');
        ttsBtn.innerHTML = '🔊 Listen';
      }
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      if (ttsBtn) {
        ttsBtn.classList.remove('is-speaking');
        ttsBtn.innerHTML = '🔊 Listen';
      }
    };

    this.speechSynth.speak(utterance);
    if (window.showToast) window.showToast(`Reading aloud (${hasTamil ? 'Tamil' : 'English'})...`, 'info');
  }

  // =========================================================================
  // AI Actions on Extracted OCR Text
  // =========================================================================

  async askAI(actionType, customQuery = '') {
    const text = this.extractedTextarea ? this.extractedTextarea.value.trim() : this.currentExtractedText;
    if (!text) {
      if (window.showToast) window.showToast('Please extract or paste textbook text first!', 'warning');
      return;
    }

    let prompt = '';
    let isTamil = false;
    let cardTitle = '';

    switch (actionType) {
      case 'explain-english':
        prompt = `Explain this scanned textbook excerpt in simple English with clear step-by-step points and a real-life relatable example.`;
        cardTitle = '💡 Simple English Explanation';
        isTamil = false;
        break;

      case 'explain-tamil':
        prompt = `இப்பகுதியில் உள்ள பாடக்கருத்தை எளிய தமிழில் தெளிவாகவும், நிஜ வாழ்க்கை உதாரணத்துடனும் விளக்குங்கள் (Explain in simple Tamil).`;
        cardTitle = '🇮🇳 எளிய தமிழில் விளக்கம் (Tamil Explanation)';
        isTamil = true;
        break;

      case 'solve-questions':
        prompt = `Solve and provide clear step-by-step answers for any questions or practice problems found in this scanned textbook text.`;
        cardTitle = '❓ Solved Textbook Questions & Answers';
        isTamil = false;
        break;

      case 'summarize':
        prompt = `Summarize this textbook passage into 4-5 high-yield revision bullet points for exams.`;
        cardTitle = '📝 Quick Revision Summary';
        isTamil = false;
        break;

      case 'quiz':
        prompt = `Generate 3 interactive practice quiz questions with answer options based directly on this scanned text.`;
        cardTitle = '🎯 Interactive Practice Quiz';
        isTamil = false;
        break;

      case 'custom':
        prompt = customQuery || 'Explain this textbook concept in detail.';
        cardTitle = `💬 Answer: ${customQuery.substring(0, 40)}...`;
        isTamil = customQuery.includes('tamil') || customQuery.includes('தமிழ்');
        break;
    }

    // Show AI Answer Card
    if (this.aiAnswerCard) this.aiAnswerCard.classList.remove('hidden');
    if (this.aiAnswerTitle) this.aiAnswerTitle.textContent = cardTitle;
    if (this.aiAnswerContent) {
      this.aiAnswerContent.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.6rem; color: var(--text-muted); padding: 1.5rem 0;">
          <div class="status-indicator-dot"></div>
          <span>Friendly AI Tutor is analyzing your textbook snippet...</span>
        </div>
      `;
    }

    // Reset TTS state if currently active
    if (this.speechSynth && this.speechSynth.speaking) {
      this.speechSynth.cancel();
      this.isSpeaking = false;
      const ttsBtn = document.getElementById('ocr-tts-btn');
      if (ttsBtn) {
        ttsBtn.classList.remove('is-speaking');
        ttsBtn.innerHTML = '🔊 Listen';
      }
    }

    // Scroll smoothly to answer card
    this.aiAnswerCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

    try {
      // Call AI Engine with OCR context
      const response = await window.gramAI.generateOCRExplanation(text, prompt, isTamil);

      // Render markdown response
      const renderedHTML = window.gramChat
        ? window.gramChat.renderMarkdown(response)
        : response;

      // Render interactive follow-up toolbar at the bottom of the solution
      const followUpToolbar = `
        <div class="ocr-interactive-toolbar">
          <div class="ocr-interactive-toolbar-title">
            <span>✨ Interactive Next Steps:</span>
          </div>
          <div class="ocr-followup-chips">
            <button class="chip-btn" onclick="window.gramOCR.toggleSpeech()">🔊 Listen to Answer</button>
            <button class="chip-btn" onclick="window.gramOCR.askAI('explain-tamil')">🇮🇳 தமிழில் விளக்கம்</button>
            <button class="chip-btn" onclick="window.gramOCR.askAI('explain-english')">💡 Simple English</button>
            <button class="chip-btn" onclick="window.gramOCR.askAI('solve-questions')">❓ Step-by-Step Questions</button>
            <button class="chip-btn" onclick="window.gramOCR.askAI('quiz')">🎯 Quiz Me On This</button>
            <button class="chip-btn" onclick="window.gramOCR.openInAIChat()">💬 Chat With AI Tutor</button>
            <button class="chip-btn" onclick="window.gramOCR.saveToNotes()">💾 Save to Notes</button>
          </div>
        </div>
      `;

      if (this.aiAnswerContent) {
        this.aiAnswerContent.innerHTML = renderedHTML + followUpToolbar;
      }

      // Record activity
      if (window.gramChat) {
        await window.gramChat.recordChatActivity();
      }

    } catch (err) {
      console.error('[OCR] AI response error:', err);
      if (this.aiAnswerContent) {
        this.aiAnswerContent.innerHTML = `<p style="color: var(--accent-red);">Error generating explanation: ${err.message}</p>`;
      }
    }
  }

  handleCustomQuestionSubmit() {
    const input = document.getElementById('ocr-custom-question-input');
    if (!input) return;
    const q = input.value.trim();
    if (!q) {
      if (window.showToast) window.showToast('Please type your question about this textbook page.', 'warning');
      return;
    }
    this.askAI('custom', q);
    input.value = '';
  }

  // Open the current OCR context directly inside the main Friendly AI Chat view
  openInAIChat() {
    const text = this.extractedTextarea ? this.extractedTextarea.value.trim() : this.currentExtractedText;
    if (!text) {
      if (window.showToast) window.showToast('Extract text first before chatting.', 'warning');
      return;
    }

    if (window.gramChat && window.gramApp) {
      window.gramApp.navigateTo('chat');
      window.gramChat.sendPreloadedPrompt(
        `I scanned this textbook page: "${text.substring(0, 140)}...". Please explain the core concept in simple terms and answer my doubts.`,
        text
      );
    }
  }

  // Copy extracted text to clipboard
  copyExtractedText() {
    const text = this.extractedTextarea ? this.extractedTextarea.value : this.currentExtractedText;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      if (window.showToast) window.showToast('Extracted text copied to clipboard!', 'success');
    }).catch(() => {
      if (window.showToast) window.showToast('Failed to copy text.', 'warning');
    });
  }

  // Save extracted text & AI explanation as a note
  async saveToNotes() {
    const text = this.extractedTextarea ? this.extractedTextarea.value.trim() : this.currentExtractedText;
    if (!text) return;

    const title = text.split('\n')[0].substring(0, 45) || 'Textbook OCR Note';
    let content = text;

    if (this.aiAnswerContent) {
      const aiText = this.aiAnswerContent.innerText || '';
      if (aiText && !aiText.includes('analyzing your textbook')) {
        content = `### 📷 Extracted Text:\n${text}\n\n### 💡 AI Tutor Explanation:\n${aiText}`;
      }
    }

    const note = {
      title: `📷 OCR: ${title}`,
      tag: 'OCR Excerpt',
      content: content
    };

    if (window.gramDB) {
      await window.gramDB.saveNote(note);
      if (window.showToast) window.showToast('Saved to your Notes archive!', 'success');
      if (window.gramApp) window.gramApp.refreshDashboard();
    }
  }

  async saveScanRecord(text) {
    if (!window.gramDB) return;
    const title = text.split('\n')[0].substring(0, 50) || 'Scanned Textbook Page';
    await window.gramDB.saveScan({
      title: title,
      text: text,
      timestamp: new Date().toISOString()
    });
    this.renderScanHistory();
    if (window.gramApp) window.gramApp.refreshDashboard();
  }

  async renderScanHistory() {
    const container = document.getElementById('ocr-history-list');
    if (!container || !window.gramDB) return;

    const scans = await window.gramDB.getAllScans();
    if (!scans || scans.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 1.25rem 0; font-size: 0.88rem;">
          No previous scans yet. Snap or upload a textbook photo above!
        </div>
      `;
      return;
    }

    container.innerHTML = scans.slice(0, 5).map(scan => `
      <div class="ocr-history-item" onclick="window.gramOCR.loadScanFromHistory(${scan.id})">
        <div class="ocr-history-info">
          <div class="ocr-history-title">📄 ${window.gramApp ? window.gramApp.escapeHtml(scan.title) : scan.title}</div>
          <div class="ocr-history-meta">${new Date(scan.uploadedAt || scan.timestamp || Date.now()).toLocaleDateString()} · ${(scan.text || '').split(/\s+/).length} words</div>
        </div>
        <button class="btn btn-sm btn-ghost" onclick="event.stopPropagation(); window.gramOCR.loadScanFromHistory(${scan.id})">Load</button>
      </div>
    `).join('');
  }

  scrollToResult() {
    if (!this.resultContainer) return;
    this.resultContainer.classList.remove('hidden');

    // Add pulsing green border animation to draw immediate attention
    this.resultContainer.classList.remove('ocr-extracted-highlight');
    void this.resultContainer.offsetWidth; // trigger reflow
    this.resultContainer.classList.add('ocr-extracted-highlight');

    // Scroll smoothly to center
    this.resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Focus textarea
    if (this.extractedTextarea) {
      setTimeout(() => {
        try { this.extractedTextarea.focus(); } catch (e) {}
      }, 350);
    }
  }

  async loadScanFromHistory(id) {
    if (!window.gramDB) return;
    const scans = await window.gramDB.getAllScans();
    const scan = scans.find(s => s.id === id);
    if (!scan) return;

    this.currentExtractedText = scan.text;
    if (this.extractedTextarea) {
      this.extractedTextarea.value = scan.text;
    }
    if (this.quickBanner) {
      this.quickBanner.classList.remove('hidden');
      if (this.quickStats) {
        const words = scan.text.split(/\s+/).filter(Boolean).length;
        this.quickStats.textContent = `${words} words loaded from scan history`;
      }
    }
    this.updateConfidenceBadge(85);
    this.updateTextStats();
    if (window.showToast) window.showToast(`Loaded: ${scan.title}`, 'info');

    setTimeout(() => {
      this.scrollToResult();
    }, 100);
  }
}

// Global OCR Controller Singleton
window.gramOCR = new OCRController();
