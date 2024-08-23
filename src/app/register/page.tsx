"use client";
import React, { useState } from "react";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    ticketType: "standard",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#00a28b]">
          Register for BioConf
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a28b]"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a28b]"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a28b]"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="organization"
              className="block text-gray-700 font-medium mb-2"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a28b]"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="ticketType"
              className="block text-gray-700 font-medium mb-2"
            >
              Ticket Type
            </label>
            <select
              id="ticketType"
              name="ticketType"
              value={formData.ticketType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a28b]"
            >
              <option value="standard">Standard Ticket</option>
              <option value="vip">VIP Ticket</option>
              <option value="student">Student Ticket</option>
            </select>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-[#ec4c5b] text-white py-3 px-6 rounded-md hover:bg-[#d43c4b] transition-colors duration-300 font-medium"
            >
              Register Now
            </button>
          </div>
        </form>
        <p className="text-center mt-6 text-gray-600">
          By registering, you agree to our{" "}
          <a href="#" className="text-[#00a28b] hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#00a28b] hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Register;
