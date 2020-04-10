import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LandingPage, HomePage } from '../Pages';

class App extends Component {
  state = { loading: true };

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false,
    });
  };

  componentDidMount() {
    this.wait(1000);
  }
  render() {
    return (
      <Router>
        <Route exact path='/' render={() => <LandingPage {...this.state} />} />
        <Route path='/home' component={HomePage} />
      </Router>
    );
  }
}

export default App;
