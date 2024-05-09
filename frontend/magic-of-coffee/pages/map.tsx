import React from 'react';
import Layout from '../app/layout';
import Header from "@/components/Header";
import MyPage from '@/pages/myMap';
import Footer from '@/components/Footer';
import CookiesConsent from '@/components/CookiesConsent';


const Map: React.FC = () => (
    <Layout>
        <Header />
        <MyPage/>
        <Footer/>
        <CookiesConsent/>
    </Layout>
);

export default Map;
export async function getStaticProps(context: { locale: any; }) {
    return {
      props: {
        messages: (await import(`../messeges/${context.locale}.json`)).default
      }
    };
  }