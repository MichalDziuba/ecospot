// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#1b2223",
        secondary: "#3a4f50",
        backdrop: "#00000080",
      },
      colors: {
        primary: "#15d600",
        secondary: "#0ef6cc",
        white: "#f4fefd",
      },
      fontSize: {
        sm: ".875rem",
        base: "1rem",
        md: "1.15rem",
        xl: "1.28rem",
        "2xl": "1.46rem",
        "3xl": "1.653rem",
        "4xl": "2.2rem",
        "5xl": "3.1rem",
      },
      boxShadow: {
        shadowSection: "0px 3px 10px 0px rgba(21, 214, 0, 1)",
        shadowSectionHover: "#15d600 0px 0px -15px",
      },
    },
  },
  plugins: [],
};
