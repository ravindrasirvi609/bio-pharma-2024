import React from "react";
import { FaUserTie, FaHandshake, FaChalkboardTeacher } from "react-icons/fa";

const KeyInfo: React.FC = () => {
  const highlights = [
    {
      icon: <FaUserTie />,
      number: "50+",
      text: "Expert Speakers",
      color: "#00a28b",
    },
    {
      icon: <FaHandshake />,
      number: "3",
      text: "Days of Networking",
      color: "#ec4c5b",
    },
    {
      icon: <FaChalkboardTeacher />,
      number: "20+",
      text: "Workshops & Panels",
      color: "#1bc8da",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Conference Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center">
                <div className={`text-6xl mb-4`} style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: item.color }}
                >
                  {item.number}
                </div>
                <p className="text-xl text-gray-600 text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyInfo;
