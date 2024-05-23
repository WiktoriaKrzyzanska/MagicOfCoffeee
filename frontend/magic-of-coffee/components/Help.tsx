import React from 'react';
import './PrivacyNotice.css';  
import { useTranslations } from 'next-intl';
const Help: React.FC = () => {
    const t = useTranslations();
    return (
        <div className={'container'}>
            <h1 className={'title'}>{t('hns')}</h1>
            <p className={'content'}>
            {t('help1')}</p>
            <p className={'content'}>
            {t('help2')}</p>
            <p className={'content'}>
            {t('help3')}</p>
            <p className={'content'}>
            {t('help4')}</p>
            <p className={'content'}>
            {t('help5')}
            {t('helpNumber')}
            </p>
        </div>
    );
};

export default Help;
