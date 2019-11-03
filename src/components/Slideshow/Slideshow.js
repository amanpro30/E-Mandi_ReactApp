import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import grain2_img from '../../assets/images/grains2.jpg';
import farmers_img from '../../assets/images/farmer.jpg';



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
          {/* <h3>First slide label</h3> */}
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
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={tractor}
          style = {imgStyle}
          alt="Third slide"
        /> */}

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        {/* </Carousel.Caption> */} */}
      {/* </Carousel.Item> */}
    </Carousel>
  );
}

export default Slideshow;

