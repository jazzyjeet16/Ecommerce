import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8">
      {/* Dashboard Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-sm text-gray-500">Total Products</h2>
          <p className="text-2xl font-bold text-yellow-600 mt-2">134</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-sm text-gray-500">Active Orders</h2>
          <p className="text-2xl font-bold text-yellow-600 mt-2">57</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-sm text-gray-500">Total Customers</h2>
          <p className="text-2xl font-bold text-yellow-600 mt-2">1,203</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-sm text-gray-500">Revenue</h2>
          <p className="text-2xl font-bold text-yellow-600 mt-2">₹4.5L</p>
        </div>
      </div>

      {/* Chart/Graph Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-6 h-64 flex items-center justify-center text-gray-400">
          📊 Product Category Chart (Placeholder)
        </div>
        <div className="bg-white rounded-xl shadow p-6 h-64 flex items-center justify-center text-gray-400">
          📈 Weekly Sales Graph (Placeholder)
        </div>
      </div>

      {/* Optional: Recent Activity or Notifications */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>✅ Product "Apple Watch" added</li>
          <li>📦 Order #1234 shipped</li>
          <li>➕ New customer registered: Rahul Sharma</li>
          <li>✏️ Product "Note 10" status updated</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
