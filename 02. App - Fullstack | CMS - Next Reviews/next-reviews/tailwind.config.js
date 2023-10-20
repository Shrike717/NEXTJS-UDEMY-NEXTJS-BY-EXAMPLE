/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// JSX and TSX files in the src folder
		"./app/**/*.{jsx,tsx}",
		// JSX and TSX files in the src folder
		"./components/**/*.{jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				// Default custom font family is set with sans key:
				// sans: ["var(--font-exo)", "sans-serif"],
				sans: ["var(--font-exo2)", "sans-serif"],
				// First setting the custom font variable, then a fallback font
				orbitron: ["var(--font-orbitron)", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")], //  This plugin adds a new typography key to your Tailwind config, which you can use to customize the typographic styles of your project.
};
