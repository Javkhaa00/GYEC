import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import useFastReloadIndicator from '@nicepack/react/indicator';

function App() {
  return (
    <>
      <h2>HI MY PREEND</h2>
      <p>Hello, world!</p>
    </>
  );
}

useFastReloadIndicator();
ReactDOM.render(<App />, document.getElementById('root'));
