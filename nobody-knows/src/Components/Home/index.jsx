import React from 'react';

const Home = () => {
  return (
    <main className='w-100 h-100-ns h-75 flex justify-center items-center'>
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
      </section>
    </main>
  );
};

export default Home;
