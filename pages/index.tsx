import React from 'react';
import Head from 'next/head';

import GlobalStyles from '@/components/GlobalStyles';
import Home from '@/slides/Home';
import About from '@/slides/About';
import Product from '@/slides/Product';
import ContactUs from '@/slides/ContactUs';

function App() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Slocklance product presentation." />
        <meta name="robots" content="index, follow" />
        <title>Nani Tech</title>
      </Head>
      <GlobalStyles />
      <Home />
      <Product />
      <About />
      <ContactUs />
    </>
  );
}

export default App;
