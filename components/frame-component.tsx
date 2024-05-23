import type { NextPage } from "next";
import QuestionItemContainer from "./question-item-container";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center gap-[50px] max-w-full text-left text-29xl text-black font-h6 mq900:gap-[25px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 relative text-inherit leading-[55px] font-bold font-inherit inline-block max-w-full mq900:text-19xl mq900:leading-[44px] mq450:text-10xl mq450:leading-[33px]">
          Any Question About Us?
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-13xl text-gray-400">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[50px] max-w-full mq900:gap-[25px]">
          <div className="flex-1 shadow-[2px_7px_20px_rgba(0,_0,_0,_0.1)] bg-white box-border flex flex-col items-start justify-start py-[18px] px-[19px] min-w-[502px] max-w-full border-[1px] border-solid border-crimson-100 mq900:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border gap-[20px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full mq900:flex-wrap">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/bxhelpcircle.svg"
                />
                <h2 className="m-0 flex-1 relative text-inherit font-semibold font-inherit inline-block min-w-[450px] max-w-full mq900:text-7xl mq900:min-w-full mq450:text-lgi">
                  How many participants can join the meeting?
                </h2>
              </div>
              <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[180%] font-text-small text-darkslategray">
                A software startup is a new company that develops, sells, and
                distributes different types of software products or services.
                Most software startups aim to dominate a high-growth market on
                limited resources. Since they're new, they don't have the
                operating history.
              </div>
            </div>
          </div>
          <QuestionItemContainer
            whatsGonnaBeYour="What is a licensed user and what is a participant?"
            createCustomLandin="Tech startups need a CEO and CTO at the bare minimum. Use talent-sourcing sites to find a co-founder with the right skills, energy, and vision. Hustle to reach your first few customers"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[50px] max-w-full mq900:gap-[25px]">
          <QuestionItemContainer
            whatsGonnaBeYour="How many people can use one meeting license?"
            createCustomLandin="What is a founder? A founder is a person who comes up with an idea (hopefully a profitable idea) and then transforms it into a new business or startup. Founders can set up a business on their own, or they can do it with others (what we call co-founders)."
            propMinHeight="226px"
            propPadding="0px 3px 0px 0px"
            propMinWidth="450px"
          />
          <QuestionItemContainer
            whatsGonnaBeYour="What is the the difference between the basic and pro plans?"
            createCustomLandin="Startups are typically online or technology-oriented businesses that can easily reach a large market. To operate a small business, on the other hand, you don't need a big market to grow into."
            propMinHeight="unset"
            propPadding="unset"
            propMinWidth="449px"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[50px] max-w-full mq900:gap-[25px]">
          <QuestionItemContainer
            whatsGonnaBeYour="What payment methods do you accept?"
            createCustomLandin="Insufficient financial resources. Another important reason for the failure of start-ups is the lack of capital resources. In the growth phase, follow-up financing is often lacking. The CB Insight study puts the proportion of companies that failed due to liquidity problems at just under one third (29 percent)."
            propMinHeight="unset"
            propPadding="0px 3px 0px 0px"
            propMinWidth="418px"
          />
          <QuestionItemContainer
            whatsGonnaBeYour="Can you start a software company by yourself?"
            createCustomLandin="In terms of founding a company and hiring a few people who would help at first, it's possible to run a software company alone. There are tons of freelancers and “one-man show” companies that provide professional software services"
            propMinHeight="226px"
            propPadding="unset"
            propMinWidth="449px"
          />
        </div>
      </div>
      <div className="w-[520px] relative text-sm leading-[100%] font-text-small text-center inline-block max-w-full">
        <span>{`Didn’t find your answer? `}</span>
        <span className="text-crimson-100">Contact us here</span>
      </div>
    </div>
  );
};

export default FrameComponent;
