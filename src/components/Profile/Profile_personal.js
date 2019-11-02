import React from 'react';
import Aux from '../../hoc/Aux';
import Layout from '../Layout/Layout';
import ProfileSideBar from '../Profile/Profile_sidebar';

const ProfilePersonal = (props) => {
    return(
        <Aux>
            <Layout>
                <div class = "content">
                    <div class="container user-layout">
                        <div class = "row">
                            <ProfileSideBar />
                            <div class="col-md-8 user-layout__col">
                <form class="edit_user" id="edit_user_1072" enctype="multipart/form-data" action="/users/1072" accept-charset="UTF-8" method="post">
                    <div class="row">
                        <div class="col-md-12">
                        <h2 class="bid-list__header user_menu_title">Personal Information</h2>
                        </div>
                    </div>
                    
                    <div class="row row--field">
                        <div class="col-md-6">
                            <label for="user_company">Company</label>
                            <input class="form-control" type="text" value=" " name="user[company]" id="user_company" />
                        </div>
                        <div class="col-md-6">
                            <label for="user_">Country</label>
                            <input class="form-control" type="text" value=" " name="user[]" id="user_" />
                        </div>
                    </div>
                    <div class="row row--field">
                        <div class="col-md-6">
                        <label for="user_mobile">Mobile Number</label>
                        <input class="form-control" type="number" value=" " name="user[mobile]" id="user_mobile" />
                        </div>
                        <div class="col-md-6">
                            <label for="user_pin_code">Pin Code</label>
                            <input class="form-control" type="text" value=" " name="user[pin_code]" id="user_pin_code" />
                        </div>
                        
                    </div>
                    <div class="row row--field">
                        <div class="col-md-6">
                            <label for="user_house_no">House No</label>
                            <input class="form-control" type="text" value=" " name="user[house_no]" id="user_house_no" />
                        </div>
                        <div class="col-md-6">
                            <label for="user_street">Street</label>
                            <input class="form-control" type="text" value=" " name="user[street]" id="user_street" />
                        </div>
                    </div>
                    <div class="row row--field">
                        <div class="col-md-6">
                            <label for="user_district">District</label>
                            <input class="form-control" type="text" value=" " name="user[district]" id="user_district" />
                        </div>
                        <div class="col-md-6">
                            <label for="user_state">State</label>
                            <input class="form-control" type="text" value=" " name="user[state]" id="user_state" />
                        </div>
                    </div>
                    
                    <div class="row row__save">
                        
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
};


export default ProfilePersonal;