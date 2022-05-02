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
        myLight: {
          "primary": "#91f7bc",      
          "secondary": "#94e07d",
          "accent": "#e50ba0",
          "neutral": "#1A1C28",
          "base-100": "#E7E3E8",
          "info": "#70CAE6",
          "success": "#209D82",
          "warning": "#FCA131",
          "error": "#EB4228",
        },
      },
      "emerald", "dracula"],
  },
}