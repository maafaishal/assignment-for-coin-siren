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
        azure: '#EDFCFF',
        blueberry: '#4A77FF',
        'blue-gray-40': '#C1C5CF',
        'blue-gray-80': '#343741',
        'black-coral': '#5E626F',
        'trabuddy-alternative': '#00C696',
        'light-sky-blue': '#8BC4FF',
        'off-green': '#E9F7EF',
        turquoise: '#40E2E8',
        'yellow-sun': '#FBFF23',
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
    // @ts-expect-error: any is expected from the Tailwind
    function ({ addBase, theme }) {
      addBase({
        body: { fontWeight: theme('fontWeight.black') },
      });
    },
  ],
};
export default config;
