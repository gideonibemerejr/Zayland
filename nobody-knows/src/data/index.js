import appleMusic from '../assets/images/appleMusic.png';
import spotify from '../assets/images/spotify.png';
import tidal from '../assets/images/tidal.svg';
import googlePlay from '../assets/images/googlePlay.png';
import soundcloud from '../assets/images/soundcloud.png';

export function getAlbums() {
  return [
    {
      link: 'https://open.spotify.com/track/48uGe5PZPhqDSVdglfTUoe',
      src: 'https://i.scdn.co/image/ab67616d0000b273292860c134ace55b937cf7f1',
      alt: 'Rolling Stone Cover',
      title: 'Rolling Stone',
      artists: ['JAKEGATEWOOD,', 'Luna Luna,', 'Zayland']
    },
    {
      link: 'https://open.spotify.com/track/3KWrPZTMeUVB6QWCyWknEI',
      src: 'https://i.scdn.co/image/ab67616d0000b2735761167fe83c8855a1ed19f5',
      alt: 'PULL UP! Album Cover',
      title: 'PULL UP!',
      artists: ['Zayland,', 'Stefon Osae']
    },
    {
      link: 'https://open.spotify.com/track/0VfX1idPcwbXTPDcMbSMh9',
      src: 'https://i.scdn.co/image/ab67616d0000b2737b78417fa313e9955e88eb29',
      alt: 'Love Games and Interludes Album Cover',
      title: 'Love Games & Interludes',
      artists: ['Zayland']
    },
    {
      link: 'https://open.spotify.com/track/2gmgfDYsUy5L7B7oIMxD91',
      src: 'https://i.scdn.co/image/ab67616d0000b2734af29e5829afab2bb2e2ee75',
      alt: 'Adidas Shorts Album Cover',
      title: 'Adidas Shorts',
      artists: ['Zayland']
    },
    {
      link: 'https://open.spotify.com/track/6WHaEh0xwofsjynRnLIg8K',
      src: 'https://i.scdn.co/image/ab67616d0000b2736a95889b581b24e1435605d5',
      alt: 'Moon Album Cover',
      title: 'Moon',
      artists: ['Zayland']
    }
  ];
}

export function getArtistPlatforms() {
  return [
    {
      link: 'https://soundcloud.com/zaylandxx',
      title: 'Soundcloud',
      iconSrc: soundcloud
    },
    {
      link: 'https://open.spotify.com/artist/5M9hQI5iiKLFHZ8JRaZafM',
      title: 'Spotify',
      iconSrc: spotify
    },
    {
      link: 'https://tidal.com/browse/artist/9286800?play=true',
      title: 'Tidal',
      iconSrc: tidal
    },
    {
      link: 'https://play.google.com/music/listen?u=0#/sr/zayland',
      title: 'Google Play',
      iconSrc: googlePlay
    },
    {
      link:
        'https://geo.music.apple.com/us/artist/zayland/1314125293?mt=1&app=music&ls=1',
      title: 'Apple Music',
      iconSrc: appleMusic
    }
  ];
}
