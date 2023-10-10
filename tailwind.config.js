/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        backgroundImage: {
            'bad': "url('./src/assets/images/coff_bad.png')"
        },
        extend: {
            'bg-bad': {
                maxWidth: '100%',
            }
        }
    },
  },
  plugins: [],
}

