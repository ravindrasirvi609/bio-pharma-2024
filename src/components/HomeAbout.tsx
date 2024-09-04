import React from "react";
import {
  FaGlobe,
  FaCalendarAlt,
  FaUsers,
  FaLightbulb,
  FaMicroscope,
  FaRocket,
  FaPuzzlePiece,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

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

  const themes = [
    "Navigating the Biopharma Odyssey: Charting a Course for Innovation",
    "Biopharma Frontiers: Pioneering Therapies for a Healthier Tomorrow",
    "The Biopharma Mosaic: Integrating Science, Technology, and Ethics",
    "Synergy in Science: Collaborative Pathways to Drug Discovery",
    "Biopharma Kaleidoscope: Shifting Paradigms in Healthcare",
  ];

  const sessions = [
    "The Genome Goldrush: Cracking the Code for Next-Gen Therapeutics",
    "AI and Machine Learning: Revolutionizing Drug Development Pipelines",
    "Cellular Alchemy: The Future of Regenerative Medicine",
    "Nanotech in Medicine: Small Particles, Big Impact",
    "Ethical Boundaries: Balancing Biotech's Promise and Peril",
  ];

  const topics = [
    {
      icon: <FaMicroscope />,
      title: "Pneumococcal and Pneumococcal Disease Vaccines",
      description:
        "Exploring antigen design, AI approaches, adjuvants, and delivery vehicles for vaccine development.",
    },
    {
      icon: <FaRocket />,
      title: "Cell and Gene Therapy for Rare Diseases",
      description: "Advancements in CART, CRISPR, and STEM cell technologies.",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "AI/ML Applications",
      description:
        "Leveraging artificial intelligence and machine learning in drug discovery and manufacturing.",
    },
    {
      icon: <FaChartLine />,
      title: "Biologics and cGMP Manufacturing",
      description:
        "Regulatory compliance, combination products, and novel manufacturing techniques.",
    },
    {
      icon: <FaHandshake />,
      title: "Business and Technology",
      description:
        "East-west synergies, technology transfer, cross-licensing, and funding opportunities.",
    },
  ];

  const panelDiscussion = {
    title:
      "Innovative Strategies for Optimizing CGT Manufacturing and Distribution: Leveraging Cutting-Edge Technologies and Platforms",
    discussionPoints: [
      "Current Challenges in CGT Manufacturing and Distribution: Identifying key bottlenecks in the current CGT supply chain. Discussing the impact of these challenges on scalability and affordability.",
      "Technological Innovations in CGT Manufacturing: Exploring new technologies that are revolutionizing CGT production. Case studies of successful implementation of advanced manufacturing technologies.",
      "Optimizing Distribution and Logistics: Strategies for ensuring the integrity and efficiency of CGT distribution. The role of temperature-controlled storage and transport in maintaining product quality.",
      "Platforms for Streamlining CGT Processes: Evaluating different platforms that support CGT manufacturing and logistics. Benefits and drawbacks of using contract development and manufacturing organizations (CDMOs) versus in-house production.",
      "Regulatory Considerations and Compliance: Navigating the regulatory landscape for CGT products. Best practices for ensuring compliance while optimizing processes.",
      "Future Trends and Predictions: Anticipating future advancements in CGT manufacturing and logistics. How emerging technologies might shape the future of CGT supply chains.",
    ],
    potentialPanelists: [
      "Industry Experts: Leaders from biotech companies specializing in CGT.",
      "Regulatory Authorities: Representatives from regulatory bodies to provide insights on compliance.",
      "Technology Innovators: Experts in new technologies and platforms for CGT.",
      "Supply Chain Specialists: Professionals with experience in optimizing logistics for sensitive products.",
    ],
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl text-[#ec4c5b] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#0196c0] mb-8 text-center">
            3<sup>rd</sup> International Conference in Mumbai
          </h3>
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-1/2 md:pr-4">
                <h4 className="text-2xl font-semibold mb-6 text-black">
                  Different Conference Tracks:
                </h4>
                <ul className="list-disc pl-8 mb-10">
                  {themes.map((theme, index) => (
                    <li
                      key={index}
                      className="text-gray-800 mb-3 hover:text-[#0196c0] transition-colors duration-200"
                    >
                      {theme}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 md:pl-4">
                <h4 className="text-2xl font-semibold mb-6 text-black">
                  Featured Sessions:
                </h4>
                <ul className="list-disc pl-8">
                  {sessions.map((session, index) => (
                    <li
                      key={index}
                      className="text-gray-800 mb-3 hover:text-[#0196c0] transition-colors duration-200"
                    >
                      {session}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0196c0] mb-6 text-center">
            Key Topics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl text-[#ec4c5b] mb-4">{topic.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-black">
                  {topic.title}
                </h4>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0196c0] mb-6 text-center">
            Dedicated Panel Discussion
          </h3>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-4 text-black">
              {panelDiscussion.title}
            </h4>
            <h5 className="text-lg font-semibold mb-4 text-black">
              Discussion Points:
            </h5>
            <ul className="list-disc pl-8 mb-6">
              {panelDiscussion.discussionPoints.map((point, index) => (
                <li key={index} className="text-gray-800 mb-3">
                  {point}
                </li>
              ))}
            </ul>
            <h5 className="text-lg font-semibold mb-4 text-black">
              Potential Panelists:
            </h5>
            <ul className="list-disc pl-8">
              {panelDiscussion.potentialPanelists.map((panelist, index) => (
                <li key={index} className="text-gray-800 mb-3">
                  {panelist}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
