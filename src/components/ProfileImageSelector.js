import React from 'react';
import '../style/ProfileImageSelector.css'; // 추가적인 스타일 필요 시 사용

import catImage0 from '../assets/images/cat.png';
import catImage1 from '../assets/images/manggu.jpg';
import catImage2 from '../assets/images/cat.png';
import catImage3 from '../assets/images/crayon.jpg';
import catImage4 from '../assets/images/cat.png';


const defaultImages = [catImage0, catImage1, catImage2, catImage3, catImage4];

function ProfileImageSelector({ onSelectImage }) {
  return (
    <div className="image-selector">
      <h3>프로필 이미지 선택</h3>
      <div className="image-list">
        {defaultImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Default ${index}`}
            className="image-option"
            onClick={() => onSelectImage(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileImageSelector;
