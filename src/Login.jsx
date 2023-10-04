import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

const Login=()=>{
    const [formData,setFormData]=useState({
        username:'',
        password:'',
    });
    
    const navigate = useNavigate();

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    };
// function to link to the database.
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        //object with the user's login data
        const userData = {
          username: formData.username,
          password: formData.password,
        };
    
        //  POST request to backend API for login
        fetch("/log in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((response) => {
            if (response.status === 200) {
              // Login successful
              // Redirect to the /jobs page
              navigate("/jobs");
            } else {
              return response.json().then((data) => {
                console.error("Login failed:", data.message);
              });
            }
          })
          .catch((error) => {
            // other errors
            console.error("Login failed:", error);
          });
      };

    return (
        <div className="popup">
            <div className="popup-content">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    />
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    />
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;