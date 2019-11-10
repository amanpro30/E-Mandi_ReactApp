import Layout from '../Layout/Layout'
import React, {Component} from 'react'
import axios from 'axios'
import Order from '../Marketplace/Order'

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
            <p>Running Order</p>
        </div>
        <div>
            {Object.values(this.state.orderData).map(x=>{return <Order CropName={x.CropName} />})}
        </div>
        <div>
            <p>Executed Order</p>
        </div>
        <div>
            {Object.values(this.state.orderData).map(x=>{return <Order CropName={x.CropName} />})}
        </div>


    </Layout>
    )}
};

export default Portfolio;