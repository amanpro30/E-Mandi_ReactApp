import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Layout from '../Layout/Layout';
import axios from 'axios';
import {connect} from 'react-redux';
import PayPalBtn from '../Paypal/PaypalBtn';
import Transaction from '../Transaction/Transaction'

class ProfileBank extends Component {
  state = {
    username: this.props.username,
    bank : {
      "BankName": "",
      "BranchName": "",
      "Ifsc": "",
      "AccountNumber": ""
    },
    availablebalance:localStorage.getItem('availablebalance'),
    accountbalance:localStorage.getItem('accountbalance'),
    amount:0,
    transactions:[]
}

headers = {
  "Content-Type": "application/json",
  accept: "application/json",
  Authorization: `JWT ${localStorage.getItem('token')}`,
}

BankUpdate = (e, data) => {
  e.preventDefault();
  console.log('coming')
  axios.put(`http://localhost:8000/transaction/bank/` + this.props.username + `/`, data, {
      headers: this.headers
  })
      .then(res => {
      })
};

handle_change = e => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState(prevstate => {
      const newState = { ...prevstate };
      newState['bank'][name] = value;
      return newState;
  })
};

handle_change2 = e => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
  })
};


componentDidMount(){
    var self=this;  
    axios.get('http://localhost:8000/transaction/bank',{headers:this.headers}).then(res => {self.setState({bank:res.data[0]});});
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
      });
    axios.get('http://localhost:8000/transaction/transaction/',{headers:this.headers}).then(res=>{this.setState({transactions:res.data})});
}

  render(){  
    return(
        <Aux>
            <Layout>
                <div class = "content">
                    <div class="container user-layout">
                        <div class = "row">  
                            <div class="col-md-8 user-layout__col">
                            <h2 class="bid-list__header">Wallet</h2>
                            
                            <div class="row row--field">
                                    

                              <div class="col-md-4"> 
                                <label for="user_Available Balance">Available balance</label>
      

                                  <div class="tool-tip">
                                      <i class="tool-tip__icon-info">i</i>
                                      <p class="tool-tip__hidden-bottom">
                                        <span class="info">
                                          <span class="info__title">Info: </span>
                                          <span class="info__text"> · Balance available to make transactions. </span>
                                        </span>
                                      </p>
                                  </div>
                                  <br />
                                  ₹ {this.state.availablebalance}      
                              </div>    

                        <div class="col-md-4">
                          <label for="user_Accounting Balance">Accounting balance</label>
      

                          <div class="tool-tip">
                              <i class="tool-tip__icon-info">i</i>
                              <p class="tool-tip__hidden-bottom">
                                <span class="info">
                                  <span class="info__title">Info: </span>
                                  <span class="info__text"> · Actual account balance (includes transaction value in progress). </span>
                                </span>
                              </p>
                          </div>
                                <br />
                                ₹ {this.state.accountbalance}
                                
                                
                              </div>
                            </div>
                            <div class="row row--field">
                              Add Balance: 
                              <div class="col-md-6">
                                <input type="text" placeholder="Enter Amount" name="amount" onChange={this.handle_change2}></input>
                                <PayPalBtn amount={this.state.amount}/>
                              </div>

                            </div>
                            <br /><br />
                            <h2 class="bank_details_header">Transaction Details</h2>

                            {Object.values(this.state.transactions).map(x => { return (<Transaction date={x.TransDate} amount={x.Amount} type={x.TransType}></Transaction>) })}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Aux>
    );
  }
};

const mapStateToProps = state =>{
  return{
    username:state.auth.username,
  }
}

export default connect(mapStateToProps,null)(ProfileBank);