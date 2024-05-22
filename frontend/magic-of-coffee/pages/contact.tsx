import React, { useState } from 'react';
import Layout from '../app/layout';
import Header from "@/components/Header";
import '../components/Contact.css'
import Footer from '@/components/Footer';
import CookiesConsent from '@/components/CookiesConsent';

const ContactUs: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [status, setStatus] = useState<string>('');

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
            setStatus('Email sent successfully!');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } else {
            setStatus('Error sending email: ' + data.error);
        }
    };

    return (
        <Layout>
            <Header />
            <div className="contact-us-container">
                <div className="contact-details">
                    <h2>Contact Information</h2>
                    <ul>
                        <li> Call Us: +48 444 333 222</li>
                        <li> Location: ul. Olszynkowa 74, Racibórz 47-406, Poland</li>
                        <li> Business Hours: Mon – Fri: 9 AM – 5 PM, Sat – Sun: Closed</li>
                    </ul>
                </div>
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Enter the subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit">Submit</button>
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