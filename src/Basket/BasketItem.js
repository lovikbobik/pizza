import React from "react";
import './Basket.css'
import {Button} from "@mui/material";
import drinksIce from "../Data/drinksIce";
import pizza from "../Data/Pizza";

function Basket({product = pizza[0], count = 2}) {
    return (
        <div className={'basketItem__row'}>
            <div className={'basketItem__first'}>
                <img src={product.image} alt={'image not found'} className={'basket__img'}/>
                <p className={'text-weight'}>{product.name}</p>
            </div>

            <div className={'basketItem__two'}>
                <p className={'text-weight'}>{product.price + 'руб.'}</p>
                <p className={'text-weight'}>{'кол-во: ' + count}</p>
                <Button className={'basketItem__button-del'}>Удалить</Button>
            </div>
        </div>

    );
}

export default Basket;