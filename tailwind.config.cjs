/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'Min-Sans': [
          'min sans',
          'ui-sans-serif',
          'system-ui',
          '-apple - system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      },
      colors: {
        brand: {
          primary: '#3A56CD'
        }
      },
      
      screens: {
        ss: '300px',
        sm: '375px',
        md: '768px',
        lg: '976px',
        xlg: '1024px',
        '8xl': '1440px'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
