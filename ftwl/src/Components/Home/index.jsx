import React, { useEffect, useState } from 'react';
import { getStThomasPlatforms, getSongRoutes } from '../../data';
import { Link } from 'react-router-dom';

const platforms = getStThomasPlatforms();
const songRoutes = getSongRoutes();
const Home = ({ setCurrentPage }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  useEffect(() => {
    setCurrentPage('HOME');
  }, [setCurrentPage]);
  return (
    <div>
      <section className='w-100 flex flex-column ph5-l pa2 pa0-ns mt5-l'>
        <div className='mt3 ph7-ns ph2'>
          <div className='white-80 f-subheadline-ns f2 '>
            <em className='yellow'>From Texas, With Love</em> is a letter from
            me to you.{' '}
            {moreInfo && (
              <>
                <br />
                <span className='mv3 db pl6-ns pl4'>
                  No matter where you're from you'll relate to the stories and
                  experiences talked about throughout.
                </span>
              </>
            )}
          </div>
          <div
            className={`white-80 dib mv2 ${
              moreInfo ? 'ml6-ns ml4' : ''
            } pointer more-button f2-ns f5`}
            onClick={() => setMoreInfo((prevState) => !prevState)}
          >
            {moreInfo ? 'Close' : 'More'}
          </div>{' '}
        </div>
        <div className='mt5 ph7-ns ph2 flex flex-wrap items-center'>
          {platforms.map((platform) => (
            <div key={platform.title} className='h-25 mr4-ns mr3 mb3'>
              <a
                className='link white hover-yellow ma0 f3-ns f5'
                href={platform.link}
                rel='noopener noreferrer'
                target='_blank'
              >
                {/* */}
                <div className='stream-button flex items-center'>
                  <img
                    className='h2-ns w2-ns h1 w1 dib mr2'
                    src={platform.iconSrc}
                    alt=''
                  />{' '}
                  {platform.title}
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className='mt5 ph7-ns ph2'>
          <div className='flex flex-wrap white-80'>
            {songRoutes.map((song) => (
              <Link
                to={{
                  pathname: song.route,
                  state: {
                    song,
                  },
                }}
                className='link white-80 w-50 w-33-ns'
              >
                <div className='flex justify-start'>
                  <div className='hover-bg-white hover-black track-number flex justify-center items-center mr3'>
                    <p>{song.trackNo}</p>
                  </div>
                  <div>
                    <div className='flex'>
                      {song.features.map((feature) => (
                        <p className='mt2 mr2'>{feature}</p>
                      ))}
                    </div>
                    <p className={`${song.features.length ? 'mt0' : 'mt1'} f3`}>
                      {song.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
