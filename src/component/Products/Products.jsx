import React, { useEffect, useState } from 'react';
import ProductCart from '../ProductsCart/ProductCart';
import "./Products.css";

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    

    return (
        <div className="products">
            <div className="products-container">
                {
                    products.map(product => <ProductCart Product={product} key={product.id}></ProductCart>)
                }
            </div>

            <div className="products-summary"> 
                <h1>Products Summary</h1>
            </div>
        </div>
    );
}; 

export default Products;