import React from 'react';
import LoginForm from '../components/loginForm'

const LoginPage = ({ onLogin }) => {
  return <LoginForm onLogin={onLogin} />;
};

export default LoginPage;
