import React from 'react';
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to='/checkout'>
                        {basket?.length} items
                        </Link>
                    )
                </h1>
                {/* Payment Section - Delivery Address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p> Kathmandu</p>
                            <p> Bagmati, Nepal</p>
                        </div>
                    </div>
                </div>

                {/* Payment Section -review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Review Items and Delievery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                            />
                        ))}
                    </div>
                </div>

                {/* Payment Section Payment Mwthod */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe Magic will go here */}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Payment;
