import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Axios from 'axios';
import { connect } from 'react-redux';
 
class PayPalBtn extends React.Component {

    headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,
        }

    componentDidMount(){
        Axios.get('http://localhost:8000/transaction/balance/',{headers:this.headers}).then(res=>{console.log('res');;});
    }

    render() {
        let env = 'sandbox'; 
        let currency = 'USD'; 
        let total = this.props.amount; 
        let data = {username:this.props.username,balance:{accountbalance:parseInt(this.props.accountbalance)+parseInt(total),availablebalance:parseInt(this.props.availablebalance)+parseInt(total)}};
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            Axios.put('http://localhost:8000/transaction/balances/' + this.props.username + `/`, data, {
            headers: this.headers}).then(res => {localStorage.setItem('accountbalance',parseInt(this.props.accountbalance)+parseInt(total));
            localStorage.setItem('availablebalance',parseInt(this.props.availablebalance)+parseInt(total));
            window.location.href = "/wallet";
        })};
 
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 

 
        const client = {
            sandbox:    'AWG5kaja1US_Ea1gEzrm49CREFvNQoZ_waM1RTKyQXE5CkQTUvAMZnu4xN2WZxQMk-MuPLDn7Iya0PEP',
            production: 'AVkM4KxC6pP-QyR3bOI4lA2NMeVr_Iun72GegRVNmL-TOdiT2k834l6Hf10BAcNbSsh_c9rPy20nCwc4',
        }
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}

const mapStateToProps = state => {
    return{
        username:state.auth.username,
        accountbalance:state.auth.accountbalance,
        availablebalance:state.auth.availablebalance,
    }
}

export default connect(mapStateToProps,null) (PayPalBtn);