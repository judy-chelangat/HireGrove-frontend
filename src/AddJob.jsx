import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './Addjob.css';

function AddJob() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    company_name: '',
    posted_at: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5555/Availablejobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newJob = await response.json();
        setIsSuccess(true);
        console.log('New job:', newJob);
        // You can reset the form here if needed.
      } else {
        console.error('Error adding job:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol lg='9' className='my-5'>
          <h2 className='text-center mb-4'>Add Job Offer</h2>

          <MDBCard>
            <MDBCardBody className='px-4'>
              <form onSubmit={handleSubmit}>
                {isSuccess && (
                  <div className='alert alert-success' role='alert'>
                    Job added successfully!
                  </div>
                )}
                <div className='mb-3'>
                  <label htmlFor='title' className='form-label'>
                    Job Title
                  </label>
                  <MDBInput
                    type='text'
                    id='title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='description' className='form-label'>
                    Job Description
                  </label>
                  <MDBTextArea
                    id='description'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='location' className='form-label'>
                    Location
                  </label>
                  <MDBInput
                    type='text'
                    id='location'
                    name='location'
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='company_name' className='form-label'>
                    Company Name
                  </label>
                  <MDBInput
                    type='text'
                    id='company_name'
                    name='company_name'
                    value={formData.company_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='posted_at' className='form-label'>
                    Posted At
                  </label>
                  <MDBInput
                    type='date'
                    id='posted_at'
                    name='posted_at'
                    value={formData.posted_at}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='text-center'>
                  <MDBBtn
                    size='lg'
                    className='send-application-button'
                    type='submit'
                  >
                    Add Job
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

export default AddJob;
