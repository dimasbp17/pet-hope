const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: '#6A994E',
        secondary: '#D9CAB3',
        background: '#F4EDE0',
        text: '#2E4A28',
        cta: '#CC7722',
      },
      fontFamily: {
        poppins: 'Poppins, serif',
      },
    },
  },
  plugins: [],
});
