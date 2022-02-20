import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import cfc from '../../static/images/cfc.png';
import liceu_nobrega from '../../static/images/liceu-nobrega.png';
import "./style.css";


export default (function ApoioComponent() {
    return (
        <div className="parceiros" id="Parceiros">
            <div className='container' style={{ marginTop: '80px', marginBottom: '50px' }}>

                <p className="title-apoio">
                    Parceiros
                </p>

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
        </div>
    )
})