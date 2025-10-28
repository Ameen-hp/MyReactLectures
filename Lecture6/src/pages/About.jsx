import React from "react";
export default function About() {
  return (
    <div className="flex flex-col items-center text-center mt-16">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        About Our Project 💡
      </h1>
      <p className="text-gray-600 max-w-xl leading-relaxed">
        This demo helps you understand how React Router works. It lets users move
        between multiple pages inside a single-page app, while Tailwind CSS makes
        everything look modern and responsive.
      </p>
      <div className="mt-6 bg-green-100 px-6 py-3 rounded-xl shadow">
        <p className="text-green-700 font-medium">Version: 1.0.0</p>
      </div>
    </div>
  );
}
