
import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import sobre from '../../static/images/sobre.png';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import ComputerIcon from '@material-ui/icons/Computer';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CreateIcon from '@material-ui/icons/Create';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import "./style.css";

export default (function AboutComponent() {
    return (
        <div className="about" id="sobre">
            <Grid container spacing={5}>

                <Grid item xs={12} sm={6}>
                    <img style={{ width: '100%', height: '100%' }}
                        src={sobre}
                        alt="Sobre o programa da Unicap Icam (UI) Tech School for girls"
                        title="Sobre o programa da Unicap Icam (UI) Tech School for girls"
                    />      
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography className="title-sobre" variant="h5">
                        Sobre o programa
                    </Typography>
                    <p className="text-about" style={{ marginTop: '40px', textAlign: 'justify' }}>
                        A Unicap Icam (UI) Tech School for girls é uma iniciativa da UNICAP ICAM TECH para o incentivo e desenvolvimento de competências e habilidades nas meninas das escolas públicas e privadas e nas estudantes dos cursos de graduação da UNICAP nas área de STEM (Ciência, Tecnologia, Engenharia, Matemática). O objetivo da escola é capacitar e realizar mentorias para meninas de 8 a 17 anos no período de 3 (três) meses para participação do maior campeonato mundial de tecnologia e empreendedorismo feminino, o Technovation Girls.
                    </p>
                </Grid>
            </Grid>

            <Grid container spacing={5}>
                <Grid item xs={12} sm={3}>
                    <Card variant="outlined" style={{padding: '10px'}}>
                        <CardActionArea style={{ height: '100%' }}>
                            <CardContent style={{ textAlign: 'center', paddingTop: '20px' }}>
                                <EmojiObjectsIcon fontSize="large" className="icons-about"/>
                                <h2 style={{color: '#351B69'}}>Inovação</h2>
                                <p>Compartilhe suas ideias e construa aplicativos inovadores.</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card variant="outlined" style={{padding: '10px'}}>
                        <CardActionArea style={{ height: '100%' }}>
                            <CardContent style={{ textAlign: 'center', paddingTop: '20px' }}>
                                <ComputerIcon fontSize="large" className="icons-about"/>
                                <h2 style={{color: '#351B69'}}>Tecnologia</h2>
                                <p>Use a tecnologia como ferramenta para dar vida aos seus projetos.</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card variant="outlined" style={{padding: '10px'}}>
                        <CardActionArea style={{ height: '100%' }}>
                            <CardContent style={{ textAlign: 'center', paddingTop: '20px' }}>
                                <CreateIcon fontSize="large" className="icons-about"/>
                                <h2 style={{color: '#351B69'}}>Criatividade</h2>
                                <p>Use a criatividade para resolver problemas do mundo real.</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card variant="outlined" style={{padding: '10px'}}>
                        <CardActionArea style={{ height: '100%' }}>
                            <CardContent style={{ textAlign: 'center', paddingTop: '20px' }}>
                                <BusinessCenterIcon fontSize="large" className="icons-about"/>
                                <h2 style={{color: '#351B69'}}>Empreendedorismo</h2>
                                <p>Transforme seus aplicativos em negócios e aprenda sobre liderança.</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
})