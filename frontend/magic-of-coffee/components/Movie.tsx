import React from 'react';
import './Movie.css';
import { useTranslations } from 'next-intl';
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
                <button className="button" id="buy-button">{t('buy')}</button>
                <button className="button" id="about-us-button">{t('about')}</button>
            </div>
        </div>
    )
};

export default Movie;
