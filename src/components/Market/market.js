import React from "react";
import { Button, Modal } from "react-bootstrap";
import Layout from "../Layout/Layout";
import digital from "../../assets/images1/digital-white.png";
import agreement from "../../assets/images1/agreement-white.png";
import logistics from "../../assets/images1/logistics-white.png";
import quality from "../../assets/images1/quality-white.png";
import grains from "../../assets/images1/grains.jpg";
import nuts from "../../assets/images1/nuts.jpg";
import others from "../../assets/images1/others.jpg";
import rice from "../../assets/images1/rice.jpg";
import corn from "../../assets/images1/corn.jpg";
import wheat from "../../assets/images1/wheat.jpg";
import barley from "../../assets/images1/barley.jpg";
import almond from "../../assets/images1/almond.jpg";
import walnut from "../../assets/images1/walnut.jpg";
import pistachio from "../../assets/images1/pistachio.jpg";
import hazelnut from "../../assets/images1/hazelnut.jpg";
import cocoa from "../../assets/images1/cocoa.jpg";
import coffee from "../../assets/images1/coffee.jpg";

const Market = props => (
  <Layout>
    <div class="content">
      <div id="product-family__div" class="container-commodity">
        <div class="container">
          <h2 class="commodity__title white">Select a product to buy/sell</h2>

          <div class="family-button__div">
            <button
              id="button_1"
              type="button"
              class="family__button"
              onClick="familyButtonClick([1, 2, 3], '1')"
            >
              <img class="family__white-circle" src={grains} alt="grains" />
              Grains
            </button>

            <button
              id="button_2"
              type="button"
              class="family__button"
              onClick="familyButtonClick([1, 2, 3], '2')"
            >
              <img class="family__white-circle" src={nuts} alt="nuts" />
              Nuts
            </button>

            <button
              id="button_3"
              type="button"
              class="family__button"
              onClick="familyButtonClick([1, 2, 3], '3')"
            >
              <img class="family__white-circle" src={others} alt="others" />
              Others
            </button>
          </div>

          <hr class="hr_separator" />

          <div id="product_1" class="col-md-12">
            <div class="col-md-2">
              <div class="circle-white--big">
                <a href="products/1/filter.html">
                  <img
                    class="product-img-big"
                    src={rice}
                    alt="1bff36c19728eb694011bf6a5ace32a5"
                  />
                  <p class="product__text__services">Rice</p>
                </a>
              </div>
            </div>
            <div class="col-md-2">
              <div class="circle-white--big">
                <a href="products/2/filter.html">
                  <img
                    class="product-img-big"
                    src={corn}
                    alt="03e5cf4ab4e6340d226addc195e12bd4"
                  />
                  <p class="product__text__services">Corn</p>
                </a>
              </div>
            </div>
            <div class="col-md-2">
              <div class="circle-white--big">
                <a href="products/4/filter.html">
                  <img
                    class="product-img-big"
                    src={wheat}
                    alt="2591fa81cf29ff7bd588c662fd620b1e"
                  />
                  <p class="product__text__services">Wheat</p>
                </a>{" "}
              </div>
            </div>
            <div class="col-md-2">
              <div class="circle-white--big">
                <a href="products/5/filter.html">
                  <img
                    class="product-img-big"
                    src={barley}
                    alt="8f76dcc85e5b3391b78cf5b8d1b6eaa2"
                  />
                  <p class="product__text__services">Barley</p>
                </a>{" "}
              </div>
            </div>
          </div>
          <div id="product_2" class="col-md-12">
            <div class="col-md-2">
              <div class="circle-white--big">
                <a href="products/7/filter.html">
                  <img
                    class="product-img-big"
                    src={almond}
                    alt="90bc7532d5fc281124569e8c7bd43f97"
                  />
                  <p class="product__text__services">Almond</p>
                </a>{" "}
              </div>
            </div>
            <div class="col-md-2">
              <div class="circle-white--big">
                <a href="products/8/filter.html">
                  <img
                    class="product-img-big"
                    src={walnut}
                    alt="7cfff81b5ebb9d119cf8fd5dd9167818"
                  />
                  <p class="product__text__services">Walnut</p>
                </a>{" "}
              </div>
            </div>
            <div class="col-md-2">
              <div class="circle-white--big">
                <a href="products/10/filter.html">
                  <img
                    class="product-img-big"
                    src={pistachio}
                    alt="90ef699fb59216476de36a9775bfc241"
                  />
                  <p class="product__text__services">Pistachio</p>
                </a>{" "}
              </div>
            </div>
            <div class="col-md-2">
              <div class="circle-white--big">
                <a href="products/11/filter.html">
                  <img
                    class="product-img-big"
                    src={hazelnut}
                    alt="915fc1a8c3ec3ca36827b61a1ee3fc99"
                  />
                  <p class="product__text__services">Hazelnut</p>
                </a>{" "}
              </div>
            </div>
          </div>
          <div id="product_3" class="col-md-12">
            <div class="col-md-2">
              <div class="circle-white--big">
                <a href="products/9/filter.html">
                  <img
                    class="product-img-big"
                    src={cocoa}
                    alt="E2fd1fab6bebd570be9e013532fc5bef"
                  />
                  <p class="product__text__services">Cocoa</p>
                </a>{" "}
              </div>
            </div>
            <div class="col-md-2">
              <div class="circle-white--big">
                <a href="products/12/filter.html">
                  <img
                    class="product-img-big"
                    src={coffee}
                    alt="76ba659c9b1b929e5b912b4d64741828"
                  />
                  <p class="product__text__services">Coffee</p>
                </a>{" "}
              </div>
            </div>
          </div>

          <hr class="hr_bottom" />
        </div>
        <div class="btn__container">
          <div class="container-banner-talk-us-label commodity-text">
            Can&#39;t find the Product you are looking for?
          </div>
          <button id="contactUs" class="btn-talk-to-us">
            Talk to us
          </button>
        </div>
      </div>

      <div class="container-features">
        <div class="container">
          <div class="row text-xs-center ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <strong>
              <h1>Services</h1>
            </strong>
          </div>
          <br />
          <br />
          <br />
          <br />

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

          <div class="row text-xs-center container-five__join">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;&nbsp;&nbsp;;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a class="btn" href="users/sign_up.html">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Market;
