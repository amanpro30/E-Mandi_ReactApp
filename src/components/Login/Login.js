import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Layout from '../Layout/Layout'

const Login = (props) => (
  <Layout>
    <br /><br /><br />
 

        <div class="user-session__form">
        <div>
          <h2>Login</h2>
          <form class="new_user" id="new_user" action="https://agrimp.com/users/sign_in" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="OUfnnUwPi1Z0+RWo5xpkHJlr4jsFRvev+4ptcy+rP1/nGo+eSqjahmYVu+UhI+KAPa+NxCeoz74Yv46LowM5HA==" />
            <div class="form-group">
              <label for="user_Email:">Email:</label>
              <input autofocus="autofocus" class="form-control" pattern=".+@gmail.com" type="email"  name="user[email]" id="user_email" />
            </div>

            <div class="form-group">
              <label for="user_Password:">Password:</label>
              <input autocomplete="off" class="form-control" type="password" name="user[password]" id="user_password" />
            </div>

            <div class="actions">
              <input type="submit" name="commit" value="Login" class="btn btn-solid btn--full" data-disable-with="Login" />
            </div>
          </form>    </div>

        <div class="user-session__links">

          <a href="password/new.html">Forgot your password?</a><br />

          <a href="/signup">Not registered yet? Sign up</a><br />

          <a href="confirmation/new.html">Didn&#39;t receive confirmation instructions?</a><br />
          <br /><br /><br />

        </div>

      </div>
  
  </Layout>
);


export default Login;