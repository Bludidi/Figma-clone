/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*.js',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-green': '#364935',
      },
      padding: {
        'pr': '72px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
      maxWidth: {
        'card': '355px'
      },
      maxHeight: {
        'card': '467px'
      }
    },
  },
  plugins: [],
}

