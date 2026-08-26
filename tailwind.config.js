/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        brand: {
          blue: "#0066FF",
          glow: "rgba(0, 102, 255, 0.4)",
          accent: "#2563EB",
          muted: "rgba(255, 255, 255, 0.65)",
          subtle: "rgba(255, 255, 255, 0.4)",
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Space Mono"', 'monospace'],
        serif: ['"Space Mono"', 'monospace'],
        display: ['"Anton SC"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
