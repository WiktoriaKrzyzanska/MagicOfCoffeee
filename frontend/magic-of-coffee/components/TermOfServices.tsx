import React from 'react';
import './PrivacyNotice.css';  
import { useTranslations } from 'next-intl';
const TermOfServices: React.FC = () => {
    const t = useTranslations(); 
    return (
        <div className={'container'}>
            <h1 className={'title'}>{t('terms')}</h1>
            <p className={'content'}>
            {t('content1')}
            </p>
            <p className={'content'}>
            {t('content2')}
            </p>
        </div>
    );
};

export default TermOfServices;
