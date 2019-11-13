import React, { Component } from "react";
import {Button, ListGroup, ListGroupItem, Form} from "react-bootstrap"
import Aux from "../../hoc/Aux";
class Order extends Component {

  
  render() {
    return (
      <Aux>
        <div class="products-index__list__items" style={{border:'2px' ,borderStyle:'groove'}}>
          <div
            style={{ marginLeft: 3, marginRight: 3 }}
            class="row products-index__order__row"
          >
            <div class="col">
              {/* <p style={{fontSize:'15px', align:'left'}}>{this.props.CropName}<br />({this.props.CropVariety})</p> */}
              <ListGroup className="list-group-flush">
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>{this.props.CropName} {this.props.CropVariety}</ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>{this.props.Quantity} Kg</ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>{this.props.ProductionMode} </ListGroupItem>
                <ListGroupItem style={{fontSize:'14px', align:'left'}}>Base Price : ₹{this.props.BasePrice} </ListGroupItem>
                {/* <ListGroupItem style={{fontSize:'14px', align:'left'}}>Close Date {this.props.CloseingDate} </ListGroupItem> */}
              </ListGroup>

            </div>
            <div class="col">
              <Button style={{width:'100px'}} variant="outline-info">₹ Price 1</Button><br></br>
              <Button style={{width:'100px'}} variant="outline-info">₹ Price 2</Button>
            </div>
            <div class="col">
            {/* <div class="products-index__sell__col"  style={{width:'200px', marginLeft:'70px'}}>
                        <div>
                          <p class="product-order__ppt_sell" style={{width:'30px'}}>₹ 400</p>
                          <p class="product-order__weight">60.0</p>
                          <p class="product-order__unit">Kg</p>
                        </div>
            </div>             */}
            <Form>
               <Form.Control size="lg" type="text" placeholder="Bid Price" />
               <Button style={{width:'200px'}} variant="outline-info">Bid</Button>
            </Form>  

            </div>
          </div>
        </div>

        {/* {
          
          this.state.orderData.length !== 0 ?
          Object.values(this.state.orderData[0]).map(function(name, index){
            return <li key={index}>{name}</li>;
          })
          
          :<div>No Orders Placed Yet</div>
        } */}
      </Aux>
    );
  }
}

export default Order;
