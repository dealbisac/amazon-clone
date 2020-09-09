import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //Dispacth the item into the data layer so that it can be used by any pages.
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, index) => (
                                <StarIcon key={index} />
                            ))
                    }
                </div>
            </div>
            <img
                className="product__image"
                src={image}
                alt="Product Image"
            />
            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product;
