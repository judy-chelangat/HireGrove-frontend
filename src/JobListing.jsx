import React from 'react';

function JobListing({ job }) {
    return (
      <li className="job-listing">
        <h3>{job.title}</h3>
        <p>{job.description}</p>
        <div className="job-listing-footer">
          <p>Company: {job.company_name}</p>
          <p>Location: {job.location}</p>
          <p>Posted at: {job.posted_at}</p>
          <button onClick={() => handleApplyClick(job.id)}>Apply</button>
        </div>
      </li>
    );
  }

export default JobListing;
