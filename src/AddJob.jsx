import React, { useState } from 'react';
import './Addjob.css';

const AddJob = ({ onClose, onAddJob }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    company: '',
    postedAt: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddJob(formData);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Job Offer</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Job Title"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Job Description"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            required
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            required
          />
          <input
            type="date"
            name="postedAt"
            value={formData.postedAt}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Job</button>
        </form>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default AddJob;
