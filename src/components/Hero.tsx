// components/Hero.tsx
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#00a28b] to-[#0196c0] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Global Bio Pharma Conference 2024
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Shaping the Future of Healthcare
        </p>
        <p className="text-lg mb-8">August 15-17, 2024 • New York City</p>
        <Link
          href="/register"
          className="bg-[#ec4c5b] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d43c4b] transition duration-300"
        >
          Register Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
