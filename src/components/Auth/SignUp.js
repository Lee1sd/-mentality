import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    birthdate: '',
    username: '',
    password: '',
  });

  const validateInputs = () => {
    let valid = true;

    if (form.name.trim() === '') {
      alert('이름을 입력하세요.');
      valid = false;
    }

    if (!/^\d{6}$/.test(form.birthdate)) {
      alert('유효한 생년월일을 입력하세요 (예: 990722).');
      valid = false;
    }

    if (form.username.trim() === '') {
      alert('아이디를 입력하세요.');
      valid = false;
    }

    if (form.password.length < 8) {
      alert('비밀번호는 최소 8자 이상이어야 합니다.');
      valid = false;
    }

    return valid;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    if (validateInputs()) {
      alert('회원가입이 완료되었습니다!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h1 className="logo">EmoGuide</h1> {/* 로고를 박스 안으로 이동 */}
        <div className="input-group">
          <label className="input-label">이름</label>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="이름을 입력하세요"
              className="input-field"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">생년월일</label>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="생년월일을 입력하세요"
              className="input-field"
              name="birthdate"
              value={form.birthdate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">아이디</label>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              className="input-field"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">비밀번호</label>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="input-field"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="signup-button" onClick={handleSignUp}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default SignUp;
