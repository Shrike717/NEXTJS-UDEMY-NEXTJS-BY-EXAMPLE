import NavBar from "@/components/NavBar";
import { orbitron, exo2, exo } from "./fonts"; // Importing custom font to use it as utility font class
// Importing global style css:
import "./globals.css";

// Metatags as template:
export const metadata = {
	title: {
		default: "Indie Gamer",
		template: "%s | Indie Gamer",
	},
};

// Next RootLayout Template component
export default function RootLayout({ children }) {
	return (
		// Making font available in the whole app. exo_2 is default font
		<html
			lang="en"
			className={`${exo.variable} ${exo2.variable} ${orbitron.variable}`}
		>
			<head></head>
			<body className="flex min-h-screen flex-col bg-orange-50 px-4 py-2">
				<header>
					<NavBar />
				</header>
				<main className="grow py-3">{children}</main>
				<footer className="border-t py-3 text-center text-xs text-slate-500">
					Game data and images courtesy of{" "}
					<a
						href="https://rawg.io/"
						target="_blank"
						className="text-orange-800 hover:underline"
					>
						RAWG
					</a>
				</footer>
			</body>
		</html>
	);
}
