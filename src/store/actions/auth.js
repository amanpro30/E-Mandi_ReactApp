import * as actionTypes from './actionTypes';
import axios from "axios";
import { Redirect } from 'react-router';
import React from "react";

export const authStart = () => {
    console.log('authstart');
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, username) => {
    console.log('authsuccess');
    console.log(username);
    localStorage.removeItem('error_description_login');
    return {

        type: actionTypes.AUTH_SUCCESS,
        token: token,
        username: username,
    }
}

export const authFail = (err) => {
    console.log('authFail');
    // console.log(err.response.data['non_field_errors']);
    // if(err){

    if(err.response.data['non_field_errors']){
        localStorage.setItem('error_description_login',err.response.data['non_field_errors']['0']);
    }
    if(err.response.data['username']){
        localStorage.setItem('error_description_username',err.response.data['username']['0']);
    }
// }
    return {
        type: actionTypes.AUTH_FAIL,
        error: err,
    }
}


export const logout = () => {
    console.log('inside logout');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem("token")
    // localStorage.removeItem('username')
    localStorage.clear();
    sessionStorage.clear();
    return{
        type : actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    console.log('authchecktimeout');    
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 10000)
    }
    
}

export const authSignup = (e, data) => {
    return dispatch => {
    dispatch(authStart());
    e.preventDefault();
    axios.post(`http://localhost:8000/accounts/signup/`, data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('expirationDate', res.data.expirationDate);
        localStorage.setItem('username', res.data.username);
        console.log(res.data.expirationDate);
        console.log(res.data.username);
        dispatch(authSuccess(res.data.token, res.data.username));
        dispatch(checkAuthTimeout(3600));
        window.location.href = "/";
      })
      .catch(err => {dispatch(authFail(err))
        window.location.href = "/signup";
        }
         
      );
      
    }
}

export const authLogin = (e, data) => {
    return dispatch => {
    dispatch(authStart());
    
    e.preventDefault();
    axios.post(`http://localhost:8000/token-auth/`, data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('expirationDate', res.data.expirationDate);
        
        localStorage.setItem('username', res.data.user.username);
        console.log('mkc')
        dispatch(authSuccess(res.data.token, res.data.username));
        dispatch(checkAuthTimeout(3600));
        window.location.href = "/";
      })
      .catch(err => {dispatch(authFail(err))
        window.location.href = "/login";
    });

      
    }
}