import React from 'react';
import Logo from '../components/auth/Logo';
import Login from '../components/auth/Login';

const LoginPage = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url("/login_bg.jpg")',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <Logo />
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Login Panel
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
