import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../style/Header.css';
import { AuthContext } from '../../context/AuthContext';
import { GoChevronDown } from "react-icons/go"; // 아이콘 가져오기

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 상태 관리

  const handleLogout = () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      logout();
      navigate('/'); // 로그아웃 후 메인 페이지로 이동
    }
  };

  const handleProfileClick = () => {
    navigate('/profile'); // 프로필 페이지로 이동
  };

  const toggleDropdown = (isOpen) => {
    setDropdownOpen(isOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">EmoGuide</Link>
      <nav className="nav-links">
        {isLoggedIn && (
          <>
            <Link to="/Consult" className="ai">AI 상담</Link>
            <Link to="/create-avatar" className="avatar">아바타 생성</Link>
          </>
        )}
        {isLoggedIn ? (
          <div 
            className="profile-menu" 
            ref={dropdownRef}
            onMouseEnter={() => toggleDropdown(true)} // 마우스를 올리면 드롭다운 열림
            onMouseLeave={() => toggleDropdown(false)} // 마우스가 떠나면 드롭다운 닫힘
          >
            <button className="profile-button" onClick={handleProfileClick}>
              프로필 <GoChevronDown style={{ fontSize: '16px', color: '#426B1F' }} />
            </button>
            {dropdownOpen && (
              <div className="profile-dropdown">
                <button className="logout-button" onClick={handleLogout}>로그아웃</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
