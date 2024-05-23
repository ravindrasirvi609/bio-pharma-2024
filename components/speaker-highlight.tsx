import type { NextPage } from "next";

export type SpeakerHighlightType = {
  className?: string;
};

const SpeakerHighlight: NextPage<SpeakerHighlightType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1898.6px] flex flex-row items-start justify-center pt-0 px-5 pb-[287px] box-border max-w-full text-left text-sm text-black font-text-small mq1300:pb-[187px] mq1300:box-border mq450:pb-[122px] mq450:box-border ${className}`}
    >
      <div className="w-[1411.8px] flex flex-row items-end justify-center gap-[63.4px] max-w-full mq900:gap-[32px] mq1300:flex-wrap mq450:gap-[16px]">
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.5px] box-border min-w-[509px] max-w-full mq900:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[628px] w-[1594.7px] absolute !m-[0] right-[-730.2px] bottom-[-138.5px] object-cover"
              alt=""
              src="/group-1231@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full z-[1]">
              <div className="flex flex-row items-center justify-start gap-[10px] max-w-full mq450:flex-wrap">
                <button className="cursor-pointer [border:none] py-2.5 px-5 bg-crimson-100 rounded-31xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-crimson-200">
                  <div className="relative text-sm leading-[100%] font-text-small text-white text-left inline-block min-w-[78px]">
                    What’s New
                  </div>
                </button>
                <div className="flex flex-row items-center justify-start pt-0 px-0 pb-0 gap-[10px]">
                  <div className="relative leading-[100%]">
                    Meet our speaker professional
                  </div>
                  <img
                    className="h-[7.4px] w-2.5 relative"
                    alt=""
                    src="/arrow-6-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full text-29xl font-h6 mq450:gap-[22px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[55px] font-bold font-inherit mq900:text-19xl mq900:leading-[44px] mq450:text-10xl mq450:leading-[33px]">
                  Start Today - It’s Easy
                </h1>
                <div className="w-[743.6px] relative text-lg tracking-[-0.01em] leading-[180%] font-text-small text-darkslategray inline-block max-w-full">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident
                </div>
                <div className="flex flex-row items-start justify-start gap-[20px] max-w-full mq900:flex-wrap">
                  <button className="cursor-pointer [border:none] py-5 px-[50px] bg-crimson-100 flex flex-row items-start justify-start whitespace-nowrap hover:bg-crimson-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="relative text-3xl tracking-[0.02em] font-semibold font-h6 text-white text-left">
                      REGISTER NOW
                    </div>
                  </button>
                  <button className="cursor-pointer py-[18px] px-[49px] bg-white flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                    <div className="relative text-3xl tracking-[0.02em] font-semibold font-h6 text-black text-left">
                      GET TICKETS
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[595.9px] w-[565.1px] flex flex-col items-start justify-start min-w-[565.0999999999999px] max-w-full text-5xl text-crimson-100 font-h6 mq900:min-w-full mq1300:flex-1">
          <div className="self-stretch h-[595.9px] flex flex-row items-start justify-end max-w-full">
            <div className="self-stretch w-[509.5px] flex flex-row items-end justify-end py-0 px-[22px] box-border relative max-w-full mq1300:flex-1">
              <div className="h-[818.2px] w-[550px] absolute !m-[0] top-[-121.7px] left-[-30.1px]">
                <div className="absolute top-[168.2px] left-[476.4px] rounded-181xl bg-mistyrose w-[650px] h-[399.8px] [transform:_rotate(90deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[158.2px] left-[486.4px] rounded-181xl box-border w-[650px] h-[399.8px] [transform:_rotate(90deg)] [transform-origin:0_0] z-[2] border-[2px] border-solid border-black" />
                <img
                  className="absolute top-[0px] left-[0px] w-[550px] h-[684.8px] object-cover z-[3]"
                  alt=""
                  src="/image-29@2x.png"
                />
              </div>
              <div className="w-80 shadow-[10px_4px_20px_rgba(0,_0,_0,_0.3)] rounded-t-31xl rounded-br-31xl rounded-bl-none bg-white flex flex-col items-start justify-start pt-[21.9px] pb-[22px] pr-5 pl-10 box-border gap-[6px] z-[4]">
                <div className="w-80 h-[92.9px] relative shadow-[10px_4px_20px_rgba(0,_0,_0,_0.3)] rounded-t-31xl rounded-br-31xl rounded-bl-none bg-white hidden" />
                <div className="relative tracking-[0.02em] font-semibold z-[1] mq450:text-lgi">
                  Santoso Gielondis
                </div>
                <div className="relative text-sm leading-[100%] font-text-small text-darkslategray z-[1]">
                  From Makna Media’s
                </div>
              </div>
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full z-[5] flex items-center justify-center">
                <img
                  className="h-full w-full overflow-hidden z-[5] object-contain absolute left-[10px] top-[4px] [transform:scale(1.079)]"
                  loading="lazy"
                  alt=""
                  src="/group-1220@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="shadow-[10px_4px_20px_rgba(0,_0,_0,_0.3)] rounded-t-31xl rounded-br-31xl rounded-bl-none bg-white flex flex-row items-start justify-start pt-[17.5px] pb-[17.4px] pr-10 pl-[41px] z-[4] mt-[-265.4px] text-29xl">
            <div className="h-[92.9px] w-[188.5px] relative shadow-[10px_4px_20px_rgba(0,_0,_0,_0.3)] rounded-t-31xl rounded-br-31xl rounded-bl-none bg-white hidden" />
            <div className="relative tracking-[0.02em] font-semibold inline-block min-w-[107px] z-[1] mq900:text-19xl mq450:text-10xl">
              2022
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerHighlight;
