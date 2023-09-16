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
        'pr': '72px',
        'contentTop': '80px',
        'contentX': '128px',
        'contentBottom': '100px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
      width: {
        'cardWidth': '355px'
      },
      height: {
        'cardHeight': '467px',
        'imageHeight': '355px'
      },
      borderRadius: {
        'imageRadius': '10px'
      }
    },
  },
  plugins: [],
}

