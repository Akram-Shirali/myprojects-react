import React from "react";
import '../../assets/product.js';

const Products = () => (
        <ul className="products">
            {Products.map((i) => (
                <li>
                    <h3>{i.name}:{i.family}</h3>
                    <p>{i.profile}</p>
                </li>
            ))}
            
        </ul >

)
export default Products;