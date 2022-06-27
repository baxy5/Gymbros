/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        color: {
          one: "#DFEAE2",
          two: "#B4D6C1",
          three: "#8DC3A7",
          four: "#6BAF92",
          five: "#4E9C81",
          six: "#358873",
          seven: "#207567",
        },
      },
      backgroundColor: {
        color: {
          one: "#DFEAE2",
          two: "#B4D6C1",
          three: "#8DC3A7",
          four: "#6BAF92",
          five: "#4E9C81",
          six: "#358873",
          seven: "#207567",
        },
      },
      borderColor: {
        color: {
          one: "#DFEAE2",
          two: "#B4D6C1",
          three: "#8DC3A7",
          four: "#6BAF92",
          five: "#4E9C81",
          six: "#358873",
          seven: "#207567",
        },
      },
    },
  },
  plugins: [],
};
