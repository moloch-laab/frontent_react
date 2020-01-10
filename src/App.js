import React from 'react';
import './assets/css/App.css';

// Mis componentes
import TestComponent from './components/TestComponent';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <div className="center">
        <section id='content'>
          <TestComponent/>
        </section>
        <Sidebar/>
        <div className="clearfix"/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
