import React from 'react';
import './App.css';

import {Footer, Blog, Possibility, Features, WhatGpt3, Header} from './containers';
import {Cta, Brand, Navbar} from './components';

function App() {
  return (
    <div className="App">
      <div className='gradient-bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />


    </div>
  );
}

export default App;
