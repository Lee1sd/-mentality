import React, { useState } from "react";
import '../../style/technology.css'; // 스타일시트 가져오기
import tech1 from'../../assets/images/manggu.jpg'
import tech2 from'../../assets/images/star.jpg'

function Technology(){

  return (
    <div className="tech-wrap">
      <div className="techbox">
        <div className="techimg">
          <img src={tech1} className="tech1"></img>
        </div>
        <div className="techinfo">
          <h3>아이트래킹 기술</h3>
          <p>시선 추적을 통해 사용자의 시선 움직임을 파악하여,<br/>주의 상태를 파악 한다<br/>
          시선 추적을 통해 사용자의 시선 움직임을 파악하여,<br/>주의 상태를 파악 한다</p>
        </div>
        </div>

        <div className="techbox">
        <div className="techimg">
          <img src={tech2} className="tech2"></img>
        </div>
        <div className="techinfo">
          <h3>음성 인식 기술</h3>
          <p>시선 추적을 통해 사용자의 시선 움직임을 파악하여,<br/>주의 상태를 파악 한다<br/>
          시선 추적을 통해 사용자의 시선 움직임을 파악하여,<br/>주의 상태를 파악 한다</p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
