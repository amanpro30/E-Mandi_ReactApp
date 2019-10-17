import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Navigation/Footer/Footer';
import Slideshow from '../Slideshow/Slideshow'
const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <Slideshow />
        <main className={classes.Content}>
            {props.children}
        </main>
        <Footer />
    </Aux>
);

export default layout;