import React from 'react';
import Layout from '../app/layout';
import Header from "@/components/Header";
import '../components/Contact.css'
import Footer from '@/components/Footer';

const ContactUs: React.FC = () => (
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
                <form>
                    <input type="text" placeholder="Enter your name" required />
                    <input type="email" placeholder="Enter a valid email address" required />
                    <textarea placeholder="Your message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

        <Footer />

    </Layout>
);

export default ContactUs;
