import React, { Component } from "react";
import Aux from "../../hoc/Aux";
class Order extends Component {
  render() {
    return (
      <Aux>
        <div class="products-index__list__items">
          <div
            style={{ marginLeft: 3, marginRight: 3 }}
            class=" row products-index__order__row"
          >
            <div class="col-xs-12 col-md-12  product-order-detail">
              <div class="col-xs-12 col-md-3">
                <p>Japonica / Long A, Paddy, Teti</p>
                <p class="btns-contain">
                  <a
                    href="#chart0"
                    class="btn btn-transparent btn__chart chart-link-down"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="chart0"
                  >
                    Show Graph
                  </a>
                  <a
                    href="#chart0"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="chart0"
                    class="btn btn-transparent btn__chart chart-link-up hide"
                  >
                    Hide Graph
                  </a>
                  <a
                    class="btn btn-transparent btn__deals"
                    href="/products/1/all_deals?bids%5B%5D=307&amp;label=Japonica+%2F+Long+A%2C+Paddy%2C+Teti"
                  >
                    Show All Deals
                  </a>
                </p>
              </div>

              <div class="col-xs-12 col-md-9 flex-on-them">
                <div class="col-xs-12 col-md-6 products-order-row"></div>

                <div class="col-xs-12 col-md-6 products-order-row">
                  <a href="/bids/307?previous_url=order_board_return">
                    <div class="col-xs-3 col-sm-4 col-md-4 products-index__sell__col">
                      <div class="bid-sell-hover">
                        <div>
                          <p class="product-order__ppt_sell">€400</p>
                          <p class="product-order__weight">60.0</p>
                          <p class="product-order__unit">MT</p>
                        </div>
                        <p class="bid-sell-hover__info">
                          <span class="info">Metric Tons</span>
                        </p>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>

              <div id="chart0" class="row collapse">
                <div class="col-md-12"></div>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Order;
