import React, { Component } from 'react';

import { Nav, Menu, Home, Listen } from '../../Components';
import { Switch, Route } from 'react-router-dom';

class HomePage extends Component {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen }, () => {
      this.rotateIcon();
    });
  };

  rotateIcon = () => {
    const plus = document.querySelector('#menu-icon');

    if (this.state.isMenuOpen) {
      plus.classList.add('rotate');
    } else {
      plus.classList.remove('rotate');
    }
  };

  renderMenu = () => {
    return <Menu toggleMenu={this.toggleMenu} />;
  };

  render() {
    return (
      <>
        {this.state.isMenuOpen && this.renderMenu()}
        <div className='homepage--container pa2 flex flex-column items-center'>
          <Nav toggleMenu={this.toggleMenu} />
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/home/listen' component={Listen} />
          </Switch>
        </div>
      </>
    );
  }
}

export default HomePage;
