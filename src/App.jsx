import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import DashboardHome from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Quotations from './pages/Quotations';
import Customers from './pages/Customers';
import PaymentMethod from './pages/Paymentmethod';
import Cases from './pages/Cases';
import LoginPage from './pages/LoginPage';
import Productlist from './pages/Productlist';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          <Route index element={<DashboardHome />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products/add-products" element={<Productlist />} />
          <Route path="quotations" element={<Quotations />} />
          <Route path="customers" element={<Customers />} />
          <Route path="payment-method" element={<PaymentMethod />} />
          <Route path="cases" element={<Cases />} />
        </Route>

        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
