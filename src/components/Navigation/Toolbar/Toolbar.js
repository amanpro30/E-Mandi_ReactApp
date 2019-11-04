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
      <Navbar style={style1} variant="dark">
        <Navbar.Brand style={{ fontSize: "30px" }} href="/">
          E Mandi
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link style={{ fontSize: "25px" }} href="/">
            Home
          </Nav.Link>
          <Nav.Link href="/marketplace">Market</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          {props.islogged ? (
            <Nav.Link href="/profile">Profile</Nav.Link>
          ) : (
            <Nav.Link href="/signup">SignUp</Nav.Link>
          )}
          {props.islogged ? (
            <Nav.Link href="/logout" onClick={() => props.onLogOut()}>
              <button>LogOut</button>
            </Nav.Link>
          ) : (
            <Nav.Link href="/login">LogIn</Nav.Link>
          )}
        </Nav>
      </Navbar>
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
