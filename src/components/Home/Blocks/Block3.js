import React from 'react';
import OvalBack from '../../../assets/images/ovalback.png';
import UserFriendly from '../../../assets/images/userfriendly.png';
import Transparency from '../../../assets/images/transparency.png';
import Fairtrade from '../../../assets/images/fairtrade.png';
import FoodTrace from '../../../assets/images/foodtraceability.png';
// import { classNamees } from 'istanbul-lib-coverage';
// import classNamees1 from './Block3.css'  ;
const Block3 = (props) => (
    <div className="container-features">
  <div className="container">
  <div className="row text-xs-center">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1>KEY FEATURES</h1><br /><br /><br /><br />
    </div>
    <div className="row text-xs-center features-row">
      <div className="col-md-3 col__adv">
        <div className="container--img">
          <img className="img--base" src={OvalBack} alt="Oval" />
          <img className="img--top" src={Transparency} alt="Transparency" />
        </div>
        <p className="container-features__subtitle">Transparency</p>
        <p className="container-features__text">Direct transactions between farmers and industry/retail</p>
      </div>
      <div className="col-md-3 col__adv">
        <div className="container--img">
          <img className="img--base" src={OvalBack} alt="Oval" />
          <img className="img--top" src={Fairtrade} alt="Fairtrade" />
        </div>
        <p className="container-features__subtitle">Fairtrade</p>
        <p className="container-features__text">Redistribution of value in food supply chain</p>
      </div>
      <div className="col-md-3 col__adv">
        <div className="container--img">
          <img className="img--base" src={OvalBack} alt="Oval" />
          <img className="img--top" src={UserFriendly} alt="Userfriendly" />
        </div>
        <p className="container-features__subtitle"><span className="translation_missing" title="translation missing: en.home.index.features.user_friendly">User Friendly</span></p>
        <p className="container-features__text">Reduce costs to buyers without losing reliability</p>
      </div>
      <div className="col-md-3 col__adv">
        <div className="container--img">
          <img className="img--base" src={OvalBack} alt="Oval" />
          <img className="img--top" src={FoodTrace} alt="Food traceability" />
        </div>
        <p className="container-features__subtitle">Food Traceability</p>
        <p className="container-features__text">Crop reliability through supply chain traceability </p>
      </div>
    </div>
  </div>
</div>

);

export default Block3;