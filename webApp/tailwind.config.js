module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    container: [],
  },
  theme: {
    extend: {
      screens: {
      },
    },
    fontFamlily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}