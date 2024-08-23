// components/FeaturedSpeakers.tsx
import Image from "next/image";

const speakers = [
  {
    name: "Dr. Jane Smith",
    role: "CEO, BioTech Innovations",
    image: "/speakers/jane-smith.jpg",
  },
  {
    name: "Prof. John Doe",
    role: "Lead Researcher, Pharma Labs",
    image: "/speakers/john-doe.jpg",
  },
  {
    name: "Dr. Emily Brown",
    role: "Director, Global Health Initiative",
    image: "/speakers/emily-brown.jpg",
  },
];

const FeaturedSpeakers: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Speakers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
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
                <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                <p className="text-gray-600">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
