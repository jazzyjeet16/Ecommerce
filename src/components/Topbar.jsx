import React from 'react';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h2 className="text-xl font-semibold">Hi Admin!</h2>
      <div className="flex items-center gap-4">
        <span role="img" aria-label="bell">🔔</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </div>
  );
};

export default Topbar;
