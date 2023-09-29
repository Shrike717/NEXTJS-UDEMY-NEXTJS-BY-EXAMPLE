// Next RootLayout Template component
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Next.js App</title>
			</head>
			<body>
				<header>[header]</header>
				<main>{children}</main>
				<footer>[footer]</footer>
			</body>
		</html>
	);
}
