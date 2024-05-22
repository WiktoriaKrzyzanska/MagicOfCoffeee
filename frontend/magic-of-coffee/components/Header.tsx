'use client';
import React from 'react';
import './Header.css';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const t = useTranslations();  
    const router = useRouter();

    const handleLanguageChange = () => {
        const nextLocale = router.locale === 'en-US' ? 'pl' : 'en-US';
        router.push(router.pathname, router.asPath, { locale: nextLocale });
    };
    return (
        <div className="header">
            <Link href="/"><div className="logo">{t('name')}</div></Link>
            <nav className="nav">
                <Link href="/">{t('home')}</Link>
                <Link href="/map">{t('map')}</Link>
                <Link href="/products">{t('products')}</Link>
                <Link href="/about">{t('about')}</Link>
                <Link href="/contact">{t('contact')}</Link>
            </nav>
            <div className="auth">
                <Link href="/login" className="auth-link">{t('signin')}</Link>
                <Link href="/register" className="auth-link signup">{t('signup')}</Link>
            </div>
           <button onClick={handleLanguageChange} className="lang-toggle">
                {router.locale === 'en-US' ? t('lang') : t('lang')}
            </button>
        </div>
    );
};

export default Header;

