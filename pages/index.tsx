import React from 'react';

import GlobalStyles from '@/components/GlobalStyles';
import Home from '@/slides/Home';
import About from '@/slides/About';
import Product from '@/slides/Product';
import ContactUs from '@/slides/ContactUs';

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
      <Product />
      <About />
      <ContactUs />
    </>
  );
}

export default App;
