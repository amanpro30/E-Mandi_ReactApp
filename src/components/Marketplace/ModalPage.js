import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Layout from "../Layout/Layout";
import { Form, Col, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Order from "./Order";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
class ModalPage extends Component {
  state = {
    modal8: false,
    modal9: false
  };
  toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };
  render() {
    return (<Aux>
      <Layout>
        <br /><br /><br /><br />

        <div class="content" style={{ width: "98%" }}>

          <div class="row">
            <div className="col-xl-4">
              <MDBContainer>
                <MDBBtn color="info" onClick={this.toggle(8)}>Right</MDBBtn>
                <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
                  <MDBModalHeader toggle={this.toggle(8)}>MDBModal title</MDBModalHeader>
                  <MDBModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                    </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
                <MDBBtn color="info" onClick={this.toggle(9)}>Bottom</MDBBtn>
                <MDBModal isOpen={this.state.modal9} toggle={this.toggle(9)} fullHeight position="bottom">
                  <MDBModalHeader toggle={this.toggle(9)}>MDBModal title</MDBModalHeader>
                  <MDBModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                    </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggle(9)}>Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBContainer>




            </div>
            <div className="col-xl-8">sss</div>

            <div class="col-md-7 products-index__col">
              <div class="row">
                <div class="col-md-6">
                  <h3 class="product-filter_header">Order Board</h3>
                </div>
                <div class="col-md-6 text-xs-right">



                </div>
              </div>

              <div class="products-index__top-filter" style={{ border: '3px', borderStyle: 'groove' }}>
                <div class="row">
                  <div class="col-xs-3 products-index__top-filter__count">

                    <div class="row">





                      <Form>
                        <Form.Row>
                          <Form.Group as={Col} controlId="formGridState" style={{ width: '250px' }}>

                            <Form.Control as="select" value={this.state.temp1} onChange={this.handle_change1}>
                              <option>Crop Name</option>
                              {Object.values(this.state.cropTypes).map(x => { return (<option href="#" value={x.cropName} name={x.cropName}>{x.cropName}</option>); })}
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridState" style={{ width: '250px' }}>

                            <Form.Control as="select" value={this.state.temp2} onChange={this.handle_change2}>
                              <option>Crop Variety</option>
                              {Object.values(this.state.cropVariety).map(x => { return (<option href="#" value={x.varietyName} name={x.varietyName}>{x.varietyName}</option>); })}
                            </Form.Control>
                          </Form.Group>

                          <Button variant="secondary" onClick={this.filter_reset}>Reset</Button>
                        </Form.Row>
                      </Form>



                    </div>
                  </div>

                </div>
              </div>

              <div class="products-index__list" style={{ border: '2px', borderStyle: 'groove' }}>
                <div class="products-index__list__header hidden-sm-down">
                  <div class="row">
                    <div class="col-md-4">
                      <label>
                        <span class="translation_missing" title="translation missing: en.products.filter.commodities" style={{ fontSize: '20px', fontWeight: "bold" }}>
                          Commodity
                          </span>
                      </label>
                    </div>
                    <div class="col-md-4">
                      <label style={{ fontSize: '20px', fontWeight: "bold" }}>
                        Bids by Buyers
                          <span class="products-index__list-info">
                          (Currency per weight unit)
                          </span>
                      </label>
                    </div>
                    <div class="col-md-4">
                      <label style={{ fontSize: '20px', fontWeight: "bold" }}>
                        Make Your Bid
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
                          <span class="translation_missing" title="translation missing: en.products.order_board.commodities">
                            Commodities
                            </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {Object.values(this.state.orderData).map(x => { return <Order CropName={x.CropName} CropVariety={x.CropVariety} Quantity={x.Quantity} ProductionMode={x.ProductionMode} BasePrice={x.BasePrice} ClosingDate={x.ClosingDate} SellerName={x.user} id={x.id} />; })}

              <br />
            </div>
          </div>
        </div>

        <Modal show={this.state.show_Market} onHide={this.handleClose_Market} style={{ display: "block" }} fade={false} animation={false}>
          <Modal.Header closeButton style={{ background: "dimgray" }}>
            <Modal.Title>Market Order</Modal.Title>
          </Modal.Header>
          <div style={{ background: "#D6D3D2" }}>
            <div style={{ margin: "50px", width: "80%" }}>
              <Form onSubmit={e => this.OrderCreate(e, this.state.order)}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Crop Name</Form.Label>
                    <Form.Control as="select" name="CropName" value={this.state.order.CropName} onChange={this.handle_change_order1}>

                      {Object.values(this.state.cropTypes).map(x => { return (<option href="#" value={x.cropName} name={x.cropName}>{x.cropName}</option>); })}

                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Crop Variety</Form.Label>
                    <Form.Control as="select" name="CropVariety" value={this.state.order.CropVariety} onChange={this.handle_change_order2}>
                      <option>Crop Variety</option>
                      {Object.values(this.state.cropVariety_order).map(x => { return (<option href="#" value={x.varietyName} name={x.varietyName}>{x.varietyName}</option>); })}

                    </Form.Control>
                  </Form.Group>

                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridProductionMode">
                    <Form.Label>
                      <strong>Production Mode</strong>
                    </Form.Label>

                    <Form.Control as="select" id="exampleSelect" name="ProductionMode" value={this.state.order.ProductionMode} onChange={this.handle_change}>
                      <option value=" ">Select </option>
                      <option value="Organic">Organic</option>
                      <option value="Conventional">Conventional</option>
                      <option value="Hybrid">Hybrid</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridQuantity">
                    <Form.Label>
                      <strong>Quantity (kg)</strong>
                    </Form.Label>
                    <Form.Control placeholder="Enter Quantity" name="Quantity" value={this.state.order.Quantity} onChange={this.handle_change} />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridClosingDate">
                    <Form.Label>
                      <strong>Expected Closing Date</strong>
                    </Form.Label>
                    <Form.Control type="date" name="ClosingDate" value={this.state.order.ClosingDate} onChange={this.handle_change} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridClosingDate">
                    <Form.Label>
                      <strong>Base Price (per kg)</strong>
                    </Form.Label>
                    <Form.Control placeholder="Enter Base Price" name="BasePrice" value={this.state.order.BasePrice} onChange={this.handle_change} />
                  </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="I agree with the E-Mandi Terms and Conditions for buy and sell offers" />
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

        <Modal show={this.state.show_Futures} onHide={this.handleClose_Futures} style={{ display: "block" }} fade={false} animation={false}>
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


                    <Form.Control as="select" id="exampleSelect" name="ProductionMode">
                      <option value=" ">Select </option>
                      <option value="organic">Organic</option>
                      <option value="conventional">Conventional</option>
                      <option value="hybrid">Hybrid</option>
                    </Form.Control>
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
                    <Form.Control type="number" max="99" placeholder="Enter Base Price" />
                  </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="I agree with the E-Mandi Terms and Conditions for buy and sell offers" />
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
        <br /><br /><br /><br /><br />
      </Layout>
    </Aux>);
  }
}
