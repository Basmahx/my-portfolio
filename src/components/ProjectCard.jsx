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
    <div className="min-h-screen flex flex-col items-center bg-white p-10 space-y-10">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden w-full max-w-4xl transform transition-transform mb-32">
          <div className="flex justify-between items-center p-10">
            {/* Text section */}
            <div className="flex-1">
              <p className="text-left pb-4 text-gray-400 text-sm sm:text-base font-bold uppercase tracking-wide">
                {project.name}
              </p>
              <p className="text-left bebas-neue-regular text-4xl font-medium uppercase text-gray-600 mb-8">
                {project.title || " "}
              </p>
            </div>

            {/* Tools and Button */}
            <div className="flex flex-col items-end space-y-4 ml-10">
              <div>
                <Link
                  to={`/projects/${project.id}`}
                  className="bg-black text-white text-sm px-8 py-4 rounded-lg shadow transition">
                  Voir plus
                </Link>
              </div>
            </div>
          </div>

          {/* Image Section (Clickable) */}
          <Link
            to={`/projects/${project.id}`}
            className=" bg-gray-50 flex justify-center items-start h-[600px] p-6">
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
