// Import necessary modules from Next.js and React
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

// Define the prop types for GroupComponent1
export type GroupComponent1Type = {
  className?: string;
  highSecurity?: string;
  etHarumQuidemRerumFacilis?: string;
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propColor?: CSSProperties["color"];
  isActive?: boolean; // Add isActive prop to manage active state
};

// Define the GroupComponent1 component
const GroupComponent1: NextPage<GroupComponent1Type> = ({
  className = "",
  highSecurity,
  etHarumQuidemRerumFacilis,
  propWidth,
  propHeight,
  propColor,
  isActive = false, // Default value for isActive is false
}) => {
  // Use useMemo hook to memoize styles
  const highSecurityStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const etHarumQuidemStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`w-[511.7px] bg-white box-border shrink-0 flex flex-col items-start justify-start pt-[50px] pb-[70px] pr-5 pl-[49px] gap-[20px] max-w-full text-left text-13xl text-black font-h6 border-[2px] border-solid ${
        isActive ? "border-crimson-100" : "border-whitesmoke-200"
      } ${className}`}
    >
      <div className="w-[511.7px] h-[280px] relative bg-white box-border hidden max-w-full border-[2px] border-solid border-whitesmoke-200" />
      <h2
        className="m-0 w-full relative text-inherit font-semibold font-inherit z-[1] text-4xl"
        style={highSecurityStyle}
      >
        {highSecurity}
      </h2>
      <div
        className="w-full relative text-lg tracking-[-0.01em] leading-[180%] font-text-small z-[1]"
        style={etHarumQuidemStyle}
      >
        {etHarumQuidemRerumFacilis}
      </div>
    </div>
  );
};

export default GroupComponent1;
