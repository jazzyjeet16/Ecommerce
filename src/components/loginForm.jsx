import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import logo from '../assets/logo.png';
import bgImage from '../assets/background.jpg';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
      <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="VeraLink Logo" className="h-16" />
        </div>
        <h2 className="text-2xl font-semibold  text-gray-800 mb-6">Log In</h2>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email address *"
              className="mt-1 block w-full rounded-md border border-red-500 shadow-sm focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password *"
                className="mt-1 block w-full rounded-md border border-red-500 shadow-sm pr-10 focus:ring focus:ring-blue-300"
                required
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </div>
          <div className="flex justify-end text-sm">
            <a href="#" className="text-red-500 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
