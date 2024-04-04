import React from 'react';
import Layout from './layout';
import MainBanner from '../components/MainBanner';
import Header from "@/components/Header";

const Page: React.FC = () => (
    <Layout>
        <Header />
        <MainBanner />
    </Layout>
);

export default Page;
