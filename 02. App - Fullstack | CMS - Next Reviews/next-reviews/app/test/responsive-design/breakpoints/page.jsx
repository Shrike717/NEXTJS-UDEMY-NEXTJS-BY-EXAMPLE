export default function Breakpoints() {
	return (
		<>
			<div className="mb-20">
				<h2 className="text-xl font-bold">Tailwind breakpoints</h2>
			</div>
			<div className="">
				<div className="w-28 h-28 bg-red-600 flex items-center justify-center sm:hidden">
					<p className="text-xs font-semibold text-white ">
						0px - 640px
					</p>
				</div>
				<div className="sm:w-32 sm:h-32 sm:bg-emerald-600 flex items-center justify-center  md:hidden">
					<p className="text-xs font-semibold text-white ">
						640px - 768px
					</p>
				</div>
				<div className="   md:w-36 md:h-36 md:bg-blue-600 flex items-center justify-center lg:hidden">
					<p className="text-xs font-semibold text-white ">
						768ppx - 1024px
					</p>
				</div>
				<div className="  lg:w-40 lg:h-40 lg:bg-orange-600 flex items-center justify-center xl:hidden">
					<p className="text-xs font-semibold text-white ">
						1024px - 1280px
					</p>
				</div>
				<div className=" xl:w-44 xl:h-44 xl:bg-fuchsia-600 flex items-center justify-center 2xl:hidden">
					<p className="text-xs font-semibold text-white ">
						1280px - 1536px
					</p>
				</div>
				<div className="2xl:w-48 2xl:h-48 2xl:bg-neutral-600 flex items-center justify-center 2xl:visible">
					<p className="text-xs font-semibold text-white ">
						1536px - bigger
					</p>
				</div>
			</div>
		</>
	);
}
