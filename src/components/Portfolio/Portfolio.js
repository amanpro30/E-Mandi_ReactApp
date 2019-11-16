import Layout from "../Layout/Layout";
import React, { Component } from "react";
import { Table, Card, Badge, Button } from "react-bootstrap";
import axios from "axios";
import Order from "../Marketplace/Order";
import Order_Card from "./Order_Card";
import Order_Card_Executed from './Order_Card_Executed'
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import jsPDF from "jspdf";
class Portfolio extends Component {
  state = {
    orderData: "",
    name: "asa",
    selected:"running",
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
    // doc.setTextColor(255, 0, 0);
    // doc.setFillColor(100, 100, 240);
    // doc.setDrawColor(100, 100, 0);
    // doc.setLineWidth(1);
    // doc.setFontType("bolditalic");
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
    axios
      .get("http://localhost:8000/order/myorder/", { headers: this.headers })
      .then(res => {
        self.setState({ orderData: res.data });
        this.setState({ selected: "running" });
      });
      
      
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
                {/* <tr className="col-xl-12">
                <td className= "col-xl-4"><a href="/../courses/about-us" class="btn dusty-grass-gradient w-100 ">Your Running Orders!</a></td>
                <td className= "col-xl-4"><a href="/../courses/about-us" class="btn dusty-grass-gradient w-100">Your Pending Orders!</a></td>
                <td className= "col-xl-4"><a href="/../courses/about-us" class="btn dusty-grass-gradient w-100">Your Executed Order!</a></td>
            </tr> */}
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
                            <td className="col-xl-2">Quantity</td>
                            <td className="col-xl-1">
                              Bid1&emsp;
                            </td>
                            <td className="col-xl-1">
                              Bid2&emsp;
                            </td>
                            <td className="col-xl-1">
                              Bid3&emsp;
                            </td>
                            <td className="col-xl-1">
                              BasePrice
                            </td>
                            <td className="float-right">Sell&emsp;Delete&emsp;</td>
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
                            <td className="col-xl-1">
                             </td>
                            
                            <td className="col-xl-2">
                              Executed Price
                            </td>
                            <td className="float-right">Export As Pdf</td>
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
                        bids={x.bids}
                        id={x.id}
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
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={this.jsPdfGenerator}>Generate PDF</Button>
      </Layout>
    );
  }
}

export default Portfolio;
