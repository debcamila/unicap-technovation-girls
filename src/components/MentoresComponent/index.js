
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import logo from '../../static/images/logo.png';
import "./style.css";


export default (function MentoresComponent() {
    return (
        <div className="mentores">
            <div className='container' style={{ marginTop: '50px' }}>

                <Typography className="title" variant="h4">
                    Mentores
                </Typography>
                <Typography className="subtitle" variant="h6">
                    Conheça nosso time incrível de pessoas dedicadas a ajudar as meninas nos desafios
                </Typography>

                <Grid container spacing={5} style={{marginTop:'30px'}}>
                    <Grid item xs={12} sm={4}>
                            <Card variant="outlined">
                                <CardActionArea style={{ height: '100%' }}>
                                    <CardContent style={{ textAlign: 'center', paddingTop: '20px' }}>
                                        <img style={{width: '100%', height:'180px'}}
                                            src={logo}
                                            alt="Mentora"
                                            title="Mentora"
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
                                            alt="Mentora"
                                            title="Mentora"
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
                                            alt="Mentora"
                                            title="Mentora"
                                        />
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                </Grid>

                <Grid container spacing={5} style={{marginTop:'30px'}}>
                    <Grid item xs={12} sm={4} style={{marginBottom: '50px'}}>
                            <Card variant="outlined">
                                <CardActionArea style={{ height: '100%' }}>
                                    <CardContent style={{ textAlign: 'center', paddingTop: '20px' }}>
                                        <img style={{width: '100%', height:'180px'}}
                                            src={logo}
                                            alt="Mentora"
                                            title="Mentora"
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
                                            alt="Mentora"
                                            title="Mentora"
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
                                            alt="Mentora"
                                            title="Mentora"
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