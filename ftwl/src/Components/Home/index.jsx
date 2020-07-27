import React, { useEffect } from 'react'
import { getFTWLPlatforms } from '../../data'

const Home = ({ setCurrentPage }) => {
  const platforms = getFTWLPlatforms()
  useEffect(() => {
    setCurrentPage('HOME')
  }, [setCurrentPage])
  return (
    <main className='w-100 vh-75 h-100-l flex justify-center items-center mt3'>
      <section className='w-100 flex flex-column  justify-center items-center mh5-l pa2 pa0-ns'>
        <div className='w-100 w-75-l h-75 mb2 flex justify-center items-center'>
          <img
            src='https://zayland-assets.s3.amazonaws.com/images/FTWL.jpg'
            alt=''
            className='w-50-ns w-100'
          />
        </div>
        <div className='flex justify-center items-center mt4 pa2'>
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
    // <div>
    //   <section className='w-100 flex flex-column ph7-l pa2 pa0-ns mt5-l'>
    //     <p>gideon</p>
    //     <div className='mt3'>
    //       <div className='white-80 f-subheadline-ns f2 '>
    //         <em className='yellow'>From Texas, With Love</em> is a letter from
    //         me to you.{' '}
    //         {moreInfo && (
    //           <>
    //             <br />
    //             <span className='mv3 db pl6-ns pl4'>
    //               No matter where you're from you'll relate to the stories and
    //               experiences talked about throughout.
    //             </span>
    //           </>
    //         )}
    //       </div>
    //       <div
    //         className={`white-80 dib mv2 ${
    //           moreInfo ? 'ml6-ns ml4' : ''
    //         } pointer more-button f2-ns f5`}
    //         onClick={() => setMoreInfo((prevState) => !prevState)}
    //       >
    //         {moreInfo ? 'Close' : 'More'}
    //       </div>{' '}
    //     </div>
    //     <div className='mt5 flex flex-wrap items-center'>
    //       {platforms.map((platform) => (
    //         <div key={platform.title} className='h-25 mr4-ns mr3 mb3'>
    //           <a
    //             className='link white hover-yellow ma0 f3-ns f5'
    //             href={platform.link}
    //             rel='noopener noreferrer'
    //             target='_blank'
    //           >
    //             <div className='stream-button flex items-center'>
    //               <img
    //                 className='h2-ns w2-ns h1 w1 dib mr2'
    //                 src={platform.iconSrc}
    //                 alt=''
    //               />{' '}
    //               {platform.title}
    //             </div>
    //           </a>
    //         </div>
    //       ))}
    //     </div>
    //     <div className='flex justify-center items-center vh-100'>
    //       <div className='flex flex-wrap white-80 justify-between'>
    //         {songRoutes.map((song) => (
    //           <Link
    //             to={{
    //               pathname: song.route,
    //               state: {
    //                 song,
    //               },
    //             }}
    //             className='link white-80 w-50 w-33-ns mb4 '
    //           >
    //             <div className='flex justify-start'>
    //               <div className='hover-bg-ftwl hover-black track-number flex justify-center items-center mr3'>
    //                 <p>{song.trackNo}</p>
    //               </div>
    //               <div>
    //                 <div className='flex mr2 mt3 mb2'>
    //                   <p className='ma0 fw4 f5 ts1'>
    //                     {song.artist.toUpperCase()}{' '}
    //                     {song.features.length ? <>&nbsp;&&nbsp;</> : ''}
    //                   </p>
    //                   {song.features.map((feature) => (
    //                     <p className='ma0 fw4 f5 ts1'>
    //                       {feature.toUpperCase()}&nbsp;
    //                     </p>
    //                   ))}
    //                 </div>
    //                 <p
    //                   className={`${
    //                     song.features.length ? 'mt0' : 'mt1'
    //                   } f2 fw5 helvetica ts1`}
    //                 >
    //                   {song.title}
    //                 </p>
    //               </div>
    //             </div>
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </div>
  )
}

export default Home
