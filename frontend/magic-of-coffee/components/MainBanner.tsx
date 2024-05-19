'use client';
import React from 'react';
import Button from './Button';
import './MainBanner.css';
import { useTranslations } from 'next-intl';

const MainBanner: React.FC = () => {
    const t = useTranslations();  
    

    return (
    <div className="main-banner">
        <h1>{t('h1banner')}</h1>
        <h2>{t('coffee')}</h2>
        <p>{t('pbanner')}</p>
        <Button text={t('ordernow')} />
    </div>
    )
};

export default MainBanner;
