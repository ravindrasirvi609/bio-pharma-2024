import React from "react";
import Link from "next/link";
import Image from "next/image";

const speakers = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    role: "CEO, BioTech Innovations",
    image: "/speakers/jane-smith.jpg",
    topic: "The Future of Personalized Medicine",
  },
  {
    id: 2,
    name: "Prof. John Doe",
    role: "Lead Researcher, Pharma Labs",
    image: "/speakers/john-doe.jpg",
    topic: "Advancements in Drug Discovery",
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    role: "Director, Global Health Initiative",
    image: "/speakers/emily-brown.jpg",
    topic: "Tackling Global Pandemics",
  },
];

const Speakers: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#00a28b] mb-12">
          Our Speakers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={speaker.id}>
              <Link href={`/speakers/${speaker.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
                  <div className="relative h-64">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">
                      {speaker.name}
                    </h2>
                    <p className="text-gray-600 mb-2">{speaker.role}</p>
                    <p className="text-sm text-[#ec4c5b] font-medium">
                      Topic: {speaker.topic}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
