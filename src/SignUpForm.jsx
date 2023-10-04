import React,{useState} from "react";
import './signup.css';

const Signup=()=>{
    const[formData,setFormData]=useState({
        username:'',
        email:'',
        password:'',
    });

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        //Create function to send signup data to the backend.
    };


    return(
        <div className="popup">
            <div className="popup-content">
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="Username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    />
                    <input
                    type="email"
                    name="Email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    />
                    <input
                    type="password"
                    name="Password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    />
                    <button type="submit">SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;
