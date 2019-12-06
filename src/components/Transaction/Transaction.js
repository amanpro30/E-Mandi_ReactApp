import React, { Component } from 'react';

class Transaction extends Component{
    render(){
        return(
            <div>
                date:{this.props.date}
                type:{this.props.type}
                amount:{this.props.amount}
            </div>
        )
    }
}

export default Transaction;