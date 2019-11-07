import React, { Component } from "react";
import Aux from "../../hoc/Aux";
class Order extends Component {

  
  render() {
    return (
      <Aux>
        <div class="products-index__list__items" style={{border:'2px' ,borderStyle:'groove'}}>
          <div
            style={{ marginLeft: 3, marginRight: 3 }}
            class=" row products-index__order__row"
          >
            <div class="col-xs-12 col-md-12  product-order-detail">
                <p style={{align:'left'}}>{this.props.CropName}</p>
                

              <div class="col-xs-12 col-md-9 flex-on-them">
                <div class="col-xs-12 col-md-6 products-order-row"></div>

                <div class="col-xs-12 col-md-6 products-order-row"  style={{width:'00px'}}>
                    <div class="col-xs-3 col-sm-4 col-md-4 products-index__sell__col"  style={{width:'200px', marginLeft:'50px'}}>
                      <div  class="bid-sell-hover" style={{width:'100%'}}>
                        <div>
                          <p class="product-order__ppt_sell" style={{width:'30px'}}>₹ 400</p>
                          <p class="product-order__weight">60.0</p>
                          <p class="product-order__unit">MT</p>
                        </div>
                        <p class="bid-sell-hover__info">
                          <span class="info">Metric Tons</span>
                        </p>
                      </div>
                    </div>
                </div>
              </div>

              <div id="chart0" class="row collapse">
                <div class="col-md-12"></div>
              </div>
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
