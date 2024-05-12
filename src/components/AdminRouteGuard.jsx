import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const AdminRouteGuard = ({ element }) => {
  const isAdminLoggedIn = localStorage.getItem('token');

  return isAdminLoggedIn ? element : <Navigate to="/sellerPage" />;
};

export default AdminRouteGuard;
