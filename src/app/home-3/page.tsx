import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeThree/MainBanner";
import AboutContent from "@/components/HomeThree/AboutContent";
import WhyUs from "@/components/HomeThree/WhyUs";
import Cta from "@/components/Common/Cta";
import Speakers from "@/components/HomeThree/Speakers";
import EventSchedules from "@/components/HomeThree/EventSchedules";
import FunFact from "@/components/Common/FunFact";
import Pricing from "@/components/HomeThree/Pricing";
import Partner from "@/components/Common/Partner";
import LatesNews from "@/components/HomeThree/LatestNews";
import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <AboutContent />

      <WhyUs />

      <Cta />

      <Speakers />

      <EventSchedules />

      <FunFact />

      <Pricing />

      <Partner />

      <LatesNews />

      <BuyTicket />

      <Subscribe />

      <Footer />
    </>
  );
}
