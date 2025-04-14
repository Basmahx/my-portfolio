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
    <div className="min-h-screen flex flex-col  items-center justify-center bg-white p-10 space-y-10">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl mb-32">
          <div className="p-10">
            <h3 className="text-center pb-4 text-gray-500 text-sm sm:text-base font-medium uppercase tracking-wide">
              {project.name}
            </h3>
            <p className="text-center text-4xl font-bold text-gray-800 mb-8">
              {project.title || " "}
            </p>
          </div>

          <div className="bg-gray-100 flex justify-center items-start h-[600px] p-6">
            <img
              src={project.image} // Directly use the image path from JSON
              alt={`${project.name} Preview`}
              className="max-h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCard;
