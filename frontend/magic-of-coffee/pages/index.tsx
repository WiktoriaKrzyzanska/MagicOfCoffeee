import React from 'react';
import Layout from '../app/layout';
import MainBanner from '../components/MainBanner';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import MyPage from '@/pages/myMap';
import CookiesConsent from '@/components/CookiesConsent';
import Newsletter from '@/components/Newsletter';
import Chatbot from '@/components/Chatbot';

const Page: React.FC = () => (
    <Layout>
        <Header />
        <MainBanner />
        <MyPage/>
        <Chatbot/>
        <Newsletter/>
        <Footer/>
        <CookiesConsent/>
    </Layout>
);

export default Page;
