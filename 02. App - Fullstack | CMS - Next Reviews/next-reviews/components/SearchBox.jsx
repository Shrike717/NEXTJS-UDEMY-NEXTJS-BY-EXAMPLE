"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Combobox } from "@headlessui/react";

// This component will be used to search for a specific review
export default function SearchBox() {
	// Using the Next.js router to get the query string from the URL:
	const router = useRouter();

	// State to take control of the input value:
	const [query, setQuery] = useState("");
	// console.log("Search Query:", query);

	// State to get the reviews from the API when typing in the searchbox:
	const [reviews, setReviews] = useState([]);

	// Function to get the reviews from the API when typing in the searchbox:
	useEffect(() => {
		// fetch the reviews from the API:
		if (query.length > 1) {
			// Here we are using the AbortController to cancel the fetch request when the user types in the searchbox:
			const controller = new AbortController();
			(async () => {
				const url = "/api/search?query=" + encodeURIComponent(query);
				// Now we are calling the route handler to get the reviews from the API:
				const response = await fetch(url, {
					signal: controller.signal,
				});
				const reviews = await response.json();
				setReviews(reviews);
			})();
			// This is a useEffect cleanup function that will be called after every request. It will cancel the fetch request when the user types in the searchbox:
			return () => controller.abort();
		} else {
			setReviews([]);
		}
	}, [query]);

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
					{reviews.map((review) => (
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
