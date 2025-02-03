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
      <div className="w-full max-w-md p-6rounded-lg  shadow-lg">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
