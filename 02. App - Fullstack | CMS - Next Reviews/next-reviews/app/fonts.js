/* eslint camelcase: 0 */

// Imports the Google Fonts Exo-2 and Orbitron
import { Exo_2, Exo, Orbitron } from "next/font/google";

// Initialize the Exo 2 font. Sets up the font in our app
// latin is for English
// Then setting exo_2 as variable to use it as TW utility class
export const exo2 = Exo_2({
	subsets: ["latin"],
	variable: "--font-exo2",
});

export const exo = Exo({
	subsets: ["latin"],
	variable: "--font-exo",
});

export const orbitron = Orbitron({
	subsets: ["latin"],
	variable: "--font-orbitron",
});
