import React from 'react';
import Layout from '../app/layout';
import MainBanner from '../components/MainBanner';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import MyPage from '@/pages/myMap';
import CookiesConsent from '@/components/CookiesConsent';
import Newsletter from '@/components/Newsletter';
import Chatbot from '@/components/Chatbot';
import Hero from '@/components/Hero';
import Movie from '@/components/Movie';
import { useTranslations } from 'next-intl';
const Page: React.FC = () => {
  const t = useTranslations();  
  return (
  
    <Layout>
        <Header />
        <Movie/>
        <MyPage/>
        <Hero 
        title={t('indextitle1')}
        description={t('indexdes1')}
        imageSrc="/images/coffee-bean-1.jpg"
      />
     <MainBanner />
      <Hero 
        title={t('indextitle2')}
        description={t('indexdes2')}
        imageSrc="/images/coffee-bean.jpg"
      />
        <Chatbot/>
        <Newsletter/>
        <Footer/>
        <CookiesConsent/>
    </Layout>
  )
};

export default Page;

export async function getStaticProps(context: { locale: any; }) {
  return {
    props: {
      messages: (await import(`../messeges/${context.locale}.json`)).default
    }
  };
}
