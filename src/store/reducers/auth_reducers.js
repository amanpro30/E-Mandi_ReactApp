import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    token: localStorage.token,
    error: null,
    loading: false,
    username: localStorage.username,
    isAuthenticated : localStorage.token ? true : false,
    // token: localStorage.userJWT, 
    // email: localStorage.userE, 
    // id: localStorage.userId, 
    // surname: localStorage.surname,

}

const authStart = (state,action) => {
    return updateObject(state, {
        error: null,
        loading: false,
    });
}

const authSuccess = (state, action) => {
    console.log('authSuccess1')
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false,
        username: action.username,
        isAuthenticated: true,
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        username : '',
        isAuthenticated: false,
    })
}

const reducer = (state= initialState, action ) => {
    switch (action.type){
        case actionTypes.AUTH_START : return authStart(state,action);
        case actionTypes.AUTH_FAIL : return authFail(state, action);
        case actionTypes.AUTH_LOGOUT : return authLogout(state, action);
        case actionTypes.AUTH_SUCCESS : return authSuccess(state, action);
        default:
            return state;
    }
}

export default reducer;