import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import classes from "./Footer.css";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import fb from "../../../assets/logos/facebook-logo-0383e563e22ffcbf5b5331cb660c02de2eb287cad5cbf41c92ee987ccf158b11.png";
import twitter from "../../../assets/logos/twitter-logo-2c280dc3870e868da6309a702d3cf0669ae48cc2e9902fcc034838db41359997.png";
import linkedin from "../../../assets/logos/linkedin-6efc36a69e5c59219b21692f0b795b7aeb4818eae21bc82c828e63d63f7becc1.png";
import youtube from "../../../assets/logos/youtube-logotype-4e93278734ae91b1f1aec5b1eebf0fbd8ae441676b4fb658c4974869da5874ee.png";
import phone from "../../../assets/logos/phone_icon-d27d3ccfa4eebf5fa5c7419e3def7d15f0e9f47d59de3179c02dd3d22048a98c.svg";
import mail from "../../../assets/logos/mail_icon-4260a55e62b163f2a269cbac2b5f77089abcede1089547cc928bab6785c6902d.svg";
const Footer = () => {
  return (
    <footer
      class="fixed-bottam"
      className={classes.footer}
      style={{ backgroundColor: "#343a40" }}
    >
      <div
        className="footer-row-top"
        style={{ backgroundColor: "#343a40", color: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-md-4 offset-md-1">
              <h4 className="list-title" style={{ color: "#fff" }}>
                About E-Mandi{" "}
              </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/company" style={{ color: "#fff" }}>
                    Our Company
                  </a>
                </li>
                <li>
                  <a href="/people" style={{ color: "#fff" }}>
                    Our People
                  </a>
                </li>
                <li>
                  <a href="/faqs" style={{ color: "#fff" }}>
                    FAQ&#39;s
                  </a>
                </li>
                <li>
                  <a href="/terms" style={{ color: "#fff" }}>
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
<<<<<<< HEAD
                  <a href="/privacy_policy" style={{ color: "#fff" }}>
=======
                  <a href="/privacy_policy" >
>>>>>>> 4800d374701f78070bc24f72e037df18806c237c
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-4">
              <h4 className="list-title" style={{ color: "#fff" }}>
                Follow Us{" "}
              </h4>
              <ul className="list-unstyled">
                
                  <img className="footer-image" src={fb} alt="Facebook logo" />
                  <a
                    style={{ color: "#fff" }}
                    href="https://www.facebook.com/E-Mandi"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    E-Mandi
                  </a>
                

                <a class="btn btn-social-icon btn-twitter">
                  <span class="fa fa-twitter"></span>
                </a>

                <li>
                  <img
                    className="footer-image"
                    
                    src={twitter}
                    alt="Twitter logo"
                  />
                  <a style={{ color: "#fff" }}
                    href="https://twitter.com/E-Mandi"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    @EMandi{" "}
                  </a>
                </li>
                <li>
                  <img className="footer-image" src={linkedin} alt="Linkedin" />
                  <a
                    style={{ color: "#fff" }}
                    href="https://www.linkedin.com/company/E-Mandi/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    E-Mandi
                  </a>
                </li>
                <li>
                  <img
                    className="footer-image"
                    src={youtube}
                    alt="Youtube logotype"
                  />
                  <a style={{ color: "#fff" }} href=" " target="_blank">
                    {" "}
                    E-Mandi{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h4 className="list-title" style={{ color: "#fff" }}>
                Contact us{" "}
              </h4>
              <ul className="list-unstyled">
                <li className="img-li">
                  <img src={phone} alt="Phone icon" />
                  <a
                    className="strong"
                    style={{ color: "#fff" }}
                    href="callto:+91 9999999999"
                  >
                    +91 9999999999
                  </a>
                </li>
                <li className="img-li">
                  <img src={mail} alt="Mail icon" />
                  <a href=" ">
                    {" "}
                    <span
                      className="__cf_email__"
                      style={{ color: "white" }}
                      data-cfemail="93fafdf5fcd3f2f4e1fafee3bdf0fcfe"
                    >
                      {/* [email&#160;protected] */}
                      emandi@mandi.com
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    //   <footer class="navbar navbar-expand-sm navbar-dark bg-dark text-center p-4 navbar-bottom w-100" style={{position:"relative",bottom:"0", color:'black'}}>
    //   <div class="container">
    //     <div class="row">
    //       <div class="col">
    //         <p>Copyright ©
    //           <span id="year">2019</span> Smart HealthCare</p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
