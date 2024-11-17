/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        // Custom gradient backgrounds
        'blue-gradient': "linear-gradient(to right, #00d4ff, #6a0dad)",
        'custom-gradient': "linear-gradient(to right, #ff007c, #6a0dad, #00d4ff, #002884)",
      },
      animation: {
        fadeInGlow: "fadeInGlow 3s ease-in-out", // Glowing text effect
        slideIn: "slideIn 2s cubic-bezier(0.23, 1, 0.32, 1)", // Slide-in animation
        fadeInAndStay: "fadeInAndStay 3s ease-in-out forwards", // Fade-in with stay effect
        fadeInAndGlow: "fadeInAndGlow 2s ease-in-out forwards", // For logo animations
        spark: "spark 3s cubic-bezier(0.25, 1, 0.5, 1) forwards", // Enhanced spark effect
      },
      keyframes: {
        fadeInGlow: {
          "0%": { opacity: "0", textShadow: "0 0 5px #00ffc3" },
          "50%": { opacity: "0.8", textShadow: "0 0 15px #00ffc3, 0 0 30px #00ffc3" },
          "100%": { opacity: "1", textShadow: "0 0 20px #00ffc3, 0 0 40px #00ffc3, 0 0 80px #00ffc3" },
        },
        slideIn: {
          "0%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeInAndStay: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInAndGlow: {
          "0%": { opacity: "0", transform: "translateY(-20px) scale(0.9)" },
          "50%": { opacity: "0.8", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        spark: {
          "0%": { left: "-10%", opacity: "0" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
          "100%": { left: "110%", opacity: "0", transform: "scale(0.8)" },
        },
      },
      colors: {
        electricBlue: "#00d4ff",
        deepPurple: "#6a0dad",
        gradientWhite: "#ffffff",
        gradientBlack: "#000000",
      },
    },
  },
  plugins: [],
};
