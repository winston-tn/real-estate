import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start(); // Show the progress bar
    };

    const handleComplete = () => {
      NProgress.done(); // Hide the progress bar
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    //clean up function
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}
