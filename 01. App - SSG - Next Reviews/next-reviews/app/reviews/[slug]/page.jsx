import Heading from "@/components/Heading";
import { getReview } from "@/lib/reviews";

// This component is responsible for showing the single review page
// Here we dekonstruct the path from the url. The slug is the name of the markdown file
export default async function ReviewPage({ params: { slug } }) {
	// Calling the getReview function  with the dynamic slug parameter:
	const review = await getReview(slug);
	return (
		<>
			<Heading>{review.title}</Heading>
			<p className="italic pb-2">{review.date}</p>
			<img
				src={review.image}
				alt=""
				width="640"
				height="360"
				className="mb-2 rounded"
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