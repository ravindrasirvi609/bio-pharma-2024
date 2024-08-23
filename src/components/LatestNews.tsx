// components/LatestNews.tsx
import Link from "next/link";

const news = [
  {
    title: "Breakthrough in Gene Therapy to be Unveiled at GBP Conference",
    date: "May 15, 2024",
  },
  {
    title: "Leading Pharma Companies to Showcase New Drug Developments",
    date: "May 10, 2024",
  },
  {
    title: "Panel Discussion: The Future of Personalized Medicine",
    date: "May 5, 2024",
  },
];

const LatestNews: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
        <div className="space-y-6">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.date}</p>
              <Link href="/news" className="text-[#0196c0] hover:underline">
                Read more
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/news" className="text-[#00a28b] hover:underline text-lg">
            View all news
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
