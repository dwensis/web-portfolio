/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient' : 'linear-gradient(to right, purple, orange 50%, #fff 50%);'
      },
      backgroundSize: {
        '200' : '200% 100%',
        '100' : '0% 100%',
      },
      backgroundPosition: {
        'end' : '100%',
        'start' : '0% 100%'
      }
    },
  },
  plugins: [],
}