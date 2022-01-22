import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import {AuthContext} from './Auth/AuthContext'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";

function App() {
    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
        <>
            <AuthContext.Provider value={{
                token, login, logout, userId, isAuthenticated
            }}>
                <Router>
                    {routes}
                </Router>
            </AuthContext.Provider>
        </>
    );
}

export default App;
