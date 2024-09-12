import React, { useContext } from 'react';
import Login from '../components/Auth/Login';
import { AuthContext } from '../context/AuthContext'; // 경로를 contexts에서 context로 수정

function LoginPage() {
  const { login } = useContext(AuthContext); 
  const handleLogin = () => {
    login(); // 로그인 상태로 전환
    // 추가적으로 필요한 로그인 처리 로직이 있다면 여기에 작성
  }

  return (
    <div className="login-page">
      <Login onLogin={handleLogin} /> {/* handleLogin 함수를 Login 컴포넌트에 전달 */}
    </div>
  );
}

export default LoginPage;
