import Link from 'next/link'
export default function Footer() {
	return (
		<footer className=" w-full bg-black text-white">
			<div className="p-4 pt-16 max-w-7xl mx-auto w-full h-full flex justify-between items-start flex-wrap ">
				<div className="w-full max-w-md  py-4">
					<div className=" ">
						<p className="text-4xl max-w-xs font-bold ">{`Let's work Togehter`}</p>
					</div>
				</div>
				<div className="flex justify-between w-full h-full max-w-lg py-4">
					<div className="w-full h-full flex flex-col items-start justify-start text-left">
						<div className="text-xl font-semibold pb-4 w-28">
							<p>Menu</p>
						</div>
						<div className=" w-28">
							<Link href="/">
								<p>Home</p>
							</Link>
						</div>
						<div className=" w-28">
							<Link href="/about">
								<p>About Us</p>
							</Link>
						</div>
						<div className=" w-28">
							<Link href="/ourprocess">
								<p>Our Process</p>
							</Link>
						</div>
						<div className=" w-28">
							<Link href="/work">
								<p>Work</p>
							</Link>
						</div>
					</div>
					<div className="w-full h-full flex flex-col items-end justify-start text-left">
						<div className=" w-36">
							<p className="text-xl pb-4 font-semibold">Contact</p>
						</div>
						<div className=" w-36">
							<p>4th Floor, Gowri Arcade,</p>
						</div>
						<div className=" w-36">
							<p>Jayabheri Enclave,</p>
						</div>
						<div className=" w-36">
							<p> Gachibowli, Hyderabad, </p>
						</div>

						<div className=" w-36">
							<p>Telangana - 500032</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center flex-wrap max-w-7xl mx-auto w-full h-full text-[#0F3B53]">
				{/* <div className="p-4 w-full h-full max-w-sm">
					<div className="text-xl font-semibold"> us on socials</div>
					<div className="flex items-center py-4 max-w-sm">
						<a href="https://www.facebook.com/MoksharOfficial" target="_blank" rel="noreferrer">
							<div className="p-3 border-2 border-[#0F3B53] m-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="fill-[#0F3B53]" viewBox="0 0 24 24" width="32px" height="32px">
									<path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
								</svg>
							</div>
						</a>
						<a href="https://twitter.com/moksharofficial" target="_blank" rel="noreferrer">
							<div className="p-3 border-2 border-[#0F3B53] m-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="fill-[#0F3B53]" viewBox="0 0 24 24" width="32px" height="32px">
									<path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
								</svg>
							</div>
						</a>
						<a href="https://www.instagram.com/moksharofficial" target="_blank" rel="noreferrer">
							<div className="p-3 border-2  border-[#0F3B53] m-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="fill-[#0F3B53]" viewBox="0 0 24 24" width="32px" height="32px">
									<path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
								</svg>
							</div>
						</a>
						<a href="https://www.linkedin.com/company/moksharofficial/about/" target="_blank" rel="noreferrer">
							<div className="p-3 border-2 border-[#0F3B53] m-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="fill-[#0F3B53]" viewBox="0 0 24 24" width="32px" height="32px">
									<path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
								</svg>
							</div>
						</a>
					</div>
					<div className="">
						<p className="flex items-center text-center">
							Built with{' '}
							<svg fill="#F2751A" className="w-5 h-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
								Durgarao Ganta, [23-08-2023 12:20]
								<path d="M26.996 12.898c-.064-2.207-1.084-4.021-2.527-5.13-1.856-1.428-4.415-1.69-6.542-.132-.702.516-1.359 1.23-1.927 2.168-.568-.938-1.224-1.652-1.927-2.167-2.127-1.559-4.685-1.297-6.542.132-1.444 1.109-2.463 2.923-2.527 5.13-.035 1.172.145 2.48.788 3.803 1.01 2.077 5.755 6.695 10.171 10.683l.035.038.002-.002.002.002.036-.038c4.415-3.987 9.159-8.605 10.17-10.683.644-1.323.822-2.632.788-3.804z" />
							</svg>
							Mokshar © 2023 / privacy policy / cookies
						</p>
					</div>
				</div> */}
				<div className="p-4 py-10">
					<a href="#" className="text-white bg-gradient-to-r from-red-500 to-indigo-600 py-2 px-4 inline-block rounded-lg">
						Start a project
					</a>
				</div>
			</div>
		</footer>
	)
}
