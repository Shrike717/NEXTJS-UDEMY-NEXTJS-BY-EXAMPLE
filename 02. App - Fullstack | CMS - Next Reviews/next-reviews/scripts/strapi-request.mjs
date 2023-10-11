// In this file we test the endpoints of our Strapi API

// Importing fs module to write to file:
import { writeFileSync } from "node:fs";
// Importing the qs library:
import qs from "qs";

// Getting all reviews:
const url =
	"http://localhost:1337/api/reviews" +
	"?" +
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
console.log("url: " + url);

const response = await fetch(url); // fetch is avalable as global function
const body = await response.json(); // We also need await because it returns a promise

const formatted = JSON.stringify(body, null, 2);

// Creating a file:
const file = "scripts/strapi-response.json";
// Writing to file: Needs 3 arguments: file, data, encoding
writeFileSync(file, formatted, "utf-8");
