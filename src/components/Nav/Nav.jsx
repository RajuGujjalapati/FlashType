import React from 'react';
import logo from "../../assets/logo.png";
import './Nav.css'

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="logo" className="flash-logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a
                target="_blank"
                className="nav-aam-link"
                href="https://google.com" 
                rel="noreferrer">Google</a>
                
            </div>
        </div>
    );
}
export default Nav;