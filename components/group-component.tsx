import type { NextPage } from "next";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-start py-[150px] px-[163px] box-border relative min-h-[613px] max-w-full text-left text-13xl text-black font-h6 mq900:py-[97px] mq900:px-10 mq900:box-border mq1300:pl-[81px] mq1300:pr-[81px] mq1300:box-border ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
      <div className="w-[1557px] flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq1650:flex-wrap mq1650:justify-center">
        <div className="w-[455px] flex flex-col items-start justify-start gap-[30px] max-w-full text-17xl">
          <div className="flex flex-row items-center justify-start gap-[5px]">
            <img
              className="h-[32.8px] w-[24.1px] relative object-contain"
              alt=""
              src="/group-1209-1@2x.png"
            />
            <h1 className="m-0 relative text-inherit tracking-[-0.05em] font-semibold font-inherit inline-block min-w-[85px] mq900:text-10xl mq450:text-3xl">
              NODE
            </h1>
          </div>
          <div className="self-stretch relative text-xl font-medium text-darkslategray mq450:text-base">
            We design and develop themes for customers of all sizes,
            specializing in creating stylish , modern
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[78px] mq900:text-7xl mq450:text-lgi">
            About
          </h2>
          <div className="flex flex-col items-start justify-start gap-[10px] text-lg text-darkslategray font-text-small">
            <div className="relative tracking-[-0.01em] leading-[180%] inline-block min-w-[50px]">
              Home
            </div>
            <div className="relative leading-[180%] font-dm-sans inline-block min-w-[57px]">
              Pricing
            </div>
            <div className="relative tracking-[-0.01em] leading-[180%] inline-block min-w-[104px]">
              Our Speaker
            </div>
            <div className="relative tracking-[-0.01em] leading-[180%] inline-block min-w-[95px]">
              Why Watch
            </div>
            <div className="relative tracking-[-0.01em] leading-[180%] inline-block min-w-[78px]">
              About Us
            </div>
          </div>
        </div>
        <div className="w-[327px] flex flex-col items-start justify-start gap-[30px] max-w-full">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[58px] mq900:text-7xl mq450:text-lgi">
            FAQ
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-lg text-darkslategray font-text-small">
            <div className="relative tracking-[-0.01em] leading-[180%]">
              What is the method of payment?
            </div>
            <div className="relative tracking-[-0.01em] leading-[180%]">
              Can I register online?
            </div>
            <div className="self-stretch relative tracking-[-0.01em] leading-[180%]">
              What is the dress code for the conference?
            </div>
            <div className="self-stretch relative tracking-[-0.01em] leading-[180%]">
              Can I attend the conference for only one day?
            </div>
          </div>
        </div>
        <div className="w-[380px] flex flex-col items-start justify-start gap-[30px] max-w-full">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit mq900:text-7xl mq450:text-lgi">
            Contact Info
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-lg text-darkslategray font-text-small">
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full mq450:flex-wrap">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/frame-12.svg"
              />
              <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block min-w-[225px] max-w-full">
                88 Broklyn Golden Street, Ney York United Sates of America
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/frame-13.svg"
              />
              <div className="relative tracking-[-0.01em] leading-[180%] whitespace-nowrap">
                +01 234 567 89
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/frame-14.svg"
              />
              <a
                className="relative tracking-[-0.01em] leading-[180%] text-[inherit] [text-decoration:none] whitespace-nowrap"
                href="mailto:contact@george.com"
                target="_blank"
              >
                contact@doom.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent;
