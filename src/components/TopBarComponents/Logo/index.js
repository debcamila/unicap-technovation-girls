
import React from 'react';
import logoImage from '../../../static/images/logo.png';
import "./style.css";

export default (function Logo() {
    return (
        <div className="logo-div">
            <a href="/">
                <img
                    alt="Logo"
                    title= "Logo Unicap Technovation for Girls"
                    src={logoImage}
                    className = "img-logo"
                />
            </a>
        </div>
    )
})