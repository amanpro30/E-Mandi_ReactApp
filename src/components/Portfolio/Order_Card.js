import React, {Component} from 'react';
import {Table, Card, Button} from 'react-bootstrap';
import {MDBBtnGroup,MDBBtn,MDBCol} from 'mdbreact';
class Order_Card extends Component{

    render(){
        return(

            <Card >
                <Card.Body>
                    <Card.Text>
                        <tr className="col-xl-12">
                            <td className= "col-xl-2">rice</td>
                            <td className= "col-xl-2">basmati</td>
                            <td className= "col-xl-2">100kg</td>
                            <td className= "col-xl-4"><b>100.1&emsp;100.2&emsp;100.3&emsp;&emsp;100</b></td>
                            <td className= "col-xl-2">&emsp;<span className="text-primary">Sell</span>&emsp;<span className="text-danger">Delete</span></td>
                        </tr>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Order_Card