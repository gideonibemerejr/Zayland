import React, { Component } from 'react'

import { Nav, Home, Watch, FTWLCredits } from '../../Components'

import { Switch, Route, Redirect } from 'react-router-dom'

class HomePage extends Component {
  state = {
    isMenuOpen: false,
    currentPage: 'HOME',
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen }, () => {
      this.rotateIcon()
    })
  }
  setCurrentPage = (currentPage) => {
    this.setState({ currentPage })
  }
  rotateIcon = () => {
    const plus = document.querySelector('#menu-icon')

    if (this.state.isMenuOpen) {
      plus.classList.add('rotate')
    } else {
      plus.classList.remove('rotate')
    }
  }

  // renderMenu = () => {
  //   return <Menu toggleMenu={this.toggleMenu} />;
  // };

  render() {
    return (
      <>
        {/* {this.state.isMenuOpen && this.renderMenu()} */}

        <div
          className={`homepage--container ftwl-bg pa0-l pa2 flex flex-column items-center`}
        >
          <Nav toggleMenu={this.toggleMenu} />
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Home setCurrentPage={this.setCurrentPage} />}
            />
            {/* <Route
              path='/nobody-knows'
              render={() => (
                <NobodyKnows setCurrentPage={this.setCurrentPage} />
              )}
            /> */}
            <Route path='/credits' render={(props) => <FTWLCredits />} />
            <Route
              path='/watch'
              render={() => <Watch setCurrentPage={this.setCurrentPage} />}
            />

            <Redirect to='/' />
          </Switch>
        </div>
      </>
    )
  }
}

export default HomePage
