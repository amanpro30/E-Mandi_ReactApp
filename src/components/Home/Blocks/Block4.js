import React from "react";
import digital from "../../../../src/assets/images1/digital-white.png";
import agreement from "../../../../src/assets/images1/agreement-white.png";
import logistics from "../../../../src/assets/images1/logistics-white.png";
import quality from "../../../../src/assets/images1/quality-white.png";

const Block4 = props => (
  <div class="container-features">
    <div class="container">
      <div class="row text-xs-center">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <strong>
          <h1>Services</h1>
        </strong>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div class="row text-xs-center">
        <div class="col-md-3 col-xs-6">
          <div class="circle__services--green">
            <img class="digi-img" src={digital} alt="Digital white" />
          </div>
          <p class="container-five__text">Digital Trading Platform</p>
        </div>

        <div class="col-md-3 col-xs-6">
          <div class="circle__services--green">
            <img class="digi-img" src={agreement} alt="Agreement white" />
          </div>
          <p class="container-five__text">Sales Contracts Agreements</p>
        </div>

        <div class="col-md-3 col-xs-6">
          <div class="circle__services--green">
            <img class="digi-img" src={logistics} alt="Logistics white" />
          </div>
          <p class="container-five__text">Logistics &amp; Transportation</p>
        </div>

        <div class="col-md-3 col-xs-6">
          <div class="circle__services--green">
            <img class="digi-img" src={quality} alt="Quality white" />
          </div>
          <p class="container-five__text">Quality Insurance of Products</p>
        </div>
      </div>
    </div>
  </div>
);

export default Block4;
