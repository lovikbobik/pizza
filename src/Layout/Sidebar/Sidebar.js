import React from "react";
import "./Sidebar.css"
import SidebarItem from "./SidebarItem";

import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import IcecreamOutlinedIcon from '@mui/icons-material/IcecreamOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import {NavLink} from "react-router-dom";


function Sidebar() {
    return (
        <div className={'sidebar'}>
            <NavLink to={'/main'} className={'sidebar__text-decoration'}>
                <SidebarItem Icon={LocalPizzaOutlinedIcon} text={"Пицца"}/>
            </NavLink>

            <NavLink to={'/drinks'} className={'sidebar__text-decoration'}>
                <SidebarItem Icon={LocalCafeOutlinedIcon} text={"Напитки"}/>
            </NavLink>

            <NavLink to={'/desserts'} className={'sidebar__text-decoration'}>
                <SidebarItem Icon={IcecreamOutlinedIcon} text={"Десерты"}/>
            </NavLink>

            <NavLink to={'/combo'} className={'sidebar__text-decoration'}>
                <SidebarItem Icon={DiningOutlinedIcon} text={"Комбо"}/>
            </NavLink>
            <NavLink to={'/sale'} className={'sidebar__text-decoration'}>
                <SidebarItem Icon={LoyaltyOutlinedIcon} text={"Акции"}/>
            </NavLink>
            <NavLink to={'/beer'} className={'sidebar__text-decoration'}>
                <SidebarItem Icon={LiquorOutlinedIcon} text={"Пиво!"}/>
            </NavLink>
        </div>
    )
}

export default Sidebar;