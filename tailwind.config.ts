import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: '0.8125rem',
      },
      colors: {
        'blue-gray-80': '#343741',
        'black-coral': '#5E626F',
      },
      backgroundImage: {
        'main-section': "url('/imgs/main-section-bg.webp')",
      },
      screens: {
        '3xl': '1920px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      margin: {
        '4.5': '1.125rem',
        '15': '3.75rem',
      },
      padding: {
        '15': '3.75rem',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        body: { fontWeight: theme('fontWeight.black') },
      });
    },
  ],
};
export default config;
