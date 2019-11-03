import React, { Component, useState } from 'react';
import Aux from '../../hoc/Aux';
import Layout from '../Layout/Layout';
import { Form, Col, Button } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { Modal } from 'react-bootstrap'

class MarketPlace extends Component {
    handleClose_Market = () => {
        this.setState({ show_Market: false })
        console.log(this.state.show_Market);
    }
    handleShow_Market = () => {
        this.setState({ show_Market: true })
        console.log(this.state.show_Market);
    }
    handleClose_Futures = () => {
        this.setState({ show_Futures: false })
        console.log(this.state.show_Futures);
    }
    handleShow_Futures = () => {
        this.setState({ show_Futures: true })
        console.log(this.state.show_Futures);
    }
    state = {
        show_Market: false,
        show_Futures: false
    }
    
    render() {
        return (
            <Aux>
                <Layout>
 {/* ########################################################################################################                    */}
 <div className="content">
     <div className ="container products-index container__filter">
     <div className="products-index__search-container">
    
  
       
                    <Button className="col-md-4 " variant="primary" onClick={this.handleShow_Market}>
                        Market Order
                    </Button>
                    <Button className="col-md-4 "  variant="primary" onClick={this.handleShow_Futures}>
                        Futures Order
                    </Button>

                    <Modal show={this.state.show_Market} onHide={this.handleClose_Market} style={{ display: 'block' }} fade={false} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Market Order</Modal.Title>
                        </Modal.Header>
                      
                        <div style={{margin: "50px",width:'80%'}} >
                        
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCropName">
                                    <Form.Label style={{align:'left'}}>Crop Name</Form.Label>
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
                                    <Form.Control placeholder="Enter Base Price" />

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
                        
                        
{/* ########################################################################################################### */}


{/* ############################################################################################################ */}
                       
                </Modal>

                    <Modal show={this.state.show_Futures} onHide={this.handleClose_Futures} style={{ display: 'block' }} fade={false} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Futures Order</Modal.Title>
                        </Modal.Header>
                        <div style={{margin: "50px",width:'80%'}} >
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
                                    <Form.Label>Quantity Required (kg)</Form.Label>
                                    <Form.Control placeholder="Enter Quantity" />
                                </Form.Group>


                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridClosingDate">
                                    <Form.Label> Delivery Date </Form.Label>
                                    <Form.Control type='date' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridClosingDate">
                                    <Form.Label>Price (per kg)</Form.Label>
                                    <Form.Control placeholder="Enter Base Price" />

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridClosingDate">
                                    <Form.Label> Advance Payment date </Form.Label>
                                    <Form.Control type='month' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridClosingDate">
                                    <Form.Label>Advance (Percentage) </Form.Label>
                                    <Form.Control type='number' max='99' placeholder="Enter Base Price" />

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



                       
                    </Modal>
                    </div>
                </div>
            </div>      
                </Layout>
            </Aux>

        )
    };
}

export default MarketPlace;