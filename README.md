# GramLearn AI – Offline AI Tutor 🎓📱

**GramLearn AI** is a modern, mobile-first, offline-capable Progressive Web Application (PWA) designed to teach English language concepts, grammar, and textbook syllabi using in-browser local quantized neural models (`SmolLM2-360M-Instruct-q4f16_1-MLC`).

Built entirely with standard **HTML5, Vanilla CSS, and modern JavaScript (ESM)**. No React. No TailwindCSS. No paid external AI APIs or cloud data leakage.

---

## 🌟 Key Features

### 1. 📴 100% Offline AI Inference (WebLLM & WebGPU)
- Runs quantized models (`SmolLM2-360M-Instruct` ~230MB download or `SmolLM2-135M` ~90MB download) directly inside browser memory via **WebLLM** and **WebGPU**.
- **Zero API keys required**. Student prompts, notes, and study material never leave the device.
- After a one-time model download over Wi-Fi, the app functions entirely in **Airplane Mode**.
- Automated hardware check for WebGPU adapter limits and device RAM (`navigator.deviceMemory`).
- Transparent fallback: If WebGPU is not supported by the hardware, an honest, clearly labeled rule-based grammar assistant is available.

### 2. 🇬🇧 🇮🇳 Bilingual Tutoring (English & Tamil)
- Switch instantly between English and bilingual Tamil (`தமிழ்`) explanation modes.
- Tailored pedagogical prompts designed for students in Tamil Nadu and rural regions learning English grammar.
- Speech synthesis read-aloud option powered by browser-native `window.speechSynthesis`.

### 3. 📑 Offline Syllabus Library & PDF Text Extraction
- Upload textbook chapters and syllabus materials in `.pdf` and `.txt` formats.
- Offline PDF text extraction using a bundled local copy of **PDF.js**.
- Scanned PDF detection: Automatically alerts students when an uploaded PDF is image-based without digital text layers (requires OCR).
- Real-time in-document text search with keyword highlighting.
- Highlight any text passage to trigger:
  - 🤖 **"Explain with AI"** (passes context to the chat)
  - 📝 **"Save Selected to Note"**
  - ❓ **"Practice Quiz"**

### 4. 🔍 Foundational Learning Gap Detection
- Interactive diagnostic assessments for core grammar mechanics (*Verb Tenses & Time Aspects*, *Subject-Verb Agreement*, *Prepositions & Articles*).
- Algorithmic error-classification engine that identifies root conceptual misconceptions.
- Generates a **Diagnostic Assessment Report Card** with score, identified foundational gaps, recommended prerequisite lessons, and interactive remedial practice questions.
- Includes a clear pedagogical heuristic disclaimer distinguishing automated rules from standardized clinical psychometrics.

### 5. 📝 Offline Notes Archive & Mastery Progress
- Persisted locally in the browser using **IndexedDB** (`GramLearnAIDB`).
- Search, filter by category tags (*Grammar Rule*, *Vocabulary*, *Syllabus Excerpt*, *AI Tutor Chat*), pin, edit, delete, and export notes as a `.json` backup file.
- Automatically tracks questions asked, syllabus documents imported, and gaps mastered.

### 6. 📱 Mobile-First PWA Shell
- Clean pastel blue and white student-friendly theme (`#f0f9ff`, `#0284c7`, `#0f172a`).
- Professional dashboard layout with a collapsible sidebar on desktop and a fixed bottom navigation bar on mobile phones.
- Complete PWA manifest (`manifest.json`) and service worker (`sw.js`) that caches all static assets for instant offline boot.

---

## 🏗️ Project Architecture & File Structure

```
c:\Users\LENOVO\Desktop\Gramlearn AI\
├── index.html                   # Mobile-first semantic SPA containing all 6 views
├── manifest.json                # PWA manifest (standalone, theme colors, icons)
├── sw.js                        # Service worker caching app shell and static assets
├── server.js                    # Lightweight Node static server with COOP/COEP headers
├── package.json                 # Dev scripts (start, dev)
├── README.md                    # Project documentation & testing guide
├── css/
│   ├── variables.css            # Light pastel blue tokens, shadows, radius, transitions
│   ├── style.css                # Base resets, typography, custom scrollbars, animations
│   ├── layout.css               # Responsive dashboard layout (sidebar + mobile bottom nav)
│   ├── components.css           # Cards, buttons, pills, modals, toasts, dropzone, stats
│   └── chat.css                 # Chat bubbles, streaming cursor, suggestion chips, input bar
├── js/
│   ├── app.js                   # Navigation router, online/offline detection, SW registration
│   ├── db.js                    # IndexedDB manager (Notes, Syllabus, Gaps, Settings)
│   ├── ai-engine.js             # WebLLM wrapper, WebGPU diagnostics, download progress
│   ├── chat.js                  # Chat controller, speech synthesis, note capture, Tamil toggle
│   ├── syllabus.js              # PDF.js text extraction, document reader, search, text actions
│   ├── gaps.js                  # Diagnostic assessment quiz engine, gap classifier, remedial checks
│   ├── notes.js                 # Notes CRUD, tagging, search, export to JSON
│   └── settings.js              # Hardware diagnostics, model manager, storage quota monitor
├── vendor/
│   ├── pdfjs/
│   │   ├── pdf.min.js           # Bundled offline PDF.js library
│   │   └── pdf.worker.min.js    # Bundled offline PDF.js worker
│   └── webllm/
│       └── web-llm.js           # Local offline WebLLM ES module
└── icons/
    ├── icon.svg                 # Vector app icon
    ├── favicon.png              # 64x64 favicon
    ├── icon-192.png             # 192x192 PWA icon
    └── icon-512.png             # 512x512 PWA splash icon
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js** (v18+ recommended)
- A modern browser with **WebGPU support**:
  - Google Chrome (v113+)
  - Microsoft Edge (v113+)
  - Chrome on Android (with WebGPU enabled)

### 2. Start the Local Server
From the project root folder:
```bash
npm start
```
Or directly using Node:
```bash
node server.js
```
The server will start at:
👉 **`http://localhost:3000`**

*Note: `server.js` sets `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: credentialless` headers for optimal WebGPU and high-performance buffer execution.*

---

## 🌐 Deploying Over HTTPS

WebGPU, Service Workers, and CacheStorage require a **Secure Context (`HTTPS`)** in production:

### Option A: Cloudflare Pages
1. Push the code to a GitHub repository.
2. In Cloudflare Pages, connect your repo.
3. Build command: *(leave empty)*
4. Build output directory: `.` (root)
5. Deploy. Cloudflare automatically provides free HTTPS and edge caching.

### Option B: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root.
3. Vercel automatically deploys the static files with HTTPS.

### Option C: GitHub Pages
1. Go to repository **Settings > Pages**.
2. Select branch `main` and root `/`.
3. Save. GitHub Pages provides HTTPS out-of-the-box.

---

## 📱 Testing on an Android Phone (4GB RAM) & Airplane Mode

To verify that the offline tutoring experience works on an actual Android device:

### Step 1: Connect your Phone to the Local Network or HTTPS Deployment
- If running locally:
  - Find your computer's local IP address (e.g. `192.168.1.15`).
  - On your phone's Chrome browser, navigate to `http://192.168.1.15:3000`.
  - *(Alternatively, deploy to Vercel/Cloudflare Pages and visit your HTTPS URL).*

### Step 2: Enable WebGPU on Android Chrome (if not default)
1. In Chrome on your phone, open `chrome://flags`.
2. Search for `#enable-unsafe-webgpu`.
3. Set it to **Enabled** and restart Chrome.

### Step 3: Download & Cache Model on Wi-Fi
1. Open **GramLearn AI** while connected to Wi-Fi.
2. Navigate to **Model & Settings** (from sidebar or bottom menu).
3. Under *Offline Neural Model Manager*, select:
   - **`SmolLM2-360M-Instruct-q4f16_1-MLC`** (Best for 3GB–4GB RAM phones; ~230MB download, ~550MB VRAM).
   - Or **`Qwen2.5-0.5B-Instruct-q4f16_1-MLC`** (~390MB download, ~950MB VRAM).
4. Tap **Download & Cache Model**.
5. Wait for the progress bar to reach 100%. The model weights and WebAssembly runtime are now cached permanently in the browser's CacheStorage.

### Step 4: Turn ON Airplane Mode
1. Swipe down on your phone and enable **Airplane Mode** (disable Wi-Fi and Cellular Data).
2. Refresh or reopen **GramLearn AI**.
3. Notice the status indicator displays **"Offline (Airplane Mode)"**.
4. Go to **AI Tutor Chat**: Ask any grammar question (e.g., *"Explain Simple Present tense in Tamil"*).
5. Inference will execute directly on your phone's GPU without touching the network!

### Step 5: Low-Memory Management (4GB RAM Devices)
- On phones with 4GB RAM, the Android operating system occupies ~2GB.
- If Chrome experiences memory pressure, tap **"Unload from RAM"** in the Settings tab when you are finished chatting to release memory while keeping the downloaded model files safe in storage.

---

## 🔬 Limitations & Transparent Notes

1. **Scanned PDFs & OCR**:
   - The current version extracts selectable text streams using PDF.js.
   - If a student uploads a scanned image PDF (a photo of a book page), the app detects the lack of text and warns the student that scanned PDFs require OCR.
2. **Context Window Limitations**:
   - Small models (0.5B / 360M parameters) have focused context windows (4096 tokens).
   - Rather than attempting to feed an entire 200-page book at once, students highlight relevant excerpts in the document reader to ask targeted questions.
3. **First-Time Download Requirement**:
   - Offline AI inference requires a one-time download of the model weights over Wi-Fi. The app never pretends the neural model is running offline until the weights have been verified and cached.

---

## 📄 License
MIT License. Open source and free for educational use.
