import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ toggleMenu }) => {
  return (
    <nav className='db dt-l w-100 border-box pa3 ph5-l relative'>
      <Link
        className='db dtc-l v-mid white-80 link dim w-100 w-25-l tc tl-l mb2 mb0-l'
        to='/'
        title='Home'
      >
        <h1 className='ma0 f3 f3-l'>ZAYLAND</h1>
      </Link>
      <div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
        <Link
          className='link dim white-80 f6 f5-l fw5 dib mr3 mr4-l'
          to='/'
          title='Home'
        >
          HOME
        </Link>
        <Link
          className='link dim white-80 f6 f5-l fw5 dib mr3 mr4-l'
          to='/nobody-knows'
          title='Nobody Knows'
        >
          NOBODY KNOWS
        </Link>
        <Link
          className='link dim white-80 f6 f5-l fw5 dib mr3 mr4-l'
          to='/credits'
          title='Credits'
        >
          CREDITS
        </Link>
        <Link
          className='link dim white-80 f6 f5-l fw5 dib mr3 mr4-l'
          to='/watch'
          title='Watch'
        >
          WATCH
        </Link>
        <a
          className='pointer link dim white-80 f6 f5-l fw5 dib '
          href='https://shop.zaylandxx.com'
          title='Shop'
        >
          SHOP
        </a>
      </div>
    </nav>
    // <nav className='w-100 z-2'>
    //   <ul className='list pa0 mt1 mb0 mh4 flex flex-row justify-between items-center-l white-80 f3  lh-copy fw7'>
    //     <li>
    //       <Link to='/home' className='link white-80'>
    //         <h1 className='ma0 f2 f3-l'>ZAYLAND</h1>
    //       </Link>
    //     </li>
    //     <li onClick={toggleMenu}>
    //       <div id='menu-icon' className='f2 fw9 pointer menu-button'>
    //         <span style={{ marginBottom: '1rem' }}>+</span>
    //       </div>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Nav;
