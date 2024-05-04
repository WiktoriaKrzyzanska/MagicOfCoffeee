import React from 'react';
import Layout from '../app/layout';
import Header from "@/components/Header";
import InfoSection from '@/components/InfoSection';


const About: React.FC = () => (
    <Layout>
        <Header />
        <div className="about-container">
            <InfoSection
                imageSrc="/images/ourstory.jpg"
                title="Our Story"
                content="Discover the journey of Coffee Magic as we bring you the finest coffee beans sourced from around the world. Our passion for quality coffee drives us to seek out the best and most unique flavors for our customers."
                imageRight={false}
            />
            <InfoSection
                imageSrc="/images/ourteam.png"
                title="Meet Our Team"
                content="Our team of coffee enthusiasts works tirelessly to ensure you receive only the best products. From our roasters to our customer service staff, meet the people who make it all happen."
                imageRight={true}
            />
        </div>
    </Layout>
);

export default About;