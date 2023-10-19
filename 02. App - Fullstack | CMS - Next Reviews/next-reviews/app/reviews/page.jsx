// Importing the Link component to use client-side navigation
import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews"; // Function to get all the reviews

// Metatags:
export const metadata = {
	title: "Reviews",
};

export default async function ReviewsPage() {
	// Getting all the reviews:
	const reviews = await getReviews();
	// console.log("[Reviews] reviews:", reviews);

	return (
		<>
			<Heading>Reviews</Heading>
			<ul className="flex flex-row flex-wrap gap-3 ">
				{reviews.map((review, index) => (
					<li
						key={review.slug}
						className=" bg-white border rounded shadow w-80 hover:shadow-xl"
					>
						{/* w-80 is exactly 320px. Thats the same width as the image. Border is now aligned */}
						<Link href={`/reviews/${review.slug}`}>
							<Image
								src={review.image}
								alt=""
								priority={index === 0}
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
