import React from "react";
export default function Contact() {
  return (
    <div className="flex flex-col items-center text-center mt-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Contact Us 📩
      </h1>
      <p className="text-gray-600 max-w-xl">
        We'd love to hear from you! Fill out the form below and we’ll get in touch soon.
      </p>

      <form className="mt-8 w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
