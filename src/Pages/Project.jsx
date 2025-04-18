import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToolIcon from "../components/ToolIcon"; // Import the icon map

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
    window.scrollTo(0, 0); // scroll to top when component mounts
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`/projects.json`);
        const data = await response.json();
        console.log("Fetched data:", data);
        const foundProject = data.find((project) => project.id === id);
        console.log("Found project:", foundProject);

        if (foundProject) {
          setProject(foundProject);
        } else {
          setProject({
            name: "Project not found",
            description: "No description available.",
            work: "",
            role: "",
            tools: [],
            image: "",
          });
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [id]);

  if (!project || !project.name) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="project-page pt-16 min-h-[80vh] flex-grow flex-col">
      {/* Top Section with light gray background */}
      <div className="w-screen h-[50vh] bg-gray-50 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.name}
          className="opacity-0 animate-[fadeIn_1s_ease-in_forwards] max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
        />
      </div>
      <div className="px-4 sm:px-6 lg:px-16 pt-16 pb-16 space-y-12 max-w-6xl mx-auto">
        <div className="text-left space-y-4">
          <p className="text-gray-500 text-sm sm:text-base font-bold uppercase tracking-wide">
            {project.name}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase pb-4 font-medium text-gray-800">
            {project.title || "title not available."}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg pb-4 leading-relaxed">
            {project.description || "No work description available."}
          </p>

          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              What I Did
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {project.work || "No work description available."}
            </p>
          </section>

          <section className="space-y-8 pt-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 border-l-4 pl-3 border-gray-300">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-4">
                  <ul className="list-disc pl-5 space-y-2">
                    {" "}
                    {/* Add ul element with appropriate styling */}
                    {project.tools.map((tool, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <ToolIcon tool={tool} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
