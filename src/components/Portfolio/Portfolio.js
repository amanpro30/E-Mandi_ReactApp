import Layout from "../Layout/Layout";
import React, { Component } from "react";
import { Table, Card, Badge, Button ,Form, Col,  Modal} from "react-bootstrap";
import axios from "axios";
import Order from "../Marketplace/Order";
import Order_Card from "./Order_Card";
import Order_Card_Executed from './Order_Card_Executed'
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import jsPDF from "jspdf";
import Order_Card_Purchased from './Order_Card_Purchased'

class Portfolio extends Component {
  state = {
    show_Market: false,
    show_Futures: false,
    cropTypes: [],
    cropVariety: [],
    selectedCrop: "",
    selectedVariety: "",
    cropVariety_order: [],
    orderData: "",
    name: "asa",
    selected:"running",
    bids:[],
    accountbalance:0,
    availablebalance:0,
    modifyOrder:[],
    purchasedOrderids:[],
    purchasedOrder:[],
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
  }
};


getCropVariety(e) {
  var name = e.target.value;
  axios.get('http://localhost:8000/crop/crop/' + name + '/', { headers: this.headers }).then(res => { this.setState({ cropVariety: res.data }); this.setState({ selectedCrop: name }) });
  console.log(this.state.cropVariety);
}

  headers = {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `JWT ${localStorage.getItem("token")}`
  };

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

  getCropVariety_order(e) {
    var name = e.target.value;

    console.log('xx');
    axios.get('http://localhost:8000/crop/crop/' + name + '/', { headers: this.headers }).then(res => { this.setState({ cropVariety_order: res.data }) });
    console.log(this.state.cropVariety_order);
  }

  jsPdfGenerator = () => {
    var doc = new jsPDF("p", "pt", "a4");
    var pageHeight =
      doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    var pageWidth =
      doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    doc.setFont("Arial", "B", 140);
    doc.setFontStyle("bolditalic");
    doc.setFontType("bolditalic");
    doc.text(
      "EMandi(AUTOMATED PDF GENERATOR --- Invoice)",
      pageWidth / 2,
      50,
      "center"
    );
    doc.setFont("bold");
    doc.setFontStyle("bold");
    doc.setFontSize(10);
    doc.line(50, 60, 550, 60);
    doc.line(50, 250, 550, 250);
    
    doc.text(
      100,
      100,

      "Crop Name: "
    );

    doc.text(
      100,
      130,

      "Crop Variety: "
    );

    doc.text(
      100,
      160,

      "Seller Name: "
    );

    doc.text(
      100,
      190,

      "Buyer Name: "
    );

    doc.text(
      100,
      220,

      "Quantity: "
    );
    
    let str = "Copyright @ ₹Mandi";
    doc.setTextColor(100);
    doc.setFontSize(10);
    doc.text(str, pageWidth / 2, pageHeight - 10, "center");
    doc.save("generated.pdf");
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

  componentDidMount() {
    var self = this;
    axios.get("http://localhost:8000/order/myorder/", { headers: this.headers })
      .then(res => {
        self.setState({ orderData: res.data });
        this.setState({ selected: "running" });
      });
      axios.get(`http://localhost:8000/transaction/balance/`,
        {headers: 
            {"Content-Type": "application/json",
            accept: "application/json",
            Authorization: `JWT ${localStorage.getItem('token')}`,}
        },
      ).then(res=>{
          this.setState({'accountbalance':res.data[0]['accountbalance']});
          this.setState({'availablebalance': res.data[0]['availablebalance']});
        });
    axios.get('http://localhost:8000/order/getbids/',{ headers: this.headers }).then(res=>{this.setState({bids:res.data});});
    axios.get('http://localhost:8000/order/executedorder/',{headers:this.headers}).then(res=>{this.setState({purchasedOrderids:res.data});console.log('thisisit');console.log(this.state.purchasedOrderids);})
    axios.get('http://localhost:8000/crop/cropname/', { headers: this.headers }).then(res => { self.setState({ cropTypes: res.data }) });
    
  }

  fetchRunningOrder(e){
    axios
      .get("http://localhost:8000/order/myorder/", { headers: this.headers })
      .then(res => {
        this.setState({ orderData: res.data });
        this.setState({ selected: "running" });
      });
  }
  fetchExecutedOrder(e){
    axios
      .get("http://localhost:8000/order/myorderexec/", { headers: this.headers })
      .then(res => {
        console.log('exec');
        console.log(res);
        this.setState({ orderData: res.data });
        this.setState({ selected: "executed" });
      });
  }

  Change = () => {
    axios
    .get("http://localhost:8000/order/myorder/", { headers: this.headers })
    .then(res => {
      this.setState({ orderData: res.data });
      this.setState({ selected: "running" });
    });
    this.forceUpdate();
  }


  OrderExecuted(e,price, id){
    axios.get('http://localhost:8000/order/marketorder/'+id+'/'+price+'/',{headers:this.headers}).then(res=>{this.setState({modifyOrder:res.data});
    axios.put('http://localhost:8000/order/marketorder/'+id+'/'+price+'/',{...this.state.modifyOrder},{headers:this.headers}).then(res=>{
      this.Change();  
    })
    
  })
    
  }

  render() {
    return (
      <Layout>
        <div>
          <br />
          <br />
          <br />
          <br />

          <div class="container-fluid">
            <div className="row">
              <div className="col-xl-9">
                <MDBRow>
                  <MDBCol xl="12" md="12" className="col-xl-12"></MDBCol>
                  <MDBBtnGroup size="lg" className="col-xl-12">
                    <MDBBtn color="btn tempting-azure-gradient w-100" onClick={e =>this.fetchRunningOrder(e)}>
                      Your Running Orders!
                    </MDBBtn>
                    <MDBBtn color="btn tempting-azure-gradient w-100" onClick={e=>this.fetchExecutedOrder(e)}>
                      Your Executed Orders!
                    </MDBBtn>
                  </MDBBtnGroup>
                </MDBRow>

                <br />
                <br />

            {this.state.selected==='running' ?

                <tr className="col-xl-12">
                  <Card>
                    <Badge>
                      {" "}
                      <h1 className="text-success  ">Running Order</h1>
                    </Badge>
                    <Card.Body>
                      <Card.Text>
                        <h6>
                          <b>
                            <td className="col-xl-2">CropName</td>
                            <td className="col-xl-2">CropVariety</td>
                            <td className="col-xl-1">Qty</td>
                            <td className="col-xl-1">
                              Bid1&emsp;
                            </td>
                            <td className="col-xl-1 ">
                              Bid2&emsp;
                            </td>
                            <td className="col-xl-1">
                              Bid3&emsp;
                            </td>
                            <td className="col-xl-1">
                              Base<br/>Price
                            </td>
                            <td className="col-xl-2">
                            &emsp;&emsp;&emsp;Sell
                            </td>
                            <td className="col-xl-1">
                              Delete&emsp;
                            </td>
                          </b>
                        </h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </tr>
            :
                <tr className="col-xl-12">
                  <Card>
                    <Badge>
                      {" "}
                      <h1 className="text-success  ">Executed Order</h1>
                    </Badge>
                    <Card.Body>
                      <Card.Text>
                        <h6>
                          <b>
                            <td className="col-xl-2">CropName</td>
                            <td className="col-xl-2">CropVariety</td>
                            <td className="col-xl-2">Quantity</td>
                            <td className="col-xl-1">
                             
                            </td>
                            <td className="col-xl-2">
                              Executed Price
                            </td>
                            <td className="col-xl-1">
                             </td>
                            <td className="col-xl-2">Export As Pdf</td>
                          </b>
                        </h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </tr>
  }
  {this.state.selected==='running'?(
                <tr className="col-xl-12">
                  {
                  Object.values(this.state.orderData).map(x => {
                    return (
                      <Order_Card
                        CropName={x.CropName}
                        CropVariety={x.CropVariety}
                        Quantity={x.Quantity}
                        ProductionMode={x.ProductionMode}
                        BasePrice={x.BasePrice}
                        bids={this.state.bids.filter(y => {return y.order == x.id;}).sort((a, b) =>b.price -  a.price )} 
                        id={x.id}
                        onOrderExecuted={e => this.OrderExecuted(e,this.state.bids.filter(y => {return y.order == x.id;}).sort((a, b) =>b.price -  a.price )[0]['price'],x.id)}
                      />
                    );
                  })}
                </tr>)
                :    
                (<tr className="col-xl-12">
                {
                Object.values(this.state.orderData).map(x => {
                  return (
                    <Order_Card_Executed
                      CropName={x.CropName}
                      CropVariety={x.CropVariety}
                      Quantity={x.Quantity}
                      ProductionMode={x.ProductionMode}
                      BasePrice={x.BasePrice}
                      bids={x.bids}
                      id={x.id}
                    />
                  );
                })}
                </tr>)
              }

        </div>


              <div className="col-xl-3 w-75 " style={{ paddingTop: "50px" }}>
                <div class="card my-5 w-75">
                  <h2 class="card-header text-info text-center">Make Orders</h2>
                  <div class="card-body">
                    <a
                      
                      class="btn tempting-azure-gradient w-100"
                      onClick={this.handleShow_Market}
                    >
                      New Market Orders!
                    </a>
                    <br />
                    <a
                      class="btn tempting-azure-gradient w-100"
                      onClick={this.handleShow_Futures}
                    >
                      New Futures Orders!
                    </a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  <div class="container-fluid">
    <div className="row">
      <div className="col-xl-9">
            <MDBRow>
              <MDBCol xl="12" md="12" className="col-xl-12"></MDBCol>
              <MDBBtnGroup size="lg" className="col-xl-12">
                <MDBBtn color="btn tempting-azure-gradient w-100">
                  Your Purchased Orders!
                </MDBBtn>
              </MDBBtnGroup>
            </MDBRow>
        <br/>
        <br/>
        <tr className="col-xl-12">
                  <Card>
                    <Badge>
                      {" "}
                      <h1 className="text-success  ">Purchased Orders</h1>
                    </Badge>
                    <Card.Body>
                      <Card.Text>
                        <h6>
                          <b>
                            <td className="col-xl-2">CropName</td>
                            <td className="col-xl-2">CropVariety</td>
                            <td className="col-xl-1">Qty</td>
                            <td className="col-xl-1">
                              Price
                            </td>
                            <td className="col-xl-3">
                              Seller
                            </td>
                            <td className="col-xl-2">
                              Date
                            </td>
                            <td className="col-xl-1">Pdf</td>
                          </b>
                        </h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </tr>
                <tr className="col-xl-12">
        {
        Object.values(this.state.purchasedOrderids).map(x => {
          return (
            <Order_Card_Purchased
              Date={x.date}
              id={x.orderid}
            />
          );
        })
        }
      </tr>

            </div>
        </div>
      </div>


        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

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
                        {Object.values(this.state.cropTypes).map(x => { return (<option href="#" value={x.cropName} name={x.cropName} onClick={e => this.getCropVariety_order(e)} >{x.cropName}</option>) })}

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
                      <Form.Control as="select" name="CropVariety" value={this.state.order.CropVariety} onChange={this.handle_change_futures2}>
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
    );
  }
}

export default Portfolio;
