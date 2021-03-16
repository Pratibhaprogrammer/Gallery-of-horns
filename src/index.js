import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


