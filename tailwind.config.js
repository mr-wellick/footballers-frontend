module.exports = {
  purge: ["./pages/**/*.js", "./src/components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      consoleSidebar: "#0f1923", // dark blue
      inactiveSidebarItem: "#a3b2c3", // pale blue
      activeSidebarItem: "#202a35", // ligthest palest blue
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
