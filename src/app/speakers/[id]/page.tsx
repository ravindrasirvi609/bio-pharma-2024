"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

// This would typically come from an API or database
const speakerData: {
  [key: number]: {
    name: string;
    role: string;
    image: string;
    bio: string;
    topic: string;
    presentation: {
      title: string;
      description: string;
      time: string;
      date: string;
      location: string;
    };
    linkedin: string;
    twitter: string;
  };
} = {
  1: {
    name: "Dr. Jane Smith",
    role: "CEO, BioTech Innovations",
    image:
      "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Dr. Jane Smith is a renowned expert in personalized medicine with over 20 years of experience in the biotech industry. She has led groundbreaking research in genomics and has been instrumental in developing new therapeutic approaches.",
    topic: "The Future of Personalized Medicine",
    presentation: {
      title: "Revolutionizing Healthcare through Personalized Medicine",
      description:
        "In this presentation, Dr. Smith will explore the latest advancements in personalized medicine and how they are transforming patient care. She will discuss the role of genomics, AI, and big data in tailoring treatments to individual patients.",
      time: "10:00 AM - 11:30 AM",
      date: "September 15, 2024",
      location: "Main Auditorium",
    },
    linkedin: "https://www.linkedin.com/in/jane-smith",
    twitter: "https://twitter.com/drjanesmith",
  },
  // Add more speaker data as needed
};

const SpeakerPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const speaker = speakerData[Number(id)];

  if (!speaker) {
    return <div>Speaker not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative h-64 w-full md:w-64">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-[#00a28b] mb-2">
                {speaker.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{speaker.role}</p>
              <p className="text-gray-700 mb-6">{speaker.bio}</p>
              <div className="flex space-x-4 mb-6">
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={speaker.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-[#ec4c5b] mb-4">
              Presentation Details
            </h2>
            <h3 className="text-xl font-medium mb-2">
              {speaker.presentation.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {speaker.presentation.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <span className="font-semibold">Date:</span>{" "}
                {speaker.presentation.date}
              </div>
              <div>
                <span className="font-semibold">Time:</span>{" "}
                {speaker.presentation.time}
              </div>
              <div>
                <span className="font-semibold">Location:</span>{" "}
                {speaker.presentation.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerPage;
