/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EF565D',
        },
        secondary: {
          DEFAULT: '#73B9EB',
        },
        tertiary: {
          DEFAULT: '#071117',
        },
        background: {
          primary: '#0F172A',   // slate-950
          secondary: '#1E293B', // slate-800
          light: '#F8FAFC',     // slate-50
        },
      }
    }
  }
} 