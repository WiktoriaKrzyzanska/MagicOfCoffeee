import React from 'react';
import Layout from '../app/layout';
import Header from "@/components/Header";
import '../components/Contact.css'
import Footer from '@/components/Footer';
import CookiesConsent from '@/components/CookiesConsent';
import Product from '@/components/Products';
import AdminAdd from '@/components/AdminAdd';

const Add: React.FC = () => (
    <Layout>
      <AdminAdd/>
    </Layout>
);

export default Add;
