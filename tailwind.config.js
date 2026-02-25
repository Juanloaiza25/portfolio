/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'accent-yellow': '#FBFF48',
                'accent-blue': '#3b82f6',
                'accent-pink': '#ff4d94',
                'bg-primary': '#f5f5f0',
                'neo-black': '#000000',
                'neo-white': '#ffffff',
                'neo-yellow': '#FBFF48',
                'neo-green': '#4ade80',
                'neo-pink': '#ff4d94',
            },
            fontFamily: {
                display: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
