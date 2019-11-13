import React, {Component} from 'react'
import {Table, Card, Button} from 'react-bootstrap'

class Order_Card extends Component{

    render(){
        return(
            <Card style={{width:'900px'}}>
                <Card.Header as="h3" style={{fontSize:'20px',fontWeight:'bold'}}>{this.props.CropName}&nbsp;&nbsp;&nbsp;|&nbsp; {this.props.CropVariety}&nbsp;&nbsp;&nbsp;|&nbsp; {this.props.Quantity} KG &nbsp;&nbsp;&nbsp;|&nbsp; {this.props.ProductionMode}     &nbsp;&nbsp;&nbsp;| </Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}> Bids : </span>
                    <Button style={{width:'100px'}} variant="outline-info">₹ Price 1</Button>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Order_Card