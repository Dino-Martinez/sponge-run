import './App.css';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js';
import HomePage from './HomePage.js';
import LevelList from './LevelList.js';
import Level from './Level.js';
import TechList from './TechList.js';
import Tech from './Tech.js';

function App() {
  return (
    <Router>
      <Header />
      <div className='App'>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/levels' component={LevelList}/>
        <Route path='/levels/:level_url_extension' component={Level}/>
        <Route exact path='/techs' component={TechList}/>
        <Route path='/techs/:tech_url_extension' component={Tech}/>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
