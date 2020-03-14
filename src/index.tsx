import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './components/GlobalStyles';
import Home from './slides/Home';
import About from './slides/About';
import Product from './slides/Product';
import ContactUs from './slides/ContactUs';

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

if (process.env.NODE_ENV !== 'production') {
  import('@nicepack/react/indicator').then(
    ({ default: useIndicator }) =>
      typeof useIndicator === 'function' && useIndicator(),
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
