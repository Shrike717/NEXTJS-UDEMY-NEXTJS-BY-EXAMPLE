// In this file we test the endpoints of our Strapi API

// Importing fs module to write to file
import { writeFileSync } from "node:fs";

// Getting all reviews:
const url = "http://localhost:1337/api/reviews" + "?populate=*";
const response = await fetch(url); // fetch is avalable as global function
const body = await response.json(); // We also need await because it returns a promise

const formatted = JSON.stringify(body, null, 2);

// Creating a file:
const file = "scripts/strapi-response.json";
// Writing to file: Needs 3 arguments: file, data, encoding
writeFileSync(file, formatted, "utf-8");
