module.exports = {
  purge: ["./pages/**/*.js", "./src/components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "dark-blue": "#0f1923",
      "pale-blue": "#a3b2c3",
      "ligthest-pale-blue": "#202a35",
      "sidebar-outline": "#2d3c4e",
      white: "#fff",
    },
    fontSize: {
      14: "14px",
    },
    extend: {
      spacing: {
        7: "7px",
        16: "16px",
        24: "24px",
        28: "28px",
        240: "240px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
