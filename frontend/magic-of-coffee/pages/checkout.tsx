import React from 'react'
import Checkout from '@/components/checkout/Checkout'


const CheckoutPage: React.FC = () => (
            <Checkout/>
);

export default CheckoutPage;
export async function getStaticProps(context: { locale: any; }) {
    return {
      props: {
        messages: (await import(`../messeges/${context.locale}.json`)).default
      }
    };
  }
