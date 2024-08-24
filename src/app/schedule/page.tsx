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
  "Day 1": [
    {
      time: "09:00 AM",
      title: "Opening Keynote: Navigating the Biopharma Odyssey",
      speaker: "Dr. Jane Smith, Chief Scientific Officer",
      type: "keynote",
    },
    { time: "10:30 AM", title: "Networking Break", speaker: "", type: "break" },
    {
      time: "11:00 AM",
      title: "Pneumococcal Vaccines: Cost-Effective Manufacturing",
      speaker: "Prof. John Doe, Vaccine Research Institute",
      type: "panel",
    },
    {
      time: "02:00 PM",
      title: "AI Approaches in Antigen Design",
      speaker: "Dr. Emily Brown, AI in Biopharma Ltd.",
      type: "workshop",
    },
    {
      time: "04:00 PM",
      title: "Cell and Gene Therapy for Rare Diseases",
      speaker: "Dr. Michael Johnson, Gene Therapy Center",
      type: "panel",
    },
  ],
  "Day 2": [
    {
      time: "09:30 AM",
      title: "AI/ML Applications in Drug Discovery",
      speaker: "Dr. Alex Turner, PharmaTech Solutions",
      type: "keynote",
    },
    { time: "11:00 AM", title: "Coffee Break", speaker: "", type: "break" },
    {
      time: "11:30 AM",
      title: "Biologics Combination Products: Regulatory Challenges",
      speaker: "Sarah Lee, Regulatory Affairs Expert",
      type: "panel",
    },
    {
      time: "02:00 PM",
      title: "cGMP Manufacturing for Biologics",
      speaker: "Dr. Chris Wilson, BioManufacturing Inc.",
      type: "workshop",
    },
    {
      time: "04:00 PM",
      title: "CDMO Capacity Optimization Strategies",
      speaker: "Emma Davis, CDMO Alliance",
      type: "panel",
    },
  ],
  "Day 3": [
    {
      time: "10:00 AM",
      title: "East-West Business Synergies in Biopharma",
      speaker: "Robert Chang, Global Biopharma Ventures",
      type: "keynote",
    },
    { time: "11:30 AM", title: "Lunch Break", speaker: "", type: "break" },
    {
      time: "01:00 PM",
      title: "Technology Transfer and Cross-Licensing",
      speaker: "Dr. Lisa Patel, BioTech Licensing Association",
      type: "panel",
    },
    {
      time: "03:00 PM",
      title: "Funding Opportunities in Biopharma",
      speaker: "Mark Anderson, Biopharma Investors Network",
      type: "panel",
    },
    {
      time: "04:30 PM",
      title: "Closing Remarks: The Future of Biopharma",
      speaker: "Conference Chair",
      type: "keynote",
    },
  ],
};

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState("Day 1");

  return (
    <section className="py-20 min-h-screen bg-gradient-to-r from-[#00a28b] to-[#0196c0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          3<sup>rd</sup> International Biopharma Conference
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
