import React from 'react';
import Slideshow from '../Slideshow/Slideshow';
import Block1 from '../Home/Blocks/Block1';
import Block2 from '../Home/Blocks/Block2';
import Block3 from '../Home/Blocks/Block3';
import Aux from '../../hoc/Aux';
import Layout from '../Layout/Layout'

const Home = (props) => (
    <Aux>
        <Layout>
            <Slideshow />
            <Block1 />
            <Block2 />
            <Block3 />
        </Layout>
    </Aux>
);

export default Home;