import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogForm from './components/BlogFrom';
import BlogList from './components/BlogList';
import Login from './components/Login';
import Signup from './components/SignUp';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const userRole = localStorage.getItem('userRole');
  console.log("userRole " + userRole);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        {/* Wrap Home route inside ProtectedRoute */}
        <Route path="/" element={
          <ProtectedRoute>
            <BlogList />
          </ProtectedRoute>
        } />

        {/* Wrap Create Blog route inside ProtectedRoute too */}
        <Route path="/blogs/create" element={
          <ProtectedRoute>
            <BlogForm />
          </ProtectedRoute>
        } />

        {/* Login and Signup are public */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
