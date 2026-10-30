import Hero from "@/components/sections/Hero";
import Tournaments from "@/components/sections/Tournaments";
import Ranking from "@/components/sections/Ranking";
import HowItWorks from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />

      <Tournaments />

      <Ranking />

      <HowItWorks />
    </>
  );
}
