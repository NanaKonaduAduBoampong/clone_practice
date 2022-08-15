import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Script from 'next/script'
import Head from 'next/head'
import { useEffect } from 'react';
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  
  return (
   <>
    <Head> 
      <title>Home - SPIIKA</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <meta property="title" content="spiika" key="spiika.com" /> */}
      <meta name='keywords' content='spiika'></meta>
      <link rel="icon" href="/favicon.png" />
     </Head>

    
    <Layout>
      <Component {...pageProps} />
    </Layout>
   </>
  )
}

export default MyApp
