import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Equipment } from "@/components/sections/Equipment";
import { Gallery } from "@/components/sections/Gallery";
import { Doctor } from "@/components/sections/Doctor";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <WhyUs />
      <Services />
      <Equipment />
      <Gallery />
      <Doctor />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
}
