"use client";

import { Combobox } from "@headlessui/react";

const reviews = [
	{ slug: "hades-2018", title: "Hades" },
	{ slug: "fall-guys", title: "Fall Guys: Ultimate Knockout" },
	{ slug: "black-mesa", title: "Black Mesa" },
	{ slug: "disco-elysium", title: "Disco Elysium" },
	{ slug: "dead-cells", title: "Dead Cells" },
];

// This component will be used to search for a specific review
export default function SearchBox() {
	return (
		<div className="relative w-48">
			<Combobox>
				<Combobox.Input
					placeholder="Search..."
					className="w-full rounded border px-2 py-1"
				/>
				<Combobox.Options className="absolute w-full bg-white py-1  ">
					{reviews.map((review) => (
						<Combobox.Option key={review.slug} value={review.title}>
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
