// Importing th Link component to use client-side navigation
import Link from "next/link";
import NavBar from "../components/NavBar";
// Importing global style css:
import "./globals.css";

// Next RootLayout Template component
export default function RootLayout({ children }) {
	return (
		<html lang="en">
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
