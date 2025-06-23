// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from'../assets/logo.png';
import bgImage from '../assets/background.jpg';
const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔒 Simple hardcoded authentication logic (you can replace with API later)
    if (email === 'admin@example.com' && password === '1234') {
      onLogin(); // update App state
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="VeraLink Logo" className="h-16" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Log In</h2>

        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address *"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password *"
              className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:ring-2 focus:ring-yellow-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <div className="flex justify-end text-sm">
            <a href="#" className="text-yellow-600 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
