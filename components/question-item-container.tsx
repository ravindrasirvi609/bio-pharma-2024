import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type QuestionItemContainerType = {
  className?: string;
  whatsGonnaBeYour?: string;
  createCustomLandin?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const QuestionItemContainer: NextPage<QuestionItemContainerType> = ({
  className = "",
  whatsGonnaBeYour,
  createCustomLandin,
  propMinHeight,
  propPadding,
  propMinWidth,
}) => {
  const questionItemContainerStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const questionContentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const whatsGonnaBeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 bg-whitesmoke-100 box-border flex flex-col items-start justify-start pt-[18px] pb-[50px] pr-6 pl-[19px] min-w-[502px] min-h-[226px] max-w-full text-left text-13xl text-gray-400 font-h6 border-[1px] border-solid border-gray-100 mq900:min-w-full ${className}`}
      style={questionItemContainerStyle}
    >
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full"
        style={questionContentStyle}
      >
        <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full mq900:flex-wrap">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/bxhelpcircle.svg"
          />
          <h2
            className="m-0 flex-1 relative text-inherit font-semibold font-inherit inline-block min-w-[449px] max-w-full mq900:text-7xl mq900:min-w-full mq450:text-lgi"
            style={whatsGonnaBeStyle}
          >
            {whatsGonnaBeYour}
          </h2>
        </div>
        <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[180%] font-text-small text-darkslategray">
          {createCustomLandin}
        </div>
      </div>
    </div>
  );
};

export default QuestionItemContainer;
