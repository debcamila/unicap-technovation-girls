
import React from 'react';
import "./style.css";
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default (function SlideComponents() {
    return (
        <div className="slider">
            <Grid container>
                <Grid item xs={12} >
                    <div className="slide">
                        <h1 className="title-slide">UNICAP ICAM Tech school</h1>
                        <p className="subtitle-slide"> for girls</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
})