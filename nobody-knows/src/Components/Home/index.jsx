import React from 'react';
import { getArtistPlatforms } from '../../data';

const platforms = getArtistPlatforms();
const Home = () => {
  return (
    <main className='w-100 vh-75 h-100-l flex justify-center items-center'>
      <section className='w-100 flex flex-column  justify-center items-center mh5-l pa2 pa0-ns'>
        <div className='w-100 w-75-l h-75 mb2 flex justify-center items-center'>
          <img
            src='https://zayland-assets.s3.amazonaws.com/images/Zayland_NobodyKnows_FinalCover.png'
            alt=''
            className='w-50-ns w-100'
          />
        </div>
        <div className='w-100 w-50-ns pa3-ns flex justify-center items-center white-80'>
          <a
            href='https://snd.click/5eh5htMe?embed=1'
            className='link hover-blue white-80'
            rel='noopener noreferrer'
            target='_blank'
          >
            <h2>Listen to 'Nobody Knows'</h2>
          </a>
        </div>
        <div className='flex justify-center items-center  pa2'>
          {platforms.map((platform, idx) => (
            <div key={platform.title} className='h-25 mh3'>
              <a href={platform.link} rel='noopener noreferrer' target='_blank'>
                <img
                  className='h3-ns w3-ns h2 w2 dib'
                  src={platform.iconSrc}
                  alt=''
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
