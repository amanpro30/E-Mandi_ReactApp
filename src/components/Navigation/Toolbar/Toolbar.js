import React, {Component} from 'react';
// import classes from './Toolbar.css';
// import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
// import classes3 from './Toolbar.css';
import Login from '../../Login/Login'
import Aux from '../../../hoc/Aux'

const toolbar =() => {
   
  const style1={

    fontSize: '25px',
  }
  

  
  return(
  <Aux>  
  <Navbar style={style1} bg="dark" variant="dark">
  <Navbar.Brand style={style1} href="#home">Navbar</Navbar.Brand>
  <Nav className="ml-auto">
    <Nav.Link style={style1} href="/">Home</Nav.Link>
    <Nav.Link href="#features" className="mr-sm-2">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
    <Nav.Link  href="/login">LogIn</Nav.Link>
    <Nav.Link href="/signup" >SignUp</Nav.Link>
    
  </Nav>
</Navbar>

</Aux>
  )

};

export default toolbar;