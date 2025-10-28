import React from "react";
export default function Home() {
  return (
    <div className="flex flex-col items-center text-center mt-16">
      <h1 className="text-5xl font-bold text-indigo-700 mb-4 animate-bounce">
        Welcome to the Home Page 🏠
      </h1>
      <p className="text-gray-600 max-w-xl">
        This is a sample React Router project styled beautifully with Tailwind CSS.
        You can navigate between pages smoothly — without any reloads!
      </p>
      <button className="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition">
        Get Started
      </button>
    </div>
  );
}
