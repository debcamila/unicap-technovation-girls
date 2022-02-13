
import React from 'react';
import ImageSlide from '../../static/images/banner.png';
import "./style.css";
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default (function SlideComponents() {
    return (
        <div className="slide">
            <img className="imagem"
                src={ImageSlide}
                alt="Imagem do slide Unicap Icam (UI) Tech School for girls"
                title="Imagem do slide Unicap Icam (UI) Tech School for girls"
            />
            
            <div className="noticias">
                <Typography className="title-noticias" variant="h6">
                    Inscrições abertas para a Unicap Icam (UI) Tech School for girls
                </Typography>
            </div>

            <div className="div-noticias">
                <a href="#" target="_blank" className="link-btn-instagram">
                    <Button variant="contained" size="large" className="btn-noticias" >
                        Inscreva-se
                    </Button>
                </a>
            </div>

        </div>
    )
})