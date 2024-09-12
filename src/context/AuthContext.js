import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // 사용자 상태를 정의합니다.

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData); // 사용자 데이터 설정
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null); // 사용자 데이터 초기화
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
