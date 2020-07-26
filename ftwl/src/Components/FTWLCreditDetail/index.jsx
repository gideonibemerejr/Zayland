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
    <article className='pl6-l pa0 mb4 flex flex-row-l flex-column '>
      <div className='text w-40-l w-100 mr7-l mb4 ph6-m'>
        <h1 className='ts1 f2 mt0'>From Texas, With Love</h1>
        <p className='lh-copy ts1 mb3'>{intro}</p>

        <p
          className=' lh-copy ts1 mb3'
          dangerouslySetInnerHTML={{ __html: outro }}
        />

        <div className='mb3'>
          <label htmlFor='executive' className='fw2 ts1 f4'>
            Executive Producer
          </label>
          <div className='ts1 f4' name='executive'>
            Joaqu.n
          </div>
        </div>
        <div className='mb3'>
          <label htmlFor='executive' className='fw2 ts1 f4'>
            Creative Direction
          </label>
          <div className='ts1 f4' name='executive'>
            Joaqu.n & DesForDesiree
          </div>
        </div>
        <div className='mb3'>
          <label htmlFor='executive' className='fw2 ts1 f4'>
            Released via
          </label>
          <div className='ts1 f4' name='executive'>
            The Nu Wave SOUND
          </div>
        </div>
        <div className='mb3'>
          <label htmlFor='executive' className='fw2 ts1 f4'>
            Licensed via
          </label>
          <div className='ts1 f4' name='executive'>
            Zay's Land
          </div>
        </div>
      </div>
      <div className='w-60-l w-100 ph6-m'>
        <video className='w-80-l w-100' src={media} loop autoPlay muted></video>
      </div>
    </article>
  )
}

const TrackInfo = ({ trackNo, title, artist, features, producers, media }) => {
  return (
    <article className='pl6-l pa0 flex flex-row-l flex-column'>
      <div className='text w-40-l w-100 mr4-l mb4 ph6-m'>
        <TrackNumber trackNo={trackNo} />
        <h1 className='ts1 f1'>{title}</h1>
        {features.length ? (
          <div className='mb3'>
            <label htmlFor='features' className='fw2 ts1 f5'>
              Featuring
            </label>
            <div className='mt1 ts1  flex w-100 ' name='features'>
              {features.map((feature) => (
                <p className='ma0 fw4 f4 ts1'>{feature.toUpperCase()}&nbsp;</p>
              ))}
            </div>
          </div>
        ) : null}
        <div className='mb3'>
          <label htmlFor='producers' className='fw2 ts1 f4'>
            Produced by
          </label>
          <div className='mt1 ts1 flex' name='producers'>
            {producers.map((producer) => (
              <p className='ma0 fw4 f4 ts1'>{producer.toUpperCase()}&nbsp;</p>
            ))}
          </div>
        </div>
        <div className='mb3'>
          <label htmlFor='mastered' className='fw2 ts1 f4'>
            Written, Mixed, & Mastered by
          </label>
          <div className='mt1 ts1 f3' name='mastered'>
            {artist}
          </div>
        </div>
      </div>
      <div className='w-60-l w-100 ph6-m'>
        {media.type === 'video' ? (
          <video
            className={`${
              media.src ===
              'https://zayland-assets.s3.amazonaws.com/videos/diorsheets.mp4'
                ? 'w-100'
                : 'w-60-l w-100'
            }`}
            src={media.src}
            loop
            muted
            autoPlay
          />
        ) : (
          <div className='flex justify-between'>
            {media.photos.map((photoSrc) => (
              <img key={photoSrc} src={photoSrc} alt={photoSrc} />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default FTWLCreditDetail
