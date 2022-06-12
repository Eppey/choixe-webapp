import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './common/navigation/Navbar';
import Home from './pages/home/Home';
import Sector from './pages/sector/Sector';
import Stock from './pages/stock/Stock';
import About from './pages/about/About';
import Footer from './pages/Footer';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <div id="container">
          <div id="navbar">
            <Navbar />
          </div>
          <div id="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/sector" component={Sector} />
              <Route path="/stock" component={Stock} />
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
