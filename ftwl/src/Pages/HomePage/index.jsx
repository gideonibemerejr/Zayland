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
          <div className='absolute-l tr bottom-0 right-0 pa4  w-100 flex flex-row-l flex-column justify-end'>
            <img
              className='dib-l dn w-10-l w-100'
              src='https://cdn.discordapp.com/attachments/728495118247788605/737101872212607046/BOTTOM_RIGHT_SMALL.png'
              alt=''
            />

            <p className='dn-l db ts1 lh-copy mb0'>
              ©{new Date().getFullYear()} The Nu Wave SOUND
            </p>
            <p className='dn-l db ts1 lh-copy'>Licensed by Zay's Land</p>
          </div>
        </div>
      </>
    )
  }
}

export default HomePage
