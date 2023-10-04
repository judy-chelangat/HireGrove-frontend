import React,{useState} from "react";
import "./login.css"

const Login=()=>{
    const [formData,setFormData]=useState({
        username:'',
        password:'',
    });

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        //Create function to link to the database.
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="Username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    />
                    <input
                    type="password"
                    name="Password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;