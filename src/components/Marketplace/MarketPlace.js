import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Layout from "../Layout/Layout";
import { Form, Col, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import { Modal } from "react-bootstrap";
import Order from "./Order";
class MarketPlace extends Component {
  handleClose_Market = () => {
    this.setState({ show_Market: false });
    console.log(this.state.show_Market);
  };
  handleShow_Market = () => {
    this.setState({ show_Market: true });
    console.log(this.state.show_Market);
  };
  handleClose_Futures = () => {
    this.setState({ show_Futures: false });
    console.log(this.state.show_Futures);
  };
  handleShow_Futures = () => {
    this.setState({ show_Futures: true });
    console.log(this.state.show_Futures);
  };
  state = {
    show_Market: false,
    show_Futures: false
  };

  render() {
    return (
      <Aux>
        <Layout>
          {/* ########################################################################################################                    */}
          <div class="content">
            <div class="row">
              <div
                style={{ marginLeft: 45 }}
                class="col-md-4 products-index__col"
              >
                <h3 class="product-filter_header" style={{marginBottom:'13px'}}>Watch List</h3>
                
                <div class="product-filter" style={{border:'3px' , borderStyle:'groove', marginBottam:'20px' ,height:'100%'}}>
                  <div class="row form-filter_product">
                    <div class="col-sm-6 col-md-10 col-lg-10">
                      <h4>Rice</h4>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              <div class="col-md-7 products-index__col">
                <div class="row">
                  <div class="col-md-6">
                    <h3 class="product-filter_header">Order Board</h3>
                  </div>
                  <div class="col-md-6 text-xs-right">
                    <button
                      class="btn btn-solid"
                      onClick={this.handleShow_Market}
                    >
                      New Market Order
                    </button>
                    &nbsp;&nbsp;
                    <button
                      class="btn btn-solid"
                      onClick={this.handleShow_Futures}
                    >
                      New Futures Order
                    </button>
                  </div>
                </div>

                <div class="products-index__top-filter"  style={{border:'3px' , borderStyle:'groove'}}>
                  <div class="row">
                    <div class="col-xs-3 products-index__top-filter__count">
                      Results
                    </div>
                    <div class="col-xs-4 col-sm-4 form-inline products-index__top-filter__sort"></div>
                    <div class="col-xs-5 col-sm-5 products-index__top-filter__pager">
                      <label>Show</label>
                      <select
                        name="limit"
                        id="limit"
                        class="form-control form-select-inline limit-dropdown"
                      >
                        <option value="5">5</option>
                        <option selected="selected" value="10">
                          10
                        </option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                      </select>
                      <label>Lines Per Page</label>
                    </div>
                  </div>
                </div>

                <div class="products-index__list"  style={{border:'2px' ,borderStyle:'groove'}}>
                  <div class="products-index__list__header hidden-sm-down">
                    <div class="row">
                      <div class="col-md-4">
                        <label>
                          <span
                            class="translation_missing"
                            title="translation missing: en.products.filter.commodities"
                          >
                            Commodities
                          </span>
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label>
                          Bids by Buyers
                          <span class="products-index__list-info">
                            (Currency per weight unit)
                          </span>
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label>
                          Offers by Sellers
                          <span class="products-index__list-info">
                            (Currency per weight unit)
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="products-index__list__items">
                    <div class="">
                      <div class="col-xs-3 hidden-md-up">
                        <div class="row">
                          <label>
                            <span
                              class="translation_missing"
                              title="translation missing: en.products.order_board.commodities"
                            >
                              Commodities
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Order />
                <Order />
                <br/>
              </div>
            </div>
          </div>

          <Modal
            show={this.state.show_Market}
            onHide={this.handleClose_Market}
            style={{ display: "block" }}
            fade={false}
            animation={false}
          >
            <Modal.Header closeButton style={{ background: "dimgray" }}>
              <Modal.Title>Market Order</Modal.Title>
            </Modal.Header>
            <div style={{ background: "#D6D3D2" }}>
              <div style={{ margin: "50px", width: "80%" }}>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCropName">
                      <Form.Label style={{ align: "left" }}>
                        <strong>Crop Name</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Crop Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCropVariety">
                      <Form.Label>
                        <strong>Crop Variety</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Crop Variety" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridProductionMode">
                      <Form.Label>
                        <strong>Production Mode</strong>
                      </Form.Label>

                      <Input type="select" name="select" id="exampleSelect">
                        <option>Organic</option>
                        <option>Conventional</option>
                        <option>Hybrid</option>
                      </Input>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridQuantity">
                      <Form.Label>
                        <strong>Quantity (kg)</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Quantity" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridClosingDate">
                      <Form.Label>
                        <strong>Expected Closing Date</strong>
                      </Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridClosingDate">
                      <Form.Label>
                        <strong>Base Price (per kg)</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Base Price" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="I agree with the E-Mandi Terms and Conditions for buy and sell offers"
                    />
                  </Form.Group>
                  <center>
                    <Button variant="secondary" type="submit">
                      Submit
                    </Button>
                  </center>
                </Form>
              </div>
            </div>

            {/* ########################################################################################################### */}

            {/* ############################################################################################################ */}
          </Modal>

          <Modal
            show={this.state.show_Futures}
            onHide={this.handleClose_Futures}
            style={{ display: "block" }}
            fade={false}
            animation={false}
          >
            <Modal.Header closeButton style={{ background: "dimgray" }}>
              <Modal.Title>Futures Order</Modal.Title>
            </Modal.Header>
            <div style={{ background: "#D6D3D2" }}>
              <div style={{ margin: "50px", width: "80%" }}>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCropName">
                      <Form.Label>
                        <strong>Crop Name</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Crop Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCropVariety">
                      <Form.Label>
                        <strong>Crop Variety</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Crop Variety" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridProductionMode">
                      <Form.Label>
                        <strong>Production Mode</strong>
                      </Form.Label>

                      <Input type="select" name="select" id="exampleSelect">
                        <option>Organic</option>
                        <option>Conventional</option>
                        <option>Hybrid</option>
                      </Input>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridQuantity">
                      <Form.Label>
                        <strong>Quantity Required (kg)</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Quantity" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridClosingDate">
                      <Form.Label>
                        {" "}
                        <strong>Delivery Date </strong>
                      </Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridClosingDate">
                      <Form.Label>
                        <strong>Price (per kg)</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Base Price" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridClosingDate">
                      <Form.Label>
                        {" "}
                        <strong>Advance Payment date</strong>{" "}
                      </Form.Label>
                      <Form.Control type="month" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridClosingDate">
                      <Form.Label>
                        <strong>Advance (Percentage)</strong>{" "}
                      </Form.Label>
                      <Form.Control
                        type="number"
                        max="99"
                        placeholder="Enter Base Price"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="I agree with the E-Mandi Terms and Conditions for buy and sell offers"
                    />
                  </Form.Group>
                  <center>
                    <Button variant="secondary" type="submit">
                      Submit
                    </Button>
                  </center>
                </Form>
              </div>
            </div>
          </Modal>
        </Layout>
      </Aux>
    );
  }
}

export default MarketPlace;
