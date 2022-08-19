/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#206ECF",

          "secondary": "#fff",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
        
        borderRadius: {
          'sm': '4px,'
        }
      },
    ],
  },
  plugins: [require("daisyui")],
  purge: [
    "./src/components/**/*.{js,jsx}",
    "./public/index.html",
  ],
}
