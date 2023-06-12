import React, { useState } from 'react'
import './register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPassword] = useState('');
  

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API call to register the user
    axios
      .post("http://localhost:3000/register", { name, email, pswd })
      .then((response) => {
        console.log(response.data);
        alert(response.data.message)
        navigate('/Login');
        
        // Handle the response data as needed
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
 
  



  return (
    <div>
       <div id="lg" className="form-group">
                       <p>Already have account ? Please <button id="btn2" type="submit" className="btn btn-primary"><Link id="l" to={`/Login`} className='btn'>Login</Link></button> </p> 
                     </div>
                     
 <div className="container">
 <div id="c">
      <form onSubmit={handleSubmit} className="registration-form">
        <h4 className='title'>Let's go!</h4>
        
        <label htmlFor="exampleInputEmail1" className="text-uppercase">Full Name</label>
        <input type="text" placeholder="Name"   value={name}
        onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
        <input   type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="exampleInputEmail1" className="text-uppercase">Choose Password</label>
        <input    type="password" placeholder="Password"  value={pswd}
        onChange={(e) => setPassword(e.target.value)}/>
        {/* {error && <div className={StylePropertyMap.error.msg}>{error}</div>} */}
        <button id="btn" type="submit">Register</button>
      </form>
    
    
    </div>
    </div>

    </div>
  )
}

export default Register