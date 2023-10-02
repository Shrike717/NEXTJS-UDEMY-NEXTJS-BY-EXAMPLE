// Importing th Link component to use client-side navigation
import Link from "next/link";
// Importing global style css:
import "./globals.css";

// Next RootLayout Template component
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Next.js App</title>
			</head>
			<body className="flex flex-col px-4 py-2 min-h-screen">
				<header>
					<nav>
						<ul className="flex gap-2">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/reviews">Reviews</Link>
							</li>
							<li>
								<Link href="/about" prefetch={false}>
									About
								</Link>
							</li>
						</ul>
					</nav>
				</header>
				<main className="py-3 grow">{children}</main>
				<footer className="border-t py-3 text-center text-xs">
					Game data and images courtesy of{" "}
					<a href="https://rawg.io/" target="_blank">
						RAWG
					</a>
				</footer>
			</body>
		</html>
	);
}
