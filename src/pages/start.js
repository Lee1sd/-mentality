//Ai 상담 시작
import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMicrophoneSlash, faSync } from '@fortawesome/free-solid-svg-icons';


const Quiz = ({showQuiz, setShowQuiz}) => {
    const questions = [
      "어떤 문제로 상담 받으러 오셨나요?",
      "지금 어떤 감정을 느끼고 계신가요?",
      "현재의 어려움이 언제부터 시작되었나요?",
      "최근에 어떤 일이 있으셨나요?",
      "어려운 상황에서 가장 많이 의지하는 것은 무엇인가요?"
    ];
  
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const navigate = useNavigate();
  
    const handleClick = () => {
      setCurrentQuestionIndex((prevIndex) => 
        prevIndex < questions.length - 1 ? prevIndex + 1 : 0
      );
    };

    const handleContinue = () => {
        // 상담 계속 버튼 클릭 시
        setCurrentQuestionIndex(0); // 상담을 처음부터 다시 시작할 수도 있음
        navigate('/result'); // 페이지 이동
    };

    const quizButtonStyle = {
        position: 'absolute',
        width: '0px',
        height: '0px',
        left: '700px',
        top: '50px',
        borderLeft: '30px solid #6F79E9', // 삼각형의 왼쪽 부분을 투명하게 만듭니다
        borderRight: '30px solid transparent', // 삼각형의 오른쪽 부분을 투명하게 만듭니다
        borderTop: '20px solid transparent', // 삼각형의 아래쪽을 색으로 만듭니다
        borderBottom: '20px solid white',
        clipPath: 'polygon(0% 0%, 60% 70%, 0% 100%)',
        transform: 'rotate(90deg)'  // 오른쪽으로 90도 회전
    };

    const messageStyle = {
        position: 'absolute',
        top: '10px',
        left: '100px',
    };

  
    const buttoncontinue = {
      position: 'relative',
      width: '220px',
      height: '94px',
      left: '800px',
      top: '570px',
      fontSize: '24px',
      background: '#FFFFFF',
      borderRadius: '20px',
      border:'none',
      cursor: 'pointer'
    };

   
    return (
      <div>
        <h2 style={messageStyle}>{questions[currentQuestionIndex]}</h2>
        <button onClick={handleClick} style={quizButtonStyle}></button>
        <button onClick={handleContinue} style={buttoncontinue}>상담 종료</button>
      </div>
    );
  };

const WebcamCapture = () => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [webcamKey, setWebcamKey] = useState(0); // Webcam 재렌더링을 위한 key
  const [showQuiz, setShowQuiz] = useState(false);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const toggleAudio = () => {
    setIsAudioEnabled(prevState => !prevState);
    setWebcamKey(prevKey => prevKey + 1);
  };

  const refreshWebcam = () => {
    // Webcam 컴포넌트를 강제로 새로 렌더링
    setWebcamKey(prevKey => prevKey + 1);
  };
  

  const webcamContainerStyle = {
    position: 'relative',
    width: '700px',
    height: '320px',
    top: '5px',
    left:'130px'
  };

  const containerStyle = {
    marginTop: '260px',
    alignItems: 'center',
    height: '90%',
    position: 'relative', //
  };

  const buttonStyle = {
    position: 'absolute',
    left:'140px',
    bottom: '275px'
  };

  const webButtonStyle = {
    position: 'absolute',
    left:'270px',
    bottom: '275px'
  };

  const counselorStyle = {
    position: 'absolute',
    width: '730px',
    height: '440px',
    backgroundColor: 'white',
    top: '45px', // 올바른 단위 사용
    left: '1000px',
    border: '2px solid #000',
    borderRadius: '20px'

  };

  const fixedStyle={
    position: 'absolute', //이걸 수정해야 아마 안밀리지 않을까?
    width: '800px',
    height: '100px',
    backgroundColor: 'white', // 배경색을 추가하여 확인할 수 있도록 합니다
    top: '-130px',
    right: '350px', // 위치 조정
    borderRadius: '20px',
   
  };

    const innStyle = {
        position: 'relative',
        width: '90px',
        height: '98px',
        left: '660px',
        top: '20px',

        background: 'white',
        transform: 'rotate(113deg)',

   
    };

  
  return (
    <div className='Cam' style={containerStyle}>
      <div style={webcamContainerStyle}>
        <Webcam
          key={webcamKey}
          audio={isAudioEnabled}
          height={520}
          screenshotFormat="image/jpeg"
          width={780}
          videoConstraints={videoConstraints}
        />
      </div>
      
      <div className='counselor' style={counselorStyle}></div>
      <button onClick={toggleAudio} style={buttonStyle}>
      <FontAwesomeIcon icon={isAudioEnabled ? faMicrophone : faMicrophoneSlash} />
        {isAudioEnabled ? '마이크 음소거' : '마이크 활성화'}
        
      </button>

      <button onClick={refreshWebcam} style={webButtonStyle}>
      <FontAwesomeIcon icon={faSync} />  
        웹캠 새로고침
      </button>

      <div className='fixed' style={fixedStyle}>
        <div style={innStyle}></div>
       <Quiz showQuiz={showQuiz} setShowQuiz={setShowQuiz} />
      </div>
      
       
    </div>
    

  );
};

export default WebcamCapture;
