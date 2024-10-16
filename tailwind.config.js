/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        body: `radial-gradient(ellipse at top right, #2B0C31, transparent),
            radial-gradient(ellipse at bottom left, #24051A, transparent)`,
        pink: "radial-gradient(ellipse at center, #D741A7 0 30%, transparent 70% 100%)",
        purple:
          "radial-gradient(ellipse at center, #7E3BA5 0 30%, transparent 70% 100%)",
        salmon:
          "radial-gradient(ellipse at center, #ef707a 0 30%, transparent 70% 100%)",
        fushia:
          "radial-gradient(ellipse at center, #F05365 0 30%, transparent 70% 100%)",
        orange:
          "radial-gradient(ellipse at center, #FF8C42 0 30%, transparent 70% 100%)",
      },
      textStroke: {
        DEFAULT: "1px",
        sm: "0.5px",
        lg: "2px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke": "1px black",
        },
        ".text-stroke-sm": {
          "-webkit-text-stroke": "0.5px black",
        },
        ".text-stroke-lg": {
          "-webkit-text-stroke": "2px black",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
