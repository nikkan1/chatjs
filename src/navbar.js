import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className="navbar-button" activeClassName="active">
                Главная
            </NavLink>
            <NavLink to="/chat" className="navbar-button" activeClassName="active">
                Чат
            </NavLink>
            <NavLink to="/login" className="navbar-button" activeClassName="active">
                Вход
            </NavLink>
            <NavLink to="/register" className="navbar-button" activeClassName="active">
                Регистрация
            </NavLink>
        </div>
    );
};
export default Navbar;
