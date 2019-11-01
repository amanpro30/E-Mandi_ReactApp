import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
// import classes3 from './Toolbar.css';
import Aux from '../../../hoc/Aux'

const toolbar =() => {
   
  const style1={

    fontSize: '25px',
    
  }
  

  
  return(
  <Aux>  
  <Navbar style={{ fontSize: '25px',backgroundColor: '#B1BBAD'}} bg="dark" variant="dark">
  <Navbar.Brand style={style1} href="/">E Mandi</Navbar.Brand>
  <Nav className="ml-auto">
    <Nav.Link style={style1} href="/">Home</Nav.Link>
    <Nav.Link href="#marketplace" className="mr-sm-2">Market</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
    <Nav.Link  href="/login">LogIn</Nav.Link>
    <Nav.Link href="/signup" >SignUp</Nav.Link>
    
  </Nav>
</Navbar>

</Aux>
  )

};

export default toolbar;
