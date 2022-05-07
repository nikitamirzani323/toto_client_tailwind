module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'),require("tailwind-scrollbar-hide"),require("daisyui")],
  daisyui: {
    themes: [
      {
      },
      "emerald", "dracula"],
  },
}