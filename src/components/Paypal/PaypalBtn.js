import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Axios from 'axios';
 
class PayPalBtn extends React.Component {
    render() {

        let env = 'sandbox'; 
        let currency = 'USD'; 
        let total = this.props.amount; 

        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            Axios.post(http://localhost:8000/transaction/balances/buppy/,)
        }
 
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