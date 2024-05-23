import React from 'react';
import './Movie.css';
import { useTranslations } from 'next-intl';
import { Button } from '@mui/material';
const Movie = () => {
    const t = useTranslations();  
    return (
        <div className='video-container'>
            <div className="overlay"></div>
            <video src="/promo.mp4" controls autoPlay loop muted>
                Your browser does not support the video tag.
            </video>
            <div className="video-content">
                <h1>{t('welcm')}</h1>
                <p>{t('welcm2')}</p>
                <Button className="button" component="a" href="/products" id="buy-button">{t('buy')}</Button>
                <Button className="button" component="a" href="/about" id="about-us-button">{t('about')}</Button>
            </div>
        </div>
    )
};

export default Movie;
