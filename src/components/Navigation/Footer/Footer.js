import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import classes from './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fb from '../../../assets/logos/facebook-logo-0383e563e22ffcbf5b5331cb660c02de2eb287cad5cbf41c92ee987ccf158b11.png';
import twitter from '../../../assets/logos/twitter-logo-2c280dc3870e868da6309a702d3cf0669ae48cc2e9902fcc034838db41359997.png';
import linkedin from '../../../assets/logos/linkedin-6efc36a69e5c59219b21692f0b795b7aeb4818eae21bc82c828e63d63f7becc1.png';
import youtube from '../../../assets/logos/youtube-logotype-4e93278734ae91b1f1aec5b1eebf0fbd8ae441676b4fb658c4974869da5874ee.png';
import phone from '../../../assets/logos/phone_icon-d27d3ccfa4eebf5fa5c7419e3def7d15f0e9f47d59de3179c02dd3d22048a98c.svg';
import mail from '../../../assets/logos/mail_icon-4260a55e62b163f2a269cbac2b5f77089abcede1089547cc928bab6785c6902d.svg';
const Footer = () => {
  return (
    <footer className={classes.footer}>
	<div className="footer-row-top">
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-4 offset-md-1">
          <h4 className="list-title">About E-Mandi </h4>
          <ul className="list-unstyled">
            <li><a target="_blank" href=" ">Our Company</a></li>
            <li><a href=" ">Our People</a></li>
            <li><a href=" ">FAQ&#39;s</a></li>
            <li><a href=" ">Terms &amp; Conditions</a></li>
            <li><a target=" " href="privacy.html">Privacy Policy</a></li>
          </ul>
        </div>
    	  <div className="col-xs-6 col-md-4">
         <h4 className="list-title">Follow Us </h4>
    	    <ul className="list-unstyled">
    	      <li>
    	        <img className="footer-image" src={fb} alt="Facebook logo" />
    	        <a href="https://www.facebook.com/E-Mandi" rel="noopener noreferrer" target="_blank"> E-Mandi </a>
    	      </li>
            <li>
              <img className="footer-image" src={twitter} alt="Twitter logo" />
              <a href="https://twitter.com/E-Mandi" rel="noopener noreferrer" target="_blank"> @EMandi </a>
            </li>
            <li>
              <img className="footer-image" src={linkedin} alt="Linkedin" />
              <a href="https://www.linkedin.com/company/E-Mandi/" rel="noopener noreferrer" target="_blank"> E-Mandi</a>
            </li>
            <li>
    	        <img className="footer-image" src={youtube} alt="Youtube logotype" />
              <a href=" " target="_blank"> E-Mandi </a>
    	      </li>
    	    </ul>
    	  </div>
        <div className="col-xs-6 col-md-3">
        <h4 className="list-title">Contact us </h4>
          <ul className="list-unstyled">
            <li className="img-li">
                <img src={phone} alt="Phone icon" />
                <a className="strong" href="callto:+91 9999999999">+91 9999999999</a>
              </li>
              <li className="img-li">
                <img src={mail} alt="Mail icon" />
                <a href=" "> <span className="__cf_email__" data-cfemail="93fafdf5fcd3f2f4e1fafee3bdf0fcfe">[email&#160;protected]</span> </a>
              </li>
          </ul>
        </div>
      </div>
  	</div>
  </div>
	
</footer>
  )
}

export default Footer;