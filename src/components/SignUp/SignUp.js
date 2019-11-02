import React from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout'

class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    // confirmpwd: '',
    email: '',
    first_name: '',
    last_name: '',
    profile: {
      phone: '',
      state: '',
      city: '',
      street: '',
      aadharcard: '',
      pincode: '',
      company: '',
    },
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/accounts/signup/`, data)
      .then(res => {
        console.log("all okay")
        console.log(res);
        console.log(data);
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
        window.location.href = "/";
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: res.username
        });
      })
      .catch(e => console.log("error!!!!!", e))
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
      newState['profile'][name] = value;
      return newState;
    });
  };

  render() {
    return (
      <Layout>
        <div class="row">
          <div class="col-md-8 offset-md-2 user-registration__col" >
            <h2>Sign Up</h2>
            <p>If you are already registered <a class="link-green" href="/login">Login here</a>
            </p>
            <form class="new_user" id="new_user" onSubmit={e => this.handle_signup(e, this.state)} accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Z5LFR6zJe+0d2jFzmvolSWd88X+2Uiu3+KxFxNLj2Yi5z61Eqm4qPQ82nz5cw6PVw7iegJS8E6YbmaY8Xkvfyw==" />
              <ul class="error_explanation"></ul>
              <div class="row">
                <div class="col-md-8 form-group">
                  <label for="username">UserName</label>
                  <input class="form-control" required="required" type="text" name="username" value={this.state.username} onChange={this.handle_change} />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="first_name">First Name</label>
                  <input class="form-control" required="required" type="text" name="first_name" value={this.state.first_name} onChange={this.handle_change} />
                </div>
                <div class="col-md-6 form-group">
                  <label for="last_name">Last Name</label>
                  <input class="form-control" required="required" name="last_name" value={this.state.last_name} onChange={this.handle_change}/>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="password">Password</label>
                  <input class="form-control" required="required" type="password" name="password" value={this.state.password} onChange={this.handle_change}/>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="user_company">Company</label>
                  <input class="form-control" required="required" type="text" name="company" value={this.state.profile.company} onChange={this.handle_change1} />
                </div>
                <div class="col-md-6 form-group">
                  <label for="email">E-Mail</label>
                  <input class="form-control" required="required" type="email" name="email" value={this.state.email} onChange={this.handle_change} />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <label class="required" for="aadharcard">Aadhaar Number</label><br />
                  <input class="form-control" type="text" name="aadharcard" value={this.state.profile.aadharcard} onChange={this.handle_change1} />
                </div>
                <div class="col-md-6 form-group">
                  <label class="required" for="phone">Mobile number</label><br />
                  <input class="form-control" required="required" type="text" name="phone" value={this.state.profile.phone} onChange={this.handle_change1} />
                </div>
              </div>
              <div class="row ">
                <div class="col-md-12 form-group">
                  <label for="street">Street</label>
                  <input class="form-control" required="required" type="text" name="street" value={this.state.profile.street} onChange={this.handle_change1} />
                </div>
              </div>
              <div class="row ">
                <div class="col-md-6 form-group">
                  <label for="city">District</label>
                  <input class="form-control" required="required" type="text" name="city" value={this.state.profile.city} onChange={this.handle_change1} />
                </div>
                <div class="col-md-6 form-group">
                  <label for="state">State</label>
                  <input autofocus="autofocus" class="form-control" required="required" type="text" name="state" value={this.state.profile.state} onChange={this.handle_change1} />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="pincode">pincode</label>
                  <input class="form-control" required="required" type="text" name="pincode" value={this.state.profile.pincode} onChange={this.handle_change1}/>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input name="user[terms_and_conditions]" type="hidden" value="0" /><input class="form-check-input" required="required" type="checkbox" value="1" name="user[terms_and_conditions]" id="user_terms_and_conditions" />
                      <span>I agree with the <a target="_blank" class="link-green" href="../terms-conditions/agri-marketplace.html"><span class="translation_missing" title="translation missing: en.devise.registrations.new.agri_marketplace_terms">Agri Marketplace Terms</span></a> and <a target="_blank" class="link-green" href="../privacy.html">Privacy Policy</a></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 offset-md-4">
                  <input type="submit" name="commit" value="Sign Up" class="btn btn-solid btn--full" data-disable-with="Sign Up" />
                </div>
              </div>
              <br />
            </form>
          </div>
        </div>
      </Layout>
    )
  }
};

Signup.propTypes = {
  handle_signup: PropTypes.func.isRequired
};

export default Signup;