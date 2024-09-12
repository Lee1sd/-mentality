import React from 'react';
import '../../style/Service.css';

function Service() {
  return (
    <section className="services">
      <div className='title-container'>
      <div className='Service line'></div>
      <h2 className="service-title">service</h2>
      <div className='Service line'></div>
      </div>
      <div className="service-list">
        <div className="service-item">
          <div className="circle">아바타 생성</div>
        </div>
        <div className="service-item">
          <div className="circle">심리상담</div>
        </div>
        <div className="service-item">
          <div className="circle">검사결과 확인</div>
        </div>
      </div>
    </section>
  );
}

export default Service;