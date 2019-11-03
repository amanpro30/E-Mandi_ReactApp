import React from 'react';

const Block1 = (props) => {
    const style_block = {
        "minHeight": "150px"
    }
    const style1={
        fontWeight : 'normal',
    }
    return (
    <div className="container-get-started">
    <div className="container">
        <h1>Get Started</h1>
        <p style={style1}>We open the door to thousands of approved buyers and sellers. Post your crop bid as a registered buyer, or create your crop offer as a platform verified seller. Through our rigorous customer compliance we make sure that only reliable users gain access to our digital marketplace. There are two ways to get started:</p>
        <div className="row">
            <div className="col-xs-12 col-md-6">
                <h2>Post offer as a seller</h2>
                <p style={style_block}>As a seller, post offers for the agricultural crop you are looking to sell, and gain immediate access to credit-verified buyers. Or simply react to an existing buyer’s bid and start your transaction.</p>
                <div className="row get-started-btn">
                    <div className="col-xs-12 col-md-6 left">
                        <a className="btn" href="users/sign_up.html">Register as a seller</a>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-md-6">
                <h2>Post bid as a buyer</h2>
                <p style={style_block}>As a buyer, post bids for the agricultural crop you are looking to buy. Communicate to the market what you are looking for, and get rapid reactions from interested farmers or sellers.</p>
                <div className="row get-started-btn">
                    <div className="col-xs-12 col-md-6 left">
                        <a className="btn" href="users/sign_up.html">Register as a buyer</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
};

export default Block1;