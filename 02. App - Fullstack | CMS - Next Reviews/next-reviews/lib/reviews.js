// This is a check to see if a client side component can make a request to a extrnal API. Not wanted!
import "server-only";

import { marked } from "marked"; //  This package is used for convetting markdown to HTML
import qs from "qs"; // Importing the qs library:

// Base Url für Strapi CMS:
const CMS_URL = process.env.CMS_URL;

// Constant for the tag we need to set at fetch request for revalidaion on demand:
export const CACHE_TAG_REVIEWS = "review";

// This function is used to get the data of a single review:
export async function getReview(slug) {
	// Getting a single review:
	// This is calling our helper fuction to fetch the JSON response from the API. Parameters is the sq object we defined for filters and needed fields from API.
	const { data } = await fetchReviews({
		filters: { slug: { $eq: slug } },
		fields: ["slug", "title", "subtitle", "publishedAt", "body"],
		populate: { image: { fields: ["url"] } },
		pagination: { pageSize: 1, withCount: false },
		// populate: "*"
	});
	// console.log("[getReview] data:", data);

	// Here  we need a check if we get data for a certain review from the CMS. If not, we return null:
	if (data.length === 0) {
		return null;
	}

	// This is the single review object from the data array. Its the first element:
	const item = data[0];
	// Then returnng the properties we need for a single review object:
	return {
		...toReview(item), // Calling our helper function toReview to get the properties we need. This is the spread operator
		body: marked(item.attributes.body), // Converting the content of the markdown to html:
	};
}

// This function is used to get the data of all reviews. It gets the parameter pageSize which determines the number of reviews to get:
export async function getReviews(pageSize, page) {
	// Getting all reviews:
	const { data, meta } = await fetchReviews({
		fields: ["slug", "title", "subtitle", "publishedAt"],
		populate: { image: { fields: ["url"] } },
		sort: ["publishedAt:DESC"],
		pagination: { pageSize, page },
		// populate: "*"
	}); // This is calling our helper fuction to fetch the JSON response from the API. Parameters is the sq object we defined for filters and needed fields from API.
	// console.log("[fetchReviews] data:", data);

	// Then we map over it because we have to transform the items to fit our properties
	// For this, we call our helper function toReview. Every element then gets converted to the object we need:
	return {
		pageCount: meta.pagination.pageCount,
		reviews: data.map(toReview),
	};
}

// This function is used to get the data for searching from the CMS:
export async function searchReviews(query) {
	// Getting all titles:
	const { data } = await fetchReviews({
		filters: { title: { $containsi: query } }, // $containsi: This is a special operator for Strapi to search for a string in a case-insensitive way
		fields: ["slug", "title"],
		sort: ["title"],
		pagination: { pageSize: 5 },
	}); // This is calling our helper fuction to fetch the JSON response from the API. Parameters is the sq object we defined for filters and needed fields from API.
	// console.log("[getSlugs] data:", data);

	return data.map(({ attributes }) => ({
		slug: attributes.slug,
		title: attributes.title,
	})); // We  need the slug property and the title property and return the array for the search functionality
}

// This function is used to get the slugs:
export async function getSlugs() {
	// Getting all slugs:
	const { data } = await fetchReviews({
		fields: ["slug"],
		sort: ["publishedAt:DESC"],
		pagination: { pageSize: 100 },
	}); // This is calling our helper fuction to fetch the JSON response from the API. Parameters is the sq object we defined for filters and needed fields from API.
	// console.log("[getSlugs] data:", data);

	return data.map((item) => item.attributes.slug); // We only need the slug property and return the array of slugs
}

// This helper-function fetches the reviews from the API. It returns the JSON response.
// parameters is the sq object we defined for filters and needed fields from API.
async function fetchReviews(parameters) {
	// Getting all reviews:
	const url =
		`${CMS_URL}/api/reviews?` +
		qs.stringify(parameters, { encodeValuesOnly: true }); // encodeValuesOnly: Encodes only the values and not the keys

	const response = await fetch(url, {
		next: {
			tags: [CACHE_TAG_REVIEWS], // This invalidates the cache for the reviews when the data changes in the CMS
		},
	}); // fetch is avalable as global function

	// This is a testlog to print the full reponse object:
	// console.log("[fetchReviews] response:", response);

	// This is a testlog to print the full URL:
	// console.log("[fetchReviews] url:", url);

	// Error when the response is not ok:
	if (!response.ok) {
		throw new Error(`CMS returned error: ${response.status} for ${url}`);
	}
	return await response.json(); // We also need await because it returns a promise. We destructure the data array
}

// This helper function is used to convert the response from the API to a custom review objects we need:
function toReview(item) {
	const { attributes } = item;
	return {
		slug: attributes.slug,
		title: attributes.title,
		subtitle: attributes.subtitle,
		date: attributes.publishedAt.slice(0, "YYYY-MM-D".length), // This extracts only the date from the timestamp. Original: 2023-05-28T11:00:00.000Z
		image: CMS_URL + attributes.image.data.attributes.url, // we have to create an absolute url to Strapi
	};
}
