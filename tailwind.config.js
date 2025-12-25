/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inconsolata', 'monospace'],
        'mono': ['Inconsolata', 'monospace'],
        'inconsolata': ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
}

