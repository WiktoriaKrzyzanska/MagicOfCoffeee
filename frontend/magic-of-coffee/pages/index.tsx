import React from 'react';
import Layout from '../app/layout';
import MainBanner from '../components/MainBanner';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import MyPage from '@/pages/map';
import CookiesConsent from '@/components/CookiesConsent';

const Page: React.FC = () => (
    <Layout>
        <Header />
        <MainBanner />
        <MyPage/>
        <Footer/>
        <CookiesConsent/>
    </Layout>
);

export default Page;
