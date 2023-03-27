import React from 'react';
import './ProductCart.css';

const ProductCart = (props) => {
    const {img,name,price,seller,ratings} = props.Product;
    const {productCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className="title">{name}</h6>   
                <p className="price">Price: ${price}</p>
                <p className="manufacture">Manufacture: {seller}</p>
                <p className="ratings">Ratings: {ratings} Star</p>             
            </div>
            <button className="btn-cart" onClick={() =>productCart(props.Product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCart;