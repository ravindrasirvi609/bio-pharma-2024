"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Event {
  time: string;
  title: string;
  speaker: string;
  type: "keynote" | "panel" | "workshop" | "break";
}

const scheduleData: { [key: string]: Event[] } = {
  "Thursday, December 4th": [
    {
      time: "18:00",
      title: "Welcome Address",
      speaker: "Dr. Kumar",
      type: "keynote",
    },
    {
      time: "18:15",
      title: "Keynote Session",
      speaker: "Speaker 1",
      type: "keynote",
    },
    {
      time: "19:30",
      title: "Session 2",
      speaker: "",
      type: "panel",
    },
    {
      time: "20:15",
      title: "Q & A",
      speaker: "",
      type: "panel",
    },
  ],
  "Friday, December 5th": [
    {
      time: "18:00",
      title: "Welcome Address",
      speaker: "Dr. Kumar",
      type: "keynote",
    },
    {
      time: "18:15",
      title: "Keynote Session",
      speaker: "Speaker 1",
      type: "keynote",
    },
    {
      time: "19:30",
      title: "Session 2",
      speaker: "",
      type: "panel",
    },
    {
      time: "20:15",
      title: "Q & A",
      speaker: "",
      type: "panel",
    },
  ],
};

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState("Thursday, December 4th");

  return (
    <section className="py-20 min-h-screen bg-gradient-to-r from-[#00a28b] to-[#0196c0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          International Biopharma Webinar
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-12 text-white">
          Biopharma Frontiers: Pioneering Therapies for a Healthier Tomorrow
        </h3>

        <div className="flex justify-center mb-8">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-2 mx-2 rounded-full transition-all duration-300 ${
                activeDay === day
                  ? "bg-[#ec4c5b] text-white shadow-lg"
                  : "bg-white text-[#00a28b] hover:bg-[#1bc8da] hover:text-white"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden text-black">
          {scheduleData[activeDay].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-start md:items-center p-6 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } transition-all duration-300 hover:bg-[#1bc8da] hover:text-white`}
            >
              <div className="w-full md:w-1/6 text-left md:text-right pr-6 mb-2 md:mb-0">
                <span className="text-lg font-semibold">{event.time}</span>
              </div>
              <div className="w-full md:w-4/6 mb-2 md:mb-0">
                <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                {event.speaker && (
                  <p>
                    <span className="font-medium">Speaker:</span>{" "}
                    {event.speaker}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/6">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === "keynote"
                      ? "bg-[#00a28b] text-white"
                      : event.type === "panel"
                      ? "bg-[#ec4c5b] text-white"
                      : event.type === "workshop"
                      ? "bg-[#0196c0] text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
