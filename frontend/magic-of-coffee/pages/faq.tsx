import React from 'react';
import Layout from '../app/layout';
import Header from "@/components/Header";
import '../components/Contact.css'
import Footer from '@/components/Footer';
import CookiesConsent from '@/components/CookiesConsent';
import FAQ from '@/components/Accordion';

const HelpPage: React.FC = () => (
    <Layout>
        <Header />
        <FAQ/>
        <Footer />
        <CookiesConsent/>
    </Layout>
);

export default HelpPage;