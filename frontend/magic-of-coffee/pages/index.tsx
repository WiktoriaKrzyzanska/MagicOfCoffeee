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

const Page: React.FC = () => (
    <Layout>
        <Header />
        <Movie/>
        <MyPage/>
        <Hero 
        title="Discover the best coffee"
        description="Magic Coffee is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted."
      />
     <MainBanner />
      <Hero 
        title="Get a chance to have the best morning"
        description="We are giving you are one time opportunity to
        experience a better life with coffee."
      />
        <Chatbot/>
        <Newsletter/>
        <Footer/>
        <CookiesConsent/>
    </Layout>
);

export default Page;

export async function getStaticProps(context: { locale: any; }) {
  return {
    props: {
      messages: (await import(`../messeges/${context.locale}.json`)).default
    }
  };
}
