
import React, { useState } from 'react'
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Login({ setCurrentUser }) {

  const [token, setToken] = useState('');
  const [currentUsername, setcurrentUsername] = useState('');

  const navigate = useNavigate();

  const [email, setName] = useState('');
  
  const [pswd, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the login data
    const loginData = {
      email,
      pswd,
    };

   
   // Make a POST request to the login endpoint
   axios.post("http://localhost:3000/login", loginData)
   .then((response) => {
     // Handle the response data
     if(response.data.status==true){
      console.log(response.data.currentUser);
     console.log(response.data);
   
     
    const {currentUsername}=response.data
     const { token } = response.data;
       // Save user information in local storage
       localStorage.setItem('currentUsername', currentUsername);
       localStorage.setItem('token', token);
    alert(response.data.message)
    navigate('/home');
     }
     else{
      alert(response.data.message)
     }
    
     
     // Store the token in local storage or state for future authenticated requests
   })
   .catch((error) => {
     // Handle login failure and display error message
    //  console.error('Error:', error);
    alert("Invalid Username or Password")
   });
};

  return (
    <div>
       <div id="lg" className="form-group">
                       <p>Don't have an account? <button id="btn2" type="submit" className="btn btn-primary"><Link id="l" to={`/register`} className='btn'>signup</Link></button> </p> 
                     </div>
 <div>
      
                     
 <div className="container">
 <div id="c">
      <form onSubmit={handleSubmit} className="registration-form">
        <h4 className='title'>Welcome back!</h4>
        
        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
        <input type="email" placeholder="email"   value={email}
        onChange={(e) => setName(e.target.value)}/>
       
        <label htmlFor="exampleInputEmail1" className="text-uppercase"> Password</label>
        <input    type="password" placeholder="Password"         value={pswd}
        onChange={(e) => setPassword(e.target.value)}/>
 
        <button id="btn" type="submit">Login</button>
      </form>
    
    
    </div>
    </div>

    </div>


    </div>
  )
}

export default Login