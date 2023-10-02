import React from 'react';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import JobListings from './JobListings';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
            <Route exact path='/jobs' element={<JobListings/>}/>
          
        </Routes>
    </BrowserRouter>
    
</>
)

}

export default App;
