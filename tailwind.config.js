/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "700px",
      desktop: "1275px",
    },
    fontSize: {
      h1: [
        "3.5rem",
        { fontWeight: 700, letterSpacing: "2px", lineHeight: "58px" },
      ],
      h2: [
        "2.5rem",
        { fontWeight: 700, letterSpacing: "1.5px", lineHeight: "44px" },
      ],
      h3: [
        "2rem",
        { fontWeight: 700, letterSpacing: "1.15px", lineHeight: "36px" },
      ],
      h4: [
        "1.75rem",
        { fontWeight: 700, letterSpacing: "2px", lineHeight: "38px" },
      ],
      h5: [
        "1.5rem",
        { fontWeight: 700, letterSpacing: "1.7px", lineHeight: "33px" },
      ],
      h6: [
        "1.125rem",
        { fontWeight: 700, letterSpacing: "1.3px", lineHeight: "24px" },
      ],
      overline: [
        "0.875rem",
        { fontWeight: 400, letterSpacing: "10px", lineHeight: "19px" },
      ],
      subtitle: [
        "0.8125rem",
        { fontWeight: 700, letterSpacing: "1px", lineHeight: "25px" },
      ],
      body: ["0.9375rem", { fontWeight: 500, lineHeight: "25px" }],
    },
    extend: {},
  },
  plugins: [],
};
