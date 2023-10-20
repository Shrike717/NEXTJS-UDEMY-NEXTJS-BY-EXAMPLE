// Reusable Heading component
export default function Heading({ children }) {
	return (
		<h1 className={"pb-3 font-orbitron text-2xl font-bold"}>{children}</h1>
	);
}
