import React from 'react'
import { useLocation } from 'react-router-dom'
import { TrackNumber } from '..'

const FTWLCreditDetail = (props) => {
  let location = useLocation()
  console.log(location)
  return (
    <main className='w-100 mt5'>
      {props.info ? (
        <AlbumInfo
          trackNo={props.info.trackNo}
          intro={props.info.intro}
          outro={props.info.outro}
          media={props.info.media}
        />
      ) : (
        <TrackInfo {...location.state.content} />
      )}
    </main>
  )
}

const AlbumInfo = ({ trackNo, intro, outro, media }) => {
  return (
    <article className='ftwl-pl6-l pa0 mb4 flex flex-row-l flex-column '>
      <div className='text w-40-l w-100 mr7-l mb4 ph6-m'>
        <h1 className='ts1 f2 mt0'>From Texas, With Love</h1>
        <p className='lh-copy ts1 mb3'>{intro}</p>

        <p
          className=' lh-copy ts1 mb3'
          dangerouslySetInnerHTML={{ __html: outro }}
        />

        <div className='mb3'>
          <label htmlFor='executive' className='fw2 ts1'>
            Executive Producer
          </label>
          <p className='ts1 fw4 mt1' name='executive'>
            Joaqu.n
          </p>
        </div>
        <div className='mb3'>
          <label htmlFor='executive' className='fw2 ts1'>
            Creative Direction
          </label>
          <p className='ts1 fw4 mt1 mt1' name='executive'>
            Joaqu.n & DesForDesiree
          </p>
        </div>
        <div className='mb3'>
          <label htmlFor='executive' className='fw2 ts1'>
            Released via
          </label>
          <p className='ts1 fw4 mt1' name='executive'>
            The Nu Wave SOUND
          </p>
        </div>
        <div className='mb3'>
          <label htmlFor='executive' className='fw2 ts1'>
            Licensed via
          </label>
          <p className='ts1 f4 fw4 mt1' name='executive'>
            Zay's Land
          </p>
        </div>
      </div>
      <div className='w-60-l w-100 ml7-l fixed-l flex justify-end mb4'>
        <video className='w-50-l w-100' src={media} loop autoPlay muted></video>
      </div>
    </article>
  )
}

const TrackInfo = ({ trackNo, title, artist, features, producers, media }) => {
  return (
    <article className='ftwl-pl6-l pa0 flex flex-row-l flex-column'>
      <div
        className={`${
          media.videos ? 'mr0' : 'mr4-l'
        } 'text w-40-l w-100  mb4 ph6-m'`}
      >
        <TrackNumber trackNo={trackNo} />
        <h1 className='ts1 f1'>{title}</h1>
        {features.length ? (
          <div className='mb3'>
            <label htmlFor='features' className='fw2 ts1'>
              Featuring
            </label>
            <div className='mt1 ts1 flex w-100 ' name='features'>
              {features.map((feature) => (
                <p className='ma0 fw4 ts1'>{feature}&nbsp;</p>
              ))}
            </div>
          </div>
        ) : null}
        <div className='mb3'>
          <label htmlFor='producers' className='fw2 ts1'>
            Produced by
          </label>
          <div className='mt1 ts1 flex' name='producers'>
            {producers.map((producer) => (
              <p key={producer} className='ma0 fw4 ts1'>
                {producer}&nbsp;
              </p>
            ))}
          </div>
        </div>
        <div className='mb3'>
          <label htmlFor='mastered' className='fw2 ts1'>
            Written, Mixed, & Mastered by
          </label>
          <p className='mt1 ts1 fw4' name='mastered'>
            {artist}
          </p>
        </div>
      </div>
      <div
        className={`${
          media.type === 'video'
            ? media.videos
              ? 'w-100 flex'
              : media.src ===
                'https://zayland-assets.s3.amazonaws.com/videos/diorsheets.mp4'
              ? 'w-60-l w-100 ph6-m mb4'
              : 'w-60-l w-100 ml7-l fixed-l flex justify-end mb4'
            : 'w-60-l w-100 ph6m mb4'
        }`}
      >
        {media.type === 'video' ? (
          media.videos ? (
            media.videos.map((videoSrc, idx) => (
              <video
                className={`${idx === 0 ? 'w-33-l w-100 mr2' : 'w-60-l w-100'}`}
                src={videoSrc}
                loop
                muted
                autoPlay
              />
            ))
          ) : (
            <video
              className={`${
                media.src ===
                'https://zayland-assets.s3.amazonaws.com/videos/diorsheets.mp4'
                  ? 'w-100'
                  : 'w-50-l w-100'
              }`}
              src={media.src}
              loop
              muted
              autoPlay
            />
          )
        ) : (
          <div className='flex flex-row-l flex-column justify-around'>
            {media.photos && media.photos.length ? (
              media.photos.map((photoSrc) => (
                <figure className='ma0 ma3-l pa0 w-50-l w-100' key={photoSrc}>
                  <img src={photoSrc} alt={photoSrc} />
                </figure>
              ))
            ) : (
              <img key={media.src} src={media.src} alt={media.src} />
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default FTWLCreditDetail
