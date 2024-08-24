"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

// This would typically come from an API or database
const speakersData = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    role: "CEO, BioTech Innovations",
    image: "/speakers/jane-smith.jpg",
    bio: "Dr. Jane Smith is a renowned expert in personalized medicine with over 20 years of experience in the biotech industry.",
    topic: "The Future of Personalized Medicine",
    linkedin: "https://www.linkedin.com/in/jane-smith",
    twitter: "https://twitter.com/drjanesmith",
  },
  {
    id: 2,
    name: "Prof. John Doe",
    role: "Head of Immunology, Vaccine Research Institute",
    image: "/speakers/john-doe.jpg",
    bio: "Prof. John Doe is a leading researcher in vaccine development, focusing on novel approaches to combat emerging diseases.",
    topic: "Next-Generation Vaccine Technologies",
    linkedin: "https://www.linkedin.com/in/john-doe",
    twitter: "https://twitter.com/profjohndoe",
  },
  // Add more speakers as needed
];

const SpeakerCard = ({ speaker }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
  >
    <div className="relative h-64">
      <Image
        src={speaker.image}
        alt={speaker.name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#00a28b] mb-2">{speaker.name}</h3>
      <p className="text-gray-600 mb-2">{speaker.role}</p>
      <p className="text-gray-700 mb-4 line-clamp-3">{speaker.bio}</p>
      <p className="text-[#ec4c5b] font-semibold mb-4">{speaker.topic}</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={speaker.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-300"
          >
            <FaTwitter size={20} />
          </a>
        </div>
        <button className="bg-[#1bc8da] text-white px-4 py-2 rounded-full hover:bg-[#0196c2] transition duration-300">
          View Profile
        </button>
      </div>
    </div>
  </motion.div>
);

const SpeakersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSpeakers = speakersData.filter(
    (speaker) =>
      speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-[#00a28b] to-[#0196c0] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Our Distinguished Speakers
        </h1>
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search speakers or topics..."
              className="w-full py-3 px-4 pl-12 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ec4c5b]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
        {filteredSpeakers.length === 0 && (
          <p className="text-center text-white text-xl mt-8">
            No speakers found. Please try a different search term.
          </p>
        )}
      </div>
    </div>
  );
};

export default SpeakersPage;
