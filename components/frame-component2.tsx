import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
  rectangle404?: string;
  mOAMedia?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  rectangle404,
  mOAMedia,
}) => {
  return (
    <div
      className={`flex flex-col items-end justify-start gap-[30px] max-w-full text-center text-13xl text-black font-h6 ${className}`}
    >
      <img
        className="self-stretch h-[531.6px] relative rounded-181xl max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={rectangle404}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
          <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq900:text-7xl mq450:text-lgi">
            Lincoln Curtis
          </h2>
          <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[180%] font-text-small text-dimgray">
            {mOAMedia}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[5px]">
          <div className="h-8 w-8 relative">
            <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-700 w-full h-full" />
            <img
              className="absolute top-[8.1px] left-[8.1px] w-[15.8px] h-[15.8px] overflow-hidden z-[1]"
              alt=""
              src="/frame.svg"
            />
          </div>
          <div className="h-8 w-8 relative">
            <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-700 w-full h-full" />
            <img
              className="absolute top-[8.1px] left-[8.1px] w-[15.8px] h-[15.8px] overflow-hidden z-[1]"
              alt=""
              src="/frame-1.svg"
            />
          </div>
          <div className="h-8 w-8 relative">
            <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-700 w-full h-full" />
            <img
              className="absolute top-[8.1px] left-[8.1px] w-[15.8px] h-[15.8px] overflow-hidden z-[1]"
              alt=""
              src="/frame-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
