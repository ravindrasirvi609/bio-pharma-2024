import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import DoubleInnerPartners from "../components/double-inner-partners";
import FrameComponent1 from "../components/frame-component1";
import GroupComponent1 from "../components/group-component1";
import DoubleInnerSchedule from "../components/double-inner-schedule";
import ScheduleList from "../components/schedule-list";
import SpeakerHighlight from "../components/speaker-highlight";
import Sponsors from "../components/sponsors";
import PricingWrapper from "../components/pricing-wrapper";
import FrameComponent from "../components/frame-component";
import GroupComponent from "../components/group-component";
import { useState } from "react";

const Homepage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[149.8px] box-border leading-[normal] tracking-[normal]">
      <FrameComponent3 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[150px] pr-[21px] pl-5 box-border max-w-full mq900:pb-[63px] mq900:box-border mq1300:pb-[97px] mq1300:box-border">
        <div className="w-[1595px] flex flex-col items-start justify-start gap-[150px] max-w-full mq900:gap-[37px] mq1300:gap-[75px] mq450:gap-[19px]">
          <DoubleInnerPartners />
          <FrameComponent1 />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[50px] box-border max-w-full text-left text-29xl text-black font-h6">
        <div className="w-[1594.2px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap mq450:justify-center">
          <h1 className="m-0 relative text-inherit leading-[55px] font-bold font-inherit mq900:text-19xl mq900:leading-[44px] mq450:text-10xl mq450:leading-[33px]">
            WHY WATCH?
          </h1>
          <div className="w-[96.2px] flex flex-col items-start justify-start pt-[27.5px] px-0 pb-0 box-border">
            <div className="self-stretch h-0 flex flex-row items-start justify-between gap-[20px]">
              <img
                className="h-0 w-[33.1px] relative object-contain"
                alt=""
                src="/arrow-8.svg"
              />
              <img
                className="h-[22.1px] w-[33.1px] relative"
                alt=""
                src="/arrow-7.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="ml-[30px] mb-[150px] w-[2299px] overflow-x-auto flex flex-row items-start justify-start gap-[30px] max-w-[120%] shrink-0 text-left text-13xl text-crimson-100 font-h6">
        <div onClick={() => handleClick(0)}>
          <GroupComponent1
            highSecurity="High Security"
            etHarumQuidemRerumFacilis="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit"
            isActive={activeIndex === 0}
            propWidth="412px"
            propHeight="unset"
            propColor="#3a3a3a"
          />
        </div>
        <div onClick={() => handleClick(1)}>
          <GroupComponent1
            highSecurity="For Everyone In The Community"
            etHarumQuidemRerumFacilis="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
            propWidth="412px"
            propHeight="unset"
            propColor="#3a3a3a"
            isActive={activeIndex === 1}
          />
        </div>
        <div onClick={() => handleClick(2)}>
          <GroupComponent1
            highSecurity="Support Every Devices"
            etHarumQuidemRerumFacilis="These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled"
            propWidth="412px"
            propHeight="unset"
            propColor="#000"
            isActive={activeIndex === 2}
          />
        </div>
      </section>

      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-72 pr-5 pl-5 box-border max-w-full mq900:pb-28 mq1300:pb-44">
        <div className="flex flex-col items-start justify-start pt-0 pb-200 box-border gap-12 max-w-full h-auto mq900:gap-6 mq900:pb-84 mq1300:pb-130 mq450:pb-56">
          <DoubleInnerSchedule />
          <ScheduleList />
        </div>
      </section>

      <SpeakerHighlight />
      <Sponsors />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[150px] box-border max-w-full mq900:pb-[41px] mq900:box-border mq1300:pb-[63px] mq1300:box-border">
        <div className="w-[1596px] flex flex-col items-start justify-start gap-[150px] max-w-full mq900:gap-[37px] mq1300:gap-[75px] mq450:gap-[19px]">
          <PricingWrapper />
          <FrameComponent />
        </div>
      </section>
      <GroupComponent />
      <section className="self-stretch bg-black flex flex-row items-start justify-center py-[68px] px-5 box-border max-w-full z-[2] text-center text-sm text-whitesmoke-100 font-text-small">
        <div className="h-[150px] w-[1920px] relative bg-black hidden max-w-full" />
        <div className="relative leading-[100%] z-[1]">
          © 2022 Conference. All Rights Reserved. With love by Ravindra
        </div>
      </section>
    </div>
  );
};

export default Homepage;
