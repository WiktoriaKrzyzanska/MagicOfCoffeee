'use client';
import React, { useEffect, useState } from 'react';
import './Header.css';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header: React.FC = () => {
    const t = useTranslations();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLanguageChange = () => {
        const nextLocale = router.locale === 'en-US' ? 'pl' : 'en-US';
        router.push(router.pathname, router.asPath, { locale: nextLocale });
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        router.push('/');
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
                {isAuthenticated ? (
                    <>
                        <Link href="/checkout" className="auth-link">
                            <ShoppingBasketIcon style={{ color: 'inherit', fontSize: 'large' }} />
                        </Link>
                        <button onClick={handleLogout} className="auth-link">{t('logout')}</button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="auth-link">{t('signin')}</Link>
                        <Link href="/register" className="auth-link signup">{t('signup')}</Link>
                    </>
                )}
            </div>
            <button onClick={handleLanguageChange} className="lang-toggle">
                {router.locale === 'en-US' ? t('lang') : t('lang')}
            </button>
        </div>
    );
};

export default Header;
