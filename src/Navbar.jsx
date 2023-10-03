import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
    
        <h3>HireGrove</h3>
        <div className="nav-links">
         <Link to="./SignUpForm">SignUp</Link>
         <Link to="./Login">Login</Link>
         </div>
    
    
    </div>
  );
}

export default Navbar;
