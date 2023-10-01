// Importing th Link component to use client-side navigation
import Link from "next/link";

// Next RootLayout Template component
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Next.js App</title>
			</head>
			<body>
				<header>
					<nav>
						<ul>
							<li>
								<Link href="/" prefetch={true}>
									Home
								</Link>
							</li>
							<li>
								<Link href="/reviews" prefetch={true}>
									Reviews
								</Link>
							</li>
							<li>
								<Link href="/about" prefetch={true}>
									About
								</Link>
							</li>
						</ul>
					</nav>
				</header>
				<main>{children}</main>
				<footer>[footer]</footer>
			</body>
		</html>
	);
}
