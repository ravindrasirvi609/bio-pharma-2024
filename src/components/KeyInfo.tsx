// components/KeyInfo.tsx
const KeyInfo: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Conference Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00a28b] mb-4">50+</div>
            <p className="text-xl">Expert Speakers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ec4c5b] mb-4">3</div>
            <p className="text-xl">Days of Networking</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1bc8da] mb-4">20+</div>
            <p className="text-xl">Workshops & Panels</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInfo;
