import React from 'react';
import { hasCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import './CookiesConsent.css'; 

export default function CookiesConsent() {
    const [showConsent, setShowConsent] = React.useState(false);

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
                    Our website and partners use cookies and similar technologies to improve the functionality of the site, personalize content, analyze your use of the site and show you personalized ads. We won't set these cookies unless you enable them. You can change your mind at any time and learn more on the cookies used by us and our partners by clicking our <Link href="/privacy-policy">Cookie Notice</Link>.
                </p>
                <button onClick={acceptCookie} className="accept-button">
                    Accept All Cookies
                </button>
            </div>
        </div>
    );
}
