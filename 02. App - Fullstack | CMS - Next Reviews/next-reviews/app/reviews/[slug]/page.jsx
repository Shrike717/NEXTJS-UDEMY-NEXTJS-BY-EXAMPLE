import Image from "next/image"; // This is the Next.js Image component to optimize images
import { notFound } from "next/navigation"; // This is the Next.js 404 page
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";

// This configueres weether pages are generated at request time (SSR)
// export const dynamicParams = true; // true | false. true by default

// This forces this page to be generated at run time (SSR).
// If this is set we have to comment out the getStaticParams function below.
// export const dynamic = "force-dynamic";

// This function generates an array of objects with the slugs from the API Data.
// The slugs are used to generate the static paths for the SSG pages needed in the next build.
export async function generateStaticParams() {
	const slugs = await getSlugs(); // But this is an array of strings
	// console.log("[generateStaticParams] slugs:", slugs);

	// We need to convert the array of strings to an array of objects:
	return slugs.map((slug) => ({ slug }));
}

// This function is used to generate the metadata from the markdown files:
export async function generateMetadata({ params: { slug } }) {
	// Calling the getReview function  with the dynamic slug parameter:
	const review = await getReview(slug);

	// If we have no review we return a 404 message:
	if (!review) {
		notFound();
	}
	// Then returning the metadata object:
	return {
		title: review.title,
		// description: review.description,
		// image: review.image,
	};
}

// This component is responsible for showing the single review page
// Here we dekonstruct the path from the url. The slug is the name of the markdown file
export default async function ReviewPage({ params: { slug } }) {
	console.log("[ReviewPage] rendering", slug);
	// Calling the getReview function  with the dynamic slug parameter:
	const review = await getReview(slug);

	// If we have no review we return a 404 message:
	if (!review) {
		notFound();
	}

	return (
		<>
			<Heading>{review.title}</Heading>
			<p className="pb-3 font-semibold">{review.subtitle}</p>
			<div className="flex items-baseline gap-3">
				<p className="pb-2 italic">{review.date}</p>
				<ShareLinkButton />
			</div>
			<Image
				src={review.image}
				alt=""
				width="640"
				height="360"
				className="mb-2 rounded"
				priority
			/>
			{/* Showing the markdown text */}
			<article
				dangerouslySetInnerHTML={{ __html: review.body }}
				// max-w-screen-sm = also 640px like the image
				className="prose prose-slate max-w-screen-sm"
			/>
		</>
	);
}
