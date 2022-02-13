
import React from 'react';
import Logo from '../TopBarComponents/Logo';
import NavBar from '../TopBarComponents/NavBar';
import "./style.css";

export default (function TopBar() {
    return (
        <div className="topbar">
            <Logo />
            <NavBar />
        </div>
    )
})