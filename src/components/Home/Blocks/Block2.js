import React from 'react';
import grain_bag_img from '../../../assets/images/grain_bag.png';

const Block2 = (props) => {

    const style={
        fontWeight : 'normal',
    }
    return(
    <div class="container-pricing">
        <div class="container">
            <div class="row">
                <div class="col-md-8 left">
                    <h1>Pricing</h1>
                    <p style={style}>Both buyer and seller pay a small fee to Agri Marketplace once a transaction is made. We price transparently and keep you updated through all steps of the process. Our pricing is based on your transaction’s value &amp; volume</p>
                </div>
                <div class="col-md-4">
                    <img src={grain_bag_img} alt="Grain bag en" />
                </div>
            </div>
        </div>
    </div>
    )
};

export default Block2;