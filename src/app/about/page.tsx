import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#00a28b] mb-8">
          About the Conference
        </h1>

        {/* Hero Section */}
        <div className="mb-16 relative">
          <Image
            src="/conference-hall.jpg"
            alt="Conference Hall"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <h2 className="text-3xl md:text-4xl text-white font-bold text-center px-4">
              3rd International Biopharma Conference in Mumbai
            </h2>
          </div>
        </div>

        {/* Conference Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md">
            <FaCalendarAlt className="text-3xl text-[#ec4c5b] mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Date</h3>
              <p>August 15-17, 2024</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-3xl text-[#ec4c5b] mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p>Mumbai Convention Center</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md">
            <FaUsers className="text-3xl text-[#ec4c5b] mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Attendees</h3>
              <p>1000+ Industry Professionals</p>
            </div>
          </div>
        </div>

        {/* Conference Theme */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0196c0] mb-4">
            Conference Theme
          </h2>
          <p className="text-xl font-semibold mb-4 text-gray-700">
            &quot;Navigating the Biopharma Odyssey: Charting a Course for
            Innovation&quot;
          </p>
          <p className="text-gray-600 leading-relaxed">
            Join us as we explore the frontiers of biopharma, integrating
            cutting-edge science, technology, and ethics. Our conference aims to
            foster collaboration and drive innovation in the ever-evolving
            landscape of healthcare and drug discovery.
          </p>
        </div>

        {/* Key Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0196c0] mb-4">Key Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Pneumococcal Disease Vaccines",
              "Cell and Gene Therapy",
              "AI/ML in Drug Discovery",
              "Biologics Combination Products",
              "cGMP Manufacturing",
              "East-West Business Synergies",
              "Technology Transfer",
              "Funding Opportunities",
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-semibold text-[#00a28b]">{topic}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Sessions */}
        <div>
          <h2 className="text-3xl font-bold text-[#0196c0] mb-4">
            Featured Sessions
          </h2>
          <div className="space-y-6">
            {[
              "The Genome Goldrush: Cracking the Code for Next-Gen Therapeutics",
              "AI and Machine Learning: Revolutionizing Drug Development Pipelines",
              "Cellular Alchemy: The Future of Regenerative Medicine",
              "Nanotech in Medicine: Small Particles, Big Impact",
              "Ethical Boundaries: Balancing Biotech's Promise and Peril",
            ].map((session, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="font-semibold text-lg text-[#ec4c5b]">
                  {session}
                </h3>
                <p className="text-gray-600 mt-2">
                  Join industry experts as they delve into groundbreaking
                  research and discuss the future of biopharma.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
