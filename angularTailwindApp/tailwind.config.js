/** @type {import('tailwindcss').Config} */
module.exports = {
 purge: {
   enabled: true,
   content: ['./src/**/*.{html,ts}'],
 },
 darkMode: false, // or 'media' or 'class'
 theme: {
   extend: {
     colors: {
       // Add custom colors here
       // For example:
       'primary': '#123456',
       'secondary': '#789abc',
     },
     fontFamily: {
       // Add custom fonts here
       // For example:
       'sans': ['Roboto', 'Arial', 'sans-serif'],
       'serif': ['Georgia', 'serif'],
     },
     // Add other custom theme properties here
     // For example:
     fontSize: {
       'sm': '0.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
       '7xl': '5rem',
     },
   },
 },
 variants: {
   extend: {
     // Uncomment the following line to enable dark mode variants
     darkMode: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
   },
 },
 plugins: [
   // Add any additional Tailwind CSS plugins here
 ],
};


