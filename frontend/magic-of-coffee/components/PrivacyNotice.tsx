import React from 'react';
import './PrivacyNotice.css';  
import { useTranslations } from 'next-intl';
const PrivacyNotice: React.FC = () => {
    const t = useTranslations();  
    return (
        <div className={'container'}>
            <h1 className={'title'}>{t('priv notice')}</h1>
            <p className={'content'}>
                {t('cookie1')}
            </p>
            <p className={'content'}>
                {t('cookie2')}
            </p>
        </div>
    );
};

export default PrivacyNotice;
