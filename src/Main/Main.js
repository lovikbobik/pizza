import React from "react";
import './Main.css'
import Tab from "./Tab";
import ProductBox from "../Product/ProductBox";
import {NavLink} from "react-router-dom";

function Main({pizza}) {
    return (

        <div className={'main'}>
            <div>
                <div className={'main-img'}>
                    <img className={'main__poster'}
                         src={'https://cdn.papajohns.ru//images/banners/bfb447d5ba9036a2b5eb0e1941fcd152.webp'}
                         alt={'image not found'}/>
                </div>

                <div className={'main__pizza-tabs'}>
                    <NavLink to={'/popular'} className={'sidebar__text-decoration'}>
                        <Tab name={'Хит'} pizza={pizza}/>
                    </NavLink>
                    <NavLink to={'/acute'} className={'sidebar__text-decoration'}>
                        <Tab name={'Острая'} pizza={pizza} />
                    </NavLink>
                    <NavLink to={'/new'} className={'sidebar__text-decoration'}>
                        <Tab name={'Новинка'} pizza={pizza}/>
                    </NavLink>
                    <NavLink to={'/meet'} className={'sidebar__text-decoration'}>
                        <Tab name={'Мясная'} pizza={pizza}/>
                    </NavLink>
                    <NavLink to={'/vegan'} className={'sidebar__text-decoration'}>
                        <Tab name={'Вегатаринская'} pizza={pizza}/>
                    </NavLink>
                </div>
            </div>
            <div className={'main__pizza'}>
                <ProductBox product={pizza[0]}/>
                <ProductBox product={pizza[1]}/>
                <ProductBox product={pizza[2]}/>
                <ProductBox product={pizza[3]}/>
                <ProductBox product={pizza[0]}/>
                <ProductBox product={pizza[3]}/>
                <ProductBox product={pizza[2]}/>
                <ProductBox product={pizza[1]}/>
                <ProductBox product={pizza[0]}/>
                <ProductBox product={pizza[1]}/>
                <ProductBox product={pizza[2]}/>
                <ProductBox product={pizza[0]}/>
            </div>

        </div>


    );
}

export default Main;