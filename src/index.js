import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// import $ from 'jquery';
// import Popper from 'popper.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import homeReducer from './store/reducers/home_reducers';

const rootReducer = combineReducers({
    home: homeReducer,
})

const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
