import React from 'react';
import Layout from '../app/layout';
import Header from "@/components/Header";
import '../components/Contact.css'
import Footer from '@/components/Footer';
import CookiesConsent from '@/components/CookiesConsent';
import Product from '@/components/Products';
import Products from '@/components/Products';

const ProductPage: React.FC = () => (
    <Layout>
        <Header />
        <Products/>
        <Footer />
        <CookiesConsent/>
    </Layout>
);

export default ProductPage;
export async function getStaticProps(context: { locale: any; }) {
    return {
      props: {
        messages: (await import(`../messeges/${context.locale}.json`)).default
      }
    };
  }