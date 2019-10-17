import React from 'react';
// import classes from './Toolbar.css';
// import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
// import classes3 from './Toolbar.css';
const toolbar = (props) => {
   
  const style1={

    fontSize: '25px',
  }
  return(
  <Navbar style={style1} bg="dark" variant="dark">
  <Navbar.Brand style={style1} href="#home">Navbar</Navbar.Brand>
  <Nav className="ml-auto">
    <Nav.Link style={style1} href="#home">Home</Nav.Link>
    <Nav.Link href="#features" className="mr-sm-2">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
    <Nav.Link href="#login" >LogIn</Nav.Link>
    <Nav.Link href="#Signup" >SignUp</Nav.Link>
    
  </Nav>
  {/* <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-info">Search</Button>
  </Form> */}
</Navbar>
  )
  };

export default toolbar;