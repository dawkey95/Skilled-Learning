/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-blue=gray": "#666CA3",
        "yankee-blue": "#13183F",
        snow: "#FFFFFF",
        "roman-silver": "#83869A",
        "carnation-pink": "#FFA7C3",
        "sas-socks": "#F74780",
      },
      gradientColorStops: {
        gradient1: ["#FF6F48 0%", "#F02AA6 100%"],
        gradient2: ["#4851FF 0%", "#F02AA6 100%"],
        gradient3: ["#FFFFFF 0%", "#F0F1FF 100%"],
      },

      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
