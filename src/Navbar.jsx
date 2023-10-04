import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Signup from './SignUpForm';

function Navbar() {
  const [isPopupVisible, setPopupVisible] = useState(false); // State for controlling popup visibility

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="navbar">
        <h3>HireGrove</h3>
        <div className="nav-links">
          <Link to="signup" onClick={openPopup}>SignUp</Link>
          <Link to="./login">Login</Link>
        </div>
        {isPopupVisible && (
          <Signup closePopup={closePopup} /> // Pass closePopup function as a prop to Signup
        )}
      </div>
  );
}

export default Navbar;
