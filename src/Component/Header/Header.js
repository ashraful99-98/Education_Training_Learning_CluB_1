import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <img className="logo-img" src={logo} alt="" />
                    <h4>Edu-T-L-Club</h4>
                </div>
                <nav className="navbar">
                    <NavLink to="/home" className="nav-child">Home</NavLink>
                    <NavLink to="/about" className="nav-child">About</NavLink>
                    <NavLink to="/service" className="nav-child">Service</NavLink>
                    <NavLink to="/contact" className="nav-child">Contact</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;