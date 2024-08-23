import React from "react";
import { FaGlobe, FaCalendarAlt, FaUsers, FaLightbulb } from "react-icons/fa";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <FaGlobe />,
      title: "Global Network",
      description: "Connect with industry leaders worldwide",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Annual Event",
      description: "Join our yearly flagship conference",
    },
    {
      icon: <FaUsers />,
      title: "Expert Speakers",
      description: "Learn from top biopharma professionals",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Focus",
      description: "Explore cutting-edge research and technologies",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00a28b] mb-4">
            About Global Bio Pharma Conference
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bringing together the brightest minds in biopharma to shape the
            future of healthcare through innovation, collaboration, and
            knowledge sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl text-[#ec4c5b] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#0196c0] mb-4">
            Join Us in Shaping the Future of Biopharma
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            The Global Bio Pharma Conference Group is committed to fostering
            innovation, collaboration, and knowledge exchange in the biopharma
            industry. Our annual conference brings together researchers,
            industry professionals, and thought leaders to address the most
            pressing challenges and exciting opportunities in healthcare.
          </p>
          <a
            href="/about"
            className="inline-block bg-[#1bc8da] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#0196c0] transition duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
