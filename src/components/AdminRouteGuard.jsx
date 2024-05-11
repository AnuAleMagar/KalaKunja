import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const AdminRouteGuard = ({ element }) => {
  const isAdminLoggedIn = localStorage.getItem('adminToken');

  return isAdminLoggedIn ? element : <Navigate to="/adminlogin" />;
};

export default AdminRouteGuard;
