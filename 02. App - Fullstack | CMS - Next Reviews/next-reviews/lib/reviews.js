import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter"; // This package is used for parsing the metadata of the markdown file
import { marked } from "marked"; //  This package is used for convetting markdown to HTML
import qs from "qs"; // Importing the qs library:

const CMS_URL = "http://localhost:1337";

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
	// Getting all reviews:
	const url =
		`${CMS_URL}/api/reviews?` +
		qs.stringify(
			{
				fields: ["slug", "title", "subtitle", "publishedAt"],
				populate: { image: { fields: ["url"] } },
				sort: ["publishedAt:DESC"],
				pagination: { pageSize: 6 },
				// populate: "*"
			},
			{ encodeValuesOnly: true }
		); // encodeValuesOnly: Encodes only the values and not the keys
	console.log("getReviews: " + url);

	const response = await fetch(url); // fetch is avalable as global function
	const { data } = await response.json(); // We also need await because it returns a promise. We destructure the data array
	// Then we map over it because we have to transform the items to fit our properties
	// As all needed properties are in the attributes object, we destructure it:
	return data.map(({ attributes }) => ({
		slug: attributes.slug,
		title: attributes.title,
		date: attributes.publishedAt.slice(0, "YYYY-MM-D".length), // This extracts only the date from the timestamp. Original: 2023-05-28T11:00:00.000Z
		image: CMS_URL + attributes.image.data.attributes.url, // we have to create an absolute url to Strapi
	}));
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
