import '../app/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../app/layout';
import {NextIntlClientProvider} from 'next-intl';
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <NextIntlClientProvider
        locale={router.locale}
        timeZone="Europe/Vienna"
        messages={pageProps.messages}
      >
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </NextIntlClientProvider>
    );
}

export default MyApp;
