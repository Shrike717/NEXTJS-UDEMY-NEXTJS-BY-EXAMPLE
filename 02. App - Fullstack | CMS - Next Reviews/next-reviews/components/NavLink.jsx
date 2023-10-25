"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// This component is used to get the path of the current page and compare it with the path of the link to determine if the link is active or not.
export default function NavLink({ children, href, prefetch }) {
	// Getting the path of the current page using the usePathname hook.
	const pathname = usePathname();
	console.log("[NavLink] pathname: ", pathname);
	// Checking if the path of the current page is the same as the path of the link.
	if (pathname === href) {
		return (
			<span
				href={href}
				prefetch={prefetch}
				className="font-bold text-orange-800"
			>
				{children}
			</span>
		);
	}
	return (
		<Link
			href={href}
			prefetch={prefetch}
			className="text-orange-800 hover:underline"
		>
			{children}
		</Link>
	);
}
