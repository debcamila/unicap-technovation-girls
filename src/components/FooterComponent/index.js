
import React from 'react';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import "./style.css";

export default (function FooterComponent() {
    return (
        <div className="footer">
            <div className='container' style={{ marginBottom: '50px', marginTop: '50px' }}>

                <Grid container style={{ marginTop: '30px' }}>

                    <Grid item xs={12} sm={12} style={{marginTop: '35px'}}>
                        <p className="duvidas">
                            Dúvidas? Entre em contato conosco!
                            <br></br>
                            <br></br>
                            <a href="mailto:schoolforgirls@unicap.br" style={{textDecoration: 'none', color: '#fff'}}>
                                schoolforgirls@unicap.br
                            </a>
                            <div className = "icons-footer-div">
                                <div className="icons" >
                                    <IconButton>
                                        <a href="mailto:schoolforgirls@unicap.br" style={{textDecoration: 'none'}}>
                                            <MailIcon fontSize="large" className="icons-footer" />
                                        </a>
                                    </IconButton>
                                </div>
                            </div>
                        </p>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
})