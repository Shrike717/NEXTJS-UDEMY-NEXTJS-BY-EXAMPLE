// This is an route handler to rceive calls from the CMS when the data changes there:

// Strapi sends POST requests.
//
export async function POST(request) {
	const payload = await request.json();
	console.log("[Route Handler] payload:", payload);
	return new Response(null, { status: 204 });
}
