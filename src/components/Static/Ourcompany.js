import React from "react";
import Layout from "../Layout/Layout";
import Laptop_Graphic_agrimp_crop from "../../assets/images/Laptop_Graphic_agrimp_crop.png";
import mandi from "../../assets/images/mandi.jpg";

const Ourcompany = props => (
  <Layout><br/><br/>
    <div class="content">
      <div class="our_company">
        <div class="our_vision_and_mission our-company-section">
          <h1>
            OUR <green>VISION</green>
          </h1>
          <p>
            ₹ Mandi’s vision is to become the largest agricultural fair-trade
            platform, <br />
            connecting farmers to industrial all around the world.
          </p>

          <h1>
            OUR <green>MISSION</green>
          </h1>
          <p>
            ₹ Mandi’s mission is to become THE global reference for DIGITAL
            agricultural food crop transactions <br />
            through a complete PLATFORM solution.
          </p>
        </div>

        <div class="our_solution our-company-section">
          <h1>
            OUR <green>SOLUTION</green>
          </h1>
          <p>
            ₹ Mandi provides a full-solution that operates throughout the entire
            agro-industry supply chain.
          </p>
          <div class="row">
            <div class="col-lg-5 hidden-md-down">
              <img
                src={Laptop_Graphic_agrimp_crop}
                alt="Laptop graphic agrimp crop"
              />
            </div>
            <div class="col-xs-12 col-lg-7">
              <ul>
                <li>
                  <span>
                    A user-friendly platform that generates market opportunity
                    for farmers and industry buyers.
                  </span>
                </li>
                <li>
                  <span>
                    Unlimited access to a global market from anywhere, at
                    anytime.
                  </span>
                </li>
                <li>
                  <span>
                    Transparent and reliable market information, deal creation
                    and negotiation.
                  </span>
                </li>
                <li>
                  <span>Integrated and secure platform payment processes.</span>
                </li>
                <li>
                  <span>
                    Tailored product quality verification and logistic services.
                  </span>
                </li>
                <li>
                  <span>A market with only verified buyers and sellers.</span>
                </li>
                <li>
                  <span>Customer support &amp; insight.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="user_benefits our-company-section">
          <h1>
            {" "}
            USER <green>BENEFITS</green>{" "}
          </h1>
          <div class="video-container">
            <div class="resp-container">
              <iframe
                class="resp-iframe"
                title="myFrame"
                src="https://www.youtube.com/embed/FAvIa27RcyU?rel=0"
                frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; pictur₹ in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="focus-and-experience our-company-section">
          <h1>
            {" "}
            OUR <green>FOCUS</green> & <green>EXPERIENCE</green>{" "}
          </h1>
          <p>
            {" "}
            ₹ Mandi is a group of experts who leverage their knowledge &amp;
            experience in Farming, Industry Procurement, Digital Business, and
            Disruptive Innovation at all times. We aim at redistributing value
            through the agriculture supply chain, to do so requires us to be
            agile, reliable and transparent. We promote these values throughout
            all of our actions, operations and services.{" "}
          </p>
          <center>
            <img src={mandi} alt="Focus and experience en" />
          </center>
        </div>
        <div class="know-your-customer our-company-section">
          <h1>
            KNOW-<green>YOUR</green>-CUSTOMER
          </h1>
          <p class="intro-text">
            Know-Your-Customer (KYC) is the process we use to verify the
            identity and origin of finance of users in our digital market place.
            Thus, preventing any money laundering and the financing of terrorist
            activities over our platform, whilst creating a network with only
            trustworthy agricultural buyers and sellers.
          </p>
          <div class="row">
            <div class="col-md-6">
              <h2>KYC FOR SELLERS</h2>
              <p>
                Seller accounts are verified by Agri MP and our partners
                Lemonway &amp; BNP Paribas. They are responsible for reviewing
                the company&#39;s registration document, proof of I.D. and user
                residence, and proof of company IBAN issues by that seller&#39;s
                bank.
              </p>
            </div>
            <div class="col-md-6">
              <h2>KYC FOR BUYERS</h2>
              <p>
                Buyer accounts are verified by Agri MP and our partners Lemonway
                &amp; BNP Paribas. The buyer KYC process is equal to the
                seller’s, but is not mandatory unless the buyer want to retract
                funds from his Agri MP wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Ourcompany;
