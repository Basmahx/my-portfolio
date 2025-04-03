const ProjectCard = ({ title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="border rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer bg-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
