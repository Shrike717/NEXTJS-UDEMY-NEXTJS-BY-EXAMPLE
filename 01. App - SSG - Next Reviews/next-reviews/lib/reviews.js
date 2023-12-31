import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter"; // This package is used for parsing the metadata of the markdown file
import { marked } from "marked"; //  This package is used for convetting markdown to HTML

// Function returns a single object with all needed properties
export async function getFeaturedReview() {
	const reviews = await getReviews();
	return reviews[0];
}

// This component is used to get the data of a single review:
export async function getReview(slug) {
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
		slug,
		title,
		date,
		image,
		body,
	};
}

// This component is used to get the data of all reviews:
export async function getReviews() {
	// Now filtering out the markdown files from the filenames
	// The filter function returns true if the file is a markdown file:
	let slugs = await getSlugs();

	// Now getting the data of all the reviews:
	const reviews = [];
	for (const slug of slugs) {
		const review = await getReview(slug); // Passing the review name
		// Getting back the reviews as objects and pushing them to the reviews array:
		reviews.push(review);
	}

	// Sort the array by the "date" property in descending order. Needed for the homepage:
	// My solution:
	// reviews.sort((a, b) => {
	// 	const dateA = new Date(a.date);
	// 	const dateB = new Date(b.date);
	// 	return dateB - dateA;
	// });

	// Solution from the course:
	reviews.sort((a, b) => b.date.localeCompare(a.date));
	return reviews;
}

// This function is used to get the slugs:
export async function getSlugs() {
	// Getting the filenames of all the markdown files:
	const files = await readdir("./content/reviews");

	// Now filtering out the markdown files from the filenames
	// The filter function returns true if the file is a markdown file:
	// We get back just the filenames. These are the slugs
	return (
		files
			.filter((file) => file.endsWith(".md"))
			// Removing the .md extension from the filenames:
			.map((file) => file.replace(".md", ""))
	);
}
