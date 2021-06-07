
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
                    <a href="/" style={{textDecoration:'none', color: '#000', fontWeight: '900', fontFamily: 'Roboto'}}>
                        <Tab className="link-navbar" label="Início" />
                    </a>
                    <a href="#sobre" style={{textDecoration:'none', color: '#000', fontWeight: '900', fontFamily: 'Roboto'}}>
                        <Tab className="link-navbar" label="Sobre" />
                    </a>
                    <a href="#programacao" style={{textDecoration:'none', color: '#000', fontWeight: '900', fontFamily: 'Roboto'}}>
                        <Tab className="link-navbar" label="Programação" />
                    </a>
                    <a href="#apoio" style={{textDecoration:'none', color: '#000', fontWeight: '900', fontFamily: 'Roboto'}}>
                        <Tab className="link-navbar" label="Apoiadores" />
                    </a>
                    <a href="#mentores" style={{textDecoration:'none', color: '#000', fontWeight: '900', fontFamily: 'Roboto'}}>
                        <Tab className="link-navbar" label="Mentores" />
                    </a>
                </Tabs>
            </Paper>
        </div>
    )
})