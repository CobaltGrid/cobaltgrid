module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ["Alata", "sans-serif"],
      body: ["Source Sans Pro", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9],
    },
    extend: {
      colors: {
        "cobalt-bright": "#00B5FF",
        "cobalt-primary": "#006F7F",
        "cobalt-mud": "#393939",
        "cobalt-gray": "#838383",
        "teal-700": "#2c7a7b",
        "teal-900": "#234e52",
        "gray-200": "#edf2f7",
        "blue-600": "#3182ce",
      },
    },
  },
  variants: {
    animation: ["responsive", "focus"],
  },
  plugins: [require("tailwindcss-aspect-ratio")],
}
