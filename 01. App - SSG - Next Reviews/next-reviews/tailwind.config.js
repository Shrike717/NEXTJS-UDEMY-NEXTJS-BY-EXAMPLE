/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{jsx,tsx}", // JSX and TSX files in the src folder
		"./components/**/*.{jsx,tsx}", // JSX and TSX files in the src folder
	],
	theme: {
		extend: {
			fontFamily: {
				// First setting the custom font variable, then a fallback font
				orbitron: ["var(--font-orbitron)", "sans-serif"],
			},
		},
	},
	plugins: [],
};
