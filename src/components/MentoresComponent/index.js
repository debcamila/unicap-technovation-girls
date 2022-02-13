
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import alice_florencio from '../../static/images/alice-florencio.png';
import deborah_camila from '../../static/images/deborah-camila.png';
import graziela_goncalves from '../../static/images/graziela-oliveira.png';
import maria_eduarda from '../../static/images/maria-eduarda.png';
import maria_carmo from '../../static/images/maria-carmo.jpeg';
import mariana_oliveira from '../../static/images/mariana-oliveira.png';
import marilia_vilar from '../../static/images/marilia-vilar.jpeg';
import mayara_ribeiro from '../../static/images/mayara-ribeiro.jpeg';
import rayssa_muniz from '../../static/images/rayssa-muniz.png';
import user from '../../static/images/user.png';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./style.css";


export default (function MentoresComponent() {
    return (
        <>
        <div className="mentoras" id="mentoras">
            <div className='container' style={{ marginTop: '50px' }}>

                <Typography className="title-mentoras" variant="h5">
                    Mentoras
                </Typography>
                <Typography className="subtitle-mentoras" variant="p">
                    Conheça nossa equipe de pessoas mentoras dedicadas a ajudar as estudantes durante a competição
                </Typography>

                <Grid container spacing={5} style={{marginTop:'30px', display: 'flex', justifyContent: 'flex-start'}}>
                    <Grid item xs={12} sm={4}>
                        <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                            src={alice_florencio}
                            alt="Alice Florencio"
                            title="Alice Florencio"
                        />
                        <Typography className="subtitle" variant="h6">
                            Alice Florencio
                        </Typography>
                        <p>Graduanda em Sistemas para Internet</p>
                        
                        <IconButton>
                            <a href="#" target="_blank" style={{textDecoration: 'none'}}>
                                <LinkedInIcon fontSize="medium" className="cor-icons" />
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="#" target="_blank" style={{textDecoration: 'none'}}>
                                <GitHubIcon fontSize="medium" className="cor-icons" />
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="mailto:alice.00000830253@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                <MailIcon fontSize="medium" className="cor-icons" />
                            </a>
                        </IconButton>
                    </Grid>

                        <Grid item xs={12} sm={4}>
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={deborah_camila}
                                alt="Deborah Camila"
                                title="Deborah Camila"
                            />    
                            <Typography className="subtitle" variant="h6">
                                Deborah Camila
                            </Typography>
                            <p>Graduada em Ciência da Computação</p>
                            
                            <IconButton>
                                <a href="https://www.linkedin.com/in/debcamila/" target="_blank" style={{textDecoration: 'none'}}>
                                    <LinkedInIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href="https://github.com/debcamila" target="_blank" style={{textDecoration: 'none'}}>
                                    <GitHubIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:deborah.2016107554@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                        </Grid>

                        <Grid item xs={12} sm={4}> 
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={graziela_goncalves}
                                alt="Graziela de Oliveira"
                                title="Graziela de Oliveira"
                            />
                            <Typography className="subtitle" variant="h6">
                                Graziela de Oliveira
                            </Typography>
                            <p>Graduanda em Ciência da Computação</p>
                            
                            <IconButton>
                            <a href="https://www.linkedin.com/in/graziela-oliveira-8a41a4224" target="_blank" style={{textDecoration: 'none'}}>
                                <LinkedInIcon fontSize="medium" className="cor-icons" />
                            </a>
                            </IconButton>
                            <IconButton>
                                <a href="#" target="_blank" style={{textDecoration: 'none'}}>
                                    <GitHubIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:graziela.00000032614@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                        </Grid>
                </Grid>

                <Grid container spacing={5} style={{marginTop:'30px', display: 'flex', justifyContent: 'flex-end'}}>
                    <Grid item xs={12} sm={4}> 
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={maria_eduarda}
                                alt="Maria Eduarda Azenha"
                                title="Maria Eduarda Azenha"
                            />
                            <Typography className="subtitle" variant="h6">
                                Maria Eduarda Azenha
                            </Typography>
                            <p>Graduanda em Ciência da Computação</p>
                            
                            <IconButton>
                            <a href="https://www.linkedin.com/in/eduarda-ap/" target="_blank" style={{textDecoration: 'none'}}>
                                <LinkedInIcon fontSize="medium" className="cor-icons" />
                            </a>
                            </IconButton>
                            <IconButton>
                                <a href="#" target="_blank" style={{textDecoration: 'none'}}>
                                    <GitHubIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:maria.00000829620@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                        </Grid>  

                    <Grid item xs={12} sm={4} style={{marginBottom: '50px'}}>
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={maria_carmo}
                                alt="Maria do Carmo"
                                title="Maria do Carmo"
                            />
                            <Typography className="subtitle" variant="h6">
                                Maria do Carmo
                            </Typography>
                            <p>Graduanda em Ciência da Computação</p>

                            <IconButton>
                            <a href="https://www.linkedin.com/in/mariadocarmoalcantara/" target="_blank" style={{textDecoration: 'none'}}>
                                <LinkedInIcon fontSize="medium" className="cor-icons" />
                            </a>
                            </IconButton>
                            <IconButton>
                                <a href="#" target="_blank" style={{textDecoration: 'none'}}>
                                    <GitHubIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:maria.2020202380@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={mariana_oliveira}
                                alt="Mariana Oliveira"
                                title="Mariana Oliveira"
                            />
                            <Typography className="subtitle" variant="h6">
                                Mariana Oliveira
                            </Typography>
                            <p>Graduanda em Engenharia da Complexidade</p>
                            
                            <IconButton>
                            <a href="https://www.linkedin.com/in/mariana-oliveira-b84a49211/" target="_blank" style={{textDecoration: 'none'}}>
                                <LinkedInIcon fontSize="medium" className="cor-icons" />
                            </a>
                            </IconButton>
                            <IconButton>
                                <a href="#" target="_blank" style={{textDecoration: 'none'}}>
                                    <GitHubIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                        </Grid> 
                </Grid>

                <Grid container spacing={5} style={{marginTop:'30px', justifyContent: 'center'}}>
                    <Grid item xs={12} sm={4}>
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={marilia_vilar}
                                alt="Marília Vilar"
                                title="Marília Vilar"
                            />
                            <Typography className="subtitle" variant="h6">
                                Marília Vilar
                            </Typography>
                            <p>Graduanda em Sistemas para Internet</p>
                            
                            <IconButton>
                            <a href="https://www.linkedin.com/in/mariliavilar/" target="_blank" style={{textDecoration: 'none'}}>
                                <LinkedInIcon fontSize="medium" className="cor-icons" />
                            </a>
                            </IconButton>
                            <IconButton>
                                <a href="https://github.com/mariliavilar" target="_blank" style={{textDecoration: 'none'}}>
                                    <GitHubIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:marilia.2020107087@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={mayara_ribeiro}
                                alt="Mayara Ribeiro"
                                title="Mayara Ribeiro"
                            />
                            <Typography className="subtitle" variant="h6">
                                Mayara Ribeiro
                            </Typography>
                            <p>Graduanda em Sistemas para Internet</p>
                            
                            <IconButton>
                            <a href="https://www.linkedin.com/in/mayara-ribeiro-/" target="_blank" style={{textDecoration: 'none'}}>
                                <LinkedInIcon fontSize="medium" className="cor-icons" />
                            </a>
                            </IconButton>
                            <IconButton>
                                <a href="#" target="_blank" style={{textDecoration: 'none'}}>
                                    <GitHubIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:mayara.2020107096@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                    </Grid>

                    <Grid item xs={12} sm={4} style={{marginBottom: '50px'}}>
                            <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                                src={rayssa_muniz}
                                alt="Rayssa Muniz"
                                title="Rayssa Muniz"
                            />
                            <Typography className="subtitle" variant="h6">
                                Rayssa Muniz
                            </Typography>
                            <p>Graduanda em Ciência da Computação</p>
                            
                            <IconButton>
                            <a href="https://www.linkedin.com/in/rayssamuniz/" target="_blank" style={{textDecoration: 'none'}}>
                                <LinkedInIcon fontSize="medium" className="cor-icons" />
                            </a>
                            </IconButton>
                            <IconButton>
                                <a href="#" target="_blank" style={{textDecoration: 'none'}}>
                                    <GitHubIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:rayssa.00000829609@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                        </Grid>
                </Grid> 
            </div>
        </div>

        <div className='container' style={{ marginTop: '50px' }}>
                <Typography className="title-mentoras" variant="h5">
                    Coordenação e Suporte
                </Typography>
                <Typography className="subtitle-mentoras" variant="p">
                    Conheça nossa equipe de professoras dedicadas a coordenar e apoiar nossas mentoras
                </Typography>

                <Grid container spacing={5} style={{marginTop:'30px', display: 'flex', justifyContent: 'flex-start'}}>
                    <Grid item xs={12} sm={4}>
                        <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                            src={user}
                            alt="Andrea Maria"
                            title="Andrea Maria"
                        />
                        <Typography className="subtitle" variant="h6">
                            Andrea Maria
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                            src={user}
                            alt="Michelle Tenca"
                            title="Michelle Tenca"
                        />
                        <Typography className="subtitle" variant="h6">
                            Michelle Tenca
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img style={{width: '200px', height:'200px', borderRadius:'100%'}}
                            src={user}
                            alt="Liliane Fonseca"
                            title="Liliane Fonseca"
                        />
                        <Typography className="subtitle" variant="h6">
                            Liliane Fonseca
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    )
})