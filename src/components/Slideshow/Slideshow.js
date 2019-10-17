import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import classes from './Slideshow.css'
const Slideshow = () => {
  return (
  <MDBContainer >
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className={classes.slideshow}
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className={classes.slideshow}
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className={classes.slideshow}
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
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