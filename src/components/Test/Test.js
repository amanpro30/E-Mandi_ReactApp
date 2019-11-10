import React, {Component} from "react";
import ReactDOM from "react-dom";



import scriptLoader from "react-async-script-loader";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      afterOnAuthorizeMessage: "",
      errorMessage: "",
      paymentCanceledMessage: ""
    };
    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    //Props from react-async-script-loader HOC
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    // Check if the checkout.js script loaded by the time CDM ran
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;
    const isLoadedButWasntLoadedBefore =
      !this.state.showButton && !this.props.isScriptLoaded && isScriptLoaded;

    if (isLoadedButWasntLoadedBefore) {
      if (isScriptLoadSucceed) {
        this.setState({ showButton: true });
      }
    }
  }

  render() {
    
    const { env, commit } = this.props;
    const {
      showButton,
      afterOnAuthorizeMessage,
      errorMessage,
      paymentCanceledMessage
    } = this.state;
    const client={ sandbox:    'Ack2nK_VJoxKGz8AITGB_tYAwNpePsQCjURtyaMBB1dJbaIbP-iiCEK6YCiHx3Jcprd2aErqYDYXuK36',
    production: 'AfL_GAhuPpk28jU_WG9xuWZRjB02KrtVYjGGm7xCb_vRMRnnJhzJi0dZswhMmDrh_6XkRPyV4osai82B'
  }

    const payment = (data, actions) => {
      this.setState({ paymentCanceledMessage: "", errorMessage: "" });
      console.log('mkc')
      console.log(data)
      return new window.paypal.Promise(function(resolve, reject) {
        //Make an ajax call to get the Payment ID.
        // This should call your back-end, which should invoke the Paypal Payment Create API to retrieve the Payment ID.

        // When you have a Payment ID, you need to call the `resolve` method, e.g `resolve(data.paymentID)`
        // Or, if you have an error from your server side, you need to call `reject`, e.g. `reject(err)`

        fetch("http://127.0.0.1:8000/api/create-payment/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            Authorization: `JWT ${localStorage.getItem('token')}`,

          },
          body: JSON.stringify({
            paymentID: data.paymentID,
            payerID: data.payerID
          })
        })
          .then(data => data.json())
          .then(json => resolve(json.paymentID))
          .catch(err => reject(err));
      });
    };


    const onCancel = data => {
      console.log("Cancelled payment!", data);
      return this.setState({
        paymentCanceledMessage: "You have canceled the payment."
      });
    };


    const onError = error => {
      console.log("Error occured", error);
      return this.setState({
        paymentCanceledMessage: "",
        errorMessage: "A processing Error has occured."
      });
    };

    
    //Pass a function to be called when the customer approves the payment(Clicks on Pay Now btn),
    // then call execute payment on your server:
    const onAuthorize = (data, actions) => {
      console.log("The payment was authorized!");
      console.log("Payment ID = ", data.paymentID);
      console.log("PayerID = ", data.payerID);

      //At this point, the payment has been authorized, and you will need to call your back-end
      //to complete the payment. Your back-end should invoke the PayPal Payment Execute api to finalize the transaction.
      console.log(localStorage.getItem('token'))
      return fetch("http://127.0.0.1:8000/api/execute-payment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `JWT ${localStorage.getItem('token')}`,

        },
        body: JSON.stringify({
          paymentID: data.paymentID,
          payerID: data.payerID
        })
      })
        .then(data => {
          return data.json();
        })
        .then(json =>
          /*Go to Success page */
          this.setState({
            afterOnAuthorizeMessage: json.message,
            errorMessage: "",
            paymentCanceledMessage: "",
            showButton: false
          })
        )
        .catch(err => {
          /*Go to Error page */
          console.log("error");
          return this.setState({
            paymentCanceledMessage: "",
            errorMessage: "Unable to process payment."
          });
        });
    };


    let Button = "";
    if (this.state.showButton) {
      Button = window.paypal.Button.driver("react", { React, ReactDOM });
    }


    return (
      <div>
        {paymentCanceledMessage && (
          <h1 style={{ color: "blue" }}>{paymentCanceledMessage}</h1>
        )}
        {errorMessage && <h1 style={{ color: "red" }}>{errorMessage}</h1>}
        {afterOnAuthorizeMessage && (
          <h1 style={{ color: "green" }}>{afterOnAuthorizeMessage}</h1>
        )}
        {showButton && (
          <Button
            env={env}
            client={client}
            commit={commit}
            payment={payment}
            onAuthorize={onAuthorize}
            onCancel={onCancel}
            onError={onError}
          />
        )}
      </div>
    );


  }
}

export default scriptLoader("https://www.paypalobjects.com/api/checkout.js")(
  Test
);
