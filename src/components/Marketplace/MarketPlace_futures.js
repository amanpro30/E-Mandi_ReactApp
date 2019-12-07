import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Layout from "../Layout/Layout";
import { Card, Form, Col, Button, Badge } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Orderf from "./Orderf";
import axios from "axios";
import {connect} from 'react-redux';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';

class MarketPlace_future extends Component {
    state={
        isTrue: false,
        orderData: [],
        orderData_copy: "",
        availablebalance:0,
        accountbalance:0,
        modifyOrder:[]
    }
    headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,
      }
      componentDidMount() {
        var self = this;
        axios.get('http://127.0.0.1:8000/order/otherfutures/', { headers: this.headers }).then(res => { self.setState({ orderData: res.data, orderData_copy: res.data }); console.log(this.state.orderData); })
        // axios.get('http://localhost:8000/crop/cropname/', { headers: this.headers }).then(res => { self.setState({ cropTypes: res.data }) });
        // axios.get('http://localhost:8000/order/getbids/',{ headers: this.headers }).then(res=>{this.setState({bids:res.data});console.log(res);});
        // axios.get('http://localhost:8000/order/getbid/curruser/',{headers:this.headers}).then(res => {this.setState({curruserbid:res.data});console.log(res);});
        axios.get(`http://localhost:8000/transaction/balance/`,
        {headers: 
            {"Content-Type": "application/json",
            accept: "application/json",
            Authorization: `JWT ${localStorage.getItem('token')}`,}
        },).then(res=>{
            this.setState({'accountbalance':res.data[0]['accountbalance']});
            this.setState({'availablebalance': res.data[0]['availablebalance']});
          });
      } 
      sellOrder= (e) =>{
          console.log(e.target.value)
          console.log('**')
          axios.get(`http://localhost:8000/order/futurecontract/`+ e.target.value +`/`,
        {headers: 
            {"Content-Type": "application/json",
            accept: "application/json",
            Authorization: `JWT ${localStorage.getItem('token')}`,}
        },).then(res=>{
            // this.setState({'accountbalance':res.data[0]['accountbalance']});
            // this.setState({'availablebalance': res.data[0]['availablebalance']});

                this.setState({modifyOrder:res.data});
                console.log('**',this.state.modifyOrder);


            console.log(res.data)
          });
          axios.put(`http://localhost:8000/order/futurecontract/`+ e.target.value +`/`,{...this.state.modifyOrder},{headers:this.headers}).then(res=>{
              console.log('done');
              axios.get('http://127.0.0.1:8000/order/otherfutures/', { headers: this.headers }).then(res => { this.setState({ orderData: res.data, orderData_copy: res.data }); console.log(this.state.orderData); })
              this.forceUpdate();

        })

      } 
      render() {
        return (
            <Aux>
            <Layout>
              <br /><br /><br /><br />
              {/* ########################################################################################################                    */}
              <div class="container-fluid">
    
                <div class="row">
    
                  <div className="col-xl-3 justify-content-right ">
    
                    {/* <Form>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridState" style={{ width: '250px' }}>
                          <Form.Control as="select" value={this.state.temp1} onChange={this.handle_change1}>
                            <option>Crop Name</option>
                            {Object.values(this.state.cropTypes).map(x => { return (<option href="#" value={x.cropName} name={x.cropName} >{x.cropName}</option>) })}
                          </Form.Control>
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridState" style={{ width: '250px' }}>
                          <Form.Control as="select" value={this.state.temp2} onChange={this.handle_change2} >
                            <option>Crop Variety</option>
                            {Object.values(this.state.cropVariety).map(x => { return (<option href="#" value={x.varietyName} name={x.varietyName} >{x.varietyName}</option>) })}
                          </Form.Control>
                        </Form.Group>
                        <div>
                        </div>
                        <Button onClick={this.filter_reset} className="btn    w-100">Reset</Button>
                        <br/><br/><MDBBtn color="info btn-rounded" onClick={e => this.addWatchList(e)}>Add To Watch List</MDBBtn>
                        <br/><br/><MDBBtn color="info btn-rounded" onClick={this.toggle(8)}>Watch List</MDBBtn>
    
                      </Form.Row>
                    </Form> */}
    
    
                  
                  </div>
                  {/* #============================================Start================================================== */}
                  <div className="col-xl-12">
    
                    <div className="col-xl-12">
                      
                      {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                      <div>
                        <tr className="col-xl-12">
                          <Card style={{width:"100%"}}>
                            <Badge>
                              <h4>
                                <tr className="col-xl-12">
                                  <td className="col-xl-4 text-grey">Commodity</td>
                                  <td className="col-xl-4 text-grey">But this order<br /><small className="text-grey"></small></td>
                                </tr>
                              </h4>
    
                            </Badge>
                            <br />
                            <Card.Body>
                              <Card.Text>
                                <h6>
                                  <b>
                                    {Object.values(this.state.orderData).map(
                                      x => { 
                                      return <Orderf
                                        CropName={x.Crop} 
                                        // CropVariety={x.CropVariety} 
                                        Quantity={x.Quantity} 
                                        // ProductionMode={x.ProductionMode} 
                                        AdvanceDate={x.AdvanceDate} 
                                        OrderDate={x.OrderDate}
                                        // DeliveryDate={x.DeliveryDate} 
                                        SellerName={x.user} id={x.id} 
                                        Price={x.ContractPrice}
                                        Advance={x.advance}
                                        accountbalance={this.state.accountbalance} 
                                        availablebalance={this.state.availablebalance} 
                                        onAddBalance={this.add_balance}
                                        onDelBalance={this.del_balance}
                                        sellOrder={this.sellOrder}
                                      />})}
                                  </b>
                                </h6>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </tr>
                      </div>
                    </div>{/**extra */}
    
                  </div> {/* col of 2 */}
                </div>{/* row  */}
              </div>
    
              
              {/* #==================================END==================================== */}
    
    
              {/* <Modal
                show={this.state.show_Market}
                onHide={this.handleClose_Market}
                style={{ display: "block" }}
                fade={false}
                animation={false}
              >
                <Modal.Header class="info-color white-text" closeButton>
                  <Modal.Title  ><span>Market Order</span></Modal.Title>
                </Modal.Header>
                <div style={{ background: "#D6D3D2" }}>
                  <div style={{ margin: "50px", width: "80%" }}>
                    <Form onSubmit={e => this.OrderCreate(e, this.state.order)}>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Crop Name</Form.Label>
                          <Form.Control as="select" name="CropName" value={this.state.order.CropName} onChange={this.handle_change_order1}>
                            <option>Crop Name</option>
                            {Object.values(this.state.cropTypes).map(x => { return (<option href="#" value={x.cropName} name={x.cropName} >{x.cropName}</option>) })}
    
                          </Form.Control>
                        </Form.Group>
    
                        <Form.Group as={Col}>
                          <Form.Label>Crop Variety</Form.Label>
                          <Form.Control as="select" name="CropVariety" value={this.state.order.CropVariety} onChange={this.handle_change_order2}>
                            <option>Crop Variety</option>
                            {Object.values(this.state.cropVariety_order).map(x => { return (<option href="#" value={x.varietyName} name={x.varietyName} >{x.varietyName}</option>) })}
    
                          </Form.Control>
                        </Form.Group>
    
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridProductionMode">
                          <Form.Label>
                            Production Mode
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
                            Quantity (kg)
                          </Form.Label>
                          <Form.Control placeholder="Enter Quantity" name="Quantity" value={this.state.order.Quantity} onChange={this.handle_change} />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridClosingDate">
                          <Form.Label>
                            Expected Closing Date
                          </Form.Label>
                          <Form.Control type="date" name="ClosingDate" value={this.state.order.ClosingDate} onChange={this.handle_change} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridClosingDate">
                          <Form.Label>
                           Base Price (per kg)
                          </Form.Label>
                          <Form.Control placeholder="Enter Base Price" name="BasePrice" value={this.state.order.BasePrice} onChange={this.handle_change} />
                        </Form.Group>
                      </Form.Row>
    
                      <Form.Group id="formGridCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="I agree with the ₹-Mandi Terms and Conditions for buy and sell offers"
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
                    <Form onSubmit={e => this.OrderCreateFutures(e, this.state.orderFutures.order)}>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridCropName">
                          <Form.Label>
                            <strong>Crop Name</strong>
                          </Form.Label>
                          <Form.Control as="select" name="CropName" value={this.state.orderFutures.CropName} onChange={this.handle_change_futures1}>
                            <option>Crop Name</option>
                            {Object.values(this.state.cropTypes).map(x => { return (<option href="#" value={x.cropName} name={x.cropName} >{x.cropName}</option>) })}
    
                          </Form.Control>
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridCropVariety">
                          <Form.Label>
                            <strong>Crop Variety</strong>
                          </Form.Label>
                          <Form.Control as="select" name="CropVariety" value={this.state.orderFutures.CropVariety} onChange={this.handle_change_futures2}>
                            <option>Crop Variety</option>
                            {Object.values(this.state.cropVariety_order).map(x => { return (<option href="#" value={x.varietyName} name={x.varietyName} >{x.varietyName}</option>) })}
    
                          </Form.Control>                    </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridProductionMode">
                          <Form.Label>
                            <strong>Production Mode</strong>
                          </Form.Label>
    
    
                          <Form.Control as="select" id="exampleSelect" name="ProductionMode" value={this.state.orderFutures.order.ProductionMode} onChange={this.handle_change_futures}>
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
                          <Form.Control placeholder="Enter Quantity" name="Quantity" value={this.state.orderFutures.Quantity} onChange={this.handle_change_futures} />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridClosingDate">
                          <Form.Label>
                            {" "}
                            <strong>Delivery Date </strong>
                          </Form.Label>
                          <Form.Control type="date" name="DeliveryDate" value={this.state.orderFutures.order.DeliveryDate} onChange={this.handle_change_futures} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridClosingDate" >
                          <Form.Label>
                            <strong>Price (per kg)</strong>
                          </Form.Label>
                          <Form.Control placeholder="Enter Base Price" name="ContractPrice" value={this.state.orderFutures.order.ContractPrice} onChange={this.handle_change_futures} />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridClosingDate">
                          <Form.Label>
                            {" "}
                            <strong>Advance Payment By</strong>{" "}
                          </Form.Label>
                          <Form.Control type="date" name="AdvanceDate" value={this.state.orderFutures.order.AdvanceDate} onChange={this.handle_change_futures} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridClosingDate">
                          <Form.Label>
                            <strong>Advance (Percentage)</strong>{" "}
                          </Form.Label>
                          <Form.Control
                            type="number"
                            max="99"
                            placeholder="Enter Base Price"
                            name="advance"
                            value={this.state.orderFutures.order.advance}
                            onChange={this.handle_change_futures}
                          />
                        </Form.Group>
                      </Form.Row>
    
                      <Form.Group id="formGridCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="I agree with the ₹-Mandi Terms and Conditions for buy and sell offers"
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
              </Modal> */}
            </Layout>
          </Aux >
        );
      }
    }
    
    const mapStateToProps = state =>{
      return{
      username:state.auth.username,
      }
    };
    
    export default connect(mapStateToProps, null)(MarketPlace_future);