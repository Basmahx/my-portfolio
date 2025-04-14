import React from "react";
import ProjectCard from "../components/ProjectCard";

const LandingPage = () => {
  return (
    <div>
      {/* Landing Section */}
      <section className="h-screen bg-white/85 flex items-center justify-center text-center">
        <div className="text-gray-800">
          <h1 className="text-3xl font-semibold mb-4">Basmah Alzenbake</h1>
          <p className="text-lg mb-6">
            I'm a web developer passionate about creating sleek, functional, and
            responsive applications.
          </p>

          <a
            href="mailto:your@email.com"
            className="text-gray-900 bg-white border-4 border-transparent rounded-lg font-medium text-sm px-5 py-2.5 text-center me-2 mb-2"
            style={{
              borderImageSource: "linear-gradient(to right, #81E6D9, #A3E635)",
              borderImageSlice: 1,
            }}>
            Contact Me
          </a>
        </div>
      </section>
      <div className="border border-gray-200 bg-white max-w-full rounded-lg shadow-md overflow-hidden"></div>
      {/* Project Section (appears after scrolling) */}
      <section className="text-center my-12 pt-16">
        <div className="flex justify-center mb-1">
          <div className="w-7 h-0.5 bg-gray-900"></div>{" "}
        </div>
        <h2 className="text-3xl font-bold uppercase">Projets</h2>
      </section>

      <ProjectCard />
    </div>
  );
};

export default LandingPage;
