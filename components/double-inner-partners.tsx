import type { NextPage } from "next";
import TripleInnerPartners from "./triple-inner-partners";

export type DoubleInnerPartnersType = {
  className?: string;
};

const DoubleInnerPartners: NextPage<DoubleInnerPartnersType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-left text-3xl text-black font-text-small ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
        <TripleInnerPartners
          partnershipHandshake1="/partnershiphandshake-1@2x.png"
          sponsor="Sponsor"
          suntInCulpaQuiOfficiaDese="Sunt in culpa qui officia deserunt mollit anim id est laborum"
          partnertshipnodecom="partnertship@node.com"
        />
        <TripleInnerPartners
          partnershipHandshake1="/megaphone-1-1@2x.png"
          sponsor="Speakers"
          suntInCulpaQuiOfficiaDese="Excepteur sint occaecat cupidatat non proident"
          partnertshipnodecom="View Speakers"
          propMinWidth="93px"
          propDisplay="inline-block"
          propMinWidth1="98px"
        />
        <TripleInnerPartners
          partnershipHandshake1="/ticket-1@2x.png"
          sponsor="Tickets"
          suntInCulpaQuiOfficiaDese="Excepteur sint occaecat cupidatat non proident"
          partnertshipnodecom="Get Tickets"
          propMinWidth="70px"
          propDisplay="inline-block"
          propMinWidth1="76px"
        />
      </div>
    </div>
  );
};

export default DoubleInnerPartners;
