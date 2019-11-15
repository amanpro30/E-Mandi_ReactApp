import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import grain2_img from "../../assets/images/grains2.jpg";
import farmers_img from "../../assets/images/farmer.jpg";
import grain_img from "../../assets/images/9.jpg";

const Carousel = () => {
  var imgStyle = {
    height: "500px",
    width: "2000px"
  };
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        style={imgStyle}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={grain2_img}
                alt="First slide"
                style={imgStyle}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={farmers_img}
                alt="Second slide"
                style={imgStyle}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={grain_img}
                alt="Third slide"
                style={imgStyle}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Carousel;
