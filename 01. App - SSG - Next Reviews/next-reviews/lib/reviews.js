import { readFile } from "node:fs/promises";
import matter from "gray-matter"; // This package is used for parsing the metadata of the markdown file
import { marked } from "marked"; //  This package is used for convetting markdown to HTML

export async function getReviews(slug) {
	// Getting markdown text by awaiting the readFile call:
	const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
	// Parsing the Front Matter:
	const {
		content,
		data: { title, date, image },
	} = matter(text);
	// Converting the content of the markdown to html:
	const body = marked(content);
	return {
		title,
		date,
		image,
		body,
	};
}
