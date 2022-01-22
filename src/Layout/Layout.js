import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import './Layout.css'

function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className={'layout'}>
                <div className={'white-blue'}>
                    <Sidebar/>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Layout;