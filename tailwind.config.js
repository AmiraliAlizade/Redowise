module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": {
            transform: rotate("0deg"),
          },
          "100%": {
            transform: rotate("360deg"),
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    animation: {
      spin: "spin 1s linear infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
