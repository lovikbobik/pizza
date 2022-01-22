import React from "react";
import image1 from './Image/image1.jpg';
import "./Information.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import { Icon24LogoVk } from '@vkontakte/icons';
import TwitterIcon from '@mui/icons-material/Twitter';

function Contacts() {
    return (
       <div className={'contacts'}>
           <div className={'contacts-img'}>
               <img src={image1} alt="image1" width="500" height="500"/>
           </div>
           <div className={'contacts-container'}>
               <div className={'contacts-container__info'}>
                   <h2>Мы в  Истаграме :</h2>
                   <div className={'contacts-container__desc'}>
                   <InstagramIcon className={'contacts-container__icon1'}/>
                   <a href={"https://www.instagram.com/bobiklovik/"}> https://www.instagram.com/bobiklovik</a>
                   </div>
               </div>
               <div className={'contacts-container__info'}>
                   <h2>Мы Вконтакте :</h2>
                   <div className={'contacts-container__desc'}>
                   <Icon24LogoVk className={'contacts-container__icon2'}/>
                   <a href={"https://vk.com/clecka"}> https://vk.com/clecka</a>
                   </div>
               </div>
               <div className={'contacts-container__info'}>
                   <h2>Мы в Твиттере :</h2>
                   <div className={'contacts-container__desc'}>
                   <TwitterIcon className={'contacts-container__icon2'}/>
                   <a href={"https://twitter.com"}> https://twitter.com</a>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Contacts;