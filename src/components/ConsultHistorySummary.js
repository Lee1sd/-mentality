import React from 'react';
import '../style/ConsultHistorySummary.css'; // 스타일 정의

function ConsultHistorySummary() {
  // 예시 데이터
  const consults = [
    { id: 1, name: '홍길동', date: '2024-01-06', subject: '스트레스 관리' },
  ];

  return (
    <div className="consult-history-summary">
      <h3>최근 상담 이력</h3>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>날짜</th>
            <th>상담 주제</th>
          </tr>
        </thead>
        <tbody>
          {consults.map((consult) => (
            <tr key={consult.id}>
              <td>{consult.name}</td>
              <td>{consult.date}</td>
              <td>{consult.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => window.location.href = '/consult-history'}>전체 상담 이력 보기</button>
    </div>
  );
}

export default ConsultHistorySummary;
