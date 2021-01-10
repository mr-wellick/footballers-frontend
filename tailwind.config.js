module.exports = {
  purge: ['./pages/**/*.js', './src/components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    inset: {
      24: '24px',
      60: '60px',
    },
    colors: {
      'dark-blue': '#0f1923',
      'pale-blue': '#a3b2c3',
      'ligthest-pale-blue': '#202a35',
      'sidebar-outline': '#2d3c4e',
      white: '#fff',
      // new colors
      'palest-blue': '#f7f8fb',
    },
    fontSize: {
      14: '14px',
      '2xl': '1.5rem',
    },
    extend: {
      spacing: {
        7: '7px',
        12: '12px',
        16: '16px',
        24: '24px',
        28: '28px',
        40: '40px',
        48: '48px',
        60: '60px',
        240: '240px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
