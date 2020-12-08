import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js';
import Blank from './Blank.js';
import HomePage from './HomePage.js';
import LevelList from './LevelList.js'

function App() {
  return (
    <Router>
      <Header />
      <div className='App'>
        <Route exact path='/' component={HomePage}/>
        <Route path='/levels' component={LevelList}/>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
