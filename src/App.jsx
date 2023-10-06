import React from 'react';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import JobListings from './JobListings';
import AppliedJobs from './AppliedJobs';
import Login from './Login.jsx'
import Signup from './SignUpForm.jsx'
import Footer from './Footer.jsx'
import AddJob from "./AddJob.jsx";
import JobApplicationForm from './JobApplicationform.jsx'

function App() {
    
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
            <Route exact path='/jobs' element={<JobListings/>}/>
            <Route path="/jobs/appliedjobs" element={<AppliedJobs />} />
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/'element={<Footer/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/jobApplication' element={<JobApplicationForm/>}/>
            <Route path="/addjob" element={<AddJob/>}/>
          
        </Routes>
    </BrowserRouter>
    
</>
)

}

export default App;
