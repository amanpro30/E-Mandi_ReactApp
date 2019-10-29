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
import { connect } from 'react-redux';

const toolbar =(props) => {
   
  const style1={
    fontSize: '25px',
  }
  
  

  
  return(
  <Aux>  
  <Navbar style={style1} bg="dark" variant="dark">
  <Navbar.Brand style={style1} href="#home">Navbar</Navbar.Brand>
  <Nav className="ml-auto">
    <Nav.Link style={style1} href="/">Home</Nav.Link>
    <Nav.Link href="/login">Market Place</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
    {/* {
      props.isAuthenticated == false && */}
      <Nav.Link  href="/login">LogIn</Nav.Link> 
      <Nav.Link href="/signup">SignUp</Nav.Link>
{/*     
    {
      props.isAuthenticated == false &&
      <Nav.Link  href="/login">LogOut</Nav.Link>
    } */}
  </Nav>
</Navbar>

</Aux>
  )

};

const mapStateToProps = state => {
    return {
        isAuthenticated:state.isAuthenticated,
    };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch({type: 'LOGOUT'}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(toolbar);