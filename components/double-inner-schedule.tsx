import type { NextPage } from "next";

export type DoubleInnerScheduleType = {
  className?: string;
};

const DoubleInnerSchedule: NextPage<DoubleInnerScheduleType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between shrink-0 gap-5 text-left text-29xl text-black font-h6 mq1300:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-4 max-w-full">
        <h1 className="m-0 leading-[55px] font-bold mq900:text-19xl mq900:leading-[44px] mq450:text-10xl mq450:leading-[33px]">
          The Schedule This Month
        </h1>
        <div className="text-xl font-medium mq450:text-base">
          Today, 23 Aug 2022
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-3.5">
        <button className="cursor-pointer border-none py-5 px-12 bg-crimson-100 flex items-start justify-start gap-2.5 whitespace-nowrap hover:bg-crimson-200 mq450:px-5">
          <div className="text-3xl tracking-[0.02em] font-semibold text-white">
            FILTER SCHEDULE
          </div>
          <img className="h-6 w-6" alt="" src="/fluentfilter24filled.svg" />
        </button>
      </div>
    </div>
  );
};

export default DoubleInnerSchedule;
