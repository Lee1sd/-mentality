import React, { useState } from 'react';
import Modal from './Modal';
import ProfileImageSelector from './ProfileImageSelector';
import '../style/Sidebar.css';

function Sidebar({ onPageChange, activePage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleProfileChange = () => {
    setIsModalOpen(true);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setIsModalOpen(false);
  };

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src={selectedImage || 'path/to/default-profile-image.jpg'} alt="프로필" className="profile-image" />
        <button className="change-profile-button" onClick={handleProfileChange}>
          프로필 변경
        </button>
      </div>
      <nav className="menu">
        <button
          onClick={() => onPageChange('profile')}
          className={`menu-item ${activePage === 'profile' ? 'active' : ''}`}
        >
          마이 페이지
        </button>
        <button
          onClick={() => onPageChange('consultHistory')}
          className={`menu-item ${activePage === 'consultHistory' ? 'active' : ''}`}
        >
          상담 이력
        </button>
        <button
          onClick={() => onPageChange('result')}
          className={`menu-item ${activePage === 'result' ? 'active' : ''}`}
        >
          상담 결과
        </button>
      </nav>
      
      {/* 프로필 이미지 선택 모달 */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProfileImageSelector onSelectImage={handleImageSelect} />
      </Modal>
    </aside>
  );
}

export default Sidebar;
