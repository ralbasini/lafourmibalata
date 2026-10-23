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
        broom: '#F28A1E',
        sun:   '#FFC857',
        peach: '#FFE9CC',
        pale:  '#DDEFE1',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body:    ['"Figtree"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
