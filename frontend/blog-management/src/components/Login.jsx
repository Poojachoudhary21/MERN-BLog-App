import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token, userRole } = response.data;  //  response contains token and role

      // Save the token and role in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userRole', userRole);  // Save role (admin or user)

      navigate('/');  // Redirect to home or dashboard
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password. Please try again.'); 
    }
  };

  return (
    <div className='Login-container'>
      <div className='Login-form'>
        <h1>Log In to Continue</h1>
        <form onSubmit={handleLogin}>
          <div className="input-container">
          <h2>Email:</h2>
         <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className="input-container">
          <h2>Password:</h2>
          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}  {/* Display error message */}

          
        </form>
        
      </div>
        

    </div>
  );
};

export default Login;
