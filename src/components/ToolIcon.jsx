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
  // Look up the tool in the iconMap using the "icon" key from JSON
  const toolData = iconMap[tool.icon]; // tool.icon should match the keys like 'FaHtml5'
  const Icon = toolData?.component;
  const color = toolData?.color || "text-gray-500";

  return Icon ? (
    <div className="flex items-center space-x-2">
      <Icon className={`text-2xl ${color}`} />
      <span className="text-sm text-gray-500">{tool.name}</span>
    </div>
  ) : (
    <span className="text-sm text-gray-500">{tool.name}</span>
  );
};

export default ToolIcon;
