/* eslint-disable global-require */
const defaultTheme = require("tailwindcss/defaultTheme");

// TODO: Figure out why tailwind.config.ts not working in ts (can't be inferred, similar : https://github.com/tailwindlabs/tailwindcss/discussions/12512)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./node_modules/acm-components/dist/*"],
  presets: [require("acm-components/config/tailwind")],
  plugins: [
    require("acm-components/config/plugins/typography"),
    require("acm-components/config/plugins/container"),
    require("tailwindcss-animate"),
  ],
  theme: {
    // TODO: Check if these will overide the preset config or not
    fontFamily: {
      sans: ["var(--font-sans)", "Mulish", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      keyframes: {
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },
    },
  },
};
