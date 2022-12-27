/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#5f20a3',

          secondary: '#9ef799',

          accent: '#ce94e0',

          neutral: '#2B2532',

          'base-100': '#E9E7E9',

          info: '#49ABD4',

          success: '#4BD8C5',

          warning: '#E39516',

          error: '#EF437A',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
