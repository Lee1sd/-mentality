// 경로 연결
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import ConsultHistoryPage from './pages/ConsultHistoryPage';
import PrivateRoute from './components/PrivateRoute';
import Consult from './pages/Consult';
import Header from './components/common/Header';
import Stress from './pages/Stress';
import Self from './pages/self';
import Problem from './pages/Problem';
import Acceptance from './pages/acceptance';
import Relationships from './pages/relationships';
import Change from './pages/change';
import Life from './pages/life';
import Stability from './pages/stability';
import Start from './pages/start';
import Result from './pages/result';
import Check from './pages/check';


function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/consult-history" 
          element={
            <PrivateRoute>
              <ConsultHistoryPage />
            </PrivateRoute>
          } 
        />
         <Route path="/consult" element={<PrivateRoute><Consult /></PrivateRoute>} />
         <Route path="/stress" element={<Stress />} />
         <Route path="/self" element={<Self />} />
         <Route path="/Problem" element={<Problem />} />
         <Route path="/acceptance" element={<Acceptance />} />
         <Route path="/relationships" element={<Relationships />} />
         <Route path="/change" element={<Change />} />
         <Route path="/life" element={<Life />} />
         <Route path="/stability" element={<Stability />} />
         <Route path="/start" element={<Start />} />
         <Route path="/result" element={<Result />} />
         <Route path="/check" element={<Check />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
