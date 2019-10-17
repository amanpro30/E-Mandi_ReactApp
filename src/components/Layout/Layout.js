import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Navigation/Footer/Footer';
import Slideshow from '../Slideshow/Slideshow';
import Block1 from '../Home/Blocks/Block1';
import Block2 from '../Home/Blocks/Block2';
import Block3 from '../Home/Blocks/Block3';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <Slideshow />
        <Block1 />
        <Block2 />
        <Block3 />
        <main className={classes.Content}>
            {props.children}
        </main>
        <Footer />
    </Aux>
);

export default layout;