/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#FFBA19",
      primaryShade: "#ffd675",
      primaryDark: "#805d0d",
      bodyTextColor: "#4E4B66",
      bodyTextColorWhite: "#FAFBFC",
      headerColor: "#1a1a1a",
      black: "#000000",
    },
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
