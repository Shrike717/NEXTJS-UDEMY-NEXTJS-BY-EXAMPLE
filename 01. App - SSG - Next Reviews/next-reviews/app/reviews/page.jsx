// Importing th Link component to use client-side navigation
import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews"; // Function to get all the reviews

export default async function ReviewsPage() {
	// Getting all the reviews:
	const reviews = await getReviews();
	// console.log("[Reviews] reviews:", reviews);

	return (
		<>
			<Heading>Reviews</Heading>
			<ul className="flex flex-row flex-wrap gap-3 ">
				{reviews.map((review) => (
					<li
						key={review.slug}
						className=" bg-white border rounded shadow w-80 hover:shadow-xl"
					>
						{/* w-80 is exactly 320px. Thats the same width as the image. Border is now aligned */}
						<Link href={`/reviews/${review.slug}`}>
							<img
								src={review.image}
								alt=""
								width="320"
								height="180"
								className="rounded-t"
							/>
							<h2 className="font-orbitron font-semibold py-1 text-center">
								{review.title}
							</h2>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
