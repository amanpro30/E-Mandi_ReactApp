import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Aux from "../../../hoc/Aux";
import * as actions from "../../../store/actions/auth";

const toolbar = props => {
  const style1 = {
    fontSize: "25px",
    background: "dimgray"
  };
  return (
    <Aux>
      <div>
      {/* <Navbar style={style1} variant="dark" >
        <Navbar.Brand style={{ fontSize: "30px", color:'black' }} href="/">
          <h2 style={{color:'black'}}>E Mandi</h2>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link style={{ fontSize: "25px" }} href="/">
            Home
          </Nav.Link>
          <Nav.Link href="/marketplace">Market</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
          {props.islogged ? (
            <Nav.Link href="/profile">Profile</Nav.Link>
          ) : (
            <Nav.Link href="/signup">SignUp</Nav.Link>
          )}
          {props.islogged ? (
            <Nav.Link href="/logout" onClick={() => props.onLogOut()}>
              <h2 style={{color:'black'}}>LogOut</h2>
            </Nav.Link>
          ) : (
            <Nav.Link href="/login"><h2 style={{color:'black'}}>LogIn</h2></Nav.Link>
          )}
        </Nav>
      </Navbar> */}
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top" style={{height:"55px"}}>
    <div class="container">
      <a href="/" class="navbar-brand"><b>E Mandi</b></a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a href="/" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/marketplace">Market</a>
          </li>
          <li class="nav-item">
            <a href="/how_we_work/" class="nav-link">How we work</a>
          </li>
          <li class="nav-item">
            <a href="/contact/" class="nav-link">Contact</a>
          </li>
          
          
          <li class="nav-item">
            <a href="/login/" class="nav-link">Login</a>
          </li>
           <li class="nav-item">
            <a href="/rmp/login/" class="nav-link">Rmp Login</a>
          </li>
          
         
          <li class="nav-item">
            <a href="/shoponline/" class="nav-link">Shop Medicines</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </div>
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    islogged: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(actions.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toolbar);
