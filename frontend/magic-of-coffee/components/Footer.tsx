import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Footer.css'

const Footer:React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="brand-section">
        <Image src="/images/bean-img.png" alt="Beans" width={100} height={100} />
        <p>COFFEE MAGIC</p>
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
          <h4>About</h4>
          <Link href="/">Go up</Link>
          <Link href="/news">News</Link>
          <Link href="/help">Help & Support</Link>
        </div>
        <div className="links-column">
          <h4>Company</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of service</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
      <div className="contact-section">
        <h4>Contact Us</h4>
        <p>ul. Olszynkowa 74,<br/>Racibórz 47-406, Poland</p>
        <p>+48 444 333 222</p>
        <p>magicofcoffee@mail.com</p>
        <p>www.magicofcoffee.com</p>
      </div>
    </div>
  </footer>
);

export default Footer;
