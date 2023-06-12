import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'
import {
  MDBNavbar,
  MDBContainer,
//   MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
//   MDBBadge
} from 'mdb-react-ui-kit';

function Main() {
  return (
    <div>
    <MDBNavbar id="nav" expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>
              {/* <MDBBadge pill color='danger'>!</MDBBadge> */}
              <span>
                {/* <MDBIcon fas icon='shopping-cart'></MDBIcon> */}
              </span>
              <Link id="l" to={`/Login`} className='btn'>Login</Link>
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
<div id="w">
    <h1 id="h">Welcome To Iroid Technologies </h1>
</div>
    </div>
  );
}





export default Main