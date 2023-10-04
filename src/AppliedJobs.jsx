import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


function AppliedJobs() {
    // fetching the jobs from the backend api
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        // Fetch the job listings from the backend API
        fetch("http://127.0.0.1:5555/job-applications")
          .then((response) => response.json())
          .then((jobListings) => setJobListings(jobListings));
      }, []);
    // const jobListings = [
    //     {
    //       id: 1,
    //       title: "Software Engineer",
    //       description: "We are looking for a talented software engineer to join our team. You will be responsible for developing and maintaining our web applications.",
    //       company_name: "Google",
    //       location: "Mountain View, CA",
    //       posted_at: "2023-08-04"
    //     },
    //     {
    //       id: 2,
    //       title: "Product Manager",
    //       description: "We are looking for a product manager to help us develop and launch new products. You will be responsible for gathering user requirements, working with engineers to design and develop products, and launching and marketing new products.",
    //       company_name: "Facebook",
    //       location: "Menlo Park, CA",
    //       posted_at: "2023-08-03"
    //     }
      // ];
    
      return (
        <>
       <div className="job-nav-bar">
            
            <div className="job-nav-links">
            <Link to="/jobs">Available  Jobs </Link>
            </div>
        </div>
          <div className="job-listings">
            <p>Applied  Jobs</p>
            {
                  <ul>
                    {jobListings.map((job, index) => (
                      <li className="job-listing">
                      <h3>{job.title}</h3>
                      <p>{job.description}</p>
                      <div className="job-listing-footer">
                        <p>Company: {job.company_name}</p>
                        <p>Location: {job.location}</p>
                        <p>Posted at: {job.posted_at}</p>
                        <button onClick={() => handleApplyClick(job.id)}>Remove Submission</button>
                      </div>
                    </li>
                    ))}
                  </ul> 
            }
          </div>
        </>
      );
    }
    
    export default AppliedJobs;