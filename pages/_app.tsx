import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#fb7963" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
