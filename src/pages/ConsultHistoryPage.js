import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/Sidebar';
import ConsultHistory from '../components/ConsultHistory';
import '../style/ConsultHistoryPage.css'; // 스타일 정의

function ConsultHistoryPage() {
  return (
    <div className="consult-history-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="consult-history-container">
          <ConsultHistory /> {/* 상세한 상담 이력 표시 */}
        </div>
      </div>
    </div>
  );
}

export default ConsultHistoryPage;
