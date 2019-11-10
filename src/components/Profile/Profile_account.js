import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Layout from '../Layout/Layout';
import ProfileSideBar from '../Profile/Profile_sidebar';
import axios from 'axios';


class ProfileAccount extends Component {
    state = {
        username:"",
        email:"",
        first_name:"",
        last_name:""
    }
    
    headers = {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `JWT ${localStorage.getItem('token')}`,
        
    }
    
    componentDidMount(){
        var self=this;  
        axios.get('http://localhost:8000/accounts/userprofile/',{headers:this.headers}).then(res => {self.setState({first_name:res.data[0]['first_name'],last_name:res.data[0]['last_name'],email:res.data[0]['email'],username:res.data[0]['username']})})
    }

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
          const newState = { ...prevstate };
          newState[name] = value;
          return newState;
    })};

    onSignup =(e,email) => {
        e.preventDefault();
        axios.put('http://localhost:8000/accounts/userprofile/'+this.state.username+'/',{email},{headers:this.headers}).then(res=>{});
    }

    render(){
    return(
        <Aux>
            <Layout>
                <div class = "content">
                    <div class="container user-layout">
                        <div class = "row">
                            <ProfileSideBar />
                            <div class="col-md-8 user-layout__col">
                <form class="edit_user" id="edit_user_1072" accept-charset="UTF-8" onSubmit={e => this.onSignup(e, this.state.email)} method="post">
                    <div class="row">
                        <div class="col-md-12">
                        <h2 class="bid-list__header user_menu_title">Account Information</h2>
                        </div>
                    </div>
                    <div class="row row--field">
                        <div class="col-md-4">
                            <label class="input-picture" for="user_profile_picture">
                            <img src="/assets/icons/photo-142975824a4cb52e519f87ef80e6c3abbda9de545771be5a8e918611d7721254.png" alt='imagew'/>
                            Click to add Photo
                            <input accept="image/*" type="file" name="user[profile_picture]" id="user_profile_picture" />
                            </label>    
                        </div>
                    </div>
                    <div class="row row--field">
                        <div class="col-md-6">
                        <label for="user_email">User Name</label>
                        <input class="form-control" type="text" value={this.state.username} name="user[email]" id="user_email" />
                        </div>
                        <div class="col-md-6">
                        <label for="user_email">Email</label>
                        <input class="form-control" type="email" value={this.state.email} name="email" id="user_email" onChange={this.handle_change}/>
                        </div>
                    </div>
                    <div class="row row--field">
                        <div class="col-md-6">
                            <label for="user_first_name">First Name</label>
                            <input class="form-control" type="text" value={this.state.first_name} name="user[first_name]" id="user_first_name" />
                        </div>
                        <div class="col-md-6">
                            <label for="user_last_name">Last Name</label>
                            <input class="form-control" type="text" value={this.state.last_name} name="user[last_name]" id="user_last_name" />
                        </div>
                    </div>

                    <div class="row row__save">
                        <div class="col-md-4">
                        <a class="btn btn-transparent btn--large alert" href="/users/edit">Change Password</a>
                        </div>
                        <div class="col-md-4">
                            <input type="submit" name="commit" value="Save" class="btn btn-solid btn--large btn_user_update" data-disable-with="Save" />
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


export default ProfileAccount;