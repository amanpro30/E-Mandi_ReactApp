import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Layout from '../Layout/Layout'
import PropTypes from 'prop-types';
import axios from "axios";
import Aux from '../../hoc/Aux'

class Login extends React.Component{
  state = {
    username: '',
    password: '',
    logged_in: localStorage.getItem('token') ? true : false,

  };

  componentDidMount() {
    if (this.state.logged_in) {
      axios.get(`http://localhost:8000/accounts/current_user`,  {
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
    axios.post(`http://localhost:8000/token-auth/`, data)
      .then(res => {
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
      <Aux>
        <Layout>
          <br /><br /><br />
            <div class="user-session__form">
              <div>
                <h2>Login</h2>
                <form class="new_user" id="new_user" accept-charset="UTF-8" method="post" onSubmit={e => this.handle_login(e, this.state)} >
                  <div class="form-group">
                    <label for="username">UserName:</label>
                    <input autofocus="autofocus" class="form-control" type="text" name="username" value={this.state.username} onChange={this.handle_change} />
                  </div>
                  <div class="form-group">
                    <label for="password:">Password:</label>
                    <input class="form-control" type="password" name="password" value={this.state.password} onChange={this.handle_change}/>
                  </div>
                  <div class="actions">
                    <input type="submit" name="commit" value="Login" class="btn btn-solid btn--full" data-disable-with="Login" />
                  </div>
                </form>
              </div>
            <div class="user-session__links">
              <a href="password/new.html">Forgot your password?</a><br />
              <a href="/signup">Not registered yet? Sign up</a><br />
              <a href="confirmation/new.html">Didn&#39;t receive confirmation instructions?</a><br />
              <br /><br /><br />
            </div>
          </div>
        </Layout>
      </Aux>
    );
  }
};

export default Login;