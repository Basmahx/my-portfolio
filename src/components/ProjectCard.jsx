// const ProjectCard = ({ title, description, link }) => {
//   return (
//     <a href={link} target="_blank" rel="noopener noreferrer" className="block">
//       <div className="border rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer bg-white">
//         <h2 className="text-xl font-bold">{title}</h2>
//         <p className="text-gray-600">{description}</p>
//       </div>
//     </a>
//   );
// };

// export default ProjectCard;

// will be mapping over a json file, this is just a prototype
import React from "react";

const ProjectCard = () => {
  return (
    <div>
      <div className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Kasa</h3>
        </div>
        <div className="text-center mb-6">
          <p className="text-2xl font-bold text-gray-800">
            descriptive title here
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <span className="bg-gray-100 text-gray-700 text-xs font-medium py-2 px-4 rounded-full">
            key words maybe?
          </span>
        </div>

        <div className="text-center"></div>
      </div>
      <div className="relative block w-full h-64">
        {/* <img
          src=""
          alt="Project Preview"
          className="absolute inset-0 w-full h-full object-contain rounded-lg"
        /> */}
      </div>
    </div>
  );
};

export default ProjectCard;
