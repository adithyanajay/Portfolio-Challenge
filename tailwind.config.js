/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white_bg: "#F2F2F2",
        main_grey: "#4F4F4F",
        sec_grey: "#828282",
        prog_grey: "#C4C4C4",
        cont_blue: "#2F80ED",
      },
    },
  },
  plugins: [],
};
