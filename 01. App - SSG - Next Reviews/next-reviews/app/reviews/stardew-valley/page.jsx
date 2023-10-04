import { readFile } from "node:fs/promises";
import matter from "gray-matter"; // This package is used for parsing the metadata of the markdown file
import { marked } from "marked"; //  This package is used for convetting markdown to HTML
import Heading from "@/components/Heading";

export default async function StardewValleyPage() {
	// Getting markdown text by awaiting the readFile call:
	const text = await readFile("./content/reviews/stardew-valley.md", "utf-8");
	// Parsing the Front Matter:
	const {
		content,
		data: { title, date, image },
	} = matter(text);
	// Converting the contentt of the markdown to html:
	const html = marked(content);

	return (
		<>
			<Heading>{title}</Heading>
			<p className="italic pb-2">{date}</p>
			<img
				src={image}
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
