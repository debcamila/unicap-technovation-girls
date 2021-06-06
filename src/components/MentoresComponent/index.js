
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import mentora1 from '../../static/images/beatriz-ramos.jpeg';
import mentora2 from '../../static/images/catherine-aussourd.jpeg';
import mentora3 from '../../static/images/beatriz-ramos.jpeg';
import mentora4 from '../../static/images/izabella-esther.jpeg';
import mentora5 from '../../static/images/maria-carmo.jpeg';
import mentora6 from '../../static/images/marilia-vilar.jpeg';
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
                        <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                            src={mentora1}
                            alt="Beatriz Ramos"
                            title="Beatriz Ramos"
                        />
                        <Typography className="subtitle" variant="h6">
                            Beatriz Ramos
                        </Typography>
                    </Grid>

                        <Grid item xs={12} sm={4}>
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={mentora2}
                                alt="Catherine Aussourd"
                                title="Catherine Aussourd"
                            />    
                            <Typography className="subtitle" variant="h6">
                                Catherine Aussourd
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}> 
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={mentora3}
                                alt="Hannatty Mendonça"
                                title="Hannatty Mendonça"
                            />
                            <Typography className="subtitle" variant="h6">
                                Hannatty Mendonça
                            </Typography>
                        </Grid>
                </Grid>

                <Grid container spacing={5} style={{marginTop:'30px'}}>
                    <Grid item xs={12} sm={4} style={{marginBottom: '50px'}}>
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={mentora4}
                                alt="Izabella Esther"
                                title="Izabella Esther"
                            />
                            <Typography className="subtitle" variant="h6">
                                Izabella Esther
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={mentora5}
                                alt="Maria do Carmo"
                                title="Maria do Carmo"
                            />
                            <Typography className="subtitle" variant="h6">
                                Maria do Carmo
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={mentora6}
                                alt="Marília Vilar"
                                title="Marília Vilar"
                            />
                            <Typography className="subtitle" variant="h6">
                                Marília Vilar
                            </Typography>
                        </Grid>
                </Grid>
            </div>
        </div>
    )
})