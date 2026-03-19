import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { WhyZenith } from "@/components/sections/WhyZenith";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Products />
      <WhyZenith />
      <CtaBand />
      <Footer />
    </>
  );
}
