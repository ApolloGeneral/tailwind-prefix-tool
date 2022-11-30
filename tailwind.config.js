/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/{ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')],
};
