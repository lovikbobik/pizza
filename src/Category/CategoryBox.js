import React from "react";
import './CategoryBox.css'
import {NavLink} from "react-router-dom";

function CategoryBox({image, category, link = '/'}) {
    return (

        <div className={'categoryBox_content'}>

                <div className={'categoryBox__image'}>
                    <img className={'categoryBox__img-size'} src={image} alt={'image not found'}/>
                </div>

                <div className={'categoryBox__name'}>
                    <NavLink to={link} className={'sidebar__text-decoration'}>
                    <p>{category}</p>
                    </NavLink>
                </div>

        </div>

    );
}

export default CategoryBox;