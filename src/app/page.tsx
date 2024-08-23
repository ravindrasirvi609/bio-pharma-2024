import Hero from "@/components/Hero";
import AboutSection from "@/components/HomeAbout";
import FeaturedSpeakers from "@/components/FeaturedSpeakers";
import KeyInfo from "@/components/KeyInfo";
import LatestNews from "@/components/LatestNews";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedSpeakers />
      <KeyInfo />
      <LatestNews />
    </>
  );
}
