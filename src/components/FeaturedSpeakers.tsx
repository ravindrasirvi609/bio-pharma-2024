// components/FeaturedSpeakers.tsx
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const speakers = [
  {
    name: "Dr. Jane Smith",
    role: "CEO, BioTech Innovations",
    image: "/speakers/jane-smith.jpg",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
  },
  {
    name: "Prof. John Doe",
    role: "Lead Researcher, Pharma Labs",
    image: "/speakers/john-doe.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  {
    name: "Dr. Emily Brown",
    role: "Director, Global Health Initiative",
    image: "/speakers/emily-brown.jpg",
    linkedin: "https://linkedin.com/in/emilybrown",
    twitter: "https://twitter.com/emilybrown",
  },
];

const FeaturedSpeakers: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00a28b] animate-fade-in">
          Featured Speakers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-72 md:h-80">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#0196c0]">
                  {speaker.name}
                </h3>
                <p className="text-gray-600 mb-4">{speaker.role}</p>
                <div className="flex space-x-4">
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0077b5] transition-colors duration-300"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={speaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#1da1f2] transition-colors duration-300"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
