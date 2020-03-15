import React from 'react';
import Head from 'next/head';

import Footer from '@/components/Footer';
import GlobalStyles from '@/components/GlobalStyles';

import Home from '@/slides/Home';
import About from '@/slides/About';
import Product from '@/slides/Product';
import ContactUs from '@/slides/ContactUs';

export const config = { amp: 'hybrid' };

function App() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Shocklance will prevent you from falling asleep, guaranteeing your life. Also, Shocklance will help late night students and night shift workers."
        />
        <meta
          property="og:description"
          content="Shocklance will prevent you from falling asleep, guaranteeing your life. Also, Shocklance will help late night students and night shift workers."
        />
        <meta property="og:type" content="product.item" />
        <meta property="og:title" content="Shocklance" />
        <meta property="og:determiner" content="the" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Shocklance" />
        <title>Shocklance</title>
      </Head>
      <GlobalStyles />
      <Home />
      <Product />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
