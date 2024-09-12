import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { initModelViewer } from './components/initModelViewer';  // 초기화 로직을 가져옵니다.

// model-viewer 스크립트 초기화
initModelViewer();

// React 18 방식으로 root 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
