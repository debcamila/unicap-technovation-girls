
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import SliderComponent from '../SliderComponent';
import programacao1 from  '../../static/images/programacao1.png';
import programacao2 from  '../../static/images/programacao2.png';
import programacao3 from  '../../static/images/programacao3.png';
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

                <SliderComponent images={[programacao1,programacao3,programacao2]}  productAmount={3}/>

            </div>
        </div>
    )
})