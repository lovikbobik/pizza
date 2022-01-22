import './Header.css';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import logo from './logo.jpeg';
import {NavLink, useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "../../Auth/AuthContext";

function Header() {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate('/')
    }

    return (
        <div className={'header__container'}>
            <div className={'header__title'}>
                <h2>WWW.DVFU.RU</h2>
            </div>

            <div className={'header__menu'}>
                <div className={'header__logo-fefu'}>
                    <img src={logo} alt="logo" width="100" height="80"/>
                </div>

                <div className={'header__info'}>

                    <NavLink to={'/contacts'} className={'blue__text'}>
                        <p>Контакты</p>
                    </NavLink>

                    <NavLink to={'/help'} className={'blue__text'}>
                        <p>Помощь</p>
                    </NavLink>

                    <NavLink to={'/map'} className={'blue__text'}>
                        <p>Наш адрес</p>
                    </NavLink>

                    <NavLink to={'/quality'} className={'blue__text'}>
                        <p className={'blue__text'}>Качество</p>
                    </NavLink>

                </div>
                <div className={'header__profile'}>

                    <NavLink to={'/basket'} className={'sidebar__text-decoration'}>
                        <LocalGroceryStoreOutlinedIcon className={'header__profile-data'}/>
                    </NavLink>

                        <p
                            className={'header__profile-data'}
                            onClick={logoutHandler}
                        >
                            Выйти</p>

                    <SettingsOutlinedIcon className={'header__profile-data'}/>
                </div>
            </div>
        </div>
    )
        ;
}

export default Header;