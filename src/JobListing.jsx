import React from 'react';
import { Link } from 'react-router-dom';
import JobApplicationForm from './JobApplicationform';

function JobListing({ job }) {
    return (
      <li className="job-listing">
        <h3>{job.title}</h3>
        <p>{job.description}</p>
        <div className="job-listing-footer">
          <p>Company: {job.company_name}</p>
          <p>Location: {job.location}</p>
          <p>Posted at: {job.datetime}</p>
          <Link to={'/jobApplication'} className="apply-link" >Apply</Link>
        </div>
       
      </li>
    );
  }

export default JobListing;
