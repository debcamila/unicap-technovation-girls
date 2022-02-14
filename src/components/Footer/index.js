
import React from 'react';
import FooterComponent from '../FooterComponent';
import { Grid } from '@material-ui/core';
import "./style.css";

export default (function Footer() {
    return (
        <div>
            <FooterComponent />
            <div className="footer-copyright">
                <Grid container >
                    <Grid item xs={12} >
                        <p>
                            {"© " +  (1900 + new Date().getYear()) + " UNICAP ICAM Tech school for girls."} 
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
})