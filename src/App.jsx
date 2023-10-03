import React from 'react';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import JobListings from './JobListings';
import AppliedJobs from './AppliedJobs';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
            <Route exact path='/jobs' element={<JobListings/>}/>
            <Route path="/jobs/appliedjobs" element={<AppliedJobs />} />
            {/* <Route path="/postjob" element={<PostJob />} /> */}
          
        </Routes>
    </BrowserRouter>
    
</>
)

}

export default App;
