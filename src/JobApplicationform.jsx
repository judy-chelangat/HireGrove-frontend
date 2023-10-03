import React, { useState } from 'react';
import './jobapplication.css';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    jobRole: '',
    pinCode: '',
    startDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a function to link with the database.
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Job Application Form</h2>
        <form onSubmit={handleSubmit} className="form-columns">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="E.g ...ana@gmail.com"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                placeholder="E.g P.O.Box..."
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                placeholder="E.g ...New York"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobRole">Job Role</label>
              <input
                type="text"
                id="jobRole"
                name="jobRole"
                value={formData.jobRole}
                placeholder="E.g... Backend Developer"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pinCode">Pin Code</label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                placeholder="PinCode"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                placeholder="E.g... 3/10/23"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
