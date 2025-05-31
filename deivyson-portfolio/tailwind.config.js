// tailwind.config.js
module.exports = {
  darkMode: 'class', // Adicione esta linha para habilitar o modo escuro
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#1f2937', // Certifique-se que esta cor está definida
        },
      },
    },
  },
  plugins: [],
}