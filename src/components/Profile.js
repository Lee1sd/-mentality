import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../style/Profile.css';

function Profile() {
  const { user } = useContext(AuthContext); // AuthContext에서 사용자 정보 가져오기

  // 기본 사용자 데이터를 설정 (로그인 여부와 관계없이)
  const profileData = {
    name: user?.name || '홍길동',
    email: user?.email || 'hong@example.com',
    phoneNumber: user?.phoneNumber || '010-1234-5678', // 예시 데이터
    address: user?.address || '서울시 강남구', // 예시 데이터
  };

  return (
    <div className="profile-info">
      <h1>내 정보</h1>
      <p><strong>이름</strong><br /> {profileData.name}</p>
      <p><strong>생년월일</strong><br /> {profileData.email}</p>
      <p><strong>전화번호</strong><br /> {profileData.phoneNumber}</p>
      <p><strong>주소</strong><br /> {profileData.address}</p>
      {/* 추가적인 사용자 정보 표시 */}
    </div>
  );
}

export default Profile;
