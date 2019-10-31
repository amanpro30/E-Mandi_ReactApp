import React from 'react';
import DefaultProfImg from '../../assets/images/profdef.png';
import Aux from '../../hoc/Aux';
import Layout from '../Layout/Layout';

const ProfileSideBar = (props) => {
    return(
        
                
                            <div class="col-md-4 user-layout__col">
                                <div class="text-xs-center user-menu">
                                    <div class="user-menu__profile">
                                        <div class="user-menu__profile_photo_container">
                                            <div class="user-menu__profile_photo">
                                                <img src={DefaultProfImg} alt="Profile" />
                                            </div>
                                            
                                        </div>
                                        <div>Aman</div>
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
                       
       
    );
};

export default ProfileSideBar;