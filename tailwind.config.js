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
      colors: {
        'default': '#5C553A',
        'neutral': '#231F20',
        'semiBlack': '#1C1D1D',
        'grey': '#707070',
      },
      padding: {
        'pr': '72px',
        'contentTop': '80px',
        'contentX': '128px',
        'contentBottom': '100px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        serif1: ['Source Serif', 'sans'],
        bebas: ['Bebas Neue', 'sans'],
      },
      fontWeight: {
        '900': '900',
        '600': '600',
        '500': '500',
        '400': '400',
      },
      fontSize: {
        header2: ['40px', '48px'],
        btnSm: ['14px', '19.6px'],
        price: ['16px', '24px'],
        review: ['12px', '18px'],
        name: ['18px', '21.6px'],
        mobName: ['16px', '19.2px'],
        mobReview: ['11px', '16.5px'],
      },
      width: {
        'cardWidth': '355px',
        'starWidth': '10.43px',
        'mobCardWidth': '158px',
      },
      height: {
        'cardHeight': '467px',
        'imageHeight': '355px',
        'starHeight': '9.99px',
        'mobCardHeight': '159px',
      },
      borderRadius: {
        'imageRadius': '10px',
      }
    },
  },
  plugins: [],
}

