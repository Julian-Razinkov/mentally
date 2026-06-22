const config = {
  plugins: {
    '@tailwindcss/postcss': {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            'dm-serif-display': ['"DM Serif Display"', 'serif'],
          },
        },
      },
    },
  },
};

export default config;
