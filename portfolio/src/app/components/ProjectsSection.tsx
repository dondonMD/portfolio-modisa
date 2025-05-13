"use client";
import React from "react";

export default function ProjectSection() {
  return (
    <section className="relative bg-gradient-to-t from-gray-800 via-gray-900 to-black text-white p-10 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-2xl font-semibold">Project One</h3>
          <p className="text-lg">
            A groundbreaking project that redefines innovation.
          </p>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-2xl font-semibold">Project Two</h3>
          <p className="text-lg">
            An extraordinary solution to modern challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
