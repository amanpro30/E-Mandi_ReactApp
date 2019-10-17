import React from 'react';

const Block1 = (props) => {
    const style_block = {
        "min-height": "150px"
    }
    return (
    <div class="container-get-started">
    <div class="container">
        <h1>Get Started</h1>
        <p>We open the door to thousands of approved buyers and sellers. Post your crop bid as a registered buyer, or create your crop offer as a platform verified seller. Through our rigorous customer compliance we make sure that only reliable users gain access to our digital marketplace. There are two ways to get started:</p>
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <h2>Post offer as a seller</h2>
                <p style={style_block}>As a seller, post offers for the agricultural crop you are looking to sell, and gain immediate access to credit-verified buyers. Or simply react to an existing buyer’s bid and start your transaction.</p>
                <div class="row get-started-btn">
                    <div class="col-xs-12 col-md-6 left">
                        <a class="btn" href="users/sign_up.html">Register as a seller</a>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <h2>Post bid as a buyer</h2>
                <p style={style_block}>As a buyer, post bids for the agricultural crop you are looking to buy. Communicate to the market what you are looking for, and get rapid reactions from interested farmers or sellers.</p>
                <div class="row get-started-btn">
                    <div class="col-xs-12 col-md-6 left">
                        <a class="btn" href="users/sign_up.html">Register as a buyer</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
};

export default Block1;