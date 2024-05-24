import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeTwo/MainBanner";
import Countdown from "@/components/HomeTwo/CountDown";
import AboutContent from "@/components/HomeTwo/AboutContent";
import WhyUs from "@/components/Common/WhyUs";
import Speakers from "@/components/HomeTwo/Speakers";
import EventSchedules from "@/components/HomeTwo/EventSchedules";
import FunFact from "@/components/Common/FunFact";
import Pricing from "@/components/HomeTwo/Pricing";
import Partner from "@/components/Common/Partner";
import LatesNews from "@/components/HomeTwo/LatestNews";
import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Countdown endDate="" />

      <AboutContent />

      <WhyUs />

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
