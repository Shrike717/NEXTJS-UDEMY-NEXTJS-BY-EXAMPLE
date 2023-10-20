export default function Breakpoints() {
	return (
		<>
			<div className="mb-20">
				<h2 className="text-xl font-bold">Tailwind breakpoints</h2>
			</div>
			<div className="">
				<div className=" flex h-28 w-28 items-center justify-center bg-red-600 sm:hidden">
					<p className="text-xs font-semibold text-white ">
						0px - 640px
					</p>
				</div>
				<div className="flex items-center justify-center sm:h-32 sm:w-32 sm:bg-emerald-600  md:hidden">
					<p className="text-xs font-semibold text-white ">
						640px - 768px
					</p>
				</div>
				<div className="   flex items-center justify-center md:h-36 md:w-36 md:bg-blue-600 lg:hidden">
					<p className="text-xs font-semibold text-white ">
						768ppx - 1024px
					</p>
				</div>
				<div className="  flex items-center justify-center lg:h-40 lg:w-40 lg:bg-orange-600 xl:hidden">
					<p className="text-xs font-semibold text-white ">
						1024px - 1280px
					</p>
				</div>
				<div className=" flex items-center justify-center xl:h-44 xl:w-44 xl:bg-fuchsia-600 2xl:hidden">
					<p className="text-xs font-semibold text-white ">
						1280px - 1536px
					</p>
				</div>
				<div className="flex items-center justify-center 2xl:visible 2xl:h-48 2xl:w-48 2xl:bg-neutral-600">
					<p className="text-xs font-semibold text-white ">
						1536px - bigger
					</p>
				</div>
			</div>
		</>
	);
}
