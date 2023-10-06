import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registrationStatus, setRegistrationStatus] = useState(null); // Added registration status state

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch("https://hiregrove.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 201) {
        const data = await response.json();
        localStorage.setItem('access_token', data.access_token);
        setRegistrationStatus('success'); // Registration successful

        // Show the success message for a few seconds before redirecting
        setTimeout(() => {
          setRegistrationStatus(null); // Clear the message
          navigate("/jobs"); // Redirect after a delay
        }, 3000); // Delay for 3 seconds (adjust as needed)
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData.message);
        setRegistrationStatus('error'); // Registration failed
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setRegistrationStatus('error'); // Registration failed
    }
  };

  return (
    <div className="signup-container">
      <div className="bg-image d-flex align-items-center justify-content-center">
        <div className="mask gradient-custom-3"></div>
        <div className="card m-5" style={{ maxWidth: '600px' }}>
          <div className="card-body px-5">
            <h4 className="text-uppercase text-center mb-5">Create an account</h4>
            {registrationStatus === 'success' && (
              <div className="alert alert-success" role="alert">
                Registration successful! You can now log in.
              </div>
            )}
            {registrationStatus === 'error' && (
              <div className="alert alert-danger" role="alert">
                Registration failed. Please check your information and try again.
              </div>
            )}
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="username" className="form-label">Your Name</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control"
                  id="username"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  id="email"
                  placeholder="example@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="d-flex flex-row justify-content-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="flexCheck"
                    id="flexCheckDefault"
                    required
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I agree to all statements in Terms of service
                  </label>
                </div>
              </div>
              <button type="submit" className="register-btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
