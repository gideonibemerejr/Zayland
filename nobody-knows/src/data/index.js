import appleMusic from '../assets/images/appleMusic.svg'
import spotify from '../assets/images/spotify.png'
import tidal from '../assets/images/tidal.svg'
import googlePlay from '../assets/images/googlePlay.png'
import soundcloud from '../assets/images/soundcloud.png'
import fuck from '../assets/images/songTitles/fuck.png'
import blue from '../assets/images/songTitles/blue.png'
import what from '../assets/images/songTitles/what.png'
import love from '../assets/images/songTitles/love.png'
import summers from '../assets/images/songTitles/summers.png'

export function getAlbums() {
  return [
    {
      link: 'https://open.spotify.com/track/48uGe5PZPhqDSVdglfTUoe',
      src: 'https://i.scdn.co/image/ab67616d0000b273292860c134ace55b937cf7f1',
      alt: 'Rolling Stone Cover',
      title: 'Rolling Stone',
      artists: ['JAKEGATEWOOD,', 'Luna Luna,', 'Zayland'],
    },
    {
      link: 'https://open.spotify.com/track/3KWrPZTMeUVB6QWCyWknEI',
      src: 'https://i.scdn.co/image/ab67616d0000b2735761167fe83c8855a1ed19f5',
      alt: 'PULL UP! Album Cover',
      title: 'PULL UP!',
      artists: ['Zayland,', 'Stefon Osae'],
    },
    {
      link: 'https://open.spotify.com/track/0VfX1idPcwbXTPDcMbSMh9',
      src: 'https://i.scdn.co/image/ab67616d0000b2737b78417fa313e9955e88eb29',
      alt: 'Love Games and Interludes Album Cover',
      title: 'Love Games & Interludes',
      artists: ['Zayland'],
    },
    {
      link: 'https://open.spotify.com/track/2gmgfDYsUy5L7B7oIMxD91',
      src: 'https://i.scdn.co/image/ab67616d0000b2734af29e5829afab2bb2e2ee75',
      alt: 'Adidas Shorts Album Cover',
      title: 'Adidas Shorts',
      artists: ['Zayland'],
    },
    {
      link: 'https://open.spotify.com/track/6WHaEh0xwofsjynRnLIg8K',
      src: 'https://i.scdn.co/image/ab67616d0000b2736a95889b581b24e1435605d5',
      alt: 'Moon Album Cover',
      title: 'Moon',
      artists: ['Zayland'],
    },
  ]
}

export function getArtistPlatforms() {
  return [
    {
      link: 'https://soundcloud.com/zaylandxx/sets/nobody-knows-ep',
      title: 'Soundcloud',
      iconSrc: soundcloud,
    },
    {
      link: 'https://open.spotify.com/album/3XcLxDz2UhN4mROLnkCGGb',
      title: 'Spotify',
      iconSrc: spotify,
    },
    {
      link: 'https://tidal.com/browse/album/134020393',
      title: 'Tidal',
      iconSrc: tidal,
    },
    {
      link:
        'https://play.google.com/store/music/album/Zayland_Nobody_Knows?id=Bwa6a2jeu4ewa2gpvqcl7a7lwki',
      title: 'Google Play',
      iconSrc: googlePlay,
    },
    {
      link:
        'http://geo.music.apple.com/us/album/nobody-knows-ep/1502401893?mt=1&app=music',
      title: 'Apple Music',
      iconSrc: appleMusic,
    },
  ]
}

export function getFullAlbumCredits() {
  return [
    {
      songTitleSrc: fuck,
      songTitle: 'Fuck A Love Song',
      story: `“Fuck a Love Song” is about the real struggles of a relationship and how it’s not always a happy-go-lucky story of everything always going smoothly. It talks about the complications I’ve faced now and in the past with relationships.`,
      trackNo: '1',
      producers: ['Mario Alexander'],
    },
    {
      songTitleSrc: blue,
      songTitle: 'Blue (Featuring Dee Gatti)',
      story: `“Blue” is about being in a dark place mentally and becoming fed up with the world around you. I lost one of the most important people in my life at the beginning of the year, and then one of my idols passed a few weeks after, so I was just in a dark place and people were bombarding me with meaningless conversations and it truly signifies how I felt at that moment. I just wanted to run away from everything and I was able to do that in that song.`,
      trackNo: '2',
      producers: ['Ashton McCreight'],
    },
    {
      songTitleSrc: what,
      songTitle: 'What U Know',
      story: `“What U Know” is simply me talking my shit, and is something to play when you’re in a mood where you’re carefree or chasing the feeling of being unbothered. At the end of the song there’s a snippet of an unreleased song coming out later this year as well. Something to look forward to, and also ties the project back together before going into “Love Games & Interludes”`,
      trackNo: '3',
      producers: ['The Keyz,', 'Sonic Major'],
    },
    {
      songTitleSrc: love,
      songTitle: 'Love Games and Interludes',
      story: `“Love Games & Interludes” is a two part love story and it speaks on the feeling of not being enough. The latter half of the song is a one way display of an argument, the line “you say you’ve been going through it, I’m just here doing the same” accurately represents the whole song.`,
      trackNo: '4',
      producers: ['Israel,', 'AEBEATS'],
    },
    {
      songTitleSrc: summers,
      songTitle: "Summer's Interlude (Tokyo Ave Remix)",
      story: `Summer’s Interlude is Tokyo Ave’s remix of the second half of ‘Love Games and Interludes”. It’s called Summer’s Interlude because it’s a light hearted vibe, and a lead up to what Zay has coming up in the summer...`,
      trackNo: '5',
      producers: ['Tokyo Ave,', 'Israel,', 'AEBEATS'],
    },
  ]
}

export function getAlbumCredits() {
  return {
    story: `<i>Nobody Knows</i> is about how lost we all feel in times of uncertainty. <br /><br />This project is an expression of different emotions I've been feeling over the past few months.Whether it be navigating relationships, fighting through emotions, or figuring out how to express myself. <br /><br />At the end of the day we’re all just winging this shit, this is a story of me winging it. These songs are how I coped with different emotions. Hopefully you can relate.`,
    credits: {
      'EXECUTIVE PRODUCER': 'JOAQU.N',
      'mixed and mastered by':
        'ZAYLAND + additional mixing by TOKYO AVE on track 5',
      'written by': 'ZAYLAND',
      'RECORDED BY': 'ZAYLAND',
      'CREATIVE DIRECTION': 'JOAQU.N & DESIREE',
      'GRAPHIC DESIGN': 'JOAQU.N',
      PHOTOGRAPHY: 'DESIREE',
      'WEB DESIGN + DEVELOPMENT': 'GIDEON IBEMERE, JR',
      MARKETING: 'ZAYLAND & JOAQU.N',
      'RELEASED BY': 'THE NU WAVE SOUND',
    },
  }
}
