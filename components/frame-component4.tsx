import type { NextPage } from "next";

export type FrameComponent4Type = {
  className?: string;
  loremIpsumDolorSitAmetCon?: string;
  loremIpsumDolorSiPlacehol?: string;
  antDesignuserOutlined?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  className = "",
  loremIpsumDolorSitAmetCon,
  loremIpsumDolorSiPlacehol,
  antDesignuserOutlined,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-2 px-[19px] text-left text-sm text-crimson-100 font-text-small border-[1px] border-solid border-gray-100 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
        <div className="w-[270px] flex flex-col items-start justify-start py-0 pr-[33px] pl-0 box-border gap-[5px]">
          <div className="w-[115.4px] relative leading-[100%] inline-block">
            {loremIpsumDolorSitAmetCon}
          </div>
          <input
            className="w-[calc(100%_-_33px)] [border:none] [outline:none] font-text-small text-lg bg-[transparent] self-stretch h-8 relative tracking-[-0.01em] leading-[180%] text-darkslategray text-left inline-block min-w-[142px] p-0"
            placeholder={loremIpsumDolorSiPlacehol}
            type="text"
          />
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src={antDesignuserOutlined}
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
