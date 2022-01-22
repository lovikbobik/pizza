import React from "react";
import './Category.css'
import CategoryBox from "./CategoryBox";
import {NavLink} from "react-router-dom";

function Category({category}) {
    return (
        <div className={'category'}>

            <div className={'category-row'}>
                <CategoryBox image={category[0].image} category={category[0].name} link={category[0].link}/>
                <CategoryBox image={category[1].image} category={category[1].name} link={category[1].link}/>
                <CategoryBox image={category[2].image} category={category[2].name} link={category[2].link}/>
            </div>
        </div>
    );
}

export default Category;