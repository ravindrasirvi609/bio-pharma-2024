import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeaturedSpeakers from "../components/FeaturedSpeakers";
import KeyInfo from "../components/KeyInfo";
import LatestNews from "../components/LatestNews";
import AboutSection from "@/components/HomeAbout";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Global Bio Pharma Conference 2024</title>
        <meta
          name="description"
          content="Join the leading Bio Pharma Conference of 2024. Network with industry experts, discover breakthrough research, and shape the future of healthcare."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <FeaturedSpeakers />
        <KeyInfo />
        <LatestNews />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
