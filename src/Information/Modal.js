import React from "react";
import "./Map.css";
import logo from "../Layout/Header/logo.jpeg";

function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h2>Pizza FEFU</h2>
                    <img src={logo} alt="logo"  width="100" height="80" />
                </div>
                <div className="body">
                    <h5>Наш телефон</h5>
                    <p>89274376886</p>
                    <h5>Наш адрес</h5>
                    <p>п. Аякс, д. 10, корп. A, Владивосток, Приморский край, 690922</p>
                    <h5>Режим работы</h5>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;