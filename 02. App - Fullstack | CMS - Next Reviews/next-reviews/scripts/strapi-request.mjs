// In this file we test the endpoints of our Strapi API.
// When the response fits our needs, we can use it in our app.

// Importing fs module to write to file:
import { writeFileSync } from "node:fs";
// Importing the qs library:
import qs from "qs";

// **************

// Getting all reviews:
// const url =
// 	"http://localhost:1337/api/reviews" +
// 	"?" +
// 	qs.stringify(
// 		{
// 			fields: ["slug", "title", "subtitle", "publishedAt"],
// 			populate: { image: { fields: ["url"] } },
// 			sort: ["publishedAt:DESC"],
// 			pagination: { pageSize: 6 },
// 			// populate: "*"
// 		},
// 		{ encodeValuesOnly: true }
// 	); // encodeValuesOnly: Encodes only the values and not the keys
// console.log("url: " + url);

// **************

// Getting a single review:
// const url =
// 	"http://localhost:1337/api/reviews" +
// 	"?" +
// 	qs.stringify(
// 		{
// 			filters: { slug: { $eq: "hades-2018" } },
// 			fields: ["slug", "title", "subtitle", "publishedAt", "body"],
// 			populate: { image: { fields: ["url"] } },
// 			pagination: { pageSize: 1, withCount: false },
// 			// populate: "*"
// 		},
// 		{ encodeValuesOnly: true }
// 	); // encodeValuesOnly: Encodes only the values and not the keys
// console.log("url: " + url);

// **************
// Getting all reviews to with pageeSize and page to analyze pagination:
const url =
	"http://localhost:1337/api/reviews" +
	"?" +
	qs.stringify(
		{
			fields: ["slug", "title", "subtitle", "publishedAt"],
			populate: { image: { fields: ["url"] } },
			sort: ["publishedAt:DESC"],
			pagination: { pageSize: 6, page: 1 },
		},
		{ encodeValuesOnly: true }
	); // encodeValuesOnly: Encodes only the values and not the keys
console.log("url: " + url);

// **************

const response = await fetch(url); // fetch is avalable as global function
const body = await response.json(); // We also need await because it returns a promise

const formatted = JSON.stringify(body, null, 2);

// Creating a file:
const file = "scripts/strapi-response.json";
// Writing to file: Needs 3 arguments: file, data, encoding
writeFileSync(file, formatted, "utf-8");
