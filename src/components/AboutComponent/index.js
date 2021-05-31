
import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import logoAbout from '../../static/images/about.png';
import Button from '@material-ui/core/Button';
import "./style.css";

export default (function AboutComponent() {
    return (
        <div className="about">
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                    <Typography className="title" variant="h5" style={{ fontWeight: '900' }}>
                        UNICAP TECHNOVATION FOR GIRLS
                    </Typography>
                    <Typography className="text-about" style={{ marginTop: '40px' }}>
                        Em 2021, será realizada a 1ª edição da Unicap technovation for Girls. O objetivo da escola é ensinar meninas de 10 a 18 anos a desenvolverem um protótipo de um aplicativo de celular, partindo de um problema do mundo real que elas desejam solucionar. Durante a jornada, as meninas irão desenvolver várias habilidades como, <strong>resolução de problemas</strong>, <strong>programação</strong>, <strong>empreendedorismo</strong> e <strong>liderança</strong>. No final, espera-se que os projetos desenvolvidos na escola sejam apresentados no Technovation Girls, a maior competição para meninas do mundo inteiro.
                    </Typography>
                    <br></br>
                    <Typography style={{ textAlign: 'left' }}>
                        E sabe o mais bacana? É tudo de GRAÇA!
                    </Typography>

                    <div className="div-instagram">
                        <a href="#" className="link-btn-instagram">
                            <Button variant="contained" size="large" className="btn-noticias">
                                Nos acompanhe no instagram
                            </Button>
                        </a>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <img style={{ width: '100%', height: '100%' }}
                        src={logoAbout}
                        alt="Ideação, Programação, Empreendedorismo, Pitch"
                        title="Ideação, Programação, Empreendedorismo, Pitch"
                    />      
                </Grid>
            </Grid>
        </div>
    )
})