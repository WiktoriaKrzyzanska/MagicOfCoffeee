import React from 'react';
import SignIn from '@/components/signin';


const Page: React.FC = () => (
        <SignIn/>
);

export default Page;
export async function getStaticProps(context: { locale: any; }) {
        return {
          props: {
            messages: (await import(`../messeges/${context.locale}.json`)).default
          }
        };
      }
