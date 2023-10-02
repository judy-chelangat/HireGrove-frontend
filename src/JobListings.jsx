import React from 'react';
import JobListing from './JobListing';


function JobListings() {
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

  return (
    <div className="job-listings">
      <h4>Job Listings</h4>
      <ul>
        {jobListings.map((job, index) => (
          <JobListing key={index} job={job} />    
        ))}
      </ul>
    </div>
  );
}

export default JobListings;
