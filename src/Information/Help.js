import React from "react";
import image2 from './Image/image2.jpg';
import "./Information.css"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

function Help() {
    return (
        <div className={'contacts'}>

            <div className={'contacts-container'}>

                <div className={'contacts-container__info'}>
                    <h2>Обратная Связь</h2>
                </div>

                <div className={'contacts-container__info'}>
                    <h2>Телефон горячей линии: </h2>
                    <div className={'contacts-container__desc'}>
                        <PhoneInTalkIcon className={'contacts-container__icon2'}/>
                        <p>+79600410790</p>
                    </div>
                </div>

                <div className={'contacts-container__info'}>
                    <h2>Наша почта: </h2>
                    <div className={'contacts-container__desc'}>
                        <MarkEmailUnreadIcon className={'contacts-container__icon3'}/>
                        <p>afanaseva.sd@students.dvfu.ru</p>
                    </div>
                </div>

            </div>
            <div className={'contacts-img'}>
                <img src={image2} alt="image2" width="500" height="500"/>
            </div>
        </div>
    );
}

export default Help;