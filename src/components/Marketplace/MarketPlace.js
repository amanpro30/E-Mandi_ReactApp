import React, { Component, useState } from 'react';
import Aux from '../../hoc/Aux';
import Layout from '../Layout/Layout';
import { Form, Col, Button } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { Modal } from 'react-bootstrap'

class MarketPlace extends Component {
    handleClose = () => {
        this.setState({ show: false })
        console.log(this.state.show);
    }
    handleShow = () => {
        this.setState({ show: true })
        console.log(this.state.show);
    }
    state = {
        show: false
    }
    dropDownList = {
        a: 'a',
        b: 'b',
    }

    render() {
        return (
            <Aux>
                <Layout>
                    <Button variant="primary" onClick={this.handleShow}>
                        New Market Order
                    </Button>
                    <Modal show={this.state.show} onHide={this.handleClose} style={{ display: 'block' }} fade={false} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>New Order</Modal.Title>
                        </Modal.Header>
                        <div style={{width:'20%'}} >
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

                        </div>
                        {/* </div> */}
                    </Modal>
                </Layout>
            </Aux>

        )
    };
}

export default MarketPlace;