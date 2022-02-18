const { urlObjectKeys } = require("next/dist/shared/lib/utils");

module.exports = {  
  content: [   
      "./pages/**/*.{js,ts,jsx,tsx}",   
      "./components/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      keyframes: {
        lineAnim: {
          '100%, 0%': {'to': {strokeDashoffset: '0'}}
        }
      },
      animation: {
        lineAnim: "lineAnim 2s ease-in forwards"
      }
    },
  },
  plugins: [],
}