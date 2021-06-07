
import React from 'react';
import ImageSlide from '../../static/images/banner.png';
import "./style.css";
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default (function SlideComponents() {
    return (
        <div className="slide">
            <a href="" >
                <img className="imagem"
                    src={ImageSlide}
                    alt="Imagem do slide"
                    title="Imagem do slide"
                />
            </a>
            <div className="noticias">
                <Typography className="title-noticias" variant="h6">
                    Incrições abertas para a Unicap Icam Tech School for Girls
                </Typography>
            </div>

            <div className="div-noticias">
                <a href="https://forms.gle/Yjcr3yC45wuZ3fAL7" target="_blank" className="link-btn-instagram">
                    <Button variant="contained" size="large" className="btn-noticias" >
                        Inscreva-se
                    </Button>
                </a>
            </div>

        </div>
    )
})