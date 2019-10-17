import React from 'react';
// import classes from './Toolbar.css';
// import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
const toolbar = (props) => (
    // <header className={classes.Toolbar}>
    //     <div>MENU</div>
    //     <div className={classes.Logo}>
    //         {/* <Logo /> */}
    //     </div>
    //     <nav>
    //         <NavigationItems />
    //     </nav>
    // </header
    // <div>
    // <nav className="navbar-default navbar-static-top">

    //     <div className="header-navbar-bottom">
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-xs-10 col-md-5">
    //                     <strong>E-Mandi</strong>
    //                 </div>
    //                 <div className="col-xs-12 col-md-7 navbar-items-div">
    //                     <ul className="nav navbar-nav float-xs-right">
    //                     <li class="nav-item"><a class="nav-link" id="/" href="index.html">Home</a></li>
    //         <li class="nav-item"><a class="nav-link" id="/commodities" href="commodities.html">Market</a></li>
    //         <li class="nav-item"><a class="nav-link" id="/under-construction" href="under-construction.html">Tools</a></li>
    //         <li class="nav-item dropdown">
    //           <a class="nav-link dropdown-toggle">About us</a>
    //           <ul class="dropdown-menu about-us">
    //             <li class="dropdown-item"><a class="dropdown-item" id="/our-company" href="our-company.html">Our company</a></li>
    //             <li class="dropdown-item"><a class="dropdown-item" id="/about-us" href="about-us.html">Our people</a></li>
    //             <li class="dropdown-item"><a class="dropdown-item" id="/faq" href="faq.html"><span class="translation_missing" title="translation missing: en.layouts.header.FAQ">Faq</span></a></li>
                
    //                     </ul>
    //                     </li>
    //                    </ul> 
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </nav>
    // </div>
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">E-Mandi</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link  href="#home">Home</Nav.Link>
        <Nav.Link  href="#link">Link</Nav.Link>
        <NavDropdown className="col-md-4 ml-auto" title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
     
    </Navbar.Collapse>
  </Navbar>

);

export default toolbar;