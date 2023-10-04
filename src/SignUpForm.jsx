import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import './signup.css';


const Signup=()=>{
    const[formData,setFormData]=useState({
        username:'',
        email:'',
        password:'',
    });
    
    const navigate = useNavigate();
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
  // function to send signup data to the backend.
    const handleSubmit=(e)=>{
        e.preventDefault();
      

        //  an object with the user's registration data
    const userData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };
  
      // POST request to  backend API
      fetch("https://job-application-backend.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
      .then(async (response) => {
        if (response.status === 201) {
          // Registration successful
          const data = await response.json();
          // Save the JWT token in localStorage or a secure cookie
          localStorage.setItem('access_token', data.access_token);
          // Redirect to the /jobs page
          navigate("/jobs");
        } else {
          // Handle registration error
          return response.json().then((data) => {
            console.error("Registration failed:", data.message);
          });
        }
      })
      .catch((error) => {
        // Handle network errors
        console.error("Registration failed:", error);
      });
  };
  
  

    return(
        <div className="popup">
            <div className="popup-content">
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    />
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    />
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    />
                    <button type="submit" onClick={handleSubmit}>SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;
