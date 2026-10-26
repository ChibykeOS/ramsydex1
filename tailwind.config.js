/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dhl: {
          red: '#D40511',
          'red-hover': '#BA040E',
          'red-dark': '#8F030B',
          yellow: '#FFCC00',
          'yellow-light': '#FFE466',
          'yellow-hover': '#E6B800',
          black: '#1A1A1A',
          dark: '#111827',
          gray: '#4B5563',
          muted: '#6B7280',
          light: '#F8F9FA',
          slate: '#2D3748',
          border: '#E5E7EB',
          surface: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['"Montserrat"', '"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'brand': '0 4px 20px -2px rgba(212, 5, 17, 0.15)',
        'yellow-glow': '0 4px 20px -2px rgba(255, 204, 0, 0.35)',
      }
    },
  },
  plugins: [],
}
