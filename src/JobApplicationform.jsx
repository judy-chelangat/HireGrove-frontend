import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile,
} from 'mdb-react-ui-kit';
import './jobapplication.css';

function JobApplicationForm() {
  const [isSuccess, setIsSuccess] = useState(false); // Track the success status

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the job application data from the form.
    const jobApplicationData = {
      name: event.target.fullName.value,
      email: event.target.email.value,
      coverLetter: event.target.message.value,
      cv: event.target.cv.files[0],
    };

    // Post the job application data to the backend API.
    const response = await fetch('http://localhost:5555/job-applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobApplicationData),
    });

    // Handle the success response from the backend API.
    if (response.ok) {
      // The job application has been successfully submitted.
      // Update your state to reflect this and show the success message.
      setIsSuccess(true);
      // You can also reset the form fields here if needed.
    } else {
      // There was an error submitting the job application.
      // Handle the error here.
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol lg='9' className='my-5'>
          <h3 className='text-center mb-4'>Apply for a job</h3>

          <MDBCard>
            <MDBCardBody className='px-4'>
              <form onSubmit={handleSubmit}>
                {isSuccess && (
                  <div className='alert alert-success' role='alert'>
                    Application submitted successfully!
                  </div>
                )}
                <div className='mb-3'>
                  <label htmlFor='fullName' className='form-label'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='fullName'
                    name='fullName'
                    placeholder='John Doe'
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    placeholder='example@example.com'
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='message' className='form-label'>
                    Cover Letter
                  </label>
                  <textarea
                    className='form-control'
                    id='message'
                    name='message'
                    rows='3'
                    placeholder='Your message...'
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='cv' className='form-label'>
                    Upload CV
                  </label>
                  <input
                    type='file'
                    className='form-control'
                    id='cv'
                    name='cv'
                    accept='.pdf, .doc, .docx'
                  />
                  <small className='text-muted mt-2'>
                    Upload your CV/Resume or any other relevant file. Max file
                    size 50 MB.
                  </small>
                </div>

                <div className='text-center'>
                  <MDBBtn
                    size='lg'
                    className='send-application-button'
                    type='submit'
                  >
                    Send Application
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default JobApplicationForm;
