import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Process from "@/components/Process";
import FeaturedStory from "@/components/FeaturedStory";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Services />
      <FeaturedStory />
      <Features />
      <Process />
      <CTA />
    </>
  );
}
