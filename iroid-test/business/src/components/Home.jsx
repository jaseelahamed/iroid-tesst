import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import tourism from '../images/tourism.png';
import cons from '../images/cons.webp';
import ho from '../images/ho.jpg';
import ed from '../images/ed.webp';
import null2 from '../images/null2.jpg';
import it from '../images/it.png';
import log from '../images/log.jpg';
import manu from '../images/manu.webp';

function Home() {

  const [currentUsername, setCurrentUsername] = useState(null);


  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('currentUsername');
    navigate('/');


    ;
  };
  useEffect(() => {
    // Retrieve the user from local storage
    const storedUser = localStorage.getItem('currentUsername');

    // If a user exists in local storage, parse the string to an object
    if (storedUser) {
      setCurrentUsername((storedUser));
    }
  }, []);

  return (
    <div>
       <div id="lg"  className="form-group">
      
                       <p id="name" >HI,{currentUsername} <button id="btn2" type="submit" className="btn btn-primary"  onClick={handleLogout}><Link id="l" to={`/Login`} className='btn'>Logout</Link></button> </p> 
                     </div>
                     <div id="title">
                     <label htmlFor="exampleInputEmail1" className="text-upercase">Name your Organization</label>
                     </div>
        <input id="input" type="text" placeholder="enter your organization name"   />
        <div id="title1">
                     <label htmlFor="exampleInputEmail1" className="text-upercase">Select Your Organization Type below</label>
                     </div>

{/* card */}




<div id="cards" className="row row-cols-1 row-cols-md-5 g-2">
  <div className="col">
    <div id="card" className="card h-100">
      <img src={null2} className="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div className="card-body">
   
        <p className="card-text">
          
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div  id="card" className="card h-100">
      <img src={cons} className="card-img-top" alt="Palm Springs Road"/>
      <div className="card-body">
        <h5 className="card-title">Constraction</h5>
        <p className="card-text"></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div  id="card" className="card h-100">
      <img src={ed} className="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">Education</h5>
        <p className="card-text"></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div id="card" className="card h-100">
      <img src={ho} className="card-img-top" alt="Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">Consultancy</h5>
        <p className="card-text">

        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div  id="card" className="card h-100">
      <img src={log} className="card-img-top" alt="Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">Logistic</h5>
        <p className="card-text">
       
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div  id="card" className="card h-100">
      <img  src={manu} className="card-img-top" alt="Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">Manufacturing</h5>
        <p className="card-text">
       
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    
    <div  id="card" className="card h-100">
      
      <img src={tourism} className="card-img-top" alt="Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">Tourism</h5>
        <p className="card-text">
    
        </p>
      </div>
    </div>
    
  </div>
  <div className="col">
    <div  id="card" className="card h-100">
      
      <img src={it} className="card-img-top" alt="Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">IT</h5>
        <p className="card-text">
         
        </p>
      </div>
    </div>
  </div>
</div>




<button className="next-button" >
      Next
    </button>



                     
    </div>
  )
}

export default Home