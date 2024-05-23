import type { NextPage } from "next";
import React from "react";

export type ScheduleListType = {
  className?: string;
};

type EventType = {
  time: string;
  speaker: string;
  topic: string;
  imgSrc: string;
};

type EventCardProps = {
  date: string;
  events: EventType[];
};

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const ScheduleList: NextPage<ScheduleListType> = ({ className = "" }) => {
  const totalPages = 10; // Example total pages
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-17 shrink-0 text-left text-13xl text-black font-h6 mq900:gap-9 mq450:gap-4 ${className}`}
    >
      <div className="w-full overflow-x-auto flex flex-row items-start justify-start gap-6 max-w-full">
        {/* Event Card Component - Example for one day */}
        {Array.from({ length: 3 }).map((_, index) => (
          <EventCard
            key={index}
            date={`24 Aug`}
            events={[
              {
                time: "9:00 - 9:15",
                speaker: "Justin Septimus",
                topic: "Opening Remarks",
                imgSrc: "/ellipse-75@2x.png",
              },
              {
                time: "9:15 - 9:45",
                speaker: "Talan Saris",
                topic: "It’s time to Whio Web into Shopee",
                imgSrc: "/ellipse-75@2x.png",
              },
              {
                time: "9:45 - 10:10",
                speaker: "Leo Rosser",
                topic: "Live video AMAs in 20 Days",
                imgSrc: "/ellipse-75@2x.png",
              },
            ]}
          />
        ))}
      </div>
      <div className="w-full flex flex-row items-start justify-center gap-5 max-w-full mt-5">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

const EventCard: React.FC<EventCardProps> = ({ date, events }) => {
  return (
    <div className="w-96 bg-whitesmoke-100 box-border shrink-0 flex flex-col items-start justify-start pt-6 px-7 pb-7 border-2 border-solid border-crimson-100 mq900:pt-5 mq900:pb-5">
      <div className="self-stretch flex flex-row items-center justify-between gap-5">
        <div className="font-semibold">{date}</div>
        <div className="text-3xl tracking-[0.02em] font-semibold text-crimson-100">
          SEE DETAILS
        </div>
      </div>
      {events.map((event, index) => (
        <div
          key={index}
          className="self-stretch bg-white flex flex-col items-start justify-start p-5"
        >
          <div className="flex flex-row flex-wrap items-center justify-start gap-4">
            <img
              className="h-16 w-16 rounded-full object-contain"
              alt=""
              src={event.imgSrc}
            />
            <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border min-w-[131px]">
              <div className="leading-[100%]">{event.time}</div>
              <div className="text-5xl font-semibold">{event.speaker}</div>
              <div className="text-lg tracking-[-0.01em] leading-[180%] text-dimgray">
                {event.topic}
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className="cursor-pointer border-none p-5 bg-white self-stretch flex flex-row items-start justify-center whitespace-nowrap hover:bg-gainsboro">
        <div className="text-3xl tracking-[0.02em] font-semibold text-crimson-100">
          15 min break
        </div>
      </button>
    </div>
  );
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl text-darkslategray">
      <div className="w-[436px] flex flex-row items-start justify-center max-w-full gap-5">
        <button
          className="cursor-pointer border-none p-4 bg-white flex-1 hover:bg-gainsboro"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          <div className="text-xl font-medium text-crimson-100">PREV</div>
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`cursor-pointer border-none p-4 ${
              currentPage === page
                ? "bg-crimson-100 text-white"
                : "bg-white text-crimson-100"
            }`}
            onClick={() => onPageChange(page)}
          >
            <div className="text-xl font-medium">{page}</div>
          </button>
        ))}
        <button
          className="cursor-pointer border-none p-4 bg-white flex-1 hover:bg-gainsboro"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <div className="text-xl font-medium text-crimson-100">NEXT</div>
        </button>
      </div>
    </div>
  );
};

export default ScheduleList;
