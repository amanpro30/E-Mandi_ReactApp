import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Layout from "../Layout/Layout";
import { Table, Card, Form, Col, Button, Badge, Dropdown } from "react-bootstrap";
import Sidebar from 'react-sidebar';
import { Modal } from "react-bootstrap";
import Order from "./Order";
import axios from "axios";
import classes from "./marketplace.css"
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';
import { thisExpression } from "@babel/types";



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
    ordersType:'Market',
    show_Market: false,
    show_Futures: false,
    futureData:[],
    marketData:[],
    orderData: [],
    orderData_copy: "",
    orderData_cropNameFilter: "",
    order: {
      CropName: "",
      CropVariety: "",
      Quantity: "",
      OrderDate: "",
      ClosingDate: "",
      ProductionMode: "",
      BasePrice: "",
      OrderStatus: "",

    },

    orderFutures: {
      CropName: "",
      CropVariety: "",
      order: {
        Quantity: "",
        DeliveryDate: "",
        ProductionMode: "",
        ContractPrice: "",
        advance: "",
        AdvanceDate: "",

      },

    },
    cropTypes: [],
    cropVariety: [],
    cropVariety_order: [],
    selectedCrop: "",
    selectedVariety: "",

    temp1: "Crop Name",
    temp2: "Crop Variety",
    modal8: false,
    modal9: false,
    changed:false,
  };

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  sidebarStyles = {
    sidebar: {
      width: '358500px'
    }
  };
  headers = {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `JWT ${localStorage.getItem('token')}`,
  }

  handle_orderData_cropName = e => {
    var name = e.target.value;
    console.log(name);
    console.log('^');
    console.log(this.state.orderData);
    var OrderData1 = [...this.state.orderData];
    OrderData1 = this.state.orderData_copy.filter(x => {
      return x.CropName === name;
    });
    this.setState({ orderData: [...OrderData1] }, () => {
      console.log(OrderData1);
      console.log(this.state.orderData);
    }
    );
    this.setState({ orderData_cropNameFilter: [...OrderData1] });
    this.setState({ temp1: name });
    this.setState({ changed:true });

  };
  handle_orderData_cropVariety = e => {
    let varietyName = e.target.value
    console.log('%');
    console.log(this.state.orderData);
    var OrderData1 = [...this.state.orderData_copy];
    var OrderData1 = this.state.orderData_copy.filter(x => {
      return x.CropVariety === varietyName;
    });
    console.log('%%');
    console.log(OrderData1);
    this.setState({ orderData: [...OrderData1] }, () => {
      console.log(OrderData1);
      console.log(this.state.orderData);
    }
    );
    this.setState({ temp2: varietyName });

  };
  filter_reset = () => {
    console.log('inside filter reset');
    this.setState({ temp1: "Crop Name" });
    this.setState({ temp2: "Crop Variety" });
    this.setState({ orderData: [...this.state.orderData_copy] }, () => {
      console.log(this.state.orderData);
      console.log(this.state.orderData_copy);
    });
  }
  

  OrderCreate = (e, data) => {
    e.preventDefault();
    console.log('coming')
    this.handleClose_Market()
    axios.post(`http://localhost:8000/order/marketorder/`, data, {
      headers: this.headers
    })
      .then(res => {
      })
  };
  OrderCreateFutures = (e, data) => {
    e.preventDefault();
    console.log('coming')
    this.handleClose_Futures()
    axios.post(`http://localhost:8000/order/futurecontract/${this.state.orderFutures['CropName']}/${this.state.orderFutures['CropVariety']}/`, data, {
      headers: this.headers
    })
      .then(res => {
      })
    console.log(this.state.orderFutures)
  };
  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState['order'][name] = value;
      return newState;
    })
  };
  handle_change_futures = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState['orderFutures']['order'][name] = value;
      return newState;
    })
  };
  handle_change_order1 = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState['order'][name] = value;
      return newState;
    })
    this.getCropVariety_order(e);
  };
  handle_change_order2 = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value)
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState['order'][name] = value;
      return newState;
    })
  };

  handle_change_futures1 = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState['orderFutures'][name] = value;
      return newState;
    })
    this.getCropVariety_order(e);
  };
  handle_change_futures2 = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value)
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState['orderFutures'][name] = value;
      return newState;
    })
  };

  handle_change1 = e => {

    this.getCropVariety_filter(e);
    this.handle_orderData_cropName(e);
    // console.log(e.target.value);
  }

  handle_change2 = e => {
    let varietyName = e.target.value
    console.log(varietyName);
    this.setState({ selectedVariety: varietyName });
    this.filterCrop(e, this.state.selectedCrop, this.state.selectedVariety)
    this.handle_orderData_cropVariety(e);

  }

    componentDidMount(){
    var self=this;  
    axios.get('http://localhost:8000/order/otherorder/',{headers:this.headers}).then
    
    
    (res => {self.setState({orderData:res.data, orderData_copy:res.data, marketData:res.data});})
    console.log('*');
    axios.get('http://localhost:8000/crop/cropname/',{headers:this.headers}).then(res => {self.setState({cropTypes:res.data})});
    // console.log(this.state.orderData.cropName);
    axios.get('http://localhost:8000/order/otherfutures/',{headers:this.headers}).then(res => {console.log('II'); self.setState({futureData:res.data}); console.log('XX') ; console.log(this.state.futureData);})
    console.log('*');
    console.log(this.state.futureData);
    
    

  }

  getCropVariety_filter(e) {
    var name = e.target.value;

    console.log('xx');
    axios.get('http://localhost:8000/crop/crop/' + name + '/', { headers: this.headers }).then(res => { this.setState({ cropVariety: res.data }); this.setState({ selectedCrop: name }) });
    console.log(this.state.cropVariety);
  }
  getCropVariety_order(e) {
    var name = e.target.value;

    console.log('xx');
    axios.get('http://localhost:8000/crop/crop/' + name + '/', { headers: this.headers }).then(res => { this.setState({ cropVariety_order: res.data }) });
    console.log(this.state.cropVariety_order);
  }

  filterCrop(e, cropname, cropvariety) {
    axios.get('http://localhost:8000/order/crop/' + cropname + '/' + cropvariety + '/', { headers: this.headers }).then(res => { console.log('hallaho'); console.log(res); });
  }


  render() {
    return (
      <Aux>
        <Layout>
          <br /><br /><br /><br />
          {/* ########################################################################################################                    */}
          <div class="container-fluid">

            <div class="row">

              <div className="col-xl-4   ">

                <Form>
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

                    <Button onClick={this.filter_reset} className="btn    w-100">Reset</Button>
                  </Form.Row>
                </Form>


                <MDBContainer  >
                  <MDBBtn color="info btn-rounded" onClick={this.toggle(8)}>Watch List</MDBBtn>
                  <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="left" fade={false} animation={false} >
                    <MDBModalHeader toggle={this.toggle(8)}>&emsp;&emsp;&emsp;&emsp;&emsp;Your Watch List</MDBModalHeader>
                    <span className="btn  btn-rounded btn-grey  ">ADD</span>
                    <MDBModalBody>
                      <Card >
                        <Card.Body>
                          <Card.Text>
                            <tr className="col-xl-12 w-100">
                              <td className="col-xl-3"><span className="text-primary">Rice</span></td>
                              <td className="col-xl-4"><span className="text-primary">Basmati</span></td>
                              <td className="col-xl-3"><span className="text-success">100</span></td>
                              <td className="col-xl-1"><span className="text-danger"><MDBIcon icon="times" /></span></td>
                            </tr>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </MDBModalBody>
                    <MDBModalFooter className="text-success"><hr />
                    </MDBModalFooter>
                  </MDBModal>
                </MDBContainer>
              </div>
              {/* #============================================Start================================================== */}
              <div className="col-xl-8 ">

                <div className="col-xl-15">
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

                      <Button onClick={this.filter_reset} className="btn    w-100">Reset</Button>
                    </Form.Row>
                  </Form> */}

                  {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                  <div>
                    <tr className="col-xl-12">
                      <Card>
                        <Badge>
                          <h4>
                            <tr className="col-xl-12">
                              <td className="col-xl-4 text-grey">Commodity</td>
                              <td className="col-xl-4 text-grey">Bids by Buyers<br /><small className="text-grey">(Currency per weight unit)</small></td>
                              <td className="col-xl-4 text-grey">Make Your Bid<br /><small>(Currency per weight unit)</small></td>
                            </tr>
                          </h4>

                        </Badge>
                        <br />
                        <Card.Body>
                          <Card.Text>
                            <h6>
                              <b>
                                {Object.values(this.state.orderData).map(x => {  console.log('ss', this.state.orderData); return <Order CropName={x.CropName} CropVariety={x.CropVariety} Quantity={x.Quantity} ProductionMode={x.ProductionMode} BasePrice={x.BasePrice} ClosingDate={x.ClosingDate} SellerName={x.user} id={x.id} changed={this.state.changed} /> })}

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


          <Modal
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
          </Modal>
        </Layout>
      </Aux >
    );
  }
}

export default MarketPlace;