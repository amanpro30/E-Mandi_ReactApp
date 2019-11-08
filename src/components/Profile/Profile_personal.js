import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Layout from '../Layout/Layout';
import ProfileSideBar from '../Profile/Profile_sidebar';
import { connect } from "react-redux";
import axios from "axios";

class ProfilePersonal extends Component {
    state = {
        username: this.props.username,
        profile:{
        phone: "",
        state: "",
        city: "",
        street: "",
        aadharcard: "",
        pincode: "",
        company: ""
    }
    }
    headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,
    }
    ProfileUpdate = (e, data) => {
        e.preventDefault();
        console.log('coming')
        axios.put(`http://localhost:8000/accounts/profile1/`+this.props.username+`/`, data,{
            headers: this.headers})
        .then(res => {
        })
    };
    
    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
          const newState = { ...prevstate };
          newState['profile'][name] = value;
          return newState;
        })};

    render(){
    
    return(

        <Aux>
            <Layout>
                <div class = "content">
                    <div class="container user-layout">
                        <div class = "row">
                            <ProfileSideBar />
                            <div class="col-md-8 user-layout__col">
                <form class="edit_user" id="edit_user_1072" onSubmit={e => this.ProfileUpdate(e, this.state)}
            acceptCharset="UTF-8"
              method="post">
                    <div class="row">
                        <div class="col-md-12">
                        <h2 class="bid-list__header user_menu_title">Personal Information</h2>
                        </div>
                    </div>
                    
                    <div class="row row--field">
                        <div class="col-md-6">
                            <label for="user_company">Company</label>
                            <input class="form-control" type="text" value={this.state.profile.company} name="company" id="user_company" onChange={this.handle_change} />
                        </div>
                        <div class="col-md-6">
                            <label for="user_">Aadhar Number</label>
                            <input class="form-control" type="text" value={this.state.profile.aadharcard} name="aadharcard" id="user_" onChange={this.handle_change}/>
                        </div>
                    </div>
                    <div class="row row--field">
                        <div class="col-md-6">
                        <label for="user_mobile">Mobile Number</label>
                        <input class="form-control" type="number" value={this.state.profile.phone} name="phone" id="user_mobile" onChange={this.handle_change}/>
                        </div>
                        <div class="col-md-6">
                            <label for="user_pin_code">Pin Code</label>
                            <input class="form-control" type="text" value={this.state.profile.pincode} name="pincode" id="user_pin_code" onChange={this.handle_change}/>
                        </div>
                        
                    </div>
                    <div class="row row--field">
                        
                        <div class="col-md-12">
                            <label for="user_street">Street</label>
                            <input class="form-control" type="text" value={this.state.profile.street} name="street" id="user_street" onChange={this.handle_change}/>
                        </div>
                    </div>
                    <div class="row row--field">
                        <div class="col-md-6">
                            <label for="user_district">District</label>
                            <input class="form-control" type="text" value={this.state.profile.city} name="city" id="user_district" onChange={this.handle_change}/>
                        </div>
                        <div class="col-md-6">
                            <label for="user_state">State</label>
                            
                            <input class="form-control" type="text" value={this.state.profile.state} name="state" id="user_state" onChange={this.handle_change}/>
                        </div>
                    </div>
                    
                    <div class="row row__save">
                        
                        <div class="col-md-4">
                            <input
                            type="submit"
                            name="commit"
                            value="Sign Up"
                            className="btn btn-secondary btn--full"
                            data-disable-with="Sign Up"
                            />
                        </div>
                    </div>
                </form>
            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Aux>
    );
    }
        
};

const mapStateToProps = state => {
    return{
        username: state.auth.username
    }
}

export default connect(mapStateToProps,null)(ProfilePersonal);