"use client";
import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
	// his  state is needed to handle the popup-message:
	const [clicked, setClicked] = useState(false);

	// This is the handleClick function that will be called when the button is clicked
	function handleClick() {
		// Copying the url to the clipboard:
		navigator.clipboard.writeText(window.location.href);

		setClicked(true);
		setTimeout(() => {
			setClicked(false);
		}, 1500);
	}
	console.log("[ShareLinkButton] clicked", clicked);

	return (
		<button
			onClick={handleClick}
			className="border flex gap-1 items-center px-2 py-1 rounded
            text-slate-500 text-sm
            hover:bg-orange-100 hover:text-slate-700"
		>
			<LinkIcon className=" w-4 h-4" />
			{clicked ? "Link copied!" : "Share Link"}
		</button>
	);
}
