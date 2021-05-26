
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import "./style.css";


export default (function Navbar() {
    return (
        <div className="navbar">
            <Paper className="paper" elevation='0'>
                <Tabs 
                    centered
                    textColor="default"
                >
                    <Tab className="link-navbar" label="Início" />
                    <Tab className="link-navbar" label="Sobre" />
                    <Tab className="link-navbar" label="Programação" />
                    <Tab className="link-navbar" label="Apoiadores" />
                    <Tab className="link-navbar" label="Mentores" />
                </Tabs>
            </Paper>
        </div>
    )
})