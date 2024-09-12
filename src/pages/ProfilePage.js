import React, { useState } from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import ConsultHistory from '../components/ConsultHistory';
import ConsultHistorySummary from '../components/ConsultHistorySummary';
import '../style/ProfilePage.css';

function ProfilePage() {
  const [activePage, setActivePage] = useState('profile'); // 기본값을 'profile'로 설정

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="profile-page">
      <Header />
      <div className="main-content">
        <Sidebar onPageChange={handlePageChange} activePage={activePage} />
        <div className="content">
          {activePage === 'profile' && (
            <>
              <div className="profile-container">
                <Profile />
              </div>
              <div className="consult-history-container">
                <ConsultHistorySummary />
              </div>
            </>
          )}
          {activePage === 'consultHistory' && (
            <div className="consult-history-container">
              <ConsultHistory />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
