
import React from 'react';
import FooterComponent from '../FooterComponent';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Grid } from '@material-ui/core';
import "./style.css";

export default (function Footer() {
    return (
        <div>
            <FooterComponent />
            <div className="footer-copyright">
                <Grid container >
                    <Grid item xs={12} >
                        <CopyrightIcon style={{ fontSize: '15px', paddingRight: '5px', paddingTop: '2px' }} /> 
                           2021 Unicap Technovation for Girls.
                    </Grid>
                </Grid>
            </div>
        </div>
    )
})