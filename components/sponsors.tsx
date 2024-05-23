import type { NextPage } from "next";

export type SponsorsType = {
  className?: string;
};

const Sponsors: NextPage<SponsorsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[205.1px] pr-[21px] pl-5 box-border max-w-full text-center text-29xl text-black font-h6 mq900:pb-[133px] mq900:box-border ${className}`}
    >
      <div className="w-[1480.3px] flex flex-col items-center justify-start gap-[50px] max-w-full mq900:gap-[25px]">
        <h1 className="m-0 w-[454.6px] relative text-inherit leading-[55px] font-bold font-inherit inline-block max-w-full mq900:text-19xl mq900:leading-[44px] mq450:text-10xl mq450:leading-[33px]">
          Sponsor
        </h1>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-0 box-border gap-[30px_29px] min-h-[272px]">
          <div className="w-[272px] shadow-[5px_30px_56.13px_rgba(55,_55,_55,_0.11)] bg-white flex flex-col items-center justify-center py-10 px-[52px] box-border opacity-[0.5] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="self-stretch h-[41px] relative max-w-full overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
              src="/logoipsum261@2x.png"
            />
          </div>
          <div className="w-[272px] shadow-[5px_30px_56.13px_rgba(55,_55,_55,_0.11)] bg-white flex flex-col items-center justify-center py-[47px] px-[59px] box-border opacity-[0.5] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="self-stretch h-[27px] relative max-w-full overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
              src="/logoipsum259@2x.png"
            />
          </div>
          <div className="w-[272px] shadow-[5px_30px_56.13px_rgba(55,_55,_55,_0.11)] bg-white flex flex-col items-center justify-center py-10 px-[51px] box-border opacity-[0.5] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="self-stretch h-[41px] relative max-w-full overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
              src="/logoipsum264@2x.png"
            />
          </div>
          <div className="w-[272px] shadow-[5px_30px_56.13px_rgba(55,_55,_55,_0.11)] bg-white flex flex-col items-center justify-center py-[43.5px] px-[59px] box-border opacity-[0.5] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="self-stretch h-[34px] relative max-w-full overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
              src="/logoipsum237@2x.png"
            />
          </div>
          <div className="w-[272px] shadow-[5px_30px_56.13px_rgba(55,_55,_55,_0.11)] bg-white flex flex-col items-center justify-center py-10 px-[52px] box-border opacity-[0.5] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="self-stretch h-[41px] relative max-w-full overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
              src="/logoipsum265-1@2x.png"
            />
          </div>
          <div className="w-[272px] shadow-[5px_30px_56.13px_rgba(55,_55,_55,_0.11)] bg-white flex flex-col items-center justify-center py-10 px-[51px] box-border opacity-[0.5] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="self-stretch h-[41px] relative max-w-full overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
              src="/logoipsum262@2x.png"
            />
          </div>
          <div className="w-[272px] shadow-[5px_30px_56.13px_rgba(55,_55,_55,_0.11)] bg-white flex flex-col items-center justify-center py-10 px-[52px] box-border opacity-[0.5] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="self-stretch h-[41px] relative max-w-full overflow-hidden shrink-0 object-contain"
              alt=""
              src="/logoipsum265-1-1@2x.png"
            />
          </div>
          <div className="w-[272px] shadow-[5px_30px_56.13px_rgba(55,_55,_55,_0.11)] bg-white flex flex-col items-center justify-center py-10 px-[51px] box-border opacity-[0.5] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="self-stretch h-[41px] relative max-w-full overflow-hidden shrink-0 object-contain"
              alt=""
              src="/logoipsum262-1@2x.png"
            />
          </div>
          <div className="w-[272px] shadow-[5px_30px_56.13px_rgba(55,_55,_55,_0.11)] bg-white flex flex-col items-center justify-center py-10 px-[52px] box-border opacity-[0.5] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="self-stretch h-[41px] relative max-w-full overflow-hidden shrink-0 object-contain"
              alt=""
              src="/logoipsum261-1@2x.png"
            />
          </div>
          <div className="w-[272px] shadow-[5px_30px_56.13px_rgba(55,_55,_55,_0.11)] bg-white flex flex-col items-center justify-center py-10 px-[51px] box-border opacity-[0.5] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="self-stretch h-[41px] relative max-w-full overflow-hidden shrink-0 object-contain"
              alt=""
              src="/logoipsum264@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
