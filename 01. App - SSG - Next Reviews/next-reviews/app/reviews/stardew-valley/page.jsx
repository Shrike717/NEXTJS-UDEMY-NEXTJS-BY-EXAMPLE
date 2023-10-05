import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

export default async function StardewValleyPage() {
	// Calling the getReviews function:
	const review = await getReviews("stardew-valley");
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
