import React from 'react';
import ReactDOM from 'react-dom';

import useFastReloadIndicator from '@nicepack/react/indicator';

import GlobalStyles from './components/GlobalStyles';
import Home from './slides/Home';
import About from './components/About';

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
      <About />
    </>
  );
}

useFastReloadIndicator();
ReactDOM.render(<App />, document.getElementById('root'));
