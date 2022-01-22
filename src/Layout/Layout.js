import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import './Layout.css'
import Loader from "../Loader/Loader";
import {useHttp} from "../hooks/http.hook";

function Layout({children}) {
    const {loading} = useHttp();
    return (
        <div>
            <Header/>
            <div className={'layout'}>
                <div className={'white-blue'}>
                    <Sidebar/>
                </div>
                {loading ? <Loader/> : children}
            </div>
        </div>
    );
}

export default Layout;