import { readFile } from "node:fs/promises";
import Heading from "@/components/Heading";

export default async function StardewValleyPage() {
	// Getting marrkdown text by awaiting the readFile call:
	const text = await readFile("./content/reviews/stardew-valley.md", "utf-8");

	return (
		<>
			<Heading>Stardew Valley</Heading>
			<img
				src="/images/stardew-valley.jpg"
				alt=""
				width="640"
				height="360"
				className="mb-2 rounded"
			/>
			{/* Showing the markdown text */}
			{text}
		</>
	);
}
