import { WebWorkerMLCEngineHandler } from './vendor/webllm/web-llm.js';

// Hook up WebWorker message handler for background WebLLM execution
const handler = new WebWorkerMLCEngineHandler();

self.onmessage = (msg) => {
  handler.onmessage(msg);
};
