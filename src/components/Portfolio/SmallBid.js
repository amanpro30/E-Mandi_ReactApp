import React,{Component} from 'react';
import Aux from '../../hoc/Aux'

const SmallBid = (props) => (
    <Aux>
        <td className="col-xl-1">
            {props.price}&emsp;
        </td>
    </Aux>
)

export default SmallBid;