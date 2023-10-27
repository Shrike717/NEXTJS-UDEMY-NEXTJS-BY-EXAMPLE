import { searchReviews } from "@/lib/reviews";
import { NextResponse } from "next/server";

// This route handler will be used to call the CMS API from our Next server.
// This prevents having to call it direcly from a browser, which would expose the API
export async function GET(request) {
	// Extracting the nextUrl property from the request object:
	// We can use a get() method to extract the query parameter from the URL
	const query = request.nextUrl.searchParams.get("query");
	// The nextUrl property extends the request object:
	console.log("/api/search:", query);

	// Now we can call the CMS API with the query parameter:
	const reviews = await searchReviews(query);
	// As a response we return the results from the CMS API
	return NextResponse.json(reviews);
}
