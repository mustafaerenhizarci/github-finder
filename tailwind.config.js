/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  daisyui: {
    themes: ["dracula"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
