/**
 * GramLearn AI - WebLLM Dedicated Web Worker
 * Offloads WebGPU inference, shader compilation, and token streaming
 * from the main browser thread to maintain a responsive 60fps UI.
 */

import { WebWorkerMLCEngineHandler } from '../vendor/webllm/web-llm.js';

// Instantiate the official WebLLM Worker Engine Handler
const handler = new WebWorkerMLCEngineHandler();

self.onmessage = (msg) => {
  handler.onmessage(msg);
};
