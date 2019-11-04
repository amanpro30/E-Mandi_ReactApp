import React from "react";
import Layout from "../Layout/Layout";
import * as actions from "../../store/actions/auth";
import { connect } from "react-redux";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    profile: {
      phone: "",
      state: "",
      city: "",
      street: "",
      aadharcard: "",
      pincode: "",
      company: ""
    }
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handle_change1 = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState["profile"][name] = value;
      return newState;
    });
  };

  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-md-8 offset-md-2 user-registration__col">
            <h2>Sign Up</h2>
            <p>
              If you are already registered{" "}
              <a className="link-green" href="/login">
                Login here
              </a>
            </p>
            <form
              className="new_user"
              id="new_user"
              onSubmit={e => this.props.onSignup(e, this.state)}
              acceptCharset="UTF-8"
              method="post"
            >
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input
                type="hidden"
                name="authenticity_token"
                value="Z5LFR6zJe+0d2jFzmvolSWd88X+2Uiu3+KxFxNLj2Yi5z61Eqm4qPQ82nz5cw6PVw7iegJS8E6YbmaY8Xkvfyw=="
              />
              <ul className="error_explanation"></ul>
              <div className="row">
                <div className="col-md-8 form-group">
                  <label htmlFor="username">
                    <strong>UserName</strong>
                  </label>
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handle_change}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="first_name">
                    <strong>First Name</strong>
                  </label>
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handle_change}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="last_name">
                    <strong>Last Name</strong>
                  </label>
                  <input
                    className="form-control"
                    required="required"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.handle_change}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="password">
                    <strong>Password</strong>
                  </label>
                  <input
                    className="form-control"
                    required="required"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handle_change}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="user_company">
                    <strong>Company</strong>
                  </label>
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="company"
                    value={this.state.profile.company}
                    onChange={this.handle_change1}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="email">
                    <strong>E-Mail</strong>
                  </label>
                  <input
                    className="form-control"
                    required="required"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handle_change}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label className="required" htmlFor="aadharcard">
                    <strong>Aadhaar Number</strong>
                  </label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    name="aadharcard"
                    value={this.state.profile.aadharcard}
                    onChange={this.handle_change1}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="required" htmlFor="phone">
                    <strong>Mobile number</strong>
                  </label>
                  <br />
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="phone"
                    value={this.state.profile.phone}
                    onChange={this.handle_change1}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12 form-group">
                  <label htmlFor="street">
                    <strong>Street</strong>
                  </label>
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="street"
                    value={this.state.profile.street}
                    onChange={this.handle_change1}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-6 form-group">
                  <label htmlFor="city">
                    <strong>District</strong>
                  </label>
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="city"
                    value={this.state.profile.city}
                    onChange={this.handle_change1}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="state">
                    <strong>State</strong>
                  </label>
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="state"
                    value={this.state.profile.state}
                    onChange={this.handle_change1}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="pincode">
                    <strong>Pincode</strong>
                  </label>
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="pincode"
                    value={this.state.profile.pincode}
                    onChange={this.handle_change1}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        name="user[terms_and_conditions]"
                        type="hidden"
                        value="0"
                      />
                      <input
                        className="form-check-input"
                        required="required"
                        type="checkbox"
                        value="1"
                        name="user[terms_and_conditions]"
                        id="user_terms_and_conditions"
                      />
                      <span>
                        I agree with the{" "}
                        <a
                          target="_blank"
                          className="link-green"
                          href="../terms-conditions/agri-marketplace.html"
                        >
                          <span
                            className="translation_missing"
                            title="translation missing: en.devise.registrations.new.agri_marketplace_terms"
                          >
                            E-Mandi Terms
                          </span>
                        </a>{" "}
                        and{" "}
                        <a
                          target="_blank"
                          className="link-green"
                          href="../privacy.html"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 offset-md-4">
                  <input
                    type="submit"
                    name="commit"
                    value="Sign Up"
                    className="btn btn-solid btn--full"
                    data-disable-with="Sign Up"
                  />
                </div>
              </div>
              <br />
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

// Signup.propTypes = {
//   handle_signup: PropTypes.func.isRequired
// };

const mapStateToProps = state => {
  return {
    // username: state.auth.username,
    logged_in: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignup: (e, data) => dispatch(actions.authSignup(e, data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
