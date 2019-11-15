import React, {Component} from 'react';
import DefaultProfImg from '../../assets/images/profdef.png';
import {connect} from 'react-redux';

class ProfileSideBar extends Component {
    state = {
        username: this.props.username
    }
    render (){    
        return(
            <div class="col-md-4 user-layout__col" style={{background:"##E0E0E0"}}>
                <div class="text-xs-center user-menu " style={{background:"#E0E0E0"}} >
                    <div class="user-menu__profile">
                        <div class="user-menu__profile_photo_container">
                            <div class="user-menu__profile_photo">
                                <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Profile" />
                            </div>
                            
                        </div>
                        <div>{this.state.username}</div>
                    </div>
                    <div class="user-menu__link">
                        <a href="/profile">Account Information</a>
                    </div>
                    <div class="user-menu__link">
                        <a href="/personal">Personal Information</a>
                    </div>
                    <div class="user-menu__link">
                        <a href="/bank">Bank Details</a>
                    </div>
                    <div class="user-menu__link">
                        <a href="/portfolio">Portfolio</a>
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        username: state.auth.username,
    }
};

export default connect(mapStateToProps,null)(ProfileSideBar);