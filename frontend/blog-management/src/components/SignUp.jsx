import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './Signup.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // State to hold the error message
  const navigate = useNavigate(); // initialize

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');  // Reset the error message on every attempt

    try {
      await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password
      });
      alert('Signup successful!');
      navigate('/'); //  after success go to home page
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
       // Check if the error is because the email already exists
       if (error.response && error.response.data && error.response.data.message === 'Email already exists') {
        setError('This email is already registered. Please use a different email.');
      } else {
        setError('Signup failed. Please try again.');
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
           <h1>Create Your Account</h1>
        
          <form onSubmit={handleSignup}>
          <div className="input-container">
            <h2>Name:</h2>
            <input
             type="text"
             placeholder="Enter your name"
             value={name}
             onChange={(e) => setName(e.target.value)}
           />

           </div>
            <div className="input-container">
              <h2>Email:</h2>
              <input
           type="email"
           placeholder="Enter your email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           />
            </div>
            <div className="input-container">
              <h2>Password:</h2>
              <input
           type="password"
           placeholder="Enter your password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           />
            </div>

           <button type="submit">Sign Up</button>
           {error && <p className="error-message">{error}</p>}  {/* Display error message */}
         </form>
      </div>
    </div>
    
  );
};

export default SignUp;


