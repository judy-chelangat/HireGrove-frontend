import React from 'react';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import LandingPage from './LandingPage';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
            {/* <Route exact path='/beaches' element={<Beaches/>}/>
            <Route exact path='/ranches' element={<Ranches/>}/>
            <Route exact path='/parks' element={<Park/>}/>
            <Route exact path='/hotels' element={<Hotel/>}/> */}
        </Routes>
    </BrowserRouter>
    
</>
)

}

export default App;
