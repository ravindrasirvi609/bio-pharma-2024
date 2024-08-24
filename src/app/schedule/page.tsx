"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Event {
  time: string;
  title: string;
  speaker: string;
  type: "talk" | "workshop" | "break";
}

const scheduleData: { [key: string]: Event[] } = {
  "Day 1": [
    {
      time: "09:00 AM",
      title: "Opening Keynote",
      speaker: "John Doe",
      type: "talk",
    },
    { time: "10:30 AM", title: "Coffee Break", speaker: "", type: "break" },
    {
      time: "11:00 AM",
      title: "AI in Modern Applications",
      speaker: "Jane Smith",
      type: "talk",
    },
    {
      time: "02:00 PM",
      title: "Hands-on Machine Learning",
      speaker: "Mike Johnson",
      type: "workshop",
    },
  ],
  "Day 2": [
    {
      time: "09:30 AM",
      title: "Future of Web Development",
      speaker: "Emily Brown",
      type: "talk",
    },
    { time: "11:00 AM", title: "Networking Break", speaker: "", type: "break" },
    {
      time: "01:00 PM",
      title: "Building Scalable Systems",
      speaker: "Chris Wilson",
      type: "talk",
    },
    {
      time: "03:30 PM",
      title: "Cloud Computing Workshop",
      speaker: "Sarah Lee",
      type: "workshop",
    },
  ],
  "Day 3": [
    {
      time: "10:00 AM",
      title: "Cybersecurity Trends",
      speaker: "Alex Turner",
      type: "talk",
    },
    { time: "12:00 PM", title: "Lunch Break", speaker: "", type: "break" },
    {
      time: "02:00 PM",
      title: "Panel: Tech Ethics",
      speaker: "Various Experts",
      type: "talk",
    },
    {
      time: "04:00 PM",
      title: "Closing Remarks",
      speaker: "Conference Chair",
      type: "talk",
    },
  ],
};

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState("Day 1");

  return (
    <section className="py-16 bg-gradient-to-r from-[#00a28b] to-[#0196c0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Conference Schedule
        </h2>

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

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {scheduleData[activeDay].map((event, index) => (
            <div
              key={index}
              className={`flex items-center p-6 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } transition-all duration-300 hover:bg-[#1bc8da] hover:text-white`}
            >
              <div className="w-1/6 text-right pr-6">
                <span className="text-lg font-semibold">{event.time}</span>
              </div>
              <div className="w-4/6">
                <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                {event.speaker && (
                  <p>
                    <span className="font-medium">Speaker:</span>{" "}
                    {event.speaker}
                  </p>
                )}
              </div>
              <div className="w-1/6">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === "talk"
                      ? "bg-[#00a28b] text-white"
                      : event.type === "workshop"
                      ? "bg-[#ec4c5b] text-white"
                      : "bg-[#0196c0] text-white"
                  }`}
                >
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
