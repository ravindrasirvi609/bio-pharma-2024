import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TripleInnerPartnersType = {
  className?: string;
  partnershipHandshake1?: string;
  sponsor?: string;
  suntInCulpaQuiOfficiaDese?: string;
  partnertshipnodecom?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const TripleInnerPartners: NextPage<TripleInnerPartnersType> = ({
  className = "",
  partnershipHandshake1,
  sponsor,
  suntInCulpaQuiOfficiaDese,
  partnertshipnodecom,
  propMinWidth,
  propDisplay,
  propMinWidth1,
}) => {
  const sponsorStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const partnertshipnodecomStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div
      className={`flex-1 bg-white box-border flex flex-row items-start justify-start py-[18px] px-[19px] min-w-[383px] max-w-full text-left text-3xl text-black font-text-small border-[1px] border-solid border-whitesmoke-200 mq900:min-w-full ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
        <div className="h-[145px] w-[145px] relative min-w-[145px] mq450:flex-1">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mistyrose box-border w-full h-full border-[0px] border-solid border-black" />
          <img
            className="absolute top-[22.5px] left-[22.5px] w-[100px] h-[100px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src={partnershipHandshake1}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 box-border min-w-[199px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div
              className="relative tracking-[0.02em] font-semibold font-h6 inline-block min-w-[83px] mq450:text-lg"
              style={sponsorStyle}
            >
              {sponsor}
            </div>
            <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[180%] text-darkslategray">
              {suntInCulpaQuiOfficiaDese}
            </div>
            <div
              className="relative text-sm [text-decoration:underline] leading-[100%] text-crimson-100 whitespace-nowrap"
              style={partnertshipnodecomStyle}
            >
              {partnertshipnodecom}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleInnerPartners;
