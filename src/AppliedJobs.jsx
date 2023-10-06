import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './applied.css'

function AppliedJobs() {
  const [jobListings, setJobListings] = useState([]);
  const [newResumeUrl, setNewResumeUrl] = useState('');

  useEffect(() => {
    // Fetch the job listings from the backend API
    fetch("https://hiregrove.onrender.com/job-applications")
      .then((response) => response.json())
      .then((jobListings) => setJobListings(jobListings));
  }, []);

  const handleRemoveSubmission = (jobId) => {
    fetch(`https://hiregrove.onrender.com/job-application/${jobId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          setJobListings(jobListings.filter((job) => job.id !== jobId));
        } else {
          console.error('Failed to remove submission');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleResumeUrlChange = (event) => {
    setNewResumeUrl(event.target.value);
  };

  const handleSaveResumeUrl = (jobId) => {
    fetch(`https://hiregrove.onrender.com/job-application/${jobId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resume_url: newResumeUrl }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('Resume URL updated successfully');
        } else {
          console.error('Failed to update resume URL');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className="job-nav-bar">
        <div className="job-nav-links">
          <Link to="/jobs">Available Jobs</Link>
        </div>
      </div>
      <div className="job-listings">
        <p>Applied Jobs</p>
        <ul>
          {jobListings.map((job, index) => (
            <li className="job-listing" key={job.id}>
              <h3>{job.title}</h3>
              <div className="job-listing-footer">
                <p>Company: {job.company_name}</p>
                <p>resume_url: {job.resume_url}</p>
                <p id="username">Employee name: {job.username}</p>
                <div className="button-container">
                  <input
                    className="resume-url-input"
                    type="text"
                    placeholder="New Resume URL"
                    value={newResumeUrl}
                    onChange={handleResumeUrlChange}
                  />
                  <div className="button-group">
                    <button
                      className="remove-submission-button"
                      onClick={() => handleRemoveSubmission(job.id)}
                    >
                      Remove Submission
                    </button>
                    <button
                      className="save-resume-url-button"
                      onClick={() => handleSaveResumeUrl(job.id)}
                    >
                      Save Resume URL
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AppliedJobs;