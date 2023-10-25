"use client";

import { Combobox } from "@headlessui/react";

// This component will be used to search for a specific review
export default function SearchBox() {
	return (
		<Combobox>
			<Combobox.Input placeholder="Search..." />
		</Combobox>
	);
}
