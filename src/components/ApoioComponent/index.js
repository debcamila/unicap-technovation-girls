
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import logoIcam from '../../static/images/icam.png';
import logo from '../../static/images/logo.png';
import logoUnicap from '../../static/images/unicap.jpg';
import "./style.css";


export default (function ApoioComponent() {
    return (
        <div className="apoio">
            <div className='container' style={{ marginBottom: '50px', marginTop: '50px' }}>

                <Typography className="title" variant="h4">
                    Apoio
                </Typography>

                <Grid container spacing={5} style={{marginTop:'30px'}}>
                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined">
                            <CardActionArea style={{ height: '100%' }}>
                                <CardContent style={{ textAlign: 'center', paddingTop: '20px' }}>
                                    <img style={{width: '100%', height:'180px'}}
                                        src={logoUnicap}
                                        alt="Universidade Católica de Pernambuco"
                                        title="Universidade Católica de Pernambuco"
                                    />

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined">
                            <CardActionArea style={{ height: '100%' }}>
                                <CardContent style={{ textAlign: 'center', paddingTop: '20px' }}>
                                    <img style={{width: '100%', height:'180px'}}
                                        src={logo}
                                        alt="Unicap Icam Tech School for Girls"
                                        title="Unicap Icam Tech School for Girls"
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined">
                            <CardActionArea style={{ height: '100%' }}>
                                <CardContent style={{ textAlign: 'center', paddingTop: '20px' }}>
                                    <img style={{width: '100%', height:'180px'}}
                                        src={logoIcam}
                                        alt="Unicap Icam Tech"
                                        title="Unicap Icam Tech"
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
})