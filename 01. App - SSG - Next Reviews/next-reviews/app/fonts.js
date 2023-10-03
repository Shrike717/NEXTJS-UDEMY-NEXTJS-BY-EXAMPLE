// Imports the Google Fonts Orbitron
import { Orbitron } from "next/font/google";

// Initialize the Orbitron font. Sets up the font in our app
// latin is for English
// Then setting orbitron as variable to use it as TW utility class
export const orbitron = Orbitron({
	subsets: ["latin"],
	variable: "--font-orbitron",
});
