// Importing th Link component to use client-side navigation
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { orbitron, exo_2 } from "./fonts"; // Importing custom font to use it as utility font class
// Importing global style css:
import "./globals.css";

// Next RootLayout Template component
export default function RootLayout({ children }) {
	return (
		// Making font available in the whole app. exo_2 is default font
		<html lang="en" className={`${exo_2.variable} ${orbitron.variable}`}>
			<head>
				<title>Next.js App</title>
			</head>
			<body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
				<header>
					<NavBar />
				</header>
				<main className="py-3 grow">{children}</main>
				<footer className="border-t py-3 text-center text-xs">
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
