import React from 'react';
import Layout from '../app/layout';
import Header from "@/components/Header";
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import CookiesConsent from '@/components/CookiesConsent';

import { useTranslations } from 'next-intl';
const About: React.FC = () => {
    const t = useTranslations();  
    return(
    <Layout>
        <Header />
        <div className="about-container">
            <InfoSection
                imageSrc="/images/ourstory.jpg"
                title={t('ourStory')}
                content={t('ourStoryContent')}
                imageRight={false}
            />
            <InfoSection
                imageSrc="/images/ourteam.png"
                title={t('meetOurTeam')}
                content={t('meetOurTeamContent')}
                imageRight={true}
            />
        </div>
        <Footer/>
        <CookiesConsent/>
    </Layout>
)};

export default About;
export async function getStaticProps(context: { locale: any; }) {
    return {
      props: {
        messages: (await import(`../messeges/${context.locale}.json`)).default
      }
    };
  }