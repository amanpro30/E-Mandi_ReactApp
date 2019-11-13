import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Layout from "../Layout/Layout";
import { Form, Col, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Order from "./Order";
import axios from "axios";


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
    show_Futures: false,
    orderData: "",
    order: {
      CropName:"",
      CropVariety:"",
      Quantity:"",
      OrderDate:"",
      ClosingDate:"",
      ProductionMode:"",
      BasePrice:"",
      OrderStatus:"",
      }
    };
  
    headers = {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `JWT ${localStorage.getItem('token')}`,
    }

  OrderCreate = (e, data) => {
    e.preventDefault();
    console.log('coming')
    this.handleClose_Market()
    axios.post(`http://localhost:8000/order/marketorder/`, data,{
        headers: this.headers})
    .then(res => {
    })
  };  

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState['order'][name] = value;
      return newState;
    })};

    headers = {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `JWT ${localStorage.getItem('token')}`,
    }

    componentDidMount(){
    var self=this;  
    axios.get('http://localhost:8000/order/otherorder/',{headers:this.headers}).then(res => {self.setState({orderData:res.data});})
    }

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
                      class="btn btn-secondary"
                      onClick={this.handleShow_Market}
                    >
                      New Market Order
                    </button>
                    &nbsp;&nbsp;
                    <button
                      class="btn btn-secondary"
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
                            style={{fontSize:'20px' ,fontWeight:"bold"}}
                          >
                            Commodity
                          </span>
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label style={{fontSize:'20px' ,fontWeight:"bold"}}>
                          Bids by Buyers
                          <span class="products-index__list-info">
                            (Currency per weight unit)
                          </span>
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label style={{fontSize:'20px' ,fontWeight:"bold"}}>
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
                
                {Object.values(this.state.orderData).map(x=>{console.log(x); return <Order CropName={x.CropName} CropVariety={x.CropVariety} Quantity={x.Quantity} ProductionMode={x.ProductionMode} BasePrice={x.BasePrice} ClosingDate={x.ClosingDate} SellerName={x.user} id={x.id}/>})}
                
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
                <Form onSubmit={e => this.OrderCreate(e, this.state.order)}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCropName" >
                      <Form.Label style={{ align: "left" }}>
                        <strong>Crop Name</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Crop Name" name="CropName" value={this.state.order.CropName} onChange={this.handle_change}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCropVariety">
                      <Form.Label>
                        <strong>Crop Variety</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Crop Variety" name="CropVariety" value={this.state.order.CropVariety} onChange={this.handle_change}/>
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
                        <option value="Hybrid" >Hybrid</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridQuantity">
                      <Form.Label>
                        <strong>Quantity (kg)</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Quantity" name= "Quantity" value={this.state.order.Quantity} onChange={this.handle_change}/>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridClosingDate">
                      <Form.Label>
                        <strong>Expected Closing Date</strong>
                      </Form.Label>
                      <Form.Control type="date" name= "ClosingDate" value={this.state.order.ClosingDate} onChange={this.handle_change}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridClosingDate">
                      <Form.Label>
                        <strong>Base Price (per kg)</strong>
                      </Form.Label>
                      <Form.Control placeholder="Enter Base Price" name= "BasePrice" value={this.state.order.BasePrice} onChange={this.handle_change}/>
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


                      <Form.Control as="select" id="exampleSelect" name="ProductionMode">
                        <option value=" ">Select </option>
                        <option value="organic">Organic</option>
                        <option value="conventional">Conventional</option>
                        <option value="hybrid" >Hybrid</option>
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
