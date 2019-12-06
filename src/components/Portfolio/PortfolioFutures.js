import Layout from "../Layout/Layout";
import React, { Component } from "react";
import { Table, Card, Badge, Button } from "react-bootstrap";
import axios from "axios";
import Order from "../Marketplace/Order";
import Order_CardFuture from "./Order_CardFuture";
import Order_Card_ExecutedFuture from './Order_Card_ExecutedFuture'

import { MDBBtn, MDBBtnGroup, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import jsPDF from "jspdf";
class PortfolioFutures extends Component {
  state = {
    orderData: "",
    name: "asa",
    selected:"running",
    bids:[],
    accountbalance:0,
    availablebalance:0,
    modifyOrder:[]
  };

  headers = {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `JWT ${localStorage.getItem("token")}`
  };
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

  componentDidMount() {
    var self = this;
    axios.get("http://localhost:8000/order/myfutures/", { headers: this.headers })
      .then(res => {
        self.setState({ orderData: res.data });
        this.setState({ selected: "running" });
      });
    //   axios.get(`http://localhost:8000/transaction/balance/`,
    //     {headers: 
    //         {"Content-Type": "application/json",
    //         accept: "application/json",
    //         Authorization: `JWT ${localStorage.getItem('token')}`,}
    //     },
    //   ).then(res=>{
    //       this.setState({'accountbalance':res.data[0]['accountbalance']});
    //       this.setState({'availablebalance': res.data[0]['availablebalance']});
    //     });
    // axios.get('http://localhost:8000/order/getbids/',{ headers: this.headers }).then(res=>{this.setState({bids:res.data});});
  }

  fetchRunningOrder(e){
    axios
      .get("http://localhost:8000/order/myfutures/", { headers: this.headers })
      .then(res => {
        this.setState({ orderData: res.data });
        this.setState({ selected: "running" });
      });
  }
  fetchExecutedOrder(e){
    axios
      .get("http://localhost:8000/order/futureexec/", { headers: this.headers })
      .then(res => {
        console.log('exec');
        console.log(res);
        this.setState({ orderData: res.data });
        this.setState({ selected: "executed" });
      });
  }

  Change = () => {
    axios
    .get("http://localhost:8000/order/myfutures/", { headers: this.headers })
    .then(res => {
      this.setState({ orderData: res.data });
      this.setState({ selected: "running" });
    });
    this.forceUpdate();
  }


  // OrderExecuted(e,price, id){
  //   axios.get('http://localhost:8000/order/marketorder/'+id+'/',{headers:this.headers}).then(res=>{this.setState({modifyOrder:res.data});
  //   axios.put('http://localhost:8000/order/marketorder/'+id+'/',{...this.state.modifyOrder},{headers:this.headers}).then(res=>{
  //     this.Change();  
  //   })
    
  // })
    
  // }

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
                            <td className="col-xl-1">Crop</td>
                            <td className="col-xl-2">Quantity</td>
                            <td className="col-xl-2">Order Date</td>
                            <td className="col-xl-1">Price</td>
                            <td className="col-xl-2">Delivery Date</td>
                            <td className="col-xl-2 ">Advance Date</td>
                            <td className="col-xl-2">Advance(%)</td>
                            
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
                          <td className="col-xl-1">Crop</td>
                            <td className="col-xl-2">Quantity</td>
                            <td className="col-xl-2">Order Date</td>
                            <td className="col-xl-1">Price</td>
                            <td className="col-xl-2">Delivery Date</td>
                            <td className="col-xl-2 ">Advance Date</td>
                            <td className="col-xl-2">Advance(%)</td>
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
                      <Order_CardFuture
                      CropName={x.Crop} 
                      // CropVariety={x.CropVariety} 
                      Quantity={x.Quantity} 
                      // ProductionMode={x.ProductionMode} 
                      AdvanceDate={x.AdvanceDate} 
                      OrderDate={x.OrderDate}
                      DeliveryDate={x.DeliveryDate} 
                      Price={x.ContractPrice}
                      Advance={x.advance}
                     />
                    );
                  })}
                </tr>)
                :    
                (<tr className="col-xl-12">
                {
                Object.values(this.state.orderData).map(x => {
                  return (
                    <Order_Card_ExecutedFuture
                    CropName={x.Crop} 
                    // CropVariety={x.CropVariety} 
                    Quantity={x.Quantity} 
                    // ProductionMode={x.ProductionMode} 
                    AdvanceDate={x.AdvanceDate} 
                    OrderDate={x.OrderDate}
                    DeliveryDate={x.DeliveryDate} 
                    Price={x.ContractPrice}
                    Advance={x.advance}
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
                      href="/../courses/about-us"
                      class="btn tempting-azure-gradient w-100"
                    >
                      New Market Orders!
                    </a>
                    <br />
                    <a
                      href="/../courses/about-us"
                      class="btn tempting-azure-gradient w-100"
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

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Layout>
    );
  }
}

export default PortfolioFutures;
