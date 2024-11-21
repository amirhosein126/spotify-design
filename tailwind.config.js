/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},

    fontFamily: {
      'body': ['"Open Sans"', "'yekan'"],
      'nunito':["Nunito Sans"]
    }
    
  },
  plugins: [require('tailwind-scrollbar')],
  
}


