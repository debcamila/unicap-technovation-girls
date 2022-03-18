
import React from 'react';
import { Grid } from '@material-ui/core';
import sobre from '../../static/images/sobre.jpg';
import ComputerIcon from '@material-ui/icons/Computer';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CreateIcon from '@material-ui/icons/Create';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SearchIcon from '@material-ui/icons/Search';
import "./style.css";

export default (function AboutComponent() {
    return (
        <div className="about" id="Sobre">
            <Grid container spacing={5} style={{marginBottom: '25px'}}>

                <Grid item xs={12} sm={6}>
                    <img style={{ width: '100%', height: '100%' }}
                        src={sobre}
                        alt="Sobre o UNICAP ICAM Tech school for girls"
                        title="Sobre o UNICAP ICAM Tech school for girls"
                    />      
                </Grid>

                <Grid item xs={12} sm={6}>
                    <p className="title-sobre">
                        Sobre o UNICAP ICAM Tech school for girls
                    </p>
                    <p className="text-about" style={{ marginTop: '40px', textAlign: 'justify' }}>
                        A Unicap Icam (UI) Tech School for girls é uma iniciativa da UNICAP ICAM TECH para o incentivo e desenvolvimento de competências e habilidades nas meninas das escolas públicas e privadas e nas estudantes dos cursos de graduação da UNICAP nas área de STEM (Ciência, Tecnologia, Engenharia, Matemática). O objetivo da escola é capacitar e realizar mentorias para meninas de 8 a 17 anos no período de 3 (três) meses para participação do maior campeonato mundial de tecnologia e empreendedorismo feminino, o Technovation Girls.
                    </p>
                </Grid>
            </Grid>

            <Grid container spacing={5} style={{justifyContent: 'center'}}>
                <Grid item xs={12} sm={2}>
                    <SearchIcon fontSize="large" className="icons-about"/>
                    <p className="title-areas">Pesquisa</p>     
                </Grid>
                <Grid item xs={12} sm={2}>
                    <EmojiObjectsIcon fontSize="large" className="icons-about"/>
                    <p className="title-areas">Inovação</p>   
                </Grid>
                <Grid item xs={12} sm={2}>
                    <ComputerIcon fontSize="large" className="icons-about"/>
                    <p className="title-areas">Tecnologia</p>     
                </Grid>
                <Grid item xs={12} sm={2}>
                    <CreateIcon fontSize="large" className="icons-about"/>
                    <p className="title-areas">Criatividade</p>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <BusinessCenterIcon fontSize="large" className="icons-about"/>
                    <p className="title-areas">Empreendedorismo</p>     
                </Grid>
            </Grid>
        </div>
    )
})