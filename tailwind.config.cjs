/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/App.vue",
    "./src/**/*.{vue, js, ts, jsx, tsx}"
  ],
  theme: {
    extend: {
      "colors": {
        //dark theme:
        'granite': '#282C34', //background
        'blackgray': '#1E2227', //search bkg
        'blackgray-100': '#21252B', //sidebar bkg
        'whitemuted': '#AAAAAA', //text muted

        //white theme:
        'white': '#FFFFFF', //bkg
        'barley': '#F7F8F9', //search and sidebar bkg
        'whitemuted-100': '#808080', //text muted
      }
    },
  },
  plugins: [],
}
