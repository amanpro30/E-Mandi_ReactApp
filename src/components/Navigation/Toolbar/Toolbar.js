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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ height: "55px" }} >
          
          <div class="container ">
            
            <a href="/" class="navbar-brand">
              <b class = " danger navbar-header" >&#8377;Mandi</b>


            </a>
            <button
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a href="/" class="nav-link">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/marketplace">
                    Market
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/portfolio" class="nav-link">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/wallet" class="nav-link">
                    Wallet
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/pricing" class="nav-link">
                    Pricing
                  </a>

                  {/* {props.islogged ? (
                    <Nav.Link href="/profile">Profile</Nav.Link>
                  ) : (
                    <Nav.Link href="/signup">SignUp</Nav.Link>
                  )}
                  {props.islogged ? (
                    <Nav.Link href="/logout" onClick={() => props.onLogOut()}>
                      <h2 style={{ color: "black" }}>LogOut</h2>
                    </Nav.Link>
                  ) : (
                    <Nav.Link href="/login">
                      <h2 style={{ color: "black" }}>LogIn</h2>
                    </Nav.Link>
                  )} */}
                </li>
                <li class="nav-item">
                  {props.islogged ? (
                    <a href="/profile" class="nav-link">
                      Profile
                    </a>
                  ) : (
                    <a href="/signup" class="nav-link">
                      SignUp
                    </a>
                  )}
                </li>

                <li class="nav-item">
                  {props.islogged ? (
                    <a href="/logout" onClick={() => props.onLogOut()}>
                      <h3 style={{ height: "2px", width: "3px" }}> LogOut</h3>
                    </a>
                  ) : (
                    <a href="/login" class="nav-link">
                      Login
                    </a>
                  )}
                </li>
                {/* // <li class="nav-item">
                //   <a href="/signup" class="nav-link">
                //     SignUp
                //   </a>
                // </li> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(toolbar);
