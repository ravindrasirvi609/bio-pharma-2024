import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-[45px] max-w-full text-left text-29xl text-black font-h6 mq900:gap-[22px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq1300:flex-wrap">
        <h1 className="m-0 relative text-inherit leading-[55px] font-bold font-inherit inline-block max-w-full mq900:text-19xl mq900:leading-[44px] mq450:text-10xl mq450:leading-[33px]">
          Event Conference The Speakers
        </h1>
        <button className="cursor-pointer rounded-lg [border:none] py-3 px-[50px] bg-crimson-100 flex flex-row items-start justify-start whitespace-nowrap hover:bg-crimson-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative text-3xl tracking-[0.02em] font-semibold font-h6 text-white text-left">
            ALL SPEAKERS
          </div>
        </button>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start py-0 px-0.5 box-border gap-[25px] max-w-full grid-cols-[repeat(4,_minmax(284px,_1fr))] text-center text-13xl text-crimson-100 mq900:grid-cols-[minmax(284px,_1fr)] mq1300:justify-center mq1300:grid-cols-[repeat(2,_minmax(284px,_493px))]">
        <FrameComponent2 rectangle404="/speaker.jpeg" mOAMedia="MOA Media" />
        <FrameComponent2 rectangle404="/speaker.jpeg" mOAMedia="MOA Media" />
        <FrameComponent2 rectangle404="/speaker.jpeg" mOAMedia="Narasi Media" />
        <FrameComponent2 rectangle404="/speaker.jpeg" mOAMedia="MSN Media" />
      </div>
    </div>
  );
};

export default FrameComponent1;
