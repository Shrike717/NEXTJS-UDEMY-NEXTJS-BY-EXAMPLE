// Importing the font
import { orbitron } from "@/app/fonts";

// Reusable Heading component
export default function Heading({ children }) {
	return (
		<h1 className={`font-bold pb-3 text-2xl ${orbitron.className}`}>
			{children}
		</h1>
	);
}
