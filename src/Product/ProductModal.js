import React from "react";
import './Product.css'
import {Button} from "@mui/material";
import {useModal} from "react-hooks-use-modal";

function ProductModal({product}) {
    const [Modal, open, close] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });
    return (
        <>
            <Button onClick={open}>Купить</Button>
            <Modal>
                <div className={'product-border'}>
                <div className={'product'}>
                    <div>
                        <img className={'product__img-size'} src={product.image} alt={'image not found'}/>
                    </div>

                    <div className={'product__info'}>
                        <p className={'product__category-text'}>{product.name}</p>
                        <p className={'product__price-text'}>{product.price + " рублей"}</p>
                        <p className={'product__compound-text'}>{"Состав: " + product.compound}</p>
                        <p>Количество: ___</p>
                        <Button className={'product__button-add'}>Добавить</Button>
                    </div>
                </div>
                <div className={'product__footer'}>
                    <Button className={'product__button-close'} onClick={close}>Х</Button>
                </div>
                </div>
            </Modal>
        </>
    )
}

export default ProductModal