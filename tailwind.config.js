/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",  // Mobile kecil
        md: "768px",  // Tablet
        lg: "1024px", // Laptop/Desktop
        xl: "1280px", // Monitor besar
      },
    },
  },
  plugins: [],
}
