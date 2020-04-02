import React from 'react';

const Nav = ({ toggleMenu }) => {
  return (
    <nav className='w-100 z-2'>
      <ul className='list pa0 mt3 mb0 mh4 flex flex-row justify-between items-center white-50 f3 f2-ns lh-copy fw7'>
        <li>
          <p className='ma0'>ZAYLAND</p>
        </li>
        <li onClick={toggleMenu}>
          <div id='menu-icon' className='f1-ns f2 fw9 pointer menu-button'>
            <span>+</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
