import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

// This forces this page to be generated at run time (SSR).
// If this is set we have to comment out the getStaticParams function below.
export const dynamic = "force-dynamic";

export default async function HomePage() {
	// Load feaatured review
	const featuredReviews = await getReviews(3);
	console.log(
		"[HomePage] rendering:",
		featuredReviews.map((review) => review.slug).join(", ")
	);

	return (
		<>
			<Heading>Indie Gamer</Heading>
			<p className="pb-3">Only the best indie games, reviewed for you!</p>
			<ul className="flex flex-col gap-3">
				{featuredReviews.map((review, index) => (
					<li
						key={review.slug}
						className=" w-80 rounded border bg-white shadow hover:shadow-xl sm:w-full"
					>
						<Link
							href={`/reviews/${review.slug}`}
							className="flex flex-col sm:flex-row"
						>
							<Image
								src={review.image}
								alt=""
								width="320"
								height="180"
								className="rounded-t sm:rounded-l sm:rounded-r-none"
								priority={index === 0}
							/>
							<div className="px-2 py-1 text-center sm:text-left">
								<h2 className="font-orbitron font-semibold ">
									{review.title}
								</h2>
								<p className="hidden pt-2 sm:block">
									{review.subtitle}
								</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
