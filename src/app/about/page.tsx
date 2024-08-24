"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFlask, FaUsers, FaLightbulb, FaGlobeAmericas } from "react-icons/fa";

const AboutPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>About Global BioPharma Conference Group</title>
        <meta
          name="description"
          content="Learn about the Global BioPharma Conference Group, a premier international gathering for biopharmaceutical innovation and collaboration."
        />
      </Head>

      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="BioPharma Conference"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-[#00a28b] opacity-70"></div>
          <div className="relative z-10 text-center px-4">
            <motion.h1
              className="text-4xl md:text-7xl font-bold mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Global BioPharma Conference Group
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              Shaping the Future of Healthcare
            </motion.p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0196c2] mb-8">
              About the Global BioPharma Conference
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Global BioPharma Conference is a premier international
              gathering designed to bring together the brightest minds, leading
              innovators, and key decision-makers in the biopharmaceutical
              industry. With a focus on the latest advancements in vaccine
              development, immunotherapy, and biotech innovations, this
              conference serves as a platform for collaboration, knowledge
              exchange, and the fostering of groundbreaking solutions that
              address the world&apos;s most pressing health challenges.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-3xl md:text-3xl font-semibold text-[#ec4c5b] mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At the core of the Global BioPharma Conference is a mission to
              accelerate the development of life-saving therapies and vaccines.
              By facilitating dialogue between researchers, healthcare
              professionals, and industry leaders, we aim to bridge the gap
              between scientific discovery and practical application, ensuring
              that the benefits of cutting-edge biopharmaceutical research reach
              patients around the globe as swiftly as possible.
            </p>
          </motion.div>

          {/* Why Attend Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-3xl md:text-3xl font-semibold text-[#0196c2] mb-8">
              Why Attend?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <FaFlask className="text-3xl text-[#00a28b] mr-4 mt-1" />
                <div>
                  <h4 className="text-2xl font-semibold mb-3 text-[#ec4c5b]">
                    Engage with Pioneers
                  </h4>
                  <p className="text-gray-700">
                    Connect with leading scientists, clinicians, and industry
                    executives who are at the forefront of vaccine and
                    immunotherapy research.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <FaLightbulb className="text-3xl text-[#1bc8da] mr-4 mt-1" />
                <div>
                  <h4 className="text-2xl font-semibold mb-3 text-[#ec4c5b]">
                    Explore Innovations
                  </h4>
                  <p className="text-gray-700">
                    Discover the latest advancements in biotechnology, from
                    novel drug delivery systems to state-of-the-art
                    immunotherapies that are shaping the future of medicine.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <FaUsers className="text-3xl text-[#ec4c5b] mr-4 mt-1" />
                <div>
                  <h4 className="text-2xl font-semibold mb-3 text-[#ec4c5b]">
                    Collaborate for Impact
                  </h4>
                  <p className="text-gray-700">
                    Participate in panel discussions, workshops, and networking
                    sessions designed to foster cross-disciplinary
                    collaborations that lead to actionable solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <FaGlobeAmericas className="text-3xl text-[#0196c2] mr-4 mt-1" />
                <div>
                  <h4 className="text-2xl font-semibold mb-3 text-[#ec4c5b]">
                    Stay Informed
                  </h4>
                  <p className="text-gray-700">
                    Gain insights into the current trends, challenges, and
                    opportunities within the biopharma sector, from regulatory
                    developments to emerging markets.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Global Platform Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-3xl md:text-3xl font-semibold text-[#00a28b] mb-6">
              A Global Platform for Change
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Global BioPharma Conference is more than just an event;
              it&apos;s a catalyst for global change. By bringing together
              diverse perspectives and expertise, we strive to create an
              environment where innovative ideas can flourish and lead to
              tangible improvements in global health. Whether you are a
              researcher seeking collaboration, a healthcare provider looking to
              stay ahead of the curve, or an industry leader interested in the
              next big breakthrough, this conference is your opportunity to make
              a difference.
            </p>
            <p className="text-2xl font-semibold text-[#ec4c5b]">
              Join us at the Global BioPharma Conference, where science meets
              industry, and together, we can shape the future of healthcare.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <a
              href="#register"
              className="inline-block bg-[#1bc8da] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#0196c2] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Register for the Conference
            </a>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
