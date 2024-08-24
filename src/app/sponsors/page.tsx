import React from "react";
import Link from "next/link";
import Image from "next/image";

// Define sponsor tiers and their respective sponsors
const sponsorTiers = {
  platinum: [
    {
      name: "BioTech Innovations",
      logo: "/operant.png",
      url: "https://biotechinnovations.com",
    },
    {
      name: "PharmaGlobal",
      logo: "/operant.png",
      url: "https://pharmaglobal.com",
    },
  ],
  gold: [
    {
      name: "GenomeTech",
      logo: "/operant.png",
      url: "https://genometech.com",
    },
    {
      name: "NanoMed Solutions",
      logo: "/operant.png",
      url: "https://nanomedsolutions.com",
    },
  ],
  silver: [
    {
      name: "CellTherapy Inc.",
      logo: "/operant.png",
      url: "https://celltherapyinc.com",
    },
    {
      name: "BioAnalytics Co.",
      logo: "/operant.png",
      url: "https://bioanalytics.com",
    },
  ],
};

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    company: "BioTech Innovations",
    quote:
      "Sponsoring the Global Bio Pharma Conference has been instrumental in expanding our network and showcasing our latest advancements in gene therapy.",
    image: "/operant.png",
  },
  {
    name: "Michael Rodriguez",
    company: "PharmaGlobal",
    quote:
      "The exposure and connections we've gained through our platinum sponsorship have been invaluable. This conference is a must for anyone in the biopharma industry.",
    image: "/operant.png",
  },
];

const faqs = [
  {
    question: "What are the benefits of sponsoring the conference?",
    answer:
      "Sponsors gain visibility among industry leaders, access to cutting-edge research, networking opportunities, and the chance to showcase their innovations to a targeted audience.",
  },
  {
    question: "How can I become a sponsor?",
    answer:
      "To become a sponsor, download our sponsorship package or contact our sponsorship team directly. We offer various tiers to suit different budgets and goals.",
  },
  {
    question: "Are there speaking opportunities for sponsors?",
    answer:
      "Yes, depending on the sponsorship tier, there may be opportunities to participate in panel discussions or give presentations on relevant topics.",
  },
];

const SponsorPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <header
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/thessaloniki-greece-august-28-2018-600nw-1172289640.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We are grateful for the support of our esteemed sponsors who play a
            crucial role in advancing the field of Bio-Pharma and making this
            conference possible.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Sponsor Tiers */}
        <section className="mb-24">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Our Valued Sponsors
          </h2>
          {Object.entries(sponsorTiers).map(([tier, sponsors]) => (
            <div key={tier} className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-center capitalize">
                {tier} Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {sponsors.map((sponsor) => (
                  <Link
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
                  >
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={200}
                      height={100}
                      className="w-full h-auto object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Featured Sponsor Spotlight */}
        <section className="mb-24 bg-gradient-to-r from-[#00a28b] to-[#0196c2] text-white rounded-xl p-12">
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Featured Sponsor Spotlight
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src="/operant.png"
              alt="BioTech Innovations"
              width={300}
              height={200}
              className="w-64 h-auto mb-8 md:mb-0 md:mr-12"
            />
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                BioTech Innovations
              </h3>
              <p className="mb-6 text-lg">
                BioTech Innovations is at the forefront of gene therapy
                research, developing groundbreaking treatments for rare genetic
                disorders. Their continued support of our conference
                demonstrates their commitment to fostering collaboration and
                advancement in the biopharma industry.
              </p>
              <Link
                href="https://biotechinnovations.com"
                className="bg-white text-[#00a28b] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits of Sponsorship */}
        <section className="mb-24">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Why Sponsor?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Brand Visibility</h3>
              <p>
                Showcase your brand to a targeted audience of industry leaders,
                researchers, and decision-makers in the biopharma field.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Networking Opportunities
              </h3>
              <p>
                Connect with potential partners, clients, and collaborators from
                around the world in a focused, professional setting.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Thought Leadership
              </h3>
              <p>
                Demonstrate your expertise and innovative solutions through
                speaking opportunities and exhibition spaces.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Access to Innovations
              </h3>
              <p>
                Stay at the forefront of biopharma advancements and gain
                insights into cutting-edge research and technologies.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/become-sponsor"
              className="bg-[#ec4c5b] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Become a Sponsor
            </Link>
          </div>
        </section>

        {/* Sponsor Testimonials */}
        <section className="mb-24">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Sponsor Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-lg italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-24 bg-[#1bc8da] text-white p-12 rounded-xl text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Interested in Sponsoring?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in shaping the future of Biopharma. Download our
            comprehensive sponsorship package or get in touch with our team to
            discuss custom opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/sponsorship-package.pdf"
              className="bg-white text-[#1bc8da] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Download Sponsorship Package
            </Link>
            <Link
              href="/contact"
              className="bg-[#ec4c5b] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Past Sponsors */}
        <section>
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Past Sponsors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Add past sponsor logos here */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
              >
                <Image
                  src={`/operant.png`}
                  alt={`Past Sponsor ${i}`}
                  width={120}
                  height={60}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default SponsorPage;
