import React from "react";
import Layout from "../Layout/Layout";
import ajay from "../../assets/images/ajay.jpg";
import rohit from "../../assets/images/rohit1.jpg";
//import shivam "../../assets/images/shivam.jpg";
import sanjay from "../../assets/images/sanjay1.jpg";
import amang from "../../assets/images/amang1.jpg";
import mandi from "../../assets/images/mandi.jpg";

const Ourpeople = props => (
  <Layout><br/><br/>
    <div class="content">
      <div class="aboutUs">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-5 left">
              <div class="imgContainer">
                <img src={ajay} alt="ajay" />
              </div>
              <h3>Ajay Yadav</h3>
              <p>
                MBA graduate AESE / IESE, MSc in Marketing, BSc in Business
                Management.
              </p>
              <p class="txtMid">
                +8 years in management, with C-Level experience as Deputy CEO,
                CFO and CIO Roles in public companies and +7 years in strategic
                consulting
              </p>
              <p class="txtLast">
                CEO – general management, business development, investor and
                stakeholder relations
              </p>
            </div>
            <div class="hidden-xs-down col-sm-2 center">
              <h2 class="text-center">The Team</h2>
              <img src={mandi} alt="Logo" />
            </div>
            <div class="col-xs-12 col-sm-5 right">
              <div class="imgContainer">
                <img src={sanjay} alt="Luis" />
              </div>
              <h3>Sanjay Saupanch</h3>
              <p>MBA graduate AESE / IESE, BSc in Engineering</p>
              <p class="txtMid">
                Several positions as manager and Head of construction projects
              </p>
              <p class="txtMid">
                +12 years in production management and business development
                (national and international)
              </p>
              <p class="txtLast">
                CFO – financial, HR and organizational structure
              </p>
            </div>
          </div>
          <div class="row secondRow">
            <div class="col-xs-12 col-sm-5 left">
              <div class="imgContainer">
                <img src={rohit} alt="Jose" />
              </div>
              <h3>Rohit Sheoran</h3>
              <p>MBA graduate AESE / IESE, BSc in Engineering</p>
              <p class="txtMid">
                Several positions as Head of IT, Compliance and Process
                Improvement
              </p>
              <p class="txtMid">+25 years in Consulting and IsT management</p>
              <p class="txtLast">
                CTO - IT development, IT infrastructure, IT security, quality
                and compliance
              </p>
            </div>
            <div class="col-xs-12 col-sm-5 offset-sm-2 right">
              <div class="imgContainer">
                <img src={amang} alt="Filipe" />
              </div>

              <h3>Aman Gupta</h3>
              <p>MBA graduate AESE / IESE, BSc in Engineering</p>
              <p class="txtMid">
                Farmer and rice producer. Entrepreneur and CEO of 2 start-up
                companies related to energy efficiency
              </p>
              <p class="txtMid">+15 years in business management</p>
              <p class="txtLast">COO - sales, marketing and operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Ourpeople;
