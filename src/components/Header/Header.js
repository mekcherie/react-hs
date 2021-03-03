import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <header>
            <h1>HAILE SELASSIE </h1>
            <div className="Header-Subtitle">Haile Selassie Information Center</div>


                <div>
                <NavLink
                    className="nav-link"
                    activeClassName="nav-link-active"
                    exact
                    to="/">Information</NavLink>

                <NavLink
                    className="nav-link"
                    activeClassName="nav-link-active"
                    to="/about">About</NavLink>
                </div>
            </header>
        </div>
    )
}

export default Header;