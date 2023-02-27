/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '540px',
      // => @media (min-width: 640px) { ... }

      md: '720px',
      // => @media (min-width: 768px) { ... }

      lg: '960px',
      // => @media (min-width: 1024px) { ... }

      xl: '1140px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1536px) { ... }
    },

    container: {
      center: true,
    },

    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      17: '68px',
      18: '72px',
      19: '76px',
      20: '80px',
      21: '84px',
      22: '88px',
      23: '92px',
      24: '96px',
      25: '100px',
      110: '110px',
      120: '120px',
      130: '130px',
      140: '140px',
      150: '150px',
      160: '160px',
      170: '170px',
      180: '180px',
      190: '190px',
      200: '200px',
      260: '260px',
    },

    extend: {

      colors: {
        white: '#ffffff',
        black: '#38424D',
        gray: '#FBFBFF',
        yellow: '#FDD446',
        'theme-color': '#cf423a', // AHO-red-500
        'border-color': '#e6eaef', // AHO-blue-100
        'body-color': '#66809d', // AHO-blue-300
        'heading-color': '#002b5c', // AHO-blue-500
        shadow: '#9D6A6A',
        // https://tailcolor.com/palettes/cf423a
        'AHO-red': {
          50: '#faeceb',
          100: '#f5d9d8',
          200: '#ecb3b0',
          300: '#e28e89',
          400: '#d96861',
          500: '#cf423a',
          600: '#a6352e',
          700: '#7c2823',
          800: '#531a17',
          900: '#290d0c',
        },
        // https://tailcolor.com/palettes/002b5c
        'AHO-blue': {
          50: '#e6eaef',
          100: '#ccd5de',
          200: '#99aabe',
          300: '#66809d',
          400: '#33557d',
          500: '#002b5c',
          600: '#00224a',
          700: '#001a37',
          800: '#001125',
          900: '#000912',
        },
      },

      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
      },

      transitionDelay: {
        400: '400ms',
        600: '600ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
