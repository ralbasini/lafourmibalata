/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        ink:   '#14181A',
        leaf:  '#1F5A3B',
        sage:  '#8CC09A',
        mist:  '#F4F7F2',
        straw: '#E8A23A',
        broom: '#D69A55',
        sun:   '#EBC884',
        peach: '#F6E8D4',
        pale:  '#DDEFE1',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body:    ['"Figtree"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
