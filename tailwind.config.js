/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Mode: Red Bull Racing
        'rb-blue': '#061D42', // Dark Navy
        'rb-red': '#CD1028',   // Racing Red
        'rb-yellow': '#FFC800', // Bull Yellow

        // Light Mode: Mercedes-AMG Petronas
        'merc-silver': '#F0F0F0', // Silver Arrow
        'merc-teal': '#00D2BE',   // Petronas Teal
        'merc-black': '#1F1F1F',  // Carbon Black
      }
    },
  },
  plugins: [],
};
