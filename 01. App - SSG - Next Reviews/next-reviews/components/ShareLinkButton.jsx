export default function ShareLinkButton() {
	// This is the handleClick function that will be called when the button is clicked
	function handleClick() {
		console.log("clicked!");
	}

	return (
		<button
			onChangeCapture={handleClick}
			className="border px-2 py-1 rounded text-slate-500 text-sm
        hover:bg-orange-100 hover:text-slate-700"
		>
			Share Link
		</button>
	);
}
