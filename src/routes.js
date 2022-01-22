import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import MyMap from "./Information/MyMap";
import Contacts from "./Information/Contacts";
import Quality from "./Information/Quality";
import Help from "./Information/Help";
import Basket from "../../client/src/Basket/Basket";
import Main from "../../client/src/Main/Main";
import pizza from "../../client/src/Data/Pizza";
import Category from "../../client/src/Category/Category";
import categoryWater from "../../client/src/Data/categoryWater";
import categoryDessert from "../../client/src/Data/categoryDessert";
import categoryCombo from "../../client/src/Data/categoryCombo";
import categorySale from "../../client/src/Data/categorySale";
import categoryBeer from "../../client/src/Data/categoryBeer";
import Products from "../../client/src/Product/Products";
import drinksIce from "../../client/src/Data/drinksIce";
import drinksHot from "../../client/src/Data/drinksHot";
import {AuthPage} from "./Auth/AuthPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/" exact element={<AuthPage/>}/>
                <Route path="/map" exact element={<Layout children={<MyMap/>}/>}/>
                <Route path="/contacts" exact element={<Layout children={<Contacts/>}/>}/>
                <Route path="/quality" exact element={<Layout children={<Quality/>}/>}/>
                <Route path="/help" exact element={<Layout children={<Help/>}/>}/>

                <Route path="/basket" exact element={<Layout children={<Basket/>}/>}/>

                <Route path="/main" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>
                <Route path="/drinks" exact element={<Layout children={<Category category={categoryWater}/>}/>}/>
                <Route path="/desserts" exact element={<Layout children={<Category category={categoryDessert}/>}/>}/>
                <Route path="/combo" exact element={<Layout children={<Category category={categoryCombo}/>}/>}/>
                <Route path="/sale" exact element={<Layout children={<Category category={categorySale}/>}/>}/>
                <Route path="/beer" exact element={<Layout children={<Category category={categoryBeer}/>}/>}/>

                <Route path="/drinks/ice" exact element={<Layout children={<Products products={drinksIce}/>}/>}/>
                <Route path="/drinks/hot" exact element={<Layout children={<Products products={drinksHot}/>}/>}/>

                <Route path="/popular" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>
                <Route path="/new" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>
                <Route path="/meet" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>
                <Route path="/vegan" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>
                <Route path="/acute" exact element={<Layout children={<Main pizza={pizza}/>}/>}/>

            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" exact element={<AuthPage/>}/>
        </Routes>
    )
}