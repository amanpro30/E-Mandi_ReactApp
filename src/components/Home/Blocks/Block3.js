import React from 'react';
import OvalBack from '../../../assets/images/ovalback.png';
import UserFriendly from '../../../assets/images/userfriendly.png';
import Transparency from '../../../assets/images/transparency.png';
import Fairtrade from '../../../assets/images/fairtrade.png';
import FoodTrace from '../../../assets/images/foodtraceability.png';
// import { classes } from 'istanbul-lib-coverage';
// import classes1 from './Block3.css'  ;
const Block3 = (props) => (
    <div class="container-features">
  <div class="container">
  <div class="row text-xs-center">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1>KEY <green>FEATURES</green></h1><br /><br /><br /><br />
    </div>
    <div class="row text-xs-center features-row">
      <div class="col-md-3 col__adv">
        <div class="container--img">
          <img class="img--base" src={OvalBack} alt="Oval" />
          <img class="img--top" src={Transparency} alt="Transparency" />
        </div>
        <p class="container-features__subtitle">Transparency</p>
        <p class="container-features__text">Direct transactions between farmers and industry/retail</p>
      </div>
      <div class="col-md-3 col__adv">
        <div class="container--img">
          <img class="img--base" src={OvalBack} alt="Oval" />
          <img class="img--top" src={Fairtrade} alt="Fairtrade" />
        </div>
        <p class="container-features__subtitle">Fairtrade</p>
        <p class="container-features__text">Redistribution of value in food supply chain</p>
      </div>
      <div class="col-md-3 col__adv">
        <div class="container--img">
          <img class="img--base" src={OvalBack} alt="Oval" />
          <img class="img--top" src={UserFriendly} alt="Userfriendly" />
        </div>
        <p class="container-features__subtitle"><span class="translation_missing" title="translation missing: en.home.index.features.user_friendly">User Friendly</span></p>
        <p class="container-features__text">Reduce costs to buyers without losing reliability</p>
      </div>
      <div class="col-md-3 col__adv">
        <div class="container--img">
          <img class="img--base" src={OvalBack} alt="Oval" />
          <img class="img--top" src={FoodTrace} alt="Food traceability" />
        </div>
        <p class="container-features__subtitle">Food Traceability</p>
        <p class="container-features__text">Crop reliability through supply chain traceability </p>
      </div>
    </div>
  </div>
</div>

);

export default Block3;