import * as actionTypes from './actionTypes';
import axios from "axios";

export const authStart = () => {
    console.log('authstart');
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, username) => {
    console.log('authsuccess');
    console.log(username);
    return {

        type: actionTypes.AUTH_SUCCESS,
        token: token,
        username: username,
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
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
      .catch(err => {dispatch(authFail(err))});
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
      .catch(err => {dispatch(authFail(err))});
    }
}