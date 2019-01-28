import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TitleNav from './TitleNav/TitleNav';
import Landing from './Landing/Landing';
import About from './About/About';
import Works from './Works/Works';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  state ={
    stage: 'under construction'
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route path='/' component={ TitleNav } />
            <Route path='/about' component={ About } />
            <Route path='/works' component={ Works } />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
