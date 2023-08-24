export default function Section8() {
	return (
		<section className="  flex items-start px-4 py-24 max-w-8xl mx-auto  justify-between flex-wrap gap-10">
			<div className="flex flex-col  gap-6 justify-center pr-20 sticky top-24">
				<div className="font-bold text-3xl">Designs That Stand Out</div>
				<div className="">
					<a href="#" className="text-white bg-gradient-to-r from-red-500 to-indigo-600 py-2 px-4 inline-block rounded-lg">
						View More Work
					</a>
				</div>
			</div>

			<div className=" flex flex-col gap-6 lg:max-w-3xl overflow-y-auto">
				<div className="">
					<img src="https://uploads-ssl.webflow.com/648b823e0020cfd32ac58fb7/649e53b65f0708ca6cf0d59c_Tile-Web2.jpg" className=" rounded-xl" />
				</div>
				<div>
					<img src="https://uploads-ssl.webflow.com/648b823e0020cfd32ac58fb7/649e5100d1309eab8b4a7068_Tile-Product.jpg" className=" rounded-xl" />
				</div>
				<div>
					<img src=" https://uploads-ssl.webflow.com/648b823e0020cfd32ac58fb7/649e53b5fe9c5382e5242f9f_Tile-Branding2.jpg" className=" rounded-xl" />
				</div>
				<div>
					<img src="https://uploads-ssl.webflow.com/648b823e0020cfd32ac58fb7/649e570936ff5216d296c2f5_Tile-Motion3.jpg" className=" rounded-xl" />
				</div>
				<div>
					<img src="https://uploads-ssl.webflow.com/648b823e0020cfd32ac58fb7/649e5101056863b9b4ce8954_Tile-Logo.jpg" className=" rounded-xl" />
				</div>
			</div>
		</section>
	)
}
