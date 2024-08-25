"use client";
import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  FaRegCalendarAlt,
  FaRegUser,
  FaRegEnvelope,
  FaRegCreditCard,
} from "react-icons/fa";

const TicketOption = ({
  title,
  price,
  benefits,
}: {
  title: string;
  price: string;
  benefits: string[];
}) => (
  <motion.div
    className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-4 transform hover:scale-105 transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <h3 className="text-2xl font-bold text-[#00a28b] mb-2">{title}</h3>
    <p className="text-3xl font-bold mb-4 text-[#ec4c5b]">{price}</p>
    <ul className="space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="text-gray-700 flex items-center">
          <FaRegCalendarAlt className="mr-2 text-[#1bc8da]" />
          {benefit}
        </li>
      ))}
    </ul>
    <motion.button
      className="mt-6 bg-[#0196c2] text-white font-bold py-3 px-6 rounded-full hover:bg-[#1bc8da] transition-colors w-full"
      whileTap={{ scale: 0.95 }}
    >
      Select
    </motion.button>
  </motion.div>
);

const RegistrationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00a28b] to-[#1bc8da] py-20">
      <Head>
        <title>Register - Global Bio Pharma Conference</title>
        <meta
          name="description"
          content="Register for the Global Bio Pharma Conference"
        />
      </Head>

      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/conference-bg.jpg')" }}
      ></div>

      <div className="relative z-10">
        <main className="container mx-auto px-4 py-12">
          <motion.h1
            className="text-5xl font-bold text-center text-white mb-8 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Register for Global Bio Pharma Conference
          </motion.h1>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white text-center">
              Select Your Ticket
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TicketOption
                title="Early Bird"
                price="$499"
                benefits={[
                  "Access to all sessions",
                  "Conference materials",
                  "Networking events",
                  "Lunch and refreshments",
                ]}
              />
              <TicketOption
                title="Regular"
                price="$699"
                benefits={[
                  "Access to all sessions",
                  "Conference materials",
                  "Networking events",
                  "Lunch and refreshments",
                  "Exclusive workshop access",
                ]}
              />
              <TicketOption
                title="VIP"
                price="$999"
                benefits={[
                  "Priority seating",
                  "Exclusive VIP reception",
                  "1-on-1 meeting with keynote speakers",
                  "All Regular ticket benefits",
                ]}
              />
            </div>
          </motion.div>

          <motion.form
            className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl px-8 pt-8 pb-8 mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                <FaRegUser className="inline mr-2" /> Full Name
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#00a28b] transition-all duration-300"
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                <FaRegEnvelope className="inline mr-2" /> Email
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#00a28b] transition-all duration-300"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="flex items-center justify-between">
              <motion.button
                className="bg-[#ec4c5b] hover:bg-[#1bc8da] text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300"
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next Step <FaRegCreditCard className="inline ml-2" />
              </motion.button>
            </div>
          </motion.form>
        </main>
      </div>
    </div>
  );
};

export default RegistrationPage;
