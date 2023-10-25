import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function PaginationBar({ href, page, pageCount }) {
	return (
		<div className="flex items-center gap-2 ">
			<PaginationLink
				href={`${href}?page=${page - 1}`}
				enabled={page > 1}
			>
				<ChevronLeftIcon className="h-7 w-7" />
				<span className="sr-only">Previous Page</span>
			</PaginationLink>
			<span>
				Page {page} of {pageCount}
			</span>
			<PaginationLink
				href={`${href}?page=${page + 1}`}
				enabled={page < pageCount}
			>
				<ChevronRightIcon className="h-7 w-7" />
				<span className="sr-only">Next Page</span>
			</PaginationLink>
		</div>
	);
	// We can use this PaginationLink component to create a link to the previous and next page:
	function PaginationLink({ children, enabled, href }) {
		if (!enabled) {
			return (
				<span
					className="cursor-not-allowed rounded
            border text-sm
            text-slate-300 hover:text-slate-700"
				>
					{children}
				</span>
			);
		}
		return (
			<Link
				href={href}
				className="cursor-pointer rounded
            border text-sm
            text-slate-500 hover:bg-orange-100 hover:text-slate-700"
			>
				{children}
			</Link>
		);
	}
}
