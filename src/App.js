import React from 'react';
import {Route , Routes} from 'react-router-dom';
import Head from './components/Head';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';


function App() {
  return (
    <>
    <Head name="BizAd" />
    
    <Routes>
    <Route path='/' element ={<Main/>} />
      <Route path='/pricing' element ={<Services/>} />
      <Route path='/orders' element ={<About/>} />
    </Routes>
  </>
  );
}

export default App;
