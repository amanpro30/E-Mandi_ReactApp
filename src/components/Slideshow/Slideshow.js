import React, { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import image from "../../assets/images/7.jpg";
// import farmers_img from "../../assets/images/8.jpg";
// import grain_img from "../../assets/images/9.jpg";
import { Parallax, Background } from 'react-parallax';
import classes from './Slideshow.css';

function Slideshow() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  


  return (
    
    <div>
        <br/><br/>

        <Parallax
            blur={2}
            bgImage={require('../../assets/images/7.jpg')}
            bgImageAlt="mandi"
            strength={650}
            
        >
            <b className={classes.font} ><br/><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &#8377; Mandi</b> 
            <br/><br/><br/><br/>
            <p className={`${classes.line1} ${classes.animtypewriter} ${classes.text_body} ${classes.html1}`}>Welcome to &#8377;Mandi </p>

            <div style={{ height: '256px', width:'100%' }} />
            
        </Parallax>
    </div>

  );
}

export default Slideshow;
