import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToolIcon from "../components/ToolIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState({
    name: "",
    description: "",
    work: "",
    role: "",
    tools: [],
    image: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProjectData = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        const foundProject = data.find((project) => project.id === id);
        setProject(
          foundProject || {
            name: "Project not found",
            description: "",
            work: "",
            role: "",
            tools: [],
            image: "",
          }
        );
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [id]);

  if (!project || !project.name) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="w-5 h-5 border-2 border-gray-200 border-t-gray-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const githubLinks = Array.isArray(project.githubLink)
    ? project.githubLink
    : project.githubLink
    ? [project.githubLink]
    : [];

  return (
    <div className="project-page pt-16 min-h-[80vh] flex-grow flex-col">
      {/* Top Section */}
      <div className="w-full bg-gray-50 flex items-center justify-center px-4 py-10 sm:py-16">
        <img
          src={project.image}
          alt={project.name}
          className="opacity-0 animate-[fadeIn_1s_ease-in_forwards] max-w-[90%] max-h-[400px] object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-16 pt-16 pb-16 space-y-12 max-w-6xl mx-auto">
        {/* Header and GitHub Links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <p className="text-gray-500 text-sm sm:text-base font-bold uppercase tracking-wide">
            {project.name}
          </p>

          <div className="flex items-center space-x-4">
            {githubLinks.length > 0 ? (
              githubLinks.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-pink-900 hover:text-purple-500 transition-colors duration-200">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  <span className="text-sm mt-1 underline">Cliquez ici</span>
                </a>
              ))
            ) : (
              <span className="text-sm text-gray-400">
                Aucun lien GitHub disponible.
              </span>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl bebas-neue-regular uppercase pb-4 font-medium text-pink-900">
            {project.title || "Titre indisponible"}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg pb-4 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Work Description */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-2xl bebas-neue-regular font-semibold text-pink-900">
            Ce que j'ai réalisé
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {project.work || "Aucune description du travail disponible."}
          </p>
        </section>

        {/* Tools and Role */}
        <section className="grid gap-10 sm:grid-cols-2 pt-6">
          {/* Tools */}
          <div className="space-y-4">
            <h3 className="text-lg bebas-neue-regular text-pink-900 border-l-4 pl-3 border-gray-300">
              Technologies utilisées
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {project.tools.map((tool, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ToolIcon tool={tool} />
                </li>
              ))}
            </ul>
          </div>

          {/* Role */}
          <div className="space-y-4">
            <h3 className="text-lg bebas-neue-regular text-pink-900 border-l-4 pl-3 border-gray-300">
              Rôle
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pl-1">
              {project.role || "Aucun rôle spécifié."}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
