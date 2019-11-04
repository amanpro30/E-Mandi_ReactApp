// import React, { Component } from "react";
// import Aux from "../../hoc/Aux";
// import Layout from "../Layout/Layout";
// import { Form, Col, Button } from "react-bootstrap";
// import { Input } from "reactstrap";
// import { Modal } from "react-bootstrap";
// import Order from "./Order";

// class MarketPlace1 extends Component {
//   render() {
//     return (
//       <Layout>
//         <div class="content">
//           <div class="row">
//             <div class="col-md-4 products-index__col">
//               <h3 class="product-filter_header">Characteristics</h3>

//               <div class="product-filter">
//                 <div class="row form-filter_product">
//                   <div class="col-sm-2 col-md-3 col-lg-2"></div>
//                   <div class="col-sm-6 col-md-9 col-lg-10">
//                     <h4>Rice</h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-md-8 products-index__col">
//               <div class="row">
//                 <div class="col-md-6">
//                   <h3 class="product-filter_header">Order Board</h3>
//                 </div>
//                 <div class="col-md-6 text-xs-right">
//                   <button
//                     class="btn btn-solid"
//                     onClick={this.handleShow_Market}
//                   >
//                     New Market Order
//                   </button>
//                   &nbsp;&nbsp;
//                   <button
//                     class="btn btn-solid"
//                     onClick={this.handleShow_Futures}
//                   >
//                     New Futures Order
//                   </button>
//                 </div>
//               </div>

//               <div class="products-index__top-filter">
//                 <div class="row">
//                   <div class="col-xs-3 products-index__top-filter__count">
//                     Results
//                   </div>
//                   <div class="col-xs-4 col-sm-4 form-inline products-index__top-filter__sort"></div>
//                   <div class="col-xs-5 col-sm-5 products-index__top-filter__pager">
//                     <label>Show</label>
//                     <select
//                       name="limit"
//                       id="limit"
//                       class="form-control form-select-inline limit-dropdown"
//                     >
//                       <option value="5">5</option>
//                       <option selected="selected" value="10">
//                         10
//                       </option>
//                       <option value="15">15</option>
//                       <option value="20">20</option>
//                     </select>
//                     <label>Lines Per Page</label>
//                   </div>
//                 </div>
//               </div>

//               <div class="products-index__list">
//                 <div class="products-index__list__header hidden-sm-down">
//                   <div class="row">
//                     <div class="col-md-4">
//                       <label>
//                         <span
//                           class="translation_missing"
//                           title="translation missing: en.products.filter.commodities"
//                         >
//                           Commodities
//                         </span>
//                       </label>
//                     </div>
//                     <div class="col-md-4">
//                       <label>
//                         Bids by Buyers
//                         <span class="products-index__list-info">
//                           (Currency per weight unit)
//                         </span>
//                       </label>
//                     </div>
//                     <div class="col-md-4">
//                       <label>
//                         Offers by Sellers
//                         <span class="products-index__list-info">
//                           (Currency per weight unit)
//                         </span>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="products-index__list__items">
//                   <div class="row products-index__order__row">
//                     <div class="col-xs-3 hidden-md-up">
//                       <div class="row">
//                         <label>
//                           <span
//                             class="translation_missing"
//                             title="translation missing: en.products.order_board.commodities"
//                           >
//                             Commodities
//                           </span>
//                         </label>
//                       </div>
//                       <div class="row product-order_side">
//                         <label>
//                           <span
//                             class="translation_missing"
//                             title="translation missing: en.products.order_board.best_bids_sell"
//                           >
//                             Best Bids Sell
//                           </span>
//                         </label>
//                       </div>
//                     </div>
//                     <div class="col-xs-9 col-md-12 product-order-detail">
//                       <div class="col-xs-12 col-md-3 product-order_title">
//                         <p>Japonica / Long A, Paddy, Teti</p>
//                         <p class="btns-contain">
//                           <a
//                             href="#chart0"
//                             class="btn btn-transparent btn__chart chart-link-down"
//                             data-toggle="collapse"
//                             aria-expanded="false"
//                             aria-controls="chart0"
//                           >
//                             Show Graph
//                           </a>
//                           <a
//                             href="#chart0"
//                             data-toggle="collapse"
//                             aria-expanded="false"
//                             aria-controls="chart0"
//                             class="btn btn-transparent btn__chart chart-link-up hide"
//                           >
//                             Hide Graph
//                           </a>
//                           <a
//                             class="btn btn-transparent btn__deals"
//                             href="/products/1/all_deals?bids%5B%5D=307&amp;label=Japonica+%2F+Long+A%2C+Paddy%2C+Teti"
//                           >
//                             Show All Deals
//                           </a>
//                         </p>
//                       </div>

//                       <div class="col-xs-12 col-md-9 flex-on-them">
//                         <div class="col-xs-12 col-md-6 products-order-row"></div>

//                         <div class="col-xs-12 col-md-6 products-order-row">
//                           <a href="/bids/307?previous_url=order_board_return">
//                             <div class="col-xs-3 col-sm-4 col-md-4 products-index__sell__col">
//                               <div class="bid-sell-hover">
//                                 <div>
//                                   <p class="product-order__ppt_sell">€400</p>
//                                   <p class="product-order__weight">60.0</p>
//                                   <p class="product-order__unit">MT</p>
//                                 </div>
//                                 <p class="bid-sell-hover__info">
//                                   <span class="info">Metric Tons</span>
//                                 </p>
//                               </div>
//                             </div>
//                           </a>{" "}
//                         </div>
//                       </div>

//                       <div id="chart0" class="row collapse">
//                         <div class="col-md-12"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
//   }
// }
// export default MarketPlace1;
