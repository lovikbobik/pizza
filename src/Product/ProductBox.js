import React from "react";
import {Button} from "@mui/material";
import ProductModal from "./ProductModal";


function ProductBox({product}) {
    return (
        <div className={'product__body'}>
            <div className={'categoryBox_content'}>
                <div className={'categoryBox__image'}>
                    <img className={'categoryBox__img-size'} src={product.image} alt={'image not found'}/>
                </div>
                <div className={'categoryBox__name'}>
                    <p>{product.name}</p>
                    <p>{product.price + ' руб.'}</p>
                    <ProductModal product={product}/>
                </div>
            </div>
        </div>
    )
}

export default ProductBox;