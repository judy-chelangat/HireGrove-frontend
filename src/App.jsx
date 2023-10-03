import React from "react";
import Login from './Login.jsx'
import Signup from './SignUpForm.jsx'
import Footer from './Footer.jsx'
import AddJob from "./AddJob.jsx";
import JobApplicationForm from './JobApplicationform.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App(){
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route exact path='/'element={<Footer/>}/>
                    <Route path='/Signup' element={<Signup/>}/>
                    <Route path='/JobApplication' element={<JobApplicationForm/>}/>
                    <Route path="/Addjob" element={<AddJob/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default App;
