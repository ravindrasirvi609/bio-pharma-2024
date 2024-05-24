import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeFour/MainBanner";
import AboutContent from "@/components/HomeFour/AboutContent";
import WhyUs from "@/components/HomeFour/WhyUs";
import Cta from "@/components/Common/Cta";
import Speakers from "@/components/HomeFour/Speakers";
import EventSchedules from "@/components/HomeFour/EventSchedules";
import FunFact from "@/components/Common/FunFact";
import Pricing from "@/components/HomeFour/Pricing";
import Partner from "@/components/Common/Partner";
import LatestNews from "@/components/HomeFour/LatestNews";
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

      <LatestNews />
  
      <BuyTicket />

      <Subscribe />

      <Footer />
    </>
  );
}
