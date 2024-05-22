import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Footer.css'
import { useTranslations } from 'next-intl';
const Footer:React.FC = () => {
  const t = useTranslations();  
  return(
  <footer className="footer">
    <div className="footer-content">
      <div className="brand-section">
        <Image src="/images/bean-img.png" alt="Beans" width={100} height={100} />
        <p>{t('foottitle')}</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </div>
      <div className="links-section">
        <div className="links-column">
          <h4>{t('about')}</h4>
          <Link href="/">{t('up')}</Link>
          <Link href="/help">{t('hns')}</Link>
        </div>
        <div className="links-column">
          <h4>{t('comp')}</h4>
          <Link href="/privacy">{t('pp')}</Link>
          <Link href="/terms">{t('terms')}</Link>
          <Link href="/pricing">{t('pricing')}</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
      <div className="contact-section">
        <h4>{t('contact')}</h4>
        <p>ul. Olszynkowa 74,<br/>Racibórz 47-406, {t('pl')}</p>
        <p>+48 444 333 222</p>
        <p>magia.kway.magic.of.coffee@mail.com</p>
        <p>www.magicofcoffee.com</p>
      </div>
    </div>
  </footer>
  )
};

export default Footer;
