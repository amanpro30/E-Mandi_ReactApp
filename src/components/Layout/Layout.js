import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Navigation/Footer/Footer';



const layout = (props) => (
    <Aux>
        <Toolbar />
        {props.children}
        <SideDrawer />
        <Footer />
    </Aux>
);

export default layout;