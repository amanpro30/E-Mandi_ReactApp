import React, { Component } from "react";
import {Button, ListGroup, ListGroupItem, Form,} from "react-bootstrap"
import Aux from "../../hoc/Aux";
import axios from 'axios';
import Bid from './Bid';
import {connect} from 'react-redux';
import TrashIcon from 'react-ionicons/lib/MdTrash';
import EditIcon from 'react-ionicons/lib/MdCreate';
import RightIcon from 'react-ionicons/lib/MdCheckmark';


class Order extends Component {
  state = {
    bids:[],
    userbid:"",
    username:this.props.username,
    curruserbid:[],
    show:"visible",
    showinput:"hidden",
    edituserbid:"",
    bidNumberError:"",
    bidBasePriceError:"",
    availablebalance:localStorage.getItem('accountbalance'),
    accountbalance:localStorage.getItem('accountbalance'),
  }

  headers = {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `JWT ${localStorage.getItem('token')}`,
  }

  componentDidMount(){
    var self=this;  
    axios.get('http://localhost:8000/order/getbid/order/'+self.props.id+'/',{headers:this.headers}).then((res)=>{res.data.sort((a, b) =>b.price -  a.price );this.setState({bids:res.data})});
    axios.get('http://localhost:8000/order/getbid/curruser/'+self.props.id+'/',{headers:this.headers}).then(res => {this.setState({curruserbid:res.data})});
    axios.get(`http://localhost:8000/transaction/balance/`,
    {headers: 
        {"Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,}
    },
    )
      .then(res=>{
        localStorage.setItem('accountbalance', res.data[0]['accountbalance']);
        localStorage.setItem('availablebalance', res.data[0]['availablebalance']); 
        this.setState({'accountbalance':res.data[0]['accountbalance']});
        this.setState({'availablebalance': res.data[0]['availablebalance']});
      });
  }

  getUserBid(e, data){
    var err = ""
    var self=this; 
    e.preventDefault();
    if(parseInt(data) > parseInt(this.props.BasePrice) && parseInt(data) < this.state.availablebalance){
      axios.post('http://localhost:8000/order/getbid/order/'+self.props.id+'/',{price:data},{headers:this.headers}).then();
      axios.get('http://localhost:8000/order/getbid/curruser/'+self.props.id+'/',{headers:this.headers}).then(res => {this.setState({curruserbid:res.data})});
      axios.get('http://localhost:8000/order/getbid/order/'+self.props.id+'/',{headers:this.headers}).then((res)=>{res.data.sort((a, b) =>b.price -  a.price );this.setState({bids:res.data})});
      let balancedata = {username:this.props.username,balance:{accountbalance:this.state.accountbalance,availablebalance:this.state.availablebalance-data}};
      axios.put('http://localhost:8000/transaction/balances/' + this.props.username + `/`, balancedata , {
      headers: this.headers}).then(res => { this.setState({'availablebalance':balancedata.balance.availablebalance});localStorage.setItem('availablebalance',balancedata.balance.availablebalance); console.log('done');console.log(balancedata);
      });
    }
    else if( parseInt(data) > parseInt(this.state.availablebalance)){
      err = <strong style={{color:"red"}} >You don't have enough balance.</strong>
    }
    else{
      err = <strong style={{color:"red"}} >Bid must be greater than Base Price</strong>
    }
    this.setState({bidBasePriceError:err});
  }

  editUserBid(e, data){
    var err = ""
    var self=this; 
    e.preventDefault();
    if(parseInt(data) > parseInt(this.props.BasePrice && parseInt(data) < this.state.availablebalance)){
      axios.put('http://localhost:8000/order/getbid/'+this.state.curruserbid[0]['id']+'/',{price:data},{headers:this.headers}).then(res => {});
      console.log(this.state.curruserbid);
      axios.get('http://localhost:8000/order/getbid/curruser/'+self.props.id+'/',{headers:this.headers}).then(res => {this.setState({curruserbid:res.data})});
      axios.get('http://localhost:8000/order/getbid/order/'+self.props.id+'/',{headers:this.headers}).then((res)=>{res.data.sort((a, b) =>b.price -  a.price );this.setState({bids:res.data})});
      axios.put('http://localhost:8000/transaction/balances/' + this.props.username + `/`, parseInt(this.state.availablebalance) - parseInt(data), {
      headers: this.headers}).then(res => {localStorage.setItem('availablebalance',parseInt(this.props.availablebalance)-parseInt(data));
      });
    }
    else if( parseInt(data) > parseInt(this.state.availablebalance)){
      err = <strong style={{color:"red"}} >You don't have enough balance.</strong>
    }
    else{
      err = <strong style={{color:"red"}} >Bid must be greater than Base Price</strong>
    }
    this.setState({bidBasePriceError:err});
  }

  handle_change = e => {
    let err="";

    const name = e.target.name;
    const value = e.target.value;
    if(name==='userbid' || name==='edituserbid'){
      if(value!==" " && !Number(value)){
        err=<strong style={{color:"red"}} >Bit Must Be a Number</strong>
      }
    }
    this.setState({bidNumberError:err});
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    })
  };

  RemoveUserBid = (e, data,price) =>{
    console.log(data);
    console.log('ddd');
    e.preventDefault();
    axios.delete('http://localhost:8000/order/getbid/'+data+'/',{headers:this.headers}).then(res=>{
      var bids = this.state.bids;
      if(res.status===204){
        for (var key in bids){
          if(bids[key]['id']===parseInt(data)){
            bids.splice(key,1);
          }        
        }
      }
      this.setState({bids:bids});
      this.setState({curruserbid:[]});
    })
    let balancedata = {username:this.props.username,balance:{accountbalance:this.state.accountbalance,availablebalance:this.state.availablebalance+price}};
    axios.put('http://localhost:8000/transaction/balances/' + this.props.username + `/`, balancedata , {
    headers: this.headers}).then(res => { this.setState({'availablebalance':balancedata.balance.availablebalance});localStorage.setItem('availablebalance',balancedata.balance.availablebalance); console.log('done');console.log(balancedata);
    });
  }

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
          <div
            style={{ marginLeft: 3, marginRight: 3 }}
            class="row products-index__order__row"
          >
            <div class="col">
              {/* <p style={{fontSize:'15px', align:'left'}}>{this.props.CropName}<br />({this.props.CropVariety})</p> */}
              <ListGroup className="list-group-flush">
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Crop : {this.props.CropName} {this.props.CropVariety}</ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Quantity : {this.props.Quantity} Kg</ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Mode : {this.props.ProductionMode} </ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Base Price : ₹ {this.props.BasePrice} </ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Closing : {this.props.ClosingDate} </ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Seller : {this.props.SellerName} </ListGroupItem>
              </ListGroup>
            </div>
            <div class="col">
              {Object.values(this.state.bids).map(x=>{return <Bid price={x.price} />})}
            </div>
            <div class="col">
            {this.state.curruserbid.length ?
              (
                <div>
                  <div className="biduser" id="biduser" style={{visibility:this.state.show}} ref = "biduser">Your Bid :  {this.state.curruserbid[0]['price']}
                    <EditIcon name="edit" onClick={e=>this.toggle()} ></EditIcon>
                    <TrashIcon name="delete" onClick={e=>this.RemoveUserBid(e,this.state.curruserbid[0]['id'],this.state.curruserbid[0]['price'])}></TrashIcon>
                  </div>
                  <div style={{visibility:this.state.showinput}}>
                    <input type="text" style={{width:"100px",}} name="edituserbid" onChange={this.handle_change} placeholder="New Bid"/>
                    <RightIcon name="right" onClick={e => this.editUserBid(e, this.state.edituserbid)}></RightIcon>
                    <br/>&nbsp;&nbsp;{this.state.bidBasePriceError}
                  </div>
                </div>
              ):
              (<Form onSubmit={e => this.getUserBid(e, this.state.userbid)} class="row">
                <Form.Control class="md-1" type="text" style={{width:'10px'}} placeholder="Bid Price" name="userbid" onChange={this.handle_change}/>
                <Button style={{width:'10px'}} variant="outline-success" type="submit" >Bid</Button>
                &nbsp;&nbsp;{this.state.bidNumberError}<br/>
                &nbsp;&nbsp;{this.state.bidBasePriceError}
              </Form>)

              (<Form onSubmit={e => this.getUserBid(e, this.state.userbid)} class="row">
                <Form.Control size="lg" type="text" placeholder="Bid Price" name="userbid" onChange={this.handle_change}/>
                <Button style={{width:'200px'}} variant="outline-success" type="submit" >Bid</Button>
                &nbsp;&nbsp;{this.state.bidNumberError}<br/>
                &nbsp;&nbsp;{this.state.bidBasePriceError}
              </Form>)
            }
            </div>
          </div>
        </div>        
      </Aux>
    );
  }
}

const mapStateToProps = state =>{
  return{
  username:state.auth.username,

  }
};

export default connect(mapStateToProps, null) (Order);