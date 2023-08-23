export default function Section11() {
	return (
		<section className=" bg-blue-950 ">
			<div className="max-w-8xl mx-auto grid lg:grid-cols-3 items-center gap-20 md:grid-cols-3 grid-cols-1 ">
				<div className=" max-w-md mx-auto">
					<img src="./fruits.jpg" alt="fruits" className="object-contain" />
				</div>

				<div className="flex flex-col gap-6 justify-center text-white max-w-md mx-auto ">
					<p className="text-orange-600 text-xs">// kontakt</p>
					<div>
						<h1 className=" font-semi  text-2xl">
							<span className="px-2 py-1 bg-orange-600 rounded-lg ">Bereit</span> fur deine neue website ?
						</h1>
					</div>
					<p>Buche dir ein kostenloses Estgesprach, oder schreib mir eine Mail.</p>
					<p>Ich freue mich auf das Gesprach mit dir.</p>
				</div>

				<div className="flex flex-col gap-10  max-w-md mx-auto  w-full ">
					<div className="flex bg-gray-400  py-7 rounded-lg px-3 items-center gap-5 ">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>

						<div className="text-xs">
							<p>Kostenloses</p>
							<p>Eestgesprach</p>
						</div>
					</div>

					<div className="flex bg-gray-400  py-7 rounded-lg px-3 items-center gap-5 ">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>

						<div className="text-xs">
							<p>Kostenloses</p>
							<p>Eestgesprach</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
