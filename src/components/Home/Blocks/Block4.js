import React from "react";
import digital from "../../../../src/assets/images1/digital-white.png";
import agreement from "../../../../src/assets/images1/agreement-white.png";
import logistics from "../../../../src/assets/images1/logistics-white.png";
import quality from "../../../../src/assets/images1/quality-white.png";
import OvalBack from "../../../../src/assets/images/ovalback.png";
import grain_img from "../../../../src/assets/images/9.jpg";
import classes from "./Block4.css";

const Block4 = props => (
  // <div class="container-features">
  //   <div class="container">
  //     <div class="row text-xs-center">
  //       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  //       <strong>
  //         <h1>Services</h1>
  //       </strong>
  //       <br />
  //       <br />
  //       <br />
  //       <br />
  //       <br />
  //       <br />
  //       <br />
  //     </div>
  //     <div class="row text-xs-center">
  //       <div class="col-md-3 col-xs-6">
  //         <div class="circle__services--green">
  //           <img class="digi-img" src={digital} alt="Digital white" />
  //         </div>
  //         <p class="container-five__text">Digital Trading Platform</p>
  //       </div>

  //       <div class="col-md-3 col-xs-6">
  //         <div class="circle__services--green">
  //           <img class="digi-img" src={agreement} alt="Agreement white" />
  //         </div>
  //         <p class="container-five__text">Sales Contracts Agreements</p>
  //       </div>

  //       <div class="col-md-3 col-xs-6">
  //         <div class="circle__services--green">
  //           <img class="digi-img" src={logistics} alt="Logistics white" />
  //         </div>
  //         <p class="container-five__text">Logistics &amp; Transportation</p>
  //       </div>

  //       <div class="col-md-3 col-xs-6">
  //         <div class="circle__services--green">
  //           <img class="digi-img" src={quality} alt="Quality white" />
  //         </div>
  //         <p class="container-five__text">Quality Insurance of Products</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div className={classes.blocks}>
    <div className="container-features">
      <div className="container">
        <div className="row text-xs-center">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h1>SERVICES</h1>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="row text-xs-center features-row">
          <div >
            <div className="col-md-3 col__adv">
              <div className="container--img">
                <img className="img--base" src={OvalBack} alt="Oval" />
                <img className="img--top" src={digital} alt="Transparency" />
              </div>
              <p className="container-features__subtitle">
                Digital Trading Platform
              </p>
              {/* <p className="container-features__text">Digital Trading Platform</p> */}
            </div>
            <div className="col-md-3 col__adv">
              <div className="container--img">
                <img className="img--base" src={OvalBack} alt="Oval" />
                <img className="img--top" src={agreement} alt="Fairtrade" />
              </div>
              <p className="container-features__subtitle">
                Sales Contracts Agreements
              </p>
              {/* <p className="container-features__text">Redistribution of value in food supply chain</p> */}
            </div>
            <div className="col-md-3 col__adv">
              <div className="container--img">
                <img className="img--base" src={OvalBack} alt="Oval" />
                <img className="img--top" src={logistics} alt="Userfriendly" />
              </div>
              <p className="container-features__subtitle">
                Logistics &amp; Transportation
              </p>
              {/* <p className="container-features__text">Reduce costs to buyers without losing reliability</p> */}
            </div>
            <div className="col-md-3 col__adv">
              <div className="container--img">
                <img className="img--base" src={OvalBack} alt="Oval" />
                <img
                  className="img--top"
                  src={quality}
                  alt="Food traceability"
                />
              </div>
              <p className="container-features__subtitle">
                Quality Insurance of Products
              </p>
              {/* <p className="container-features__text">Crop reliability through supply chain traceability </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Block4;
