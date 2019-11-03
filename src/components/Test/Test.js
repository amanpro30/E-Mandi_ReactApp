
import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap'
import Aux from '../../hoc/Aux'

class  Example extends Component {
    // show = () => useState(false);
    // setShow =() => useState(false);
    // handleClose = () => setShow(false);
    // handleShow = () => setShow(true);
    handleClose = () =>{
        this.setState({show:false})
        console.log(this.state.show);
    }
    handleShow = () => {
        this.setState({show:true})
        console.log(this.state.show);
    }
    state={
        show:false
    }
    render(){
    return (
        <Aux>
            <Button variant="primary" onClick={this.handleShow}>
                Launch demo modal
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose} style={{display:'block'}} fade={false} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Aux>
    )
    };
}

export default Example;