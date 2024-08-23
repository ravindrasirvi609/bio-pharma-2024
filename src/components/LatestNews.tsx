// components/LatestNews.tsx
import React from "react";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const news = [
  {
    title: "Breakthrough in Gene Therapy to be Unveiled at GBP Conference",
    date: "May 15, 2024",
    excerpt:
      "A groundbreaking development in gene therapy will be presented at this year's conference, promising new hope for genetic disorders.",
  },
  {
    title: "Leading Pharma Companies to Showcase New Drug Developments",
    date: "May 10, 2024",
    excerpt:
      "Top pharmaceutical firms will reveal their latest drug innovations, covering areas from cancer treatment to rare diseases.",
  },
  {
    title: "Panel Discussion: The Future of Personalized Medicine",
    date: "May 5, 2024",
    excerpt:
      "Industry experts will debate the potential and challenges of personalized medicine in an engaging panel discussion.",
  },
];

const LatestNews: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00a28b]">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-[#0196c0]"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#0196c0]">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 flex items-center">
                <FaCalendarAlt className="mr-2 text-[#ec4c5b]" />
                {item.date}
              </p>
              <p className="text-gray-700 mb-4">{item.excerpt}</p>
              <Link
                href="/news"
                className="inline-flex items-center text-[#00a28b] hover:text-[#0196c0] transition-colors duration-300"
              >
                Read more
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-block bg-[#00a28b] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#0196c0] transition-colors duration-300"
          >
            View all news
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
