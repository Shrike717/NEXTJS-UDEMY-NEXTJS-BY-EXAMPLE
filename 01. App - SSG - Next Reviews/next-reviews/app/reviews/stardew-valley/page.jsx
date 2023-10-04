import { readFile } from "node:fs/promises";
import { marked } from "marked";
import Heading from "@/components/Heading";

export default async function StardewValleyPage() {
	// Getting markdown text by awaiting the readFile call:
	const text = await readFile("./content/reviews/stardew-valley.md", "utf-8");
	// Converting the markdown to html:
	const html = marked(text);

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
			<article
				dangerouslySetInnerHTML={{ __html: html }}
				// max-w-screen-sm = also 640px like the image
				className="prose prose-slate max-w-screen-sm"
			/>
		</>
	);
}
