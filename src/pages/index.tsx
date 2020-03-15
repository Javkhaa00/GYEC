import React from 'react';
import Head from 'next/head';

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
