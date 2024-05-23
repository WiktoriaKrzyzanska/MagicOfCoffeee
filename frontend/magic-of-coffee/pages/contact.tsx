import React, { useState } from 'react';
import Layout from '../app/layout';
import Header from "@/components/Header";
import '../components/Contact.css'
import Footer from '@/components/Footer';
import CookiesConsent from '@/components/CookiesConsent';
import { useTranslations } from 'next-intl';
const ContactUs: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const t = useTranslations();  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
        });

        const data = await res.json();

        if (res.status === 200) {
            setStatus(t('emailSent'));
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } else {
            setStatus(t('emailError') + data.error);
        }
    };

    return (
        <Layout>
            <Header />
            <div className="contact-us-container">
                <div className="contact-details">
                    <h2>{t('contactInformation')}</h2>
                    <ul>
                        <li> {t('callUs')}</li>
                        <li> {t('location')}</li>
                        <li> {t('businessHours')}</li>
                    </ul>
                </div>
                <div className="contact-form">
                    <h2>{t('contactUs')}</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder={t('enterName')}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder={t('enterEmail')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder={t('enterSubject')}
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder={t('yourMessage')}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit">{t('submit')}</button>
                    </form>
                    {status && <p>{status}</p>}
                </div>
            </div>

            <Footer />
            <CookiesConsent />
        </Layout>
    );
};

export default ContactUs;
export async function getStaticProps(context: { locale: any; }) {
    return {
      props: {
        messages: (await import(`../messeges/${context.locale}.json`)).default
      }
    };
  }