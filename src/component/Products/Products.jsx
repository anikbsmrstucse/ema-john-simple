import React, { useEffect, useState } from 'react';
import ProductCart from '../ProductsCart/ProductCart';
import "./Products.css";

const Products = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className="products">
            <div className="products-container">
                {
                    products.map(product => <ProductCart Product={product} key={product.id} productCart={handleAddToCart}></ProductCart>)
                }
            </div>

            <div className="products-summary"> 
                <h1>Products Summary</h1>
                <p>Cart Items:{cart.length}</p>
            </div>
        </div>
    );
}; 

export default Products;