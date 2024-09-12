
export const initModelViewer = () => {
  const modelViewerScript = document.createElement('script');
  modelViewerScript.type = 'module';
  modelViewerScript.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
  document.head.appendChild(modelViewerScript);
};
