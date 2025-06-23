import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, FileText, Users, CreditCard, Briefcase } from 'lucide-react';

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
      isActive ? 'bg-yellow-100 text-yellow-700' : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <aside className="w-64 h-full bg-white shadow-md p-4">
      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClasses}>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/products" className={linkClasses}>
          <Package size={18} />
          Products
        </NavLink>
        <NavLink to="/dashboard/orders" className={linkClasses}>
          <ShoppingCart size={18} />
          Orders
        </NavLink>
        <NavLink to="/dashboard/quotations" className={linkClasses}>
          <FileText size={18} />
          Quotations
        </NavLink>
        <NavLink to="/dashboard/customers" className={linkClasses}>
          <Users size={18} />
          Customers
        </NavLink>
        <NavLink to="/dashboard/payment-method" className={linkClasses}>
          <CreditCard size={18} />
          Payment Method
        </NavLink>
        <NavLink to="/dashboard/cases" className={linkClasses}>
          <Briefcase size={18} />
          Cases
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
