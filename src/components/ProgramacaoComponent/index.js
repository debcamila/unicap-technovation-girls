
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import imgProgramacao1 from '../../static/images/programacao1.png';
import imgProgramacao2 from '../../static/images/programacao2.png';
import imgProgramacao3 from '../../static/images/programacao3.png';
import "./style.css";


export default (function ProgramacaoComponent() {
    return (
        <div className="programacao">
            <div className='container' style={{ marginBottom: '50px', marginTop: '50px' }}>

                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} >
                        <div>
                            <Typography className="title" variant="h4">
                                Programação
                            </Typography>
                            <Typography className="subtitle" variant="h6">
                                Confira nossa programação de ensino para a Unicap Technovation for Girls
                            </Typography>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4} >
                        <Card variant="outlined">
                            <CardContent>
                                <img style={{width: '100%', height:'100%'}}
                                    src={imgProgramacao1}
                                    alt="Icam"
                                    title="Icam"
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Card variant="outlined">
                            <CardContent>
                                <img style={{width: '100%', height:'100%'}}
                                    src={imgProgramacao3}
                                    alt="Icam"
                                    title="Icam"
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Card variant="outlined">
                            <CardContent >
                                <img style={{width: '100%', height:'100%'}}
                                    src={imgProgramacao2}
                                    alt="Icam"
                                    title="Icam"
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
})