import React from 'react';
import { hasCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import './CookiesConsent.css'; 
import { useTranslations } from 'next-intl';
export default function CookiesConsent() {
    const [showConsent, setShowConsent] = React.useState(false);
    const t = useTranslations(); 
    React.useEffect(() => {
        setShowConsent(!hasCookie('localConsent'));
    }, []);

    const acceptCookie = () => {
        setCookie('localConsent', 'true', { path: '/' });
        setShowConsent(false);
    };

    if (!showConsent) {
        return null;
    }

    return (
        <div className="cookie-consent-container">
            <div className="cookie-consent-overlay"></div>
            <div className="cookie-consent-box">
                <p className="cookie-consent-text">
                {t('cookie')}<Link href="/privacy-policy">{t('cookienot')}</Link>.
                </p>
                <button onClick={acceptCookie} className="accept-button">
                {t('cookieacc')}
                </button>
            </div>
        </div>
    );
}
