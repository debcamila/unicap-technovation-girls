
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import logo from '../../static/images/logo.png';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./style.css";

export default (function FooterComponent() {
    return (
        <div className="footer">
            <div className='container' style={{ marginBottom: '50px', marginTop: '50px' }}>

                <Grid container style={{ marginTop: '30px' }}>
                    
                    <Grid item xs={12} sm={6}>
                        <img style={{width: '200px', height:'124px'}}
                            src={logo}
                            alt="Unicap Icam Tech School for Girls"
                            title="Unicap Icam Tech School for Girls"
                        />
                        <div className = "icons-footer-div">
                            <div className="icons" >
                                <IconButton>
                                    <a href="#" style={{textDecoration: 'none'}}>
                                        <FacebookIcon fontSize="large" className="icons-footer" />
                                    </a>
                                </IconButton>
                                <IconButton>
                                    <a href="#" style={{textDecoration: 'none'}}>
                                        <TwitterIcon fontSize="large" className="icons-footer" />
                                    </a>
                                </IconButton>
                                <IconButton>
                                    <a href="#" style={{textDecoration: 'none'}}>
                                        <InstagramIcon fontSize="large" className="icons-footer" />
                                    </a>
                                </IconButton>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{marginTop: '35px'}}>
                        <Typography className="duvidas" variant="p">
                            DÚVIDAS? FALE CONOSCO!
                            <br></br>
                            <br></br>
                            <a href="mailto:unicap.technovation.girls@unicap.br" style={{textDecoration: 'none', color: '#fff'}}>
                                unicap.technovation.girls@unicap.br
                            </a>
                        </Typography>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
})