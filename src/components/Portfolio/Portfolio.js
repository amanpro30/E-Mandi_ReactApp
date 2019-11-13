import Layout from '../Layout/Layout'
import React, {Component} from 'react'
import {Table, Card, Badge} from 'react-bootstrap'
import axios from 'axios'
import Order from '../Marketplace/Order'
import Order_Card from './Order_Card'

class Portfolio extends Component {

    state = {
        orderData : "",
    }

    headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,
    }

    componentDidMount(){
        var self=this;  
        axios.get('http://localhost:8000/order/myorder/',{headers:this.headers}).then(res => {self.setState({orderData:res.data});})
    }

    render(){
    return(
    <Layout>
        <div>
            {/* <p>Running Order</p>
        </div>
        <div>
            {Object.values(this.state.orderData).map(x=>{return <Order CropName={x.CropName} id={x.id}/>})}
        </div>
        <div>
            <p>Executed Order</p>
        </div>
        <div>
            {Object.values(this.state.orderData).map(x=>{return <Order CropName={x.CropName} />})} */}
            <br />
            <br />
            <br />
            <br />

 <div class="container-fluid">

<div class="col-sm-8 col-md-12" style={{paddingRight:'40px'}}>

    <div class="panel panel-default" style={{paddingLeft:'30px' ,paddingRight:'40px'}}>
    <h1>
        <Badge variant="secondary">Your Running Orders </Badge>  
    </h1>   
        {Object.values(this.state.orderData).map(x=>{return <Order_Card CropName={x.CropName} CropVariety={x.CropVariety} Quantity={x.Quantity} ProductionMode={x.ProductionMode} BasePrice={x.BasePrice} ClosingDate={x.ClosingDate}  />})} 
        <Order_Card />
        
    {/* <Table striped bordered hover variant="light" responsive="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Card body>This is some text within a card body.</Card></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table> */}

  </div>


</div>

</div>

        </div>


    </Layout>
    )}
};

export default Portfolio;