
import React from 'react';
import FooterComponent from '../FooterComponent';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
                                {"© " +  (1900 + new Date().getYear()) + " Unicap Icam (UI) Tech School for girls. Desenvolvido com"} 
                                    <FavoriteIcon style={{color: 'red', paddingRight: '5px', paddingTop: '2px' }}/>
                                {"por Deborah Camila"}</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
})