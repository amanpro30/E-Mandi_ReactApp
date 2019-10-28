import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Layout from '../Layout/Layout'

const Signup = (props) => (
  <Layout>    
        <div class="row">
    <div class="col-md-8 offset-md-2 user-registration__col" >
      <h2>Sign Up</h2>
        <p>If you are already registered <a class="link-green" href="/login">Login here</a>
        </p>

      <form class="new_user" id="new_user" action="https://agrimp.com/users" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Z5LFR6zJe+0d2jFzmvolSWd88X+2Uiu3+KxFxNLj2Yi5z61Eqm4qPQ82nz5cw6PVw7iegJS8E6YbmaY8Xkvfyw==" />
        <ul class="error_explanation"></ul>
        <div class="row">
          <div class="col-md-6 form-group">
            <label for="user_first_name">First Name</label>
            <input class="form-control" required="required" type="text" name="user[first_name]" id="user_first_name" />
          </div>

          <div class="col-md-6 form-group">
            <label for="user_last_name">Last Name</label>
            <input class="form-control" required="required" type="text" name="user[last_name]" id="user_last_name" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 form-group">
            <label for="user_company">Company</label>
            <input class="form-control" required="required" type="text" name="user[company]" id="user_company" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 form-group">
            <label class="required" for="user_vatin">Aadhaar Number</label><br />
            <input class="form-control" type="text" name="user[vatin]" id="user_vatin" />
          </div>

          <div class="col-md-6 form-group">
            <label class="required" for="user_mobile_number">Mobile number</label><br />
            <input class="form-control" required="required" id="phone-number" type="text" name="user[phone_number]" />
          </div>
        </div>

        <div class="row ">
          <div class="col-md-6 form-group">
          <label for="user_email">Email</label>
            <input autofocus="autofocus" class="form-control" required="required" type="email" value="" name="user[email]" id="user_email" />
          </div>
          <div class="col-md-6 form-group">
            <label for="user_country">Country</label>
            <input class="form-control" required="required" type="text" name="user[country]" id="country" />
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 form-group">
            <label for="user_password">Password</label>
              <em>(6 characters minimum)</em>
            <input autocomplete="off" class="form-control" required="required" type="password" name="user[password]" id="user_password" />
          </div>
          <div class="col-md-6 form-group">
            <label for="user_password_confirmation">Password Confirmation</label>
            <input autocomplete="off" class="form-control" required="required" type="password" name="user[password_confirmation]" id="user_password_confirmation" />
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
);

export default Signup;