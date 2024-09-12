import React from 'react';
import '../style/ConsultHistory.css';

function ConsultHistory() {
  // 예시 데이터
  const consults = [
    { id: 1, name: '홍길동', date: '2024-01-06', subject: '스트레스 관리', details: '상세 내용입니다.' },
  ];

  return (
    <div className="consult-history">
      <h2>상담 이력</h2>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>날짜</th>
            <th>상담 주제</th>
            <th>상세 정보</th>
          </tr>
        </thead>
        <tbody>
          {consults.map((consult) => (
            <tr key={consult.id}>
              <td>{consult.name}</td>
              <td>{consult.date}</td>
              <td>{consult.subject}</td>
              <td>{consult.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsultHistory;
