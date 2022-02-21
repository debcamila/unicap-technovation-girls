
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

            {/* <Grid container style={{backgroundColor: '#DFC5E6'}}>
                <Grid item xs={12} sm={12} >
                    <div className="noticias">
                        <p className="title-noticias">
                            Inscrições abertas para a UI TECHnovation for girls
                        </p>
                        <a href="#" target="_blank" className="div-btn-inscricao">
                            <Button variant="contained" size="medium" className="btn-noticias">
                                Inscreva-se
                            </Button>
                        </a>
                    </div>
                </Grid>
            </Grid> */}
        </div>
    )
})