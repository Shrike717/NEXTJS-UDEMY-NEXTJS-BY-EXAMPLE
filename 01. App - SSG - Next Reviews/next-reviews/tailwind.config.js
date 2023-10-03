/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{jsx,tsx}", // JSX and TSX files in the src folder
		"./components/**/*.{jsx,tsx}", // JSX and TSX files in the src folder
	],
	theme: {
		extend: {
			fontFamily: {
				// Default custom font family is st with sans key:
				sans: ["var(--font-exo-2)", "sans-serif"],
				// First setting the custom font variable, then a fallback font
				orbitron: ["var(--font-orbitron)", "sans-serif"],
			},
		},
	},
	plugins: [],
};
