import React from 'react';
import Login from '../../components/auth/Login';  

const LoginPage = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/login_bg.jpg")',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly transparent black
        backgroundBlendMode: 'overlay'
      }}
    >
      <Login />
    </div>
  );
};

export default LoginPage;
