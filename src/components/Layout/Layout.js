import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Navigation/Footer/Footer';
import Home from '../Home/Home';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Login from '../Login/Login';

const layout = (props) => (
    <Aux>
        <Toolbar />
        {props.children}
        <SideDrawer />
        <Footer />
    </Aux>
);

export default layout;