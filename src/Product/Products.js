import React from "react";
import '../Category/Category.css'
import CategoryBox from "../Category/CategoryBox";
import {NavLink} from "react-router-dom";
import ProductBox from "./ProductBox";

function Products({products}) {
    return (
        <div className={'category'}>

            <div className={'category-row'}>
                <ProductBox product={products[0]}/>
                <ProductBox product={products[1]}/>
            </div>
        </div>
    );
}

export default Products;