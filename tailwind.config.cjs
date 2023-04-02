/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-blue=gray": "#666CA3",
        "yankee-blue": "#666CA3",
        snow: "#FFFFFF",
        "roman-silver": "#83869A",
        "carnation-pink": "#FFA7C3",
        "sas-socks": "#F74780",
      },
    },
  },
  plugins: [],
};
