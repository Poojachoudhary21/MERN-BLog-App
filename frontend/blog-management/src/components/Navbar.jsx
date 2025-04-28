import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
         
      </nav>
  )
}

export default Navbar