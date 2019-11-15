
import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
   logged_in: localStorage.getItem('token') ? true : false,

  };

  componentDidMount() {
    if (this.state.logged_in) {
      axios.get(`core/current_user`,  {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
       
        .then(res => {
         console.log( this.setState({ username: res.username }));
        });
    }
  }


  handle_login = (e, data) => {

    e.preventDefault();

      console.log(data);

axios.post(`token-auth/`, data)
      .then(res => {
        console.log("all okay")
        console.log(res);
        console.log(res.data.token);
          localStorage.setItem('token', res.data.token);
           window.location.href = "/";

          this.setState({
          logged_in: true,
          displayed_form: '',
          username: res.data.username
        });

      })





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

  render() {
    return (
      <form onSubmit={e => this.handle_login(e, this.state)}>
        <h4>Log In</h4>
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
        <input type="submit" />
        
      </form>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};