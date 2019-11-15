import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

class SignupForm extends React.Component {
  state = {
    username: '',
    password: '',
    email:'',
    first_name:'',
    last_name:'',    
    profile: {
      phone:'',
      // image:'',
      state:'',
      city:'',
      street:'',
      aadharcard:'',
      pincode:'',
      company:'',
    },
  };


  handle_signup = (e, data) => {

    e.preventDefault();

      console.log(data);

axios.post(`accounts/signup/`, data)
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
.catch(e=>console.log("error!!!!!", e))
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
      <form onSubmit={e => this.handle_signup(e, this.state)}>
        <h4>Sign Up</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
	 <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handle_change}
        />
	 <label htmlFor="first_name">first_name</label>
        <input
          type="text"
          name="first_name"
          value={this.state.first_name}
          onChange={this.handle_change}
        />
	 <label htmlFor="last_name">last_name</label>
        <input
          type="text"
          name="last_name"
          value={this.state.last_name}
          onChange={this.handle_change}
        />
	 <label htmlFor="company">company</label>
        <input
          type="text"
          name="company"
          value={this.state.profile.company}
          onChange={this.handle_change1}
        />
	 <label htmlFor="phone">phone</label>
        <input
          type="text"
          name="phone"
          value={this.state.profile.phone}
          onChange={this.handle_change1}
        />
	 {/* <label htmlFor="image">image</label>
        <input
          type="image"
          name="image"
          value={this.state.profile.image}
          onChange={this.handle_change1}
        /> */}
	 <label htmlFor="state">state</label>
        <input
          type="text"
          name="state"
          value={this.state.profile.state}
          onChange={this.handle_change1}
        />
	 <label htmlFor="city">city</label>
        <input
          type="text"
          name="city"
          value={this.state.profile.city}
          onChange={this.handle_change1}
        />
	 <label htmlFor="street">street</label>
        <input
          type="text"
          name="street"
          value={this.state.profile.street}
          onChange={this.handle_change1}
        />
	 <label htmlFor="aadharcard">aadharcard</label>
        <input
          type="text"
          name="aadharcard"
          value={this.state.profile.aadharcard}
          onChange={this.handle_change1}
        />
	 <label htmlFor="pincode">pincode</label>
        <input
          type="text"
          name="pincode"
          value={this.state.profile.pincode}
          onChange={this.handle_change1}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};