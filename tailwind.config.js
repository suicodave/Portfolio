const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  prefix: '',
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true
};
