//ai 상담 결과
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Result() {
  // 상태 변수 정의
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  // 버튼 스타일 정의
  const buttonStyle = {
    padding: '10px 25px',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: isHovered ? '#007bff' : 'white',
    color: 'black',
    marginBottom: '20px',
    transition: 'background-color 0.3s ease',
  };

  const reStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', /* 세로 중앙 정렬 */
    alignItems: 'center', /* 가로 중앙 정렬 */
    textAlign: 'center', /* 텍스트 중앙 정렬 */
    height: '95vh', /* 화면 전체 높이 */
    width: '100%',
    position: 'relative',
    fontSize: '1.5em'
  };

  useEffect(() => {
    // 시뮬레이션: 3초 후에 로딩 완료로 상태 변경
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 실제 사용 시 API 호출 결과에 따라 시간을 조정

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timer);
  }, []);

  // 버튼 클릭 핸들러
  const handleResult = () => {
    navigate('/Check'); // 페이지 이동
  };

  return (
    <div className="re" style={reStyle}>
      {isLoading ? (
        <div>
          <h2>결과를 기다리고 있습니다.</h2>
          <p>결과는 최대 1분 정도 소요됩니다.</p>
          <p>잠시만 기다려주세요...</p>
          {/* 로딩 애니메이션 추가 가능 */}
        </div>
      ) : (
        <div>
          <h2>결과가 나왔습니다</h2>
          <button
            onClick={handleResult}
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            확인하기
          </button>
        </div>
      )}
    </div>
  );
}

export default Result;
