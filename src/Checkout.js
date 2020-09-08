import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src=""
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                        {/* BasketItme */}
                        {/* BasketItme */}
                        {/* BasketItme */}
                        {/* BasketItme */}

                    </h2>
                </div>

                <div className="checkout__right">
                    <h2>The subtotal will go here</h2>
                    <Subtotal />
                </div>
            </div>

        </div >
    );
}

export default Checkout;
