import React from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import Aux from "../../hoc/Aux";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "",
      password: "",
      logged_in: this.props.isAuthenticated,
      error_description: localStorage.getItem("error_description_login")};

    this.handle_change = this.handle_change.bind(this);
    
  }

  handle_change(event) {
    console.log('mkc')
    this.setState({value: event.target.value});
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  }
  // }
  // state = {
  //   username: "",
  //   password: "",
  //   logged_in: this.props.isAuthenticated,
  // };

  componentDidMount() {
    if (this.state.logged_in) {
      axios
        .get(`http://localhost:8000/accounts/current_user`, {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`
          }
        })

        .then(res => {
          console.log(this.setState({ username: res.username }));
        });
    }
  }

  // handle_change = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState(prevstate => {
  //     const newState = { ...prevstate };
  //     newState[name] = value;
  //     return newState;
  //   });
  // };

  render() {
    return (
      <Aux>
        <Layout>
          <br />
          <br />
          <br />
          <h2> {this.state.error_description}</h2>
          <div class="user-session__form">
            <div>
              <h2>Login</h2>
              <form
                class="new_user"
                id="new_user"
                accept-charset="UTF-8"
                method="post"
                onSubmit={e => this.props.onLogin(e, this.state)}
              >
                <div class="form-group">
                  <label for="username">
                    <strong>UserName:</strong>
                  </label>
                  <input
                    autofocus="autofocus"
                    class="form-control"
                    type="text"
                    name="username"
                    // value={this.state.username}
                    onChange={this.handle_change}
                  />
                </div>
                <div class="form-group">
                  <label for="password:">
                    <strong>Password:</strong>
                  </label>
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                    // value={this.state.password}
                    onChange={this.handle_change}
                  />
                </div>
                <div class="actions">
                  <input
                    type="submit"
                    name="commit"
                    value="Login"
                    class="btn btn-secondary btn--full"
                    data-disable-with="Login"
                  />
                </div>
              </form>
            </div>
            <div class="user-session__links">
              <a href="password/new.html">Forgot your password?</a>
              <br />
              <a href="/signup">Not registered yet? Sign up</a>
              <br />
              <a href="confirmation/new.html">
                Didn&#39;t receive confirmation instructions?
              </a>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </Layout>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return{
    isAuthenticated: state.auth.isAuthenticated,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (e, data) => dispatch(actions.authLogin(e, data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loginp);
