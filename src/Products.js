import React from 'react'
// import './Product.css'
import './neumorphism.css'
import { useStateValue } from "./StateProvider";

function Products({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
        type: "ADD_TO_BASKET",
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        },
        });
    };

    return (
        <div className="product card m-2 shadow-soft border border-light p-4 rounded">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                <small>Rs. </small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                    ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button className='btn' onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default Products
