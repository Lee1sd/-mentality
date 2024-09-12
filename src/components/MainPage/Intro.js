import React from 'react';
import '../../style/Intro.css';
import image2 from '../../assets/images/start_2.png';
import image3 from '../../assets/images/start_3.png';

function Intro() {
  return (
    <section className="intro">
      <div className="content-block">
        <div className="text-content">
          <h2>복잡한 내 마음,이제 EmoGuide에서</h2>
          <p>가중되는 불안과 스트레스,<br />어디서 풀어야 할지 막막하신가요?</p>
        </div>
        <div className="image-content">
          <img src={image2} alt="이미지 1" className="introimg1"/>
        </div>
      </div>

      <div className="content-block">
        <div className="image-content">
          <img src={image3} alt="이미지 2" className="introimg2"/>
        </div>
        <div className="text-content">
          <h2>AI와 함께하는 맞춤형 심리 상담</h2>
          <p>어렵기만 했던 심리상담,<br />이젠 EmoGuide와 함께해요!<br />AI로 상담을 진행하여 마음의 쉼을 누리세요.</p>
        </div>
      </div>
       
    </section>
  );
}

export default Intro;
