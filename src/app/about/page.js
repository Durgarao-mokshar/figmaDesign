import Image from "next/image";
import AboutSection from "@/components/About/AboutSection1";
import AboutSection2 from "@/components/About/AboutSection2";
import Footer from "@/components/About/AboutFooter";
import Team from "@/components/About/Team";

export default function About() {
  return (
    <>
      <AboutSection />
      <AboutSection2 />
      <Team />
      <Footer />
    </>
  );
}
