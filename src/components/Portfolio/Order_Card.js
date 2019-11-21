import React, {Component} from 'react';
import { Card} from 'react-bootstrap';
import axios from 'axios';
import SmallBid from './SmallBid'
import { connect } from 'react-redux';
class Order_Card extends Component{

    state={
        bids:[],
        accountbalance:"",
        availablebalance:"",
        highbids:""
    }
    headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,
      }

    componentDidMount(){
        var self=this;  
        axios.get('http://localhost:8000/order/getbid/order/'+this.props.id+'/',{headers:this.headers}).then((res)=>{res.data.sort((a, b) =>b.price -  a.price );this.setState({bids:res.data});console.log(res);});
            axios.get(`http://localhost:8000/transaction/balance/`,
    {headers: 
        {"Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,}
    },
    
    )
      .then(res=>{
        console.log(res.data[0]['accountbalance']);
        console.log(res.data[0]['availablebalance']);
        this.setState({'accountbalance':res.data[0]['accountbalance']});
        this.setState({'availablebalance': res.data[0]['availablebalance']});
        localStorage.setItem('accountbalance', res.data[0]['accountbalance']);
        localStorage.setItem('availablebalance', res.data[0]['availablebalance']); 
        console.log(this.state.accountbalance);
      });



    }

    handleBalance(e){
            this.setState({highbids:Object.values(this.state.bids)[0]['price']})

        console.log(this.state.highbids);
        let data = {username:this.props.username,balance:{accountbalance:373-parseInt(this.state.highbids),availablebalance:parseInt(this.state.availablebalance)}};
        axios.put('http://localhost:8000/transaction/balances/' + this.props.username + `/`, data, {
            headers: this.headers}).then(res => {localStorage.setItem('accountbalance',parseInt(this.props.accountbalance)-parseInt(this.state.highbids));
            localStorage.setItem('availablebalance',parseInt(this.props.availablebalance));
            console.log(data);
            console.log('ddss');})
        axios.put('http://localhost:8000/order/marketorder/'+this.props.id+'/',{"CropName":"d","CropVariety":"a","ProductionMode":"a","ClosingDate":"2019-11-16"},{
            headers: this.headers}).then(res => {
        });
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
                            <td className= "float-right"><span className="text-danger" >Delete</span></td>
                            {
                                this.state.bids.length==0 ? <td className= "float-right"></td>:
                                <td className= "float-right">&emsp;<span className="text-primary" onClick={e => this.handleBalance(e)}>Sell</span>&emsp;&nbsp;</td>
                            }
                            <td className= "float-right">{this.props.BasePrice}&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                        </tr>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return{
        username:state.auth.username,
        accountbalance:state.auth.accountbalance,
        availablebalance:state.auth.availablebalance,
    }
}

export default connect(mapStateToProps,null)(Order_Card);