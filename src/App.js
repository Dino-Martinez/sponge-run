import './App.css';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js';
import HomePage from './HomePage.js';
import Level from './Level.js';
import Tech from './Tech.js';
import List from './List.js';

function App() {
  return (
    <Router>
      <Header />
      <div className='App'>
        <Route exact path='/' component={HomePage}/>
        <Route path='/levels/:level_url_extension' component={Level}/>
        <Route exact path='/:list_type' component={List}/>
        <Route path='/techs/:tech_url_extension' component={Tech}/>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
