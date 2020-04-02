import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className='landingpage--container'>
      <header>
        <ul>
          <li>
            <Link to='/home'>ENTER WEBSITE</Link>
          </li>
          <li>
            <p>ZAYLAND</p>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default LandingPage;
