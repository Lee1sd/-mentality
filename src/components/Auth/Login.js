import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // AuthContext 가져오기
import '../../style/Login.css'; 
import eye from '../../assets/images/eye.png';
import eyeOff from '../../assets/images/eyeOff.png'; 

function Login() {
  const navigate = useNavigate(); 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext); // login 함수 가져오기

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    // 유효성 검사
    if (!username || !password) {
      setError('아이디와 비밀번호를 입력하세요.');
      return;
    }

    // 로그인 요청 처리 (여기서는 가짜 API 호출로 대체)
    const userData = { username }; // 예시 사용자 데이터
    login(userData); // AuthContext의 login 함수를 호출하여 사용자 데이터를 설정

    // 로그인 성공 시 메인 페이지로 이동
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1 className="logo">EmoGuide</h1>
        {error && <div className="error-message">{error}</div>} {/* 오류 메시지 표시 */}
        <div className="input-group">
          <label className="input-label">아이디</label>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">비밀번호</label>
          <div className="input-wrapper">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="비밀번호를 입력하세요"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="eye-icon" onClick={togglePasswordVisibility}>
              <img 
                src={passwordVisible ? eyeOff : eye}
                alt="eye icon"
                className="eye-image"
              />
            </div>
          </div>
        </div>
        
        <div className="options">
          <label className="remember-me">
            <input type="checkbox" />
            이메일 저장
          </label>
          <Link to="/signup" className="signup-link-inline">회원가입</Link> {/* 회원가입 링크를 오른쪽에 배치 */}
        </div>

        <button className="login-button" onClick={handleLogin}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default Login;
