import React from 'react';
import SignUp from '@/components/signup';


const Page: React.FC = () => (
    
    
            <SignUp/>
);

export default Page;
export async function getStaticProps(context: { locale: any; }) {
    return {
      props: {
        messages: (await import(`../messeges/${context.locale}.json`)).default
      }
    };
  }
