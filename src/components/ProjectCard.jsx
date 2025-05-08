import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projectCard.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4 sm:px-10 py-10 space-y-16">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden w-full max-w-4xl transform transition-transform mb-16 sm:mb-32">
          {/* Text and Button Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 p-4 sm:p-10">
            {/* Text section */}
            <div className="flex-1">
              <p className="text-left pb-2 text-gray-400 text-sm sm:text-base font-bold uppercase tracking-wide">
                {project.name}
              </p>
              <p className="text-left bebas-neue-regular text-2xl sm:text-4xl font-medium uppercase text-gray-600 mb-4 sm:mb-8">
                {project.title || " "}
              </p>
            </div>

            {/* Tools and Button */}
            <div className="flex flex-col items-start sm:items-end space-y-4">
              <Link
                to={`/projects/${project.id}`}
                className="bg-black text-white text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow transition">
                Voir plus
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <Link
            to={`/projects/${project.id}`}
            className="bg-gray-50 flex justify-center items-start h-64 sm:h-[600px] p-4 sm:p-6">
            <img
              src={project.image}
              alt={`${project.name} Preview`}
              className="max-h-full object-contain rounded-lg shadow-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
