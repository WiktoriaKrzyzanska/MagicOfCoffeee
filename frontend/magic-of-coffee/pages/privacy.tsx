import React from 'react';
import Layout from '../app/layout';
import Header from "@/components/Header";
import '../components/Contact.css'
import Footer from '@/components/Footer';
import CookiesConsent from '@/components/CookiesConsent';
import PrivacyNotice from '@/components/PrivacyNotice';

const Privacy: React.FC = () => (
    <Layout>
        <Header />
        <PrivacyNotice/>
        <Footer />
        <CookiesConsent/>
    </Layout>
);

export default Privacy;