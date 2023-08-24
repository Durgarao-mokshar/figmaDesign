export default function AboutSection() {
	return (
		<section className="max-w-8xl mx-auto py-24 px-4 ">
			<div className=" lg:px-12 md:px-8">
				<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
					<h1 className="lg:text-6xl md:text-4xl text-3xl max-w-lg">We're building better healthcare.</h1>
					<p className=" max-w-lg">
						Our vision is to improve people's health by creating a proactive healthcare system. We want to help the healthcare system shift its
						focus: from reacting to symptoms to preventing diseases from breaking out in the first place.
					</p>
				</div>

				<div className=" max-w-5xl mx-auto pt-28">
					<div className=" transform translate-y-2 ">
						<div>
							<img src="https://www.nekohealth.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fk77euzre%2Fproduction%2Ff9f4db25dec72398bc8f52e0d575425515f45421-1820x1200.jpg&w=1920&q=75" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
