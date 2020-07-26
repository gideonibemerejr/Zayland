import React from 'react';
import { useLocation } from 'react-router-dom';
import { TrackNumber } from '..';

const FTWLCreditDetail = () => {
  const location = useLocation();

  return (
    <main className='w-100 mt5'>
      {location.state.data.intro ? (
        <AlbumInfo
          trackNo={location.state.data.trackNo}
          intro={location.state.data.intro}
          outro={location.state.data.outro}
          media={location.state.data.media}
        />
      ) : (
        <TrackInfo {...location.state.data} />
      )}
    </main>
  );
};

const AlbumInfo = ({ trackNo, intro, outro, media }) => {
  return (
    <article className='pl6-l pa0 flex flex-row-l flex-column'>
      <div className='text w-25-l w-100 mr7-l mb4'>
        <TrackNumber trackNo={trackNo} />
        <h1 className='ts1 f2'>From Texas, With Love</h1>
        <div className='f4 ts1 mb3'>{intro}</div>

        <div className='f4 ts1 mb4'>{outro}</div>

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
      <div className='w-50-l w-100'>
        <video className='w-75-l w-100' src={media} loop autoPlay muted></video>
      </div>
    </article>
  );
};

const TrackInfo = ({ trackNo, title, artist, features, producers, media }) => {
  return (
    <article className='pl6-l pa0 flex flex-row-l flex-column'>
      <div className='text w-25-l w-100 mr7-l mb4'>
        <TrackNumber trackNo={trackNo} />
        <h1 className='ts1 f1'>{title}</h1>
        <div className='f4 ts1 mb3'></div>

        <div className='f4 ts1 mb4'></div>

        {features.length ? (
          <div className='mb3'>
            <label htmlFor='executive' className='fw2 ts1 f4'>
              Featuring
            </label>
            <div className='ts1 f4 flex' name='executive'>
              {features.map((feature) => (
                <p className='ma0 fw4 f3 ts1'>{feature.toUpperCase()}&nbsp;</p>
              ))}
            </div>
          </div>
        ) : null}
        <div className='mb3'>
          <label htmlFor='executive' className='fw2 ts1 f4'>
            Produced by
          </label>
          <div className='ts1 f4' name='executive'>
            {producers.map((producer) => (
              <p className='ma0 fw4 f3 ts1'>{producer.toUpperCase()}&nbsp;</p>
            ))}
          </div>
        </div>
        <div className='mb3'>
          <label htmlFor='executive' className='fw2 ts1 f4'>
            Written, Mixed, & Mastered by
          </label>
          <div className='ts1 f3' name='executive'>
            {artist}
          </div>
        </div>
      </div>
      <div className='w-50-l w-100'>
        {media.type === 'video' ? (
          <video
            className={`${
              media.src ===
              'https://zayland-assets.s3.amazonaws.com/videos/diorsheets.mp4'
                ? 'w-100'
                : 'w-75-l w-100'
            }`}
            src={media.src}
            controls
          ></video>
        ) : (
          <img src={media.src} alt='' />
        )}
      </div>
    </article>
  );
};

export default FTWLCreditDetail;
