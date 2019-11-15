import React from 'react';
import { Button } from "react-bootstrap";

const Bid = (props) => (
    <div>
        <Button style={{width:'145px'}} variant="outline-success">₹ {props.price}</Button><br></br>
    </div>
);

export default Bid;