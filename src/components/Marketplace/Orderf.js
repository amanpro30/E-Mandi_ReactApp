import React, { Component } from "react";
import {Button, ListGroup, ListGroupItem, Form,} from "react-bootstrap"
import {Card} from 'react-bootstrap';

import Aux from "../../hoc/Aux";
import axios from 'axios';
import Bid from './Bid';
import TrashIcon from 'react-ionicons/lib/MdTrash';
import EditIcon from 'react-ionicons/lib/MdCreate';
import RightIcon from 'react-ionicons/lib/MdCheckmark';

class Orderf extends Component {
  
  state = {
    show:"visible",
    showinput:"hidden",
    
  }

  headers = {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `JWT ${localStorage.getItem('token')}`,
  }

  // getUserBid(e, data){
  //   var err = ""
  //   e.preventDefault();
  //   if(parseInt(data) > parseInt(this.props.BasePrice) && parseInt(data) < this.props.availablebalance){
  //     axios.post('http://localhost:8000/order/getbid/order/'+this.props.id+'/',{price:data},{headers:this.headers}).then(res=>{this.props.onDelBalance(data);this.props.onBidChange();});
  //   }
  //   else if( parseInt(data) > parseInt(this.props.availablebalance)){
  //     err = <strong style={{color:"red"}} >You don't have enough balance.</strong>
  //   }
  //   else{
  //     err = <strong style={{color:"red"}} >Bid must be greater than Base Price</strong>
  //   }
  //   this.setState({bidBasePriceError:err});
  // }

  // RemoveUserBid = (e, data,price) =>{
  //   e.preventDefault();
  //   axios.delete('http://localhost:8000/order/getbid/'+data+'/',{headers:this.headers}).then(res=>{
  //     var bids = this.state.bids;
  //     if(res.status===204){
  //       this.props.onAddBalance(price);
  //       this.props.onBidChange();
  //     }
  //   })
  // }

  // editUserBid(e, data){
  //   var err = ""
  //   e.preventDefault();
  //   if(parseInt(data) > parseInt(this.props.BasePrice) && parseInt(data) < this.props.availablebalance){
  //     axios.put('http://localhost:8000/order/getbid/'+this.props.curruserbid[0]['id']+'/',{price:data},{headers:this.headers}).then(res => {this.props.onBidChange();});
  //   }
  //   else if( parseInt(data) > parseInt(this.props.availablebalance)){
  //     err = <strong style={{color:"red"}} >You don't have enough balance.</strong>
  //   }
  //   else{
  //     err = <strong style={{color:"red"}} >Bid must be greater than Base Price</strong>
  //   }
  //   this.setState({bidBasePriceError:err});
  // }

  // handle_change = e => {
  //   let err="";
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   if(name==='newuserbid' || name==='edituserbid'){
  //     if(value!==" " && !Number(value)){
  //       err=<strong style={{color:"red"}} >Bit Must Be a Number</strong>
  //     }
  //   }
  //   this.setState({bidNumberError:err});
  //   this.setState(prevstate => {
  //     const newState = { ...prevstate };
  //     newState[name] = value;
  //     return newState;
  //   });
  // };

  toggle =  () => {
    if(this.state.showinput=="hidden"){
      this.setState({showinput:"visible"})
    }
    else if(this.state.showinput="visible"){
      this.setState({showinput:"hidden"})
    }
  }

  render() {
    return (
      <Aux>
        <div class="products-index__list__items" style={{border:'2px' ,borderStyle:'groove'}}>
          <div style={{ marginLeft: 1, marginRight: 1 }} class="row products-index__order__row">
            <div class="col">
              {/* <ListGroup className="list-group-flush">
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Crop : {this.props.CropName}</ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Quantity : {this.props.Quantity} Kg</ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Order Date : {this.props.OrderDate} </ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Price : ₹ {this.props.Price} </ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Advance Date: {this.props.AdvanceDate} </ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Advance: {this.props.Advance} % </ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Seller: {this.props.SellerName} </ListGroupItem>

              </ListGroup> */}
              <Card >
                <Card.Body>
                    <Card.Text>
                        <tr className="col-xl-12">
                            <td className= "col-xl-2">Seller : {this.props.SellerName}</td>
                            <td className= "col-xl-1">{this.props.CropName}</td>
                            <td className= "col-xl-1">{this.props.Quantity} Kg</td>
                            <td className= "col-xl-2">Order Date : {this.props.OrderDate}</td>
                            <td className= "col-xl-2">{this.props.Price}₹ Per Kg</td>
                            <td className= "col-xl-2">Advance Date: {this.props.AdvanceDate}</td>
                            <td className= "col-xl-1">Advance: {this.props.Advance} %</td>
                            <td className= "col-xl-1"><Button className="btn-sm" style={{margin:"0px"}} value={this.props.id} onClick={this.props.sellOrder}>Buy Order</Button></td>
                        </tr>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            {/* <div class="col">
              {Object.values(this.props.Bids).map(x=>{return <Bid price={x.price} />;})}
            </div>
            <div class="col">
              {this.props.curruserbid.length ?
                (
                  <div>
                    <div className="biduser" id="biduser" style={{visibility:this.state.show}} ref = "biduser">Your Bid :  {this.props.curruserbid[0]['price']}
                      <EditIcon name="edit" onClick={e=>this.toggle()} ></EditIcon>
                      <TrashIcon name="delete" onClick={e=>this.RemoveUserBid(e,this.props.curruserbid[0]['id'],this.props.curruserbid[0]['price'])}></TrashIcon>
                    </div>
                    <div style={{visibility:this.state.showinput}}>
                      <input type="text" style={{width:"100px",}} name="edituserbid" onChange={this.handle_change} placeholder="New Bid"/>
                      <RightIcon name="right" onClick={e => this.editUserBid(e, this.state.edituserbid)}></RightIcon>
                      <br/>&nbsp;&nbsp;{this.state.bidBasePriceError}    
                    </div>
                  </div>
                ):
                (
                  <Form  >
                    <Form.Control size="lg" type="text" placeholder="Bid Price" name="newuserbid" onChange={this.handle_change}/>
                    <Button style={{width:'200px'}} variant="outline-success" type="submit" onClick={e => this.getUserBid(e, this.state.newuserbid)}>Bid</Button>
                    &nbsp;&nbsp;{this.state.bidNumberError}<br/>
                    &nbsp;&nbsp;{this.state.bidBasePriceError}
                    
                  </Form>
                )
              }
            </div> */}
          </div>
        </div>        
      </Aux>
    );
  }
}



export default Orderf;