import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className='homepage--container'>
          


        <Switch>
          <Route path='/listen' />
          <Route path='/watch' />
        </Switch>
      </div>
    );
  }
}

export default HomePage;
