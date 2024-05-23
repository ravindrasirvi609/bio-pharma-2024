/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#eee",
        },
        black: "#000",
        darkslategray: "#3a3a3a",
        crimson: {
          "100": "#ff5869",
          "200": "#e63d4f",
        },
        gray: {
          "100": "#888",
          "200": "#222",
          "300": "#0f2137",
          "400": "#010101",
          "500": "rgba(255, 255, 255, 0.3)",
          "600": "rgba(255, 255, 255, 0.9)",
          "700": "rgba(255, 255, 255, 0)",
        },
        white: "#fff",
        mistyrose: "#ffdfe3",
        gainsboro: "#e6e6e6",
        lightgray: "#d4d4d4",
        dimgray: "#5a5a5a",
      },
      spacing: {},
      fontFamily: {
        "text-small": "Inter",
        h6: "Genos",
        "dm-sans": "'DM Sans'",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
      },
      borderRadius: {
        "31xl": "50px",
        "181xl": "200px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      xl: "20px",
      base: "16px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "29xl": "48px",
      "19xl": "38px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
