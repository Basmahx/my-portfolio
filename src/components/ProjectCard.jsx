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
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden w-full max-w-4xl cursor-pointer transform transition-transform hover:scale-105  mb-32">
          <div className="p-10">
            <p className="text-center pb-4 text-gray-400 text-sm sm:text-base font-bold uppercase tracking-wide">
              {project.name}
            </p>
            <p className="text-center text-2xl  font-medium uppercase text-gray-800 mb-8">
              {project.title || " "}
            </p>
          </div>

          <div className="bg-gray-50 flex justify-center items-start h-[600px] p-6">
            <img
              src={project.image}
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
