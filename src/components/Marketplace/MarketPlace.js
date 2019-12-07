import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Layout from "../Layout/Layout";
import { Card, Form, Col, Button, Badge } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Order from "./Order";
import axios from "axios";
import {connect} from 'react-redux';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';
import CanvasJSReact from '../../assets/graph/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


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
    x: 1,
    show_Market: false,
    show_Futures: false,
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
    bids:[],
    curruserbid : [],
    availablebalance:0,
    accountbalance:0,
    watchlist:[],
    modal1: false,
    modal2: false,
    graphcrop:"",
    graphvariety:"",
    graphdata:[],
    selectedDate:[],
  };

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  togglebtm = nr => () => {
    this.toggle(8);
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
    var OrderData1 = [...this.state.orderData];
    OrderData1 = this.state.orderData_copy.filter(x => {
      return x.CropName === name;
    });
    this.setState({ orderData: [...OrderData1] }, () => {
    }
    );
    this.setState({ orderData_cropNameFilter: [...OrderData1] });
    this.setState({ temp1: name });

  };
  handle_orderData_cropVariety = e => {
    let varietyName = e.target.value
    console.log('%');
    console.log(this.state.orderData);
    var OrderData1 = this.state.orderData_cropNameFilter.filter(x => {
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

  add_balance = (bal) => {
    let balancedata = {username:this.props.username,balance:{accountbalance:this.state.accountbalance,availablebalance:this.state.availablebalance+bal}};
    axios.put('http://localhost:8000/transaction/balances/' + this.props.username + `/`, balancedata , {
    headers: this.headers}).then(res => { this.setState({'availablebalance':balancedata.balance.availablebalance});});
  }

  del_balance = (bal) =>{
    let balancedata = {username:this.props.username,balance:{accountbalance:this.state.accountbalance,availablebalance:this.state.availablebalance-bal}};
    axios.put('http://localhost:8000/transaction/balances/' + this.props.username + `/`, balancedata , {
    headers: this.headers}).then(res => { this.setState({'availablebalance':balancedata.balance.availablebalance});});
  }

  BidChange = () => {
    axios.get('http://localhost:8000/order/getbids/',{ headers: this.headers }).then(res=>{this.setState({bids:res.data});});
    axios.get('http://localhost:8000/order/getbid/curruser/',{headers:this.headers}).then(res => {this.setState({curruserbid:res.data});console.log(res);});
    axios.get(`http://localhost:8000/transaction/balance/`,
    {headers: 
        {"Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,}
    },).then(res=>{
        this.setState({'accountbalance':res.data[0]['accountbalance']});
        this.setState({'availablebalance': res.data[0]['availablebalance']});
      });
    this.forceUpdate();
  }

  watchListChange = () => {
    axios.get('http://localhost:8000/crop/watchlist/',{headers:this.headers}).then(res => {this.setState({watchlist:res.data})});
    this.forceUpdate();
  }

  headers = {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `JWT ${localStorage.getItem('token')}`,
  }

  changeDate(date){
    var date_ins = new Date(date)
    return date_ins.getFullYear()+'-'+String(date_ins.getMonth() + 1).padStart(2, '0')+'-'+String(date_ins.getDate()).padStart(2, '0')
  }

  componentDidMount() {
    var self = this;
    axios.get('http://localhost:8000/order/otherorder/', { headers: this.headers }).then(res => { self.setState({ orderData: res.data, orderData_copy: res.data }); })
    axios.get('http://localhost:8000/crop/cropname/', { headers: this.headers }).then(res => { self.setState({ cropTypes: res.data }) });
    axios.get('http://localhost:8000/order/getbids/',{ headers: this.headers }).then(res=>{this.setState({bids:res.data});console.log(res);});
    axios.get('http://localhost:8000/order/getbid/curruser/',{headers:this.headers}).then(res => {this.setState({curruserbid:res.data});console.log(res);});
    axios.get(`http://localhost:8000/transaction/balance/`,
    {headers: 
        {"Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,}
    },).then(res=>{
        this.setState({'accountbalance':res.data[0]['accountbalance']});
        this.setState({'availablebalance': res.data[0]['availablebalance']});
      });
    axios.get('http://localhost:8000/crop/watchlist/',{headers:this.headers}).then(res => {this.setState({watchlist:res.data});});
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy+'-'+mm+'-'+dd;
    this.setState({selectedDate:today})
  }

  getCropVariety_filter(e) {
    var name = e.target.value;
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

  addWatchList(e){
    console.log('hw');
    axios.post(`http://localhost:8000/crop/watchlist/${this.state.selectedCrop}/${this.state.selectedVariety}/`,"", { headers:this.headers }).then(res => console.log(res));
  }

  setgraphCrop(e,crop,variety){
    this.setState({"graphcrop":crop});
    this.setState({"graphvariety":variety});
    axios.get('http://localhost:8000/crop/pricedata/'+crop+'/'+variety+'/',{headers:this.headers}).then(res => {this.setState({graphdata:res.data});});
  }

  filterGraph(e){
    this.setState({selectedDate:e.target.value});
    console.log(e.target.value);
  }

  render() {
    const options = {
			theme: "light2", 
			animationEnabled: true,
			exportEnabled: true,
			title:{
				text: ""
			},
			axisX: {
				valueFormatString: "hh:mm TT"
			},
			axisY: {
				includeZero:false,
				prefix: "₹",
				title: "Price (in INR)"
			},
			data: [{
				type: "line",
				showInLegend: true,
        name: this.state.graphcrop + " " + this.state.graphvariety,
				yValueFormatString: "$###0.00",
        xValueFormatString: "hh:mm TT",
				dataPoints: 
            Object.values(this.state.graphdata).filter(l => {return this.changeDate(l['timestamp']) == this.state.selectedDate;}).map(k => { return ({ x: new Date(k['timestamp']) , y: k['price']}) })
          
        }
		  ]
		}


    return (
      <Aux>
        <Layout>
          <br /><br /><br /><br />
          {/* ########################################################################################################                    */}
          <div class="container-fluid">

            <div class="row">

              <div className="col-xl-3 justify-content-right ">
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
                    <div>
                    </div>
                    <Button onClick={this.filter_reset} className="btn    w-100">Reset</Button>
                    <br/><br/><MDBBtn color="info btn-rounded" onClick={e => this.addWatchList(e)}>Add To Watch List</MDBBtn>
                    <br/><br/><MDBBtn color="info btn-rounded" onClick={this.toggle(8)}>Watch List</MDBBtn>
                  </Form.Row>
                </Form>


                <MDBContainer  >
                  <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="left" fade={false} animation={false} >
                    <MDBModalHeader toggle={this.toggle(8)}>&emsp;&emsp;&emsp;&emsp;&emsp;Your Watch List</MDBModalHeader>
                    <MDBModalBody>
                      <Card >
                        <Card.Body>
                          {Object.values(this.state.orderData).map(x => { return (
                              <Card.Text>
                              <tr className="col-xl-12 w-100">
                                <td className="col-xl-3"><span className="text-primary">{x.CropName}</span></td>
                                <td className="col-xl-4"><span className="text-primary">{x.CropVariety}</span></td>
                                <td className="col-xl-3"><span className="text-success">{x.BasePrice}</span></td>
                                <td className="col-xl-1"><span className="text-danger" onClick={e => {this.setgraphCrop(e,x.CropName,x.CropVariety)}}><i class="far fa-chart-bar" onClick={this.togglebtm(1)}></i></span></td>
                              </tr><br/>
                              </Card.Text>
                            )})}
                        </Card.Body>
                      </Card>
                    </MDBModalBody>
                    <MDBModalFooter className="text-success"><hr />
                    </MDBModalFooter>
                  </MDBModal>
                </MDBContainer>

                <MDBContainer>
                  <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} halfHeight position="bottom" fade={false} animation={false}>
                    <MDBModalBody>
                    <div style={{textAlign:"center"}}>
                      <input type="date" onInput={e=>{this.filterGraph(e)}}/>
                      {/* <MDBDatePicker getValue={this.getPickerValue} /> */}
                    </div>
                    <div>
                      <CanvasJSChart options = {options} />
                    </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={this.toggle(1)}>Close</MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>
                </MDBContainer>

              </div>
              {/* #============================================Start================================================== */}
              <div className="col-xl-9 ">

                <div className="col-xl-12">
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
                      <Card style={{width:"100%"}}>
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
                                {Object.values(this.state.orderData).map(
                                  x => { 
                                  return <Order 
                                    CropName={x.CropName} 
                                    CropVariety={x.CropVariety} 
                                    Quantity={x.Quantity} 
                                    ProductionMode={x.ProductionMode} 
                                    BasePrice={x.BasePrice} 
                                    ClosingDate={x.ClosingDate} 
                                    SellerName={x.user} id={x.id}  
                                    Bids={this.state.bids.filter(y => {return y.order == x.id;}).sort((a, b) =>b.price -  a.price )} 
                                    onBidChange={this.BidChange} 
                                    curruserbid={this.state.curruserbid.filter(y => {return y.order == x.id;})} 
                                    accountbalance={this.state.accountbalance} 
                                    availablebalance={this.state.availablebalance} 
                                    onAddBalance={this.add_balance}
                                    onDelBalance={this.del_balance}
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
      </Aux >
    );
  }
}

const mapStateToProps = state =>{
  return{
  username:state.auth.username,
  }
};

export default connect(mapStateToProps, null)(MarketPlace);