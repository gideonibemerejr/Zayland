import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { getSongRoutes, getFTWLInfo } from '../../data'
import { TrackNumber } from '../'
import FTWLCreditDetail from '../FTWLCreditDetail'

const songRoutes = getSongRoutes()
const info = getFTWLInfo()

const FTWLCredits = () => {
  return (
    <div className=' w-100 ph3 ph4-l'>
      <div className='mt5 mt4-l flex flex-wrap justify-start-l justify-center'>
        <NavLink
          to={{
            pathname: info.route,
            state: {
              content: info,
            },
          }}
          className='link'
        >
          <TrackNumber trackNo={info.trackNo} route={info.route} />
        </NavLink>
        {songRoutes.map((song) => (
          <NavLink
            key={song.title}
            to={{
              pathname: song.route,
              state: {
                content: song,
              },
            }}
            className='link outline-0'
          >
            <TrackNumber trackNo={song.trackNo} route={song.route} />
          </NavLink>
        ))}
      </div>
      <Switch>
        <Route path='/credits/:slug' render={(props) => <FTWLCreditDetail />} />
        <Route
          path='/credits'
          render={(props) => <FTWLCreditDetail info={info} />}
        />
      </Switch>
    </div>
  )
}

export default FTWLCredits
