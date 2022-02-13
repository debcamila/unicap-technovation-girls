
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import SliderComponent from '../SliderComponent';
import programacao1 from  '../../static/images/programacao1.png';
import programacao2 from  '../../static/images/programacao2.png';
import programacao3 from  '../../static/images/programacao3.png';
import programacao4 from  '../../static/images/programacao4.png';
import programacao5 from  '../../static/images/programacao5.png';
import programacao6 from  '../../static/images/programacao6.png';
import "./style.css";


export default (function ProgramacaoComponent() {
    return (
        <div className="programacao" id="programacao">
            <div className='container' style={{ marginBottom: '50px', marginTop: '50px' }}>

                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} >
                        <div>
                            <Typography className="title-programacao" variant="h5">
                                Programação
                            </Typography>
                            <p className="subtitle-programacao">
                                Confira nossa programação de ensino para a Unicap Icam (UI) Tech School for girls
                            </p>
                        </div>
                    </Grid>
                </Grid>

                <SliderComponent images={[programacao1,programacao3,programacao2, programacao4, programacao5, programacao6]}  productAmount={3}/>

            </div>
        </div>
    )
})