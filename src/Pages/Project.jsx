import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState({
    name: "",
    description: "",
    work: "",
    role: "",
    tools: [],
    image: "", // Add an image field
  });

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`/projects.json`);
        const data = await response.json();
        console.log("Fetched data:", data); // Debugging
        const foundProject = data.find((project) => project.id === id);
        console.log("Found project:", foundProject); // Debugging

        // Handle the case where project is not found
        if (foundProject) {
          setProject(foundProject);
        } else {
          setProject({
            name: "Project not found",
            description: "No description available.",
            work: "",
            role: "",
            tools: [],
            image: "", // Add a default image or empty string
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
      <div className="w-screen h-[50vh] bg-gray-100 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.name}
          className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
        />
      </div>
      <div className="px-4 sm:px-6 lg:px-16 pt-16  pb-16 space-y-12 max-w-6xl mx-auto">
        <div className="text-left space-y-4">
          <p className="text-gray-500 text-sm sm:text-base font-medium uppercase tracking-wide">
            {project.name}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl  font-medium text-gray-800">
            {project.title || "title not available."}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {project.description || "No work description available."}
          </p>
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              what i did
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {project.work || "No work description available."}
            </p>
          </section>
          <section className="space-y-8 pt-6">
            {/* Section Block */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 border-l-4 pl-3 border-gray-300">
                  Role
                </h3>
                <p className="text-sm pl-4 text-gray-500">
                  {project.role || "No role description available."}
                </p>
              </div>
              {/* Displaying tools only if there are any */}
              <div className="sm:col-span-1 space-y-2">
                {project.tools &&
                Array.isArray(project.tools) &&
                project.tools.length > 0 ? (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800 border-l-4 pl-3 border-gray-300">
                      Tools
                    </h3>
                    <ul className="list-disc list-inside text-sm pl-4 text-gray-500 space-y-1">
                      {project.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>No tools available</p>
                )}
              </div>
              <div className="sm:col-span-1 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 border-l-4 pl-3 border-gray-300">
                  Role
                </h3>
                <p className="text-sm pl-4 text-gray-500">
                  {project.role || "No role description available."}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
