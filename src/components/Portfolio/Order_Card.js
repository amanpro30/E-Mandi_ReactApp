import React, {Component} from 'react';
import { Card} from 'react-bootstrap';
import axios from 'axios';
import SmallBid from './SmallBid'
class Order_Card extends Component{

    state={
        bids:[],
    }
    headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,
      }

    componentDidMount(){
        var self=this;  
        axios.get('http://localhost:8000/order/getbid/order/'+this.props.id+'/',{headers:this.headers}).then((res)=>{res.data.sort((a, b) =>b.price -  a.price );this.setState({bids:res.data});console.log(res);});
        
    }
    render(){
        return(

            <Card >
                <Card.Body>
                    <Card.Text>
                        <tr className="col-xl-12">
                            <td className= "col-xl-2">{this.props.CropName}</td>
                            <td className= "col-xl-2">{this.props.CropVariety}</td>
                            <td className= "col-xl-2">{this.props.Quantity}</td>
                            {/* <td className= "col-xl-1"><b>100.122</b></td>
                            <td className= "col-xl-1"><b>100.1</b></td>
                            <td className= "col-xl-1"><b>100.1</b></td> */}
                                
                            {Object.values(this.state.bids).map(x=>{return <td className= "col-xl-1"><b>{x.price}</b></td>})}
                            
                            <td className= "float-right">&emsp;<span className="text-primary">Sell</span>&emsp;&nbsp;<span className="text-danger">Delete</span></td>
                            <td className= "float-right">{this.props.BasePrice}&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                        </tr>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Order_Card