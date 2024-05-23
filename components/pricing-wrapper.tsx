import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

export type PricingWrapperType = {
  className?: string;
};

const PricingWrapper: NextPage<PricingWrapperType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full text-center text-29xl text-black font-h6 mq900:gap-[25px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <h1 className="m-0 relative text-inherit leading-[55px] font-bold font-inherit shrink-0 [debug_commit:bf4bc93] mq900:text-19xl mq900:leading-[44px] mq450:text-10xl mq450:leading-[33px]">
          Affordable Pricing
        </h1>
      </div>
      <div className="w-[1595px] overflow-x-auto flex flex-row items-start justify-start gap-[30px] shrink-0 [debug_commit:bf4bc93] max-w-full text-13xl text-crimson-100">
        <div className="w-[511.7px] shrink-0 flex flex-col items-end justify-start pt-[76.6px] pb-[57.7px] pr-[15px] pl-4 box-border relative gap-[54px] mq900:pt-[50px] mq900:pb-[38px] mq900:box-border mq450:pt-8 mq450:pb-[25px] mq450:box-border">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/subtract.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[30.4px] pr-5 pl-[23px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start py-0 px-[54px]">
                <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[108px] z-[1] mq900:text-7xl mq450:text-lgi">
                  Regular
                </h2>
              </div>
              <b className="relative text-53xl leading-[77px] text-black whitespace-nowrap z-[1] mq900:text-39xl mq900:leading-[62px] mq450:text-24xl mq450:leading-[46px]">
                $99.00
              </b>
            </div>
          </div>
          <div className="self-stretch h-[3px] relative box-border z-[1] border-t-[3px] border-dashed border-whitesmoke-200" />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-7 pl-[30px] box-border max-w-full text-left text-lg text-darkslategray font-text-small">
            <div className="flex-1 flex flex-col items-center justify-start gap-[57px] max-w-full z-[1]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[22px] max-w-full">
                  <input
                    className="border-crimson-100 accent-crimson-100 cursor-pointer m-0 h-7 w-7 relative"
                    checked={true}
                    type="radio"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block min-w-[240px] max-w-full">
                    The standard chunk of Lorem Ipsum used since the 1500s
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[22px] max-w-full">
                  <input
                    className="cursor-pointer m-0 h-7 w-7 relative"
                    type="radio"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block max-w-[calc(100%_-_50px)]">
                    It uses a dictionary of over 200 Latin words
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[22px] max-w-full">
                  <input
                    className="cursor-pointer m-0 h-7 w-7 relative"
                    type="radio"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block min-w-[240px] max-w-full">
                    Excepteur sint occaecat cupidatat non proident
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[83px] pl-0 gap-[22px]">
                  <input
                    className="cursor-pointer m-0 h-7 w-7 relative"
                    type="radio"
                  />
                  <div className="relative tracking-[-0.01em] leading-[180%]">
                    Lorem Ipsum comes from sections
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[22px] max-w-full">
                  <input
                    className="cursor-pointer m-0 h-7 w-7 relative"
                    type="radio"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block max-w-[calc(100%_-_50px)]">
                    Ut enim ad minima veniam
                  </div>
                </div>
              </div>
              <Form.Select className="font-h6 font-semibold text-3xl text-crimson-100 whitespace-nowrap" />
            </div>
          </div>
        </div>
        <div className="w-[511.7px] shadow-[2px_7px_20px_rgba(0,_0,_0,_0.1)] shrink-0 flex flex-col items-end justify-start pt-[76.6px] pb-[57.7px] pr-[15px] pl-4 box-border relative gap-[54px] mq900:pt-[50px] mq900:pb-[38px] mq900:box-border mq450:pt-8 mq450:pb-[25px] mq450:box-border">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/subtract-1.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[30.4px] pr-5 pl-[22px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start py-0 px-[60px]">
                <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[121px] z-[1] mq900:text-7xl mq450:text-lgi">
                  Premium
                </h2>
              </div>
              <b className="relative text-53xl leading-[77px] text-black whitespace-nowrap z-[1] mq900:text-39xl mq900:leading-[62px] mq450:text-24xl mq450:leading-[46px]">
                $159.00
              </b>
            </div>
          </div>
          <div className="self-stretch h-[3px] relative box-border z-[1] border-t-[3px] border-dashed border-whitesmoke-200" />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-7 pl-[30px] box-border max-w-full text-left text-lg text-darkslategray font-text-small">
            <div className="flex-1 flex flex-col items-center justify-start gap-[57px] max-w-full z-[1]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[22px] max-w-full">
                  <input
                    className="cursor-pointer m-0 h-7 w-7 relative"
                    type="radio"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block min-w-[240px] max-w-full">
                    The standard chunk of Lorem Ipsum used since the 1500s
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[22px] max-w-full">
                  <input
                    className="cursor-pointer m-0 h-7 w-7 relative"
                    type="radio"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block max-w-[calc(100%_-_50px)]">
                    It uses a dictionary of over 200 Latin words
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[22px] max-w-full">
                  <input
                    className="cursor-pointer m-0 h-7 w-7 relative"
                    type="radio"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block min-w-[240px] max-w-full">
                    Excepteur sint occaecat cupidatat non proident
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[83px] pl-0 gap-[22px]">
                  <input
                    className="cursor-pointer m-0 h-7 w-7 relative"
                    type="radio"
                  />
                  <div className="relative tracking-[-0.01em] leading-[180%]">
                    Lorem Ipsum comes from sections
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[22px] max-w-full">
                  <input
                    className="cursor-pointer m-0 h-7 w-7 relative"
                    type="radio"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block max-w-[calc(100%_-_50px)]">
                    Ut enim ad minima veniam
                  </div>
                </div>
              </div>
              <div className="bg-crimson-100 flex flex-row items-start justify-start py-5 px-[50px] whitespace-nowrap text-3xl text-white font-h6">
                <div className="relative tracking-[0.02em] font-semibold">
                  CHOOSE PLAN
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[511.7px] shrink-0 flex flex-col items-end justify-start pt-[76.6px] px-4 pb-[57.7px] box-border relative gap-[84.4px] mq900:pt-[50px] mq900:pb-[38px] mq900:box-border mq450:pt-8 mq450:pb-[25px] mq450:box-border">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/subtract.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start py-0 px-14">
                <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[128px] z-[1] mq900:text-7xl mq450:text-lgi">
                  Advanced
                </h2>
              </div>
              <b className="relative text-53xl leading-[77px] text-black whitespace-nowrap z-[1] mq900:text-39xl mq900:leading-[62px] mq450:text-24xl mq450:leading-[46px]">
                $199.00
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[54px] max-w-full text-left text-lg text-darkslategray font-text-small">
            <div className="self-stretch h-[3px] relative box-border z-[1] border-t-[3px] border-dashed border-whitesmoke-200" />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-7 pl-[29px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-center justify-start gap-[57px] max-w-full z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[22px] max-w-full">
                    <input
                      className="cursor-pointer m-0 h-7 w-7 relative"
                      type="radio"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block min-w-[240px] max-w-full">
                      The standard chunk of Lorem Ipsum used since the 1500s
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[22px] max-w-full">
                    <input
                      className="cursor-pointer m-0 h-7 w-7 relative"
                      type="radio"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block max-w-[calc(100%_-_50px)]">
                      It uses a dictionary of over 200 Latin words
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[22px] max-w-full">
                    <input
                      className="cursor-pointer m-0 h-7 w-7 relative"
                      type="radio"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block min-w-[240px] max-w-full">
                      Excepteur sint occaecat cupidatat non proident
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[83px] pl-0 gap-[22px]">
                    <input
                      className="cursor-pointer m-0 h-7 w-7 relative"
                      type="radio"
                    />
                    <div className="relative tracking-[-0.01em] leading-[180%]">
                      Lorem Ipsum comes from sections
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[22px] max-w-full">
                    <input
                      className="cursor-pointer m-0 h-7 w-7 relative"
                      type="radio"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[180%] inline-block max-w-[calc(100%_-_50px)]">
                      Ut enim ad minima veniam
                    </div>
                  </div>
                </div>
                <Form.Select className="font-h6 font-semibold text-3xl text-crimson-100 whitespace-nowrap" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingWrapper;
