import React ,{ useState } from 'react';
// import SignUpForm from './SignUpForm'
import Navbar from './Navbar';
import Footer from './Footer';

function LandingPage() {
    // const [showSignupForm,setShowSignupForm]=useState(false);

    // const handleSignupClick =()=>{
    //     setShowSignupForm(true)
    // }
    
  return (
    <>
        <Navbar/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex align-items-center">
            <div>
              <h1>Find freelance and full-time developer jobs</h1>
              <p>HireGroove is your one-stop-center for thousands of digital freelance and full-time jobs</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              src='/image 138.png'
              alt="a person"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default LandingPage
