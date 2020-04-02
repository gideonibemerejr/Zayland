import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ toggleMenu }) => {
  return (
    <nav className='w-100 z-2'>
      <ul className='list pa0 mt1 mb0 mh4 flex flex-row justify-between items-start white-80 f3  lh-copy fw7'>
        <li>
          <Link to='/home' className='link white-80'>
            <h1 className='ma0 f2'>ZAYLAND</h1>
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <div id='menu-icon' className='f2 fw9 pointer menu-button'>
            <span style={{ marginBottom: '1rem' }}>+</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
