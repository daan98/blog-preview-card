/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "figtree-extra-bold": ["FigtreeExtraBold", "sans-serif"],
        "figtree-medium": ["FigtreeMedium", "sans-serif"],
        "figtree-italic": ["FigtreeItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
