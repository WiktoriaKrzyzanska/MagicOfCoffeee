import React from 'react';
import Layout from '../app/layout';
import MainBanner from '../components/MainBanner';
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const Page: React.FC = () => (
    <Layout>
        <Header />
        <MainBanner />
        <Footer/>
    </Layout>
);

export default Page;
