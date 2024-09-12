import React from 'react';
import '../../style/Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>환영합니다</h1>
        <p>AI를 활용한 심리 상담으로 더 나은 내일을 만나보세요.</p>
        <button className="start-button"><Link to="/consult">상담 시작하기</Link></button>
      </div>
    </section>
  );
}

export default Hero;
