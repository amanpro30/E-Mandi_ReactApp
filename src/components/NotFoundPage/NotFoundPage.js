import React from "react";
import "./NotFoundPage.css";
import errorpage from "../../../src/assets/images1/404.png";

const page404 = props => (
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="span12">
          <div class="fade-in one">
            <div id="whoops">
              <div class="row text-xs-center">
                <img src={errorpage} alt="" class="animated swing mx-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* <div class="span2"></div> */}
        <div class="span8">
          <h1 class="fade-in two">
            The page you are looking for seems to be missing
          </h1>

          <div class="fade-in three">
            <p>
              <a href="/">
                <strong>
                  <h3 class="text-center">Go back</h3>
                </strong>
              </a>
              {/* , or return to <a href="#">yourcompany.com</a> to choose a new
              page.
              <br />
              Please report any broken links to <a href="#">our team</a>. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default page404;
