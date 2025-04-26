import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaSass,
  FaNodeJs,
} from "react-icons/fa";

// The iconMap containing all the tool names and corresponding icons and colors
export const iconMap = {
  FaHtml5: { component: FaHtml5, color: "text-red-500" },
  FaCss3Alt: { component: FaCss3Alt, color: "text-blue-500" },
  FaReact: { component: FaReact, color: "text-blue-600" },
  FaJsSquare: { component: FaJsSquare, color: "text-yellow-500" },
  FaGitAlt: { component: FaGitAlt, color: "text-orange-400" },
  FaGithub: { component: FaGithub, color: "text-black" },
  FaSass: { component: FaSass, color: "text-pink-500" },
  FaNodeJs: { component: FaNodeJs, color: "text-green-500" },
};

const ToolIcon = ({ tool }) => {
  const toolData = iconMap[tool.icon];
  const Icon = toolData?.component;
  const color = toolData?.color || "text-gray-500";

  return (
    <div className="flex items-center space-x-2">
      {Icon ? (
        <Icon className={`text-2xl ${color}`} />
      ) : tool.img ? (
        <img
          src={tool.img}
          alt={tool.name}
          className="w-6 h-6 object-contain"
        />
      ) : null}
      <span className="text-sm text-gray-500">{tool.name}</span>
    </div>
  );
};

export default ToolIcon;
