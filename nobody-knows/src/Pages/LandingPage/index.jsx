import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='landingpage--container flex flex-column justify-between'>
      <header>
        <ul className='list mt3 mb0 mh4 pa0 flex flex-row justify-between items-center white-80 f3 lh-copy fw7'>
          <li>
            <p className='ma0'>ZAYLAND</p>
          </li>
          <li>
            <Link className='link white-80 hover-blue' to='/home'>
              ENTER WEBSITE
            </Link>
          </li>
        </ul>
      </header>
      <footer className='white-80 fw5 flex items-center w-100 justify-center mb5'>
        ©{new Date().getFullYear()} The Nu Wave SOUND
      </footer>
    </div>
  );
};

export default LandingPage;
