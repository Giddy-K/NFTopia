import { liveBackground } from './src/assets';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 10px rgba(0, 0, 255, 0.5)', // Adjust color and size as needed
      },
      colors: {
        siteblack: '#131519',
        siteDimBlack: '#191d23',
        siteViolet: '#7f46f0',
        siteWhite: '#9eacc7',
        siteBlue: '#1248B3',
        sitePeach: '#6FDCEB',
        siteRed: '#FBFF00',
        sitePeach: '#FFE5B4',
        siteTransparent: '#FFE5B400',
      },
      backgroundImage: {
        liveBackground: "url('/src/assets/background/aurora_Domain.jpg')",
        auroraDomain: "url('/src/assets/background/aurora_Domain.jpg')",
        celestialCrossroads: "url('/src/assets/background/celestial_Crossroads.jpg')",
        chronoSpires: "url('/src/assets/background/chrono_Spires.jpg')",
        etherealRealms: "url('/src/assets/background/ethereal_Realms.jpg')",
        mysticEnclave: "url('/src/assets/background/mystic_Enclave.jpg')",
        space: "url('/src/assets/background/space.jpg')",
        colosseumOfChallenges: "url('/src/assets/background/Colosseum of Challenges.jpeg')",
        astral: "url('/src/assets/background/astral.jpg')",
        saiman: "url('/src/assets/background/saiman.jpg')",
        eoaalien: "url('/src/assets/background/eoaalien.jpg')",
        panight: "url('/src/assets/background/panight.jpg')",
        heroImg: "url('/src/assets/background/hero-img.jpg')",
        landing: "url('/src/assets/background/landing.jpg')",
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
