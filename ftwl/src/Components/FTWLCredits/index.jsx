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
  )
}

export default FTWLCredits
