import React, { Component, useState } from 'react';
import Aux from '../../../hoc/Aux';
import Layout from '../../Layout/Layout';
import { Form, Col, Button } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { Modal} from 'react-bootstrap'
class NewMarketOrder extends Component {

    // handleSubmit = (event) => {
    //     form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //       event.preventDefault();
    //       event.stopPropagation();


    //     setValidated(true);
    //     };
    handleClose = () =>{
        this.setState({show:false})
        console.log(this.state.show);
    }
    handleShow = () => {
        this.setState({show:true})
        console.log(this.state.show);
    }
    state={
        show:true
    }
    dropDownList = {
        a: 'a',
        b: 'b',
    }
    render() {
        // validated= useState(false);
        // setValidated = useState(false);
        const style1 = {
            width: '50%',
            align:'center',
        };

        return (
            <Aux>
                {/* <Layout> */}
                <Modal show={this.state.show} onHide={this.handleClose} style={{display:'block'}} fade={false} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>New Order</Modal.Title>
                </Modal.Header>
                    {/* <div class="container bid-new bid-form-table" style={style1}> */}
                        {/* <div class="bid-new__col" style={style1}> */}
                            <h2>New Order</h2>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCropName">
                                        <Form.Label>Crop Name</Form.Label>
                                        <Form.Control placeholder="Enter Crop Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCropVariety">
                                        <Form.Label>Crop Variety</Form.Label>
                                        <Form.Control placeholder="Enter Crop Variety" />
                                    </Form.Group>


                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridProductionMode">
                                        <Form.Label>Production Mode</Form.Label>

                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>Organic</option>
                                            <option>Conventional</option>
                                            <option>Hybrid</option>
                                            
                                        </Input>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridQuantity">
                                        <Form.Label>Quantity (kg)</Form.Label>
                                        <Form.Control placeholder="Enter Quantity" />
                                    </Form.Group>


                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridClosingDate">
                                        <Form.Label>Expected Closing Date</Form.Label>
                                        <Form.Control type='date' />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridClosingDate">
                                        <Form.Label>Base Price (per kg)</Form.Label>
                                        <Form.Control placeholder="Enter Base Price" options={this.dropDownList} />

                                    </Form.Group>
                                </Form.Row>

                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="I agree with the Agri Marketplace Terms and Conditions for buy and sell offers" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                    </Button>
                            </Form>

                        {/* </div> */}
                    {/* </div> */}
                </Modal>    
                {/* </Layout> */}
            </Aux>
        )
    };
};

export default NewMarketOrder    