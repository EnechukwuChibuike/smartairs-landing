/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#106E63",
        gray: "#d1cccc",
      },
      borderWidth: {
        one: "1px",
      },
    },
  },
  plugins: [require("daisyui")],
};
