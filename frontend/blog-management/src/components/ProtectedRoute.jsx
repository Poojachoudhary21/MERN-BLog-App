import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('userRole'); // or check token if you have

  if (!isAuthenticated) {
    // If not logged in, redirect to login page
    toast.error('Please login first! 🚀', { autoClose: 2000 })
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
