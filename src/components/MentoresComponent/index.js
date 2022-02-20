
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
import andrea_maria from '../../static/images/andrea-maria.jpeg';
import michelle_tenca from '../../static/images/michelle-tenca.jpeg';
import liliane_fonseca from '../../static/images/liliane-fonseca.jpeg';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import lattes from '../../static/images/lattes.png'
import "./style.css";


export default (function MentoresComponent() {
    return (
        <>
        <div className="mentoras" id="Mentoras">
            <div className='container' style={{ marginTop: '50px' }}>

                <p className="title-mentoras">
                    Mentoras
                </p>

                <Grid container spacing={5} style={{marginTop:'30px', display: 'flex', justifyContent: 'flex-start'}}>
                    <Grid item xs={12} sm={4}>
                        <img style={{width: '200px', height:'200px'}}
                            src={alice_florencio}
                            alt="Alice Florencio"
                            title="Alice Florencio"
                        />
                        <p className="subtitle-mentoras">
                            Alice Florencio
                        </p>
                        <p className="formacao">Graduanda em Sistemas para Internet</p>
                        
                        <IconButton>
                            <a href="#" style={{textDecoration: 'none'}}>
                                <img src={lattes} style={{width: '1em', height: '1em'}} />
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="mailto:alice.00000830253@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                <MailIcon fontSize="medium" className="cor-icons" />
                            </a>
                        </IconButton>
                    </Grid>

                        <Grid item xs={12} sm={4}>
                            <img style={{width: '200px', height:'200px'}}
                                src={deborah_camila}
                                alt="Deborah Camila"
                                title="Deborah Camila"
                            />    
                            <p className="subtitle-mentoras">
                                Deborah Camila
                            </p>
                            <p className="formacao">Graduada em Ciência da Computação</p>
                            
                            <IconButton>
                                <a href="http://lattes.cnpq.br/7295801510740463" target="_blank" style={{textDecoration: 'none'}}>
                                    <img src={lattes} style={{width: '1em', height: '1em'}} />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:deborah.2016107554@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                        </Grid>

                        <Grid item xs={12} sm={4}> 
                            <img style={{width: '200px', height:'200px'}}
                                src={graziela_goncalves}
                                alt="Graziela de Oliveira"
                                title="Graziela de Oliveira"
                            />
                            <p className="subtitle-mentoras">
                                Graziela de Oliveira
                            </p>
                            <p className="formacao">Graduanda em Ciência da Computação</p>
                            
                            <IconButton>
                            <a href="#" style={{textDecoration: 'none'}}>
                                <img src={lattes} style={{width: '1em', height: '1em'}} />
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
                            <img style={{width: '200px', height:'200px'}}
                                src={maria_eduarda}
                                alt="Maria Eduarda Azenha"
                                title="Maria Eduarda Azenha"
                            />
                            <p className="subtitle-mentoras">
                                Maria Eduarda Azenha
                            </p>
                            <p className="formacao">Graduanda em Ciência da Computação</p>
                            
                            <IconButton>
                            <a href="#" style={{textDecoration: 'none'}}>
                                <img src={lattes} style={{width: '1em', height: '1em'}} />
                            </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:maria.00000829620@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                        </Grid>  

                    <Grid item xs={12} sm={4} style={{marginBottom: '50px'}}>
                            <img style={{width: '200px', height:'200px'}}
                                src={maria_carmo}
                                alt="Maria do Carmo"
                                title="Maria do Carmo"
                            />
                            <p className="subtitle-mentoras">
                                Maria do Carmo
                            </p>
                            <p className="formacao">Graduanda em Ciência da Computação</p>

                            <IconButton>
                            <a href="http://lattes.cnpq.br/2570083553998350" target="_blank" style={{textDecoration: 'none'}}>
                                <img src={lattes} style={{width: '1em', height: '1em'}} />
                            </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:maria.2020202380@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <img style={{width: '200px', height:'200px'}}
                                src={mariana_oliveira}
                                alt="Mariana Oliveira"
                                title="Mariana Oliveira"
                            />
                            <p className="subtitle-mentoras">
                                Mariana Oliveira
                            </p>
                            <p className="formacao">Graduanda em Engenharia da Complexidade</p>
                            
                            <IconButton>
                            <a href="http://lattes.cnpq.br/9723316617151972" target="_blank" style={{textDecoration: 'none'}}>
                                <img src={lattes} style={{width: '1em', height: '1em'}} />
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
                            <img style={{width: '200px', height:'200px'}}
                                src={marilia_vilar}
                                alt="Marília Vilar"
                                title="Marília Vilar"
                            />
                            <p className="subtitle-mentoras">
                                Marília Vilar
                            </p>
                            <p className="formacao">Graduanda em Sistemas para Internet</p>
                            
                            <IconButton>
                            <a href="http://lattes.cnpq.br/4926906845896556" target="_blank" style={{textDecoration: 'none'}}>
                                <img src={lattes} style={{width: '1em', height: '1em'}} />
                            </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:marilia.2020107087@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                            <img style={{width: '200px', height:'200px'}}
                                src={mayara_ribeiro}
                                alt="Mayara Ribeiro"
                                title="Mayara Ribeiro"
                            />
                            <p className="subtitle-mentoras">
                                Mayara Ribeiro
                            </p>
                            <p className="formacao">Graduanda em Sistemas para Internet</p>
                            
                            <IconButton>
                            <a href="#" style={{textDecoration: 'none'}}>
                                <img src={lattes} style={{width: '1em', height: '1em'}} />
                            </a>
                            </IconButton>
                            <IconButton>
                                <a href="mailto:mayara.2020107096@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                    <MailIcon fontSize="medium" className="cor-icons" />
                                </a>
                            </IconButton>
                    </Grid>

                    <Grid item xs={12} sm={4} style={{marginBottom: '50px'}}>
                            <img style={{width: '200px', height:'200px'}}
                                src={rayssa_muniz}
                                alt="Rayssa Muniz"
                                title="Rayssa Muniz"
                            />
                            <p className="subtitle-mentoras">
                                Rayssa Muniz
                            </p>
                            <p className="formacao">Graduanda em Ciência da Computação</p>
                            
                            <IconButton>
                            <a href="http://lattes.cnpq.br/6451134889757273" target="_blank" style={{textDecoration: 'none'}}>
                                <img src={lattes} style={{width: '1em', height: '1em'}} />
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
                <p className="title-mentoras">
                    Coordenação do Projeto
                </p>

                <Grid container spacing={5} style={{marginTop:'30px', display: 'flex', justifyContent: 'flex-start'}}>
                    <Grid item xs={12} sm={4}>
                        <img style={{width: 'auto', height:'200px'}}
                            src={andrea_maria}
                            alt="Andrea Maria"
                            title="Andrea Maria"
                        />
                        <p className="subtitle-mentoras">
                            Andrea Maria
                        </p>
                        <p className="formacao">Profa. do Curso de Ciência da Computação</p>
                        <IconButton>
                        <a href="http://lattes.cnpq.br/8974060133002427" target="_blank" style={{textDecoration: 'none'}}>
                            <img src={lattes} style={{width: '1em', height: '1em'}} />
                        </a>
                        </IconButton>
                        <IconButton>
                            <a href="mailto:andrea.ribeiro@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                <MailIcon fontSize="medium" className="cor-icons" />
                            </a>
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img style={{width: 'auto', height:'200px'}}
                            src={liliane_fonseca}
                            alt="Liliane Fonseca"
                            title="Liliane Fonseca"
                        />
                        <p className="subtitle-mentoras">
                            Liliane Fonseca
                        </p>
                        <p className="formacao">Profa. e Coord. do Curso Ciência da Computação</p>
                        <IconButton>
                        <a href="http://lattes.cnpq.br/9581301411261992" target="_blank" style={{textDecoration: 'none'}}>
                            <img src={lattes} style={{width: '1em', height: '1em'}} />                        </a>
                        </IconButton>
                        <IconButton>
                            <a href="mailto:liliane.fonseca@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                <MailIcon fontSize="medium" className="cor-icons" />
                            </a>
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img style={{width: 'auto', height:'200px'}}
                            src={michelle_tenca}
                            alt="Michelle Tenca"
                            title="Michelle Tenca"
                        />
                        <p className="subtitle-mentoras">
                            Michelle Tenca
                        </p>
                        <p className="formacao">Profa. do Curso de Ciência da Computação</p>
                        <IconButton>
                        <a href="http://lattes.cnpq.br/8738880419326166" target="_blank" style={{textDecoration: 'none'}}>
                            <img src={lattes} style={{width: '1em', height: '1em'}} />
                        </a>
                        </IconButton>
                        <IconButton>
                            <a href="mailto:michelle.tenca@unicap.br" target="_blank" style={{textDecoration: 'none'}}>
                                <MailIcon fontSize="medium" className="cor-icons" />
                            </a>
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </>
    )
})