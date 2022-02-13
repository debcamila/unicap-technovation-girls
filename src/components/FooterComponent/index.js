
import React from 'react';
import { Grid } from '@material-ui/core';
import logo from '../../static/images/logo.png';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./style.css";

export default (function FooterComponent() {
    return (
        <div className="footer">
            <div className='container' style={{ marginBottom: '50px', marginTop: '50px' }}>

                <Grid container style={{ marginTop: '30px' }}>
                    
                    <Grid item xs={12} sm={6}>
                        <img style={{width: '280px', height:'200px'}}
                            src={logo}
                            alt="Unicap Icam (UI) Tech School for girls"
                            title="Unicap Icam (UI) Tech School for girls"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} style={{marginTop: '35px'}}>
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
                                    <IconButton>
                                        <a href="https://www.instagram.com/coletivo.unicas/" style={{textDecoration: 'none'}}>
                                            <InstagramIcon fontSize="large" className="icons-footer" />
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