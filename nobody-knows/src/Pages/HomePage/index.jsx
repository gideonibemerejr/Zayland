import React, { Component } from 'react';

import { Nav, Menu } from '../../Components';

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

          <main className='w-100 h-100 flex justify-center items-center'>
            <section className='w-100 flex flex-column flex-row-ns justify-center items-center mh5'>
              <div className='w-100 w-75-ns pa4-ns flex justify-center items-center'>
                <img
                  src='https://zayland-assets.s3.amazonaws.com/images/Zayland_NobodyKnows_FinalCover.png'
                  alt=''
                  className='w-75-ns w-100'
                />
              </div>
              <div className='w-100 w-50-ns pa4-ns'>
                <h2>Zayland</h2>
              </div>
            </section>
          </main>
        </div>
      </>
    );
  }
}

export default HomePage;
