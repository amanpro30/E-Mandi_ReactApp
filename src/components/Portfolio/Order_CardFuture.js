import React from 'react';
import { Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import SmallBid from './SmallBid';
import TrashIcon from 'react-ionicons/lib/MdTrash';
import Button from 'react-bootstrap/Button';

const Order_Card = props => (
    <Card >
        <Card.Body>
            <Card.Text>
                <td className="col-md-1 align-middle">{props.CropName}</td>
                <td className="col-md-2">{props.Quantity}</td>
                <td className="col-md-2">{props.OrderDate}</td>
                <td className="col-md-1">{props.Price}</td>
                <td className="col-md-2">{props.DeliveryDate}</td>
                <td className="col-md-2">{props.AdvanceDate}</td>
                <td className="col-md-2">{props.Advance}</td>
                
            </Card.Text>
        </Card.Body>
    </Card>
)

const mapStateToProps = state => {
    return{
        username:state.auth.username,
        accountbalance:state.auth.accountbalance,
        availablebalance:state.auth.availablebalance,
    }
}

export default connect(mapStateToProps,null)(Order_Card);