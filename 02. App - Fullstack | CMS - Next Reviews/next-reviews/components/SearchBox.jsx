"use client";

import { Combobox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const reviews = [
	{ slug: "hades-2018", title: "Hades" },
	{ slug: "fall-guys", title: "Fall Guys: Ultimate Knockout" },
	{ slug: "black-mesa", title: "Black Mesa" },
	{ slug: "disco-elysium", title: "Disco Elysium" },
	{ slug: "dead-cells", title: "Dead Cells" },
];

// This component will be used to search for a specific review
export default function SearchBox() {
	// Using the Next.js router to get the query string from the URL:
	const router = useRouter();

	// State to take control of the input value:
	const [query, setQuery] = useState("");
	// console.log("Search Query:", query);

	// Filtering the reviews with the query:
	const filteredReviews = reviews.filter((review) => {
		return review.title.toLowerCase().includes(query.toLowerCase());
	});

	// Function to route tto a selected review:
	function handleChange(review) {
		// console.log("Selected Review:", review);
		router.push(`/reviews/${review.slug}`);
	}

	return (
		<div className="relative w-48">
			<Combobox onChange={handleChange}>
				<Combobox.Input
					placeholder="Search..."
					className="w-full rounded border px-2 py-1"
					value={query}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<Combobox.Options className="absolute w-full bg-white py-1  ">
					{filteredReviews.map((review) => (
						<Combobox.Option key={review.slug} value={review}>
							{({ active }) => (
								<span
									className={`block truncate px-2 ${
										active ? "bg-orange-100" : ""
									}`}
								>
									{review.title}
								</span>
							)}
						</Combobox.Option>
					))}
				</Combobox.Options>
			</Combobox>
		</div>
	);
}
