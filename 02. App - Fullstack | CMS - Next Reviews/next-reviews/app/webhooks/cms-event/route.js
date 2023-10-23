// This is an route handler to rceive calls from the CMS when the data changes there:

import { revalidateTag } from "next/cache";
import { CACHE_TAG_REVIEWS } from "@/lib/reviews";

// Strapi sends POST requests.
export async function POST(request) {
	const payload = await request.json();
	// Here we check if the model is review:
	if (payload.model === "review") {
		// In this case we want to trigger revaldiation. It invalidates the cache for the reviews when the data changes in the CMS
		revalidateTag(CACHE_TAG_REVIEWS);
	}
	console.log("[Route Handler] revalidated:", CACHE_TAG_REVIEWS);
	return new Response(null, { status: 204 });
}
