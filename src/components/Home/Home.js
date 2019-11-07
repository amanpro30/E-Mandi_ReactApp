import React from "react";
import Slideshow from "../Slideshow/Slideshow";
import Block1 from "../Home/Blocks/Block1";
import Block2 from "../Home/Blocks/Block2";
import Block3 from "../Home/Blocks/Block3";
import Aux from "../../hoc/Aux";
import Layout from "../Layout/Layout";
import Block4 from "./Blocks/Block4";
import Carousel from "../Slideshow/Carousel"
// import Slideshow1 from '../Slideshow/Slideshow1'

const Home = props => (
  <Aux>
    <Layout>
      <Slideshow />
      {/* <Carousel /> */}
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
    </Layout>
  </Aux>
);

// const mapStateToProps = state => {
//     return {
//         isAuthenticated:state.isAuthenticated,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         logIn: () => dispatch({type: 'LOGIN'}),
//         logOut: () => dispatch({type: 'LOGOUT'}),
//     };
// }

export default Home;
