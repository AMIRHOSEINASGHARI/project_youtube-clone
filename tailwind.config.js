/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-1": "#0F0F0F",
        "gray-1": "#65748E",
        "gray-2": "#F2F2F2",
        "gray-3": "#CCCCCC",
      },
    },
  },
  plugins: [],
};
