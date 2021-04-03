import React from 'react';
import { Link } from 'react-router-dom';

import "./navbar.css";

export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="./assets/logo.png" alt=""/>
            </div>
            <ul className="menu">
                <li>
                    <Link to="/dc">DC</Link>
                </li>
                <li>
                    <Link to="/marvel">Marvel</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/login">Logout</Link>
                </li>
            </ul>
        </nav>
    )
}
