"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    setIsAutoPlay(false);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
    setIsAutoPlay(false);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Conference image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">
            3<sup>rd</sup> International Biopharma Conference
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 animate-fade-in-down animation-delay-200">
            &quot;Navigating the Biopharma Odyssey: Charting a Course for
            Innovation&quot;{" "}
          </p>
          <p className="text-lg sm:text-xl mb-8 animate-fade-in-down animation-delay-400">
            Febuary, 2025 • Mumbai
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-600">
            <Link
              href="/register"
              className="bg-[#ec4c5b] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d43c4b] transition duration-300 transform hover:scale-105"
            >
              Register Now
            </Link>
            <Link
              href="/schedule"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#00a28b] transition duration-300 transform hover:scale-105"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImage ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => {
              setCurrentImage(index);
              setIsAutoPlay(false);
            }}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl opacity-50 hover:opacity-100 transition-opacity"
        onClick={handlePrev}
        aria-label="Previous image"
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl opacity-50 hover:opacity-100 transition-opacity"
        onClick={handleNext}
        aria-label="Next image"
      >
        &#8250;
      </button>
    </section>
  );
};

export default Hero;
