
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cfc from '../../static/images/cfc.png';
import liceu_nobrega from '../../static/images/liceu-nobrega.png';
import unicas from '../../static/images/unicas.png';
import "./style.css";


export default (function ApoioComponent() {
    return (
        <div className="parceiros" id="parceiros">
            <div className='container' style={{ marginTop: '50px' }}>

                <Typography className="title-apoio" variant="h5">
                    Parceiros
                </Typography>

                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <img style={{width: 'auto', height:'180px'}}
                            src={cfc}
                            alt="Colégio Fazer Crescer"
                            title="Colégio Fazer Crescer"
                        />     
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <img style={{width: 'auto', height:'280px'}}
                            src={liceu_nobrega}
                            alt="Escola Liceu Nóbrega de Artes e Ofícios"
                            title="Escola Liceu Nóbrega de Artes e Ofícios"
                        />
                    </Grid>

                </Grid>

            </div>

            <div className='container' style={{ marginBottom: '30px', marginTop: '50px' }}>

                <Typography className="title-apoio" variant="h5">
                    Organização
                </Typography>

                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12}>
                        <img style={{width: '300px', height:'350px'}}
                            src={unicas}
                            alt="Coletivo Unicas - Mulheres na Ciência e Tecnologia da UNICAP"
                            title="Coletivo Unicas - Mulheres na Ciência e Tecnologia da UNICAP"
                        />

                    </Grid>
                </Grid>
            </div>
        </div>
    )
})