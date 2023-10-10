// Imports the Google Fonts Orbitron
import { Exo_2, Orbitron } from "next/font/google";

// Initialize the Exo 2 font. Sets up the font in our app
// latin is for English
// Then setting exo_2 as variable to use it as TW utility class
export const exo_2 = Exo_2({
	subsets: ["latin"],
	variable: "--font-exo-2",
});

export const orbitron = Orbitron({
	subsets: ["latin"],
	variable: "--font-orbitron",
});
