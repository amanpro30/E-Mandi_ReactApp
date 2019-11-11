import React from "react";
import Layout from "../Layout/Layout";
import * as actions from "../../store/actions/auth";
import { connect } from "react-redux";

class Signup extends React.Component {
  state = {
    data:{
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    profile: {
      phone: "",
      state: "Uttarakhand",
      city: "",
      street: "",
      aadharcard: "",
      pincode: "",
      company: ""
    },
  },
    aadharErrorL:" ",
    aadharErrorN:" ",
    mobileErrorL:" ",
    mobileErrorN:" ",
    pinErrorL:" ",
    pinErrorN:" ",
    password_confirm:"",
    passwordError:" ",
    firstNameError:"",
    lastNameError:"",
    districtError:"",
    stateError:"",
    emailError:"",
    error_description: ""
  } 
  
  componentDidMount(){
    this.setState({error_description:localStorage.getItem("error_description_username")});
    localStorage.removeItem('error_description_username');
  }

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState["data"][name] = value;
      return newState;
    });
    let err="";

    
    
    if(name==='first_name'){
      if(value!==" " && !value.match(/^[a-zA-Z]+$/)){
        err=<strong style={{color:"red"}} >Invalid Name</strong>
      }
      
    
    
    this.setState({firstNameError:err});
    }
    if(name==='last_name'){
      if(value!==" " && !value.match(/^[a-zA-Z]+$/)){
        err=<strong style={{color:"red"}} >Invalid Name</strong>
      }
      
    
    
    this.setState({lastNameError:err});
    }

    if(name==='email'){
      if(value!==" " ){
        let lastAtPos = value.lastIndexOf('@');
           let lastDotPos = value.lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && value.indexOf('@@') === -1 && lastDotPos > 2 && (value.length - lastDotPos) > 2)) {
              
            err=<strong style={{color:"red"}} >Invalid Email</strong>
      }
      }
      
    
    
    this.setState({emailError:err});
    }

  };
  handle_change2 = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
    let err=" ";
    let password=this.state.data.password
    if(name==='password_confirm'){
      if(value!==" " && value!==password){
        err=<strong style={{color:"red"}} >Pasword and Confirm Password Must Match</strong>
      }
      
    
    
    this.setState({passwordError:err});
    }
  }
  handle_change1 = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState["data"]["profile"][name] = value;
      return newState;
    });

    let err=" ";
    let err1=" ";
    if(name==='aadharcard'){
      if(value!==" " && !Number(value)){
        err=<strong style={{color:"red"}} >Aadhar must be a number</strong>
      }
      if(value.length!==12){
        err1=<strong style={{color:"red"}} > Length must be 12 </strong>
      }
      this.setState({aadharErrorL:err, aadharErrorN:err1});
    }
    
    

    if(name==='phone'){
      if(value!==" " && !Number(value)){
        err=<strong style={{color:"red"}} >Mobile no. must be a number</strong>
      }
      if(value.length!==10){
        err1=<strong style={{color:"red"}} > Length must be 10 </strong>
      }
      this.setState({mobileErrorL:err, mobileErrorN:err1});
    }
    
    

    if(name==='pincode'){
      if(value!==" " && !Number(value)){
        err=<strong style={{color:"red"}} >Pincode must be a number</strong>
      }
      if(value.length!==6){
        err1=<strong style={{color:"red"}} > Length must be 6 </strong>
      }
      this.setState({pincodeErrorL:err, pincodeErrorN:err1});
    }

    if(name==='city'){
      if(value!==" " && !value.match(/^[a-zA-Z]+$/)){
        err=<strong style={{color:"red"}} >Invalid District Name</strong>
      }
      
    
    
    this.setState({districtError:err});
    }
    if(name==='state'){
      if(value!==" " && !value.match(/^[a-zA-Z]+$/)){
        err=<strong style={{color:"red"}} >Invalid State Name</strong>
      }
      
    
    
    this.setState({stateError:err});
    }
    
    
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
              onSubmit={e => this.props.onSignup(e, this.state.data)}
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
                <div className="col-md-6 form-group">
                  <label htmlFor="username">
                    <strong>UserName</strong>
                  </label>
                  &nbsp;&nbsp;{this.state.error_description}
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="username"
                    value={this.state.data.username}
                    onChange={this.handle_change}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="first_name">
                    <strong>First Name</strong>
                  </label>
                  &nbsp;&nbsp;{this.state.firstNameError}
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="first_name"
                    value={this.state.data.first_name}
                    onChange={this.handle_change}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="last_name">
                    <strong>Last Name</strong>
                  </label>
                  &nbsp;{this.state.lastNameError}
                  <input
                    className="form-control"
                    required="required"
                    name="last_name"
                    value={this.state.data.last_name}
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
                    value={this.state.data.password}
                    onChange={this.handle_change}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="password">
                    <strong>Confirm Password</strong>
                  </label>
                  &nbsp;{this.state.passwordError}
                  <input
                    className="form-control"
                    required="required"
                    type="password"
                    name="password_confirm"
                    value={this.state.password_confirm}
                    onChange={this.handle_change2}
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
                    value={this.state.data.profile.company}
                    onChange={this.handle_change1}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="email">
                    <strong>E-Mail</strong>
                  </label>
                  &nbsp;&nbsp;{this.state.emailError}
                  <input
                    className="form-control"
                    required="required"
                    type="email"
                    name="email"
                    value={this.state.data.email}
                    onChange={this.handle_change}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label className="required" htmlFor="aadharcard">
                    <strong>Aadhaar Number</strong> 
                  </label>
                  &nbsp;&nbsp;{this.state.aadharErrorL}&nbsp;{this.state.aadharErrorN}
                  
                  <input
                    className="form-control"
                    type="text"
                    name="aadharcard"
                    value={this.state.data.profile.aadharcard}
                    onChange={this.handle_change1}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="required" htmlFor="phone">
                    <strong>Mobile number</strong>
                  </label>
                  &nbsp;&nbsp;{this.state.mobileErrorL}&nbsp;{this.state.mobileErrorN}
                  <br />
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="phone"
                    value={this.state.data.profile.phone}
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
                    value={this.state.data.profile.street}
                    onChange={this.handle_change1}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-6 form-group">
                  <label htmlFor="city">
                    <strong>District</strong>
                  </label>
                  &nbsp;&nbsp;{this.state.districtError}
                  <select
                    className="form-control"
                    list="district"
                    required="required"
                    type="text"
                    name="city"
                    // readOnly="readonly"
                    value={this.state.data.profile.city}
                    onChange={this.handle_change1}
                  >
                      <option value="Almora" > Almora </option>
                      <option value="Bageshwar" > Bageshwar</option>
                      <option value="Chamoli" > Chamoli</option>
                      <option value="Champawat" > Champawat</option>
                      <option value="Dehradun" > Dehradun </option>
                      <option value="Haridwar" > Haridwar </option>
                      <option value="Nainital" >Nainital</option>
                      <option value="Pauri" >Pauri</option>
                      <option value="Pithoragarh" >Pithoragarh</option>
                      <option value="Rudraprayag" >Rudraprayag</option>
                      <option value="Rudrapur" >Rudrapur</option>
                      <option value="Tehri" >Tehri</option>
                      <option value="Uttarkashi" >Uttarkashi</option>
                    </select>
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="state">
                    <strong>State</strong>
                  </label>
                  &nbsp;&nbsp;{this.state.stateError}
                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="state"
                    value='Uttarakhand'
                    onChange={this.handle_change1}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="pincode">
                    <strong>Pincode</strong>
                  </label>
                  &nbsp;{this.state.pincodeErrorL}&nbsp;{this.state.pincodeErrorN}

                  <input
                    className="form-control"
                    required="required"
                    type="text"
                    name="pincode"
                    value={this.state.data.profile.pincode}
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
                    className="btn btn-secondary btn--full"
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
