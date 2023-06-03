module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Opensans: "'Open Sans', sans-serif",
      },
    },
  },
  variants: {
    extend: {
      border: ['focus'],
    }
  },
  plugins: [require('@tailwindcss/forms')],
};
