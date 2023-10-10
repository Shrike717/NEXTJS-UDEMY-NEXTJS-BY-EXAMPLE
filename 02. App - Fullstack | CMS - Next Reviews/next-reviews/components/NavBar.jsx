import Link from "next/link";

export default function NavBar() {
	return (
		<nav>
			<ul className="flex gap-2">
				<li>
					<Link
						href="/"
						className="font-orbitron font-bold text-orange-800 hover:underline"
					>
						Indie Gamer
					</Link>
				</li>
				<li className="ml-auto">
					{" "}
					{/* ml-auto pushes the element to the right */}
					<Link
						href="/reviews"
						className="text-orange-800 hover:underline"
					>
						Reviews
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="text-orange-800 hover:underline"
						prefetch={false}
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
}
