export default function Section4() {
	return (
		<section className="bg-pink-300 py-28 h-screen relative">
			<div className=" absolute inset-0 flex justify-center">
				<div className=" flex flex-col gap-4 p-7">
					<ul className="flex  gap-10 ">
						<li>Your Heart</li>
						<li>Your Skin </li>
						<li>Your Body</li>
					</ul>
					<hr />
				</div>
			</div>
			<div className="max-w-xl">
				<div className="bg-black text-white  flex  justify-between items-center py-12 px-7 max-w-sm">
					<button>Explore</button>
					<p>+</p>
				</div>
				<div className="bg-red-500 flex flex-col items-start gap-10 py-28 px-12">
					<h1 className="text-5xl text-white">Your Health</h1>
					<p className="text-xl text-white">Go beyond arm blood pressure. Get a whole-body mapping of your cardiovascular health.</p>
				</div>
			</div>
		</section>
	)
}
