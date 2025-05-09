/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths according to your project structure
    ],
    theme: {
      extend: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(89.64deg, #000000 57.93%, rgba(0, 0, 0, 0) 99.68%)',
        },
      },
      screens: {
        xs: '360px', // Extra small devices
        sm: '640px',   // Small devices (phones)
        md: '768px',   // Medium devices (tablets)
        lg: '1024px',  // Large devices (laptops)
        xl: '1280px',  // Extra large devices (desktops)
        xxl: '1536px', // Extra extra large (large screens)
      },
    },
    plugins: [],
  };
  