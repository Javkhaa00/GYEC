import React from 'react';
import ReactDOM from 'react-dom';
import About from "./components/About/index";
import './index.css';
import useFastReloadIndicator from '@nicepack/react/indicator';

function App() {
  return (
    <>
      <About />
      <h2>HI MY PREEND</h2>
      <p>Hello, world!</p>
    </>
  );
}

useFastReloadIndicator();
ReactDOM.render(<App />, document.getElementById('root'));
