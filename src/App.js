import './App.css';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import Level from './Level';
import Tech from './Tech';
import List from './List';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/levels/:levelUrlExtension" component={Level} />
        <Route path="/leaderboard/:query" component={Leaderboard} />
        <Route exact path="/:listType" component={List} />
        <Route path="/techs/:techUrlExtension" component={Tech} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
