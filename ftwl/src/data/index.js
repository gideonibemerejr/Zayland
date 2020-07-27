import appleMusic from '../assets/images/appleMusic.svg'
import spotify from '../assets/images/spotify.png'
import tidal from '../assets/images/tidal.svg'
import googlePlay from '../assets/images/googlePlay.png'
import soundcloud from '../assets/images/soundcloud.png'

export function getFTWLInfo() {
  return {
    trackNo: 0,
    route: '/credits',
    intro: `From Texas, With Love is a letter from me to you. No matter where you're from you'll relate to the stories and experiences talked about throughout.`,
    outro: `Thank you to Joaquin, Desiree, Madyson, Gideon, When Where What, Sharell, Austin, MSAW, Jordan and all of the people/fans who mad this possible and encouraged us to keep going. 
    <br /><br />
    Love, <br />
    Zayland
    `,
    media: 'https://zayland-assets.s3.amazonaws.com/videos/trafficlights.mp4',
  }
}

export function getFTWLPlatforms() {
  return [
    {
      link: 'https://soundcloud.com/zaylandxx/sets/from-texas-with-love-demo',
      title: 'Soundcloud',
      iconSrc: soundcloud,
    },
    {
      link:
        'https://open.spotify.com/album/4DdbYsC0c7ie5r84RpnnhH?si=oP2YcFMhQKe0DvHDA02YFA',
      title: 'Spotify',
      iconSrc: spotify,
    },
    {
      link: 'https://tidal.com/browse/album/147203939',
      title: 'Tidal',
      iconSrc: tidal,
    },
    {
      link:
        'https://play.google.com/store/music/album/Zayland_From_Texas_With_Love?id=B72opw2tmrzvpuez5dmj3wmuqgm',
      title: 'Google Play',
      iconSrc: googlePlay,
    },
    {
      link: 'https://music.apple.com/us/album/from-texas-with-love/1521865071',
      title: 'Apple Music',
      iconSrc: appleMusic,
    },
  ]
}

export function getVideos() {
  return [
    {
      url: 'https://www.youtube.com/embed/EM4PDkkEQn8',
      title: `Let's Go (Official Lyric Video)`,
    },
    {
      url: 'https://www.youtube.com/embed/8YCQuLXMNWI',
      title: `Blue feat. Dee Gatti`,
    },
  ]
}

export function getSongRoutes() {
  return [
    {
      trackNo: 1,
      title: 'Forgot Who I Was',
      artist: 'Zayland',
      features: [],
      producers: ['AEBeats'],
      route: '/credits/forgot-who-i-was',
      media: {
        type: 'photo',
        photos: ['https://zayland-assets.s3.amazonaws.com/images/forgot2.jpg'],
      },
    },
    {
      trackNo: 2,
      title: 'St. Thomas',
      artist: 'Zayland',
      features: ['Luna Luna'],
      producers: ['Stefon Osae,', 'Zayland'],
      route: '/credits/st-thomas',
      media: {
        type: 'video',
        videos: [
          'https://zayland-assets.s3.amazonaws.com/videos/stthomas.mp4',
          'https://zayland-assets.s3.amazonaws.com/videos/stthomas2.mp4',
        ],
      },
    },
    {
      trackNo: 3,
      title: 'Dior Sheets',
      artist: 'Zayland',
      features: ['The Teeta,', 'Mike Melinoe'],
      producers: ['Polito,', 'Sonic Major,', 'Zayland'],
      route: '/credits/dior-sheets',
      media: {
        type: 'video',
        src: 'https://zayland-assets.s3.amazonaws.com/videos/diorsheets.mp4',
      },
    },
    {
      trackNo: 4,
      title: 'Simone',
      artist: 'Zayland',
      features: [],
      producers: ['Zach Witness'],
      route: '/credits/simone',
      media: {
        type: 'photo',
        photos: ['https://zayland-assets.s3.amazonaws.com/images/simone2.jpg'],
      },
    },
    {
      trackNo: 5,
      title: `Let's Go`,
      artist: 'Zayland',
      features: ['Randy Class'],
      producers: ['Big Tex Johnny,', 'Zayland'],
      route: '/credits/lets-go',
      media: {
        type: 'video',
        src: 'https://zayland-assets.s3.amazonaws.com/videos/letsgo.mp4',
      },
    },
    {
      trackNo: 6,
      title: 'Not The Same',
      artist: 'Zayland',
      features: ['FRITOGANG'],
      producers: ['Big Tex Johnny'],
      route: '/credits/not-the-same',
      media: {
        type: 'photo',
        photos: [
          'https://zayland-assets.s3.amazonaws.com/images/notthesame.jpg',
          'https://zayland-assets.s3.amazonaws.com/images/notthesame2.jpg',
        ],
      },
    },
    {
      trackNo: 7,
      title: 'Floating',
      artist: 'Zayland',
      features: ['Spike Chester,', 'Devy Stonez'],
      producers: ['Stefon Osae,', 'Chase Goldman'],
      route: '/credits/floating',
      media: {
        type: 'photo',
        photos: [
          'https://zayland-assets.s3.amazonaws.com/images/floating.jpg',
          'https://zayland-assets.s3.amazonaws.com/images/floating2.jpg',
        ],
      },
    },
    {
      trackNo: 8,
      title: '500 Degrees',
      artist: 'Zayland',
      features: ['Dee Gatti'],
      producers: ['Zayland,', 'Larce'],
      route: '/credits/500-degrees',
      media: {
        type: 'video',
        src: 'https://zayland-assets.s3.amazonaws.com/videos/500degrees.mp4',
      },
    },
    {
      trackNo: 9,
      title: 'Her Interlude',
      artist: 'Zayland',
      features: ['LaVoyce'],
      producers: ['NoSalez'],
      route: '/credits/her-interlude',
      media: {
        type: 'photo',
        photos: [
          'https://zayland-assets.s3.amazonaws.com/images/her.jpg',
          'https://zayland-assets.s3.amazonaws.com/images/her2.jpg',
        ],
      },
    },
    {
      trackNo: 10,
      title: 'Wax & Rose Freestyle',
      artist: 'Zayland',
      features: [],
      producers: ['PKBeatz'],
      route: '/credits/wax-rose-freestyle',
      media: {
        type: 'video',
        src: 'https://zayland-assets.s3.amazonaws.com/videos/freestyle.mp4',
      },
    },
  ]
}
