import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LandingPage, HomePage } from '../Pages';

function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={HomePage} />
    </Router>
  );
}

export default App;
