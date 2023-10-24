// Importing the Link component to use client-side navigation
import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews"; // Function to get all the reviews

// Metatags:
export const metadata = {
	title: "Reviews",
};

export default async function ReviewsPage({ searchParams }) {
	// searchParams is the query string from the URL
	const page = parsePageParam(searchParams.page);

	// Getting all the reviews:
	const reviews = await getReviews(6);
	console.log("[ReviewsPage] props:", page);

	return (
		<>
			<Heading>Reviews</Heading>
			{/* Pagination */}
			<div className="flex gap-2 pb-3">
				<Link href={`/reviews?page=${page - 1}`}>&lt;</Link>
				<span>Page {page}</span>
				<Link href={`/reviews?page=${page + 1}`}>&gt;</Link>
			</div>
			<ul className="flex flex-row flex-wrap gap-3 ">
				{reviews.map((review, index) => (
					<li
						key={review.slug}
						className=" w-80 rounded border bg-white shadow hover:shadow-xl"
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
							<h2 className="py-1 text-center font-orbitron font-semibold">
								{review.title}
							</h2>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

// Function to parse the query string from the URL:
function parsePageParam(paramValue) {
	if (paramValue) {
		const page = parseInt(paramValue);
		if (isFinite(page) && page > 0) {
			return page;
		}
	}
	return 1;
}
