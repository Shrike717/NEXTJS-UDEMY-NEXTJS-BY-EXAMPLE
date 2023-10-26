"use client";

import { Combobox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// This component will be used to search for a specific review
export default function SearchBox({ reviews }) {
	// Using the Next.js router to get the query string from the URL:
	const router = useRouter();

	// State to take control of the input value:
	const [query, setQuery] = useState("");
	// console.log("Search Query:", query);

	// Filtering the reviews with the query:
	const filteredReviews = reviews
		.filter((review) => {
			return review.title.toLowerCase().includes(query.toLowerCase());
		})
		.slice(0, 5);

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
