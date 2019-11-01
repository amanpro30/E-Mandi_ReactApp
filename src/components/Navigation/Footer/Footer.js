import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import classes from './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  return (
    <footer className={classes.footer}>
	<div class="footer-row-top">
    <div class="container">
      <div class="row">
        <div class="col-xs-6 col-md-4 offset-md-1">
          <h4 class="list-title">About Agri MarketPlace </h4>
          <ul class="list-unstyled">
            <li><a target="_blank" href="our-company.html">Our Company</a></li>
            <li><a href="about-us.html">Our People</a></li>
            <li><a href="faq.html">FAQ&#39;s</a></li>
            <li><a href="terms-conditions/agri-marketplace.html">Terms &amp; Conditions</a></li>
            <li><a target="_blank" href="privacy.html">Privacy Policy</a></li>
          </ul>
        </div>
    	  <div class="col-xs-6 col-md-4">
         <h4 class="list-title">Follow Us </h4>
    	    <ul class="list-unstyled">
    	      <li>
    	        <img class="footer-image" src="assets/logos/facebook-logo-0383e563e22ffcbf5b5331cb660c02de2eb287cad5cbf41c92ee987ccf158b11.png" alt="Facebook logo" />
    	        <a href="https://www.facebook.com/agrimarketplace" target="_blank"> agrimarketplace </a>
    	      </li>
            <li>
              <img class="footer-image" src="assets/logos/twitter-logo-2c280dc3870e868da6309a702d3cf0669ae48cc2e9902fcc034838db41359997.png" alt="Twitter logo" />
              <a href="https://twitter.com/agrimarketplace" target="_blank"> @AgriMarketplace </a>
            </li>
            <li>
              <img class="footer-image" src="assets/logos/linkedin-6efc36a69e5c59219b21692f0b795b7aeb4818eae21bc82c828e63d63f7becc1.png" alt="Linkedin" />
              <a href="https://www.linkedin.com/company/agri-marketplace/" target="_blank"> Agri Marketplace </a>
            </li>
            <li>
    	        <img class="footer-image" src="assets/logos/youtube-logotype-4e93278734ae91b1f1aec5b1eebf0fbd8ae441676b4fb658c4974869da5874ee.png" alt="Youtube logotype" />
              <a href="https://www.youtube.com/channel/UCXxytegg70uIUAQ0JtYLXhg" target="_blank"> Agri Marketplace </a>
    	      </li>
    	    </ul>
    	  </div>
        <div class="col-xs-6 col-md-3">
        <h4 class="list-title">Contact us </h4>
          <ul class="list-unstyled">
            <li class="img-li">
                <img src="assets/icons/phone_icon-d27d3ccfa4eebf5fa5c7419e3def7d15f0e9f47d59de3179c02dd3d22048a98c.svg" alt="Phone icon" />
                <a class="strong" href="callto:00351964300963">+351 964 300 963</a>
              </li>
              <li class="img-li">
                <img src="assets/icons/mail_icon-4260a55e62b163f2a269cbac2b5f77089abcede1089547cc928bab6785c6902d.svg" alt="Mail icon" />
                <a href="cdn-cgi/l/email-protection.html#462f282029062721342f2b366825292b"> <span class="__cf_email__" data-cfemail="93fafdf5fcd3f2f4e1fafee3bdf0fcfe">[email&#160;protected]</span> </a>
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