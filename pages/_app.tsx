import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './styles.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
