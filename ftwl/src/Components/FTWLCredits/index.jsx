import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { getSongRoutes, getFTWLInfo } from '../../data';
import { TrackNumber } from '../';
import FTWLCreditDetail from '../FTWLCreditDetail';

const songRoutes = getSongRoutes();
const info = getFTWLInfo();

const FTWLCredits = () => {
  return (
    <div className='mt5 w-100 ph3 ph4-l'>
      <div className='mt5 mt4-l flex flex-wrap justify-start'>
        <NavLink
          to={{
            pathname: info.route,
            state: {
              data: info,
            },
          }}
          className='link'
        >
          <TrackNumber trackNo={info.trackNo} route={info.route} />
        </NavLink>
        {songRoutes.map((song) => (
          <NavLink
            to={{
              pathname: song.route,
              state: {
                data: song,
              },
            }}
            className='link outline-0'
          >
            <TrackNumber trackNo={song.trackNo} route={song.route} />
          </NavLink>
        ))}
      </div>
      <Switch>
        <Route path='/credits/:slug' render={() => <FTWLCreditDetail />} />
        <Route path='/credits' render={() => <FTWLCreditDetail />} />
      </Switch>
    </div>
  );
};

export default FTWLCredits;
