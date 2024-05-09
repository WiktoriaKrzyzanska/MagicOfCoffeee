import React from 'react';
import Layout from '../app/layout';
import Header from "@/components/Header";
import '../components/Contact.css'
import Footer from '@/components/Footer';
import CookiesConsent from '@/components/CookiesConsent';
import PrivacyNotice from '@/components/PrivacyNotice';
import Help from '@/components/Help';

const HelpPage: React.FC = () => (
    <Layout>
        <Header />
        <Help/>
        <Footer />
        <CookiesConsent/>
    </Layout>
);

export default HelpPage;
export async function getStaticProps(context: { locale: any; }) {
    return {
      props: {
        messages: (await import(`../messeges/${context.locale}.json`)).default
      }
    };
  }