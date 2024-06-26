import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeDefault/MainBanner";
import AboutUsContent from "@/components/HomeDefault/AboutUsContent";
import WhyUs from "@/components/Common/WhyUs";
import Speakers from "@/components/HomeDefault/Speakers";
import EventSchedules from "@/components/HomeDefault/EventSchedules";
import FunFact from "@/components/Common/FunFact";
import Pricing from "@/components/HomeDefault/Pricing";
import Partner from "@/components/Common/Partner";
import LatestNews from "@/components/HomeDefault/LatestNews";
import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Global Bio Pharma Conference 2024 | Innovations, Networking, Insights
        </title>
        <meta
          name="description"
          content="Join the Global Bio Pharma Conference 2024 for cutting-edge innovations, networking opportunities, and industry insights. Connect with top experts and explore the future of biopharmaceuticals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="bio-pharma conference, biopharmaceuticals, pharmaceutical innovation, healthcare networking event, biotech industry insights, pharmaceutical research advancements, regulatory updates in biopharma, healthcare technology trends"
        />
        <meta
          property="og:title"
          content="Global Bio Pharma Conference 2024 | Innovations, Networking, Insights"
        />
        <meta
          property="og:description"
          content="Join the Global Bio Pharma Conference 2024 for cutting-edge innovations, networking opportunities, and industry insights. Connect with top experts and explore the future of biopharmaceuticals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Global Bio Pharma Conference 2024 | Innovations, Networking, Insights"
        />
        <meta
          property="twitter:description"
          content="Join the Global Bio Pharma Conference 2024 for cutting-edge innovations, networking opportunities, and industry insights. Connect with top experts and explore the future of biopharmaceuticals."
        />
        <meta property="twitter:image" content="/images/logo.png" />

        <link rel="canonical" href="https://bio-pharma-2024.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
      </Head>
      <Navbar />

      <MainBanner />

      <AboutUsContent />

      <WhyUs />

      <Speakers />

      <EventSchedules />

      <FunFact />

      <Pricing />

      <Partner />

      <LatestNews />

      <BuyTicket />

      <Subscribe />

      <Footer />
    </>
  );
}
