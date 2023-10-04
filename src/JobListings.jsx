import React, { useState ,useEffect} from 'react';
import JobListing from './JobListing';
import { Link } from 'react-router-dom';


function JobListings() {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the user's input
  const [locationFilter, setLocationFilter] = useState(""); // State to hold the location filter
    // fetching the jobs from the backend api
    const [jobListings, setJobListings] = useState([]); 


      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
        // Fetch the job listings from the backend API
        fetch("http://127.0.0.1:5555/Availablejobs")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((jobListings) => {
            console.log("Fetched job listings:", jobListings); 
            setJobListings(jobListings);
            setLoading(false); // Mark loading as complete
          })
          .catch((error) => {
            console.error("Error fetching job listings:", error); 
            setError(error); // Set the error state
            setLoading(false); // Mark loading as complete
          });
      }, []);

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
              jobListings !== '' && jobListings.length > 0 ? (
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
              ) : (
                <p>Loading job listings...</p>
              )
            }

          </div>
        </>
      );
    }
    
    export default JobListings;