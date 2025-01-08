/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "night-sm": "url('/src/assets/backgrounds/night_sm.png')",
        "night-md": "url('/src/assets/backgrounds/night_md.png')",
        "night-lg": "url('/src/assets/backgrounds/night_lg.png')",
        "daylight-sm": "url('/src/assets/backgrounds/daylight_sm.png')",
        "daylight-md": "url('/src/assets/backgrounds/daylight_md.png')",
        "daylight-lg": "url('/src/assets/backgrounds/daylight_lg.png')",
      },
    },

    colors: {
      "bright-sun": {
        50: "#fefbe8",
        100: "#fdf4c4",
        200: "#fce88c",
        300: "#facd30",
        400: "#f7bc18",
        500: "#e7a30b",
        600: "#c77d07",
        700: "#9f5809",
        800: "#834610",
        900: "#703913",
        950: "#411c07",
      },

      white: "#fff",
      black: "#000",
      saved: "#34c759",
      remove: "#ff3b30",
    },
  },
  plugins: [],
};
