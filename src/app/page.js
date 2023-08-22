import Image from "next/image";
import Hero from "@/components/Home/Hero";
import SectionImage from "@/components/Home/SectionImage";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from '@/components/Home/Section5'
import Section6 from '@/components/Home/Section6'
import Section7 from '@/components/Home/Section7'
import Section8 from '@/components/Home/Section8'
export default function Home() {
	return (
		<>
			<Hero />
			<SectionImage />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Section7 />
			<Section8 />
		</>
	)
}
