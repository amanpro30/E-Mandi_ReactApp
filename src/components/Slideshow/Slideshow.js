import React, {useState} from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import Carousel from 'react-bootstrap/Carousel';
import classes from './Slideshow.css';
import grain2_img from '../../assets/images/grains2.jpg';
import farmers_img from '../../assets/images/farmer.jpg';
import mandi_img from '../../assets/images/mandi.jpg';
import tractor from '../../assets/images/tractor.jpg';

// const Slideshow = () => {
//   return (
//   <MDBContainer >
//       <MDBCarousel
//         activeItem={1}
//         length={3}
//         showControls={false}
//         showIndicators={false}
//       >
//         <MDBCarouselInner>
//           <MDBCarouselItem itemId="1">
//             <MDBView>
//               <img
//                 className={classes.slideshow}
//                 src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
//                 alt="First slide"
//               />
//             </MDBView>
//           </MDBCarouselItem>
//           <MDBCarouselItem itemId="2">
//             <MDBView>
//               <img
//                 className={classes.slideshow}
//                 src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
//                 alt="Second slide"
//               />
//             </MDBView>
//           </MDBCarouselItem>
//           <MDBCarouselItem itemId="3">
//             <MDBView>
//               <img
//                 className={classes.slideshow}
//                 src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
//                 alt="Third slide"
//               />
//             </MDBView>
//           </MDBCarouselItem>
//         </MDBCarouselInner>
//       </MDBCarousel>
//     </MDBContainer>
//   );
// }

function Slideshow() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  var imgStyle = {
    height:"500px",
    width:"100%",
  }

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grain2_img}
          alt="First slide"
          style = {imgStyle}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={farmers_img}
          alt="Second slide"
          style = {imgStyle}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tractor}
          style = {imgStyle}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;


// import React from 'react';
// import { Slide } from 'react-slideshow-image';

// const slideImages = [
//   'images/slide_2.jpg',
//   'images/slide_3.jpg',
//   'images/slide_4.jpg'
// ];

// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//   }
// }

// const Slideshow = () => {
//     return (
//       <div className="slide-container">
//         <Slide {...properties}>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
//               <span>Slide 1</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
//               <span>Slide 2</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
//               <span>Slide 3</span>
//             </div>
//           </div>
//         </Slide>
//       </div>
//     )
// }

// export default Slideshow