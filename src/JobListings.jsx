import React, { useState } from 'react';
import JobListing from './JobListing';
import { Link } from 'react-router-dom';


function JobListings() {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the user's input
  const [locationFilter, setLocationFilter] = useState(""); // State to hold the location filter
    // // fetching the jobs from the backend api
    // const [jobListings, setJobListings] = useState([]);

    // useEffect(() => {
    //     // Fetch the job listings from the backend API
    //     fetch("/api/job-listings")
    //       .then((response) => response.json())
    //       .then((jobListings) => setJobListings(jobListings));
    //   }, []);
    const jobListings = [
        {
          id: 1,
          title: "Software Engineer",
          description: "We are looking for a talented software engineer to join our team. You will be responsible for developing and maintaining our web applications.",
          company_name: "Google",
          location: "Mountain View, CA",
          posted_at: "2023-08-04"
        },
        {
          id: 2,
          title: "Product Manager",
          description: "We are looking for a product manager to help us develop and launch new products. You will be responsible for gathering user requirements, working with engineers to design and develop products, and launching and marketing new products.",
          company_name: "Facebook",
          location: "Menlo Park, CA",
          posted_at: "2023-08-03"
        }
      ];
      // Filtering the jobs based on the search term
      const filteredJobs = jobListings.filter((job) => {
        const jobTitle = job.title || "";
        return jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
      });
    
      return (
        <>
       <div className="job-nav-bar">
            
            <div className="job-nav-links">
            <Link to="/jobs/appliedjobs">Applied Jobs </Link>
            <Link to="postjob" className="create-job-alert">Create Job Alert</Link>
            </div>
        </div>
          <div className='jobsearch-container'>
            <form action="">
              <input
                placeholder='job title'
                className='search-jobs'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
    
          <div className="job-listings">
            <p>Available Jobs</p>
            {/* Conditional rendering to display the jobs */}
            {
              searchTerm !== ''
                ? filteredJobs.map((job, index) => (
                    <JobListing key={index} job={job} />
                  ))
                : (
                  <ul>
                    {jobListings.map((job, index) => (
                      <JobListing key={index} job={job} />
                    ))}
                  </ul>
                )
            }
          </div>
        </>
      );
    }
    
    export default JobListings;