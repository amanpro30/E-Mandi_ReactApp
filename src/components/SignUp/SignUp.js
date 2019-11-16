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
        err=<strong style={{color:"red"}} >Passwords Not Matching</strong>
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
      if(value!==" " && !Number(value) || value.length!==12){
        err=<strong style={{color:"red"}} >Invalid Aadhaar Number</strong>
      }
      // if(){
      //   err1=<strong style={{color:"red"}} > Length must be 12 </strong>
      // }
      this.setState({aadharErrorL:err});
    }
    
    

    if(name==='phone'){
      if(value!==" " && !Number(value) || value.length!==10){
        err=<strong style={{color:"red"}} >Invalid Mobile Number</strong>
      }
      
      this.setState({mobileErrorL:err});
    }
    
    

    if(name==='pincode'){
      if(value!==" " && !Number(value) || value.length!==6){
        err=<strong style={{color:"red"}} >Invalid Pin Code</strong>
      }
     
      this.setState({pincodeErrorL:err});
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
        <br /><br />
        <div className="row">
          <div className="col-md-8 offset-md-2 user-registration__col">
          <div class="card">

          <h5 class="card-header info-color white-text text-center py-4">
            Sign up
          </h5>
          <div class="card-body px-lg-5 pt-0"> 
          
            <form
              className="new_user"
              style={{width:'100%'}}
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
                    UserName
                  </label>
                  {/* &nbsp;&nbsp;<span class="alert alert-danger" > </span> */}
                  <label class="control-label" for="inputWarning">{this.state.error_description}</label>

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
                   First Name
                  </label>
                  {/* &nbsp;&nbsp;{this.state.firstNameError} */}
                  &nbsp;&nbsp;<label class="control-label" for="inputError">{this.state.firstNameError}</label>
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
                    Last Name
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
                    Password
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
                   Confirm Password
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
                    Company
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
                    E-Mail
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
                    Aadhaar Number
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
                    Mobile number
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
                    Street
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
                    District
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
                      <option value="">Select a Value</option>
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
                    State
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
                   Pincode
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
                <div className="col">
                  <br />
                  <div className="form-check">
                    <label className="form-check-label" style={{paddingLeft:'0px'}}>
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
                          href="/terms"
                        >
                          <span
                            className="translation_missing"
                            title="translation missing: en.devise.registrations.new.agri_marketplace_terms"
                          >
                            ₹-Mandi Terms
                          </span>
                        </a>{" "}
                        and{" "}
                        <a
                          target="_blank"
                          className="link-green"
                          href="/privacy_policy"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <br /><br />
              <div className="row">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="action align-items-center" style={{width:'75%', alignContent:'center'}}>
                  
                  <input
                    type="submit"
                    name="commit"
                    value="Sign Up"
                    class="btn btn-outline-info btn-rounded btn-block my-10 waves-effect z-depth-0"
                    
                    data-disable-with="Sign Up"
                  />
                
                </div>
              </div>
              <br />
            </form>
            
            
            </div>
            
          </div>
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
