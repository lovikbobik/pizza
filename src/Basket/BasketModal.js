import React from "react";
import {Button} from "@mui/material";
import {useModal} from "react-hooks-use-modal";
import './BasketModal.css'
import RadioBox from "./RadioBox";

function BasketModal() {
    const [Modal, open, close] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });
    return (
        <>
            <Button className={'basket__button-buy'} onClick={open}>Заказать</Button>
            <Modal>
                <div className={'basketModal__border'}>
                    <div className={'.basketModal__body'}>

                        <input className={"basketModal__input"} placeholder={"Телефон: "}/>
                        <input className={"basketModal__input"} placeholder={"Адрес: "}/>
                        <input className={"basketModal__input"} placeholder={"Имя: "}/>
                        <input className={"basketModal__input"} placeholder={"Время доставки: "}/>
                        <input className={"basketModal__input"} placeholder={"Email (необязательно): "}/>

                        <RadioBox/>


                        <div className={'basketModal__buttons'}>
                            <Button className={'basket__button-buy'}>Оформить</Button>
                            <Button className={'basketItem__button-del'} onClick={close}>Отмена</Button>
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default BasketModal;