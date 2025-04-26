import LandingPage from "../Pages/Landing";
import ProjectCard from "../components/ProjectCard";

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

const Home = () => {
  return (
    <div>
      <LandingPage />
      <div
        id="projets"
        className="border border-gray-100 bg-white max-w-full rounded-lg shadow-md overflow-hidden"></div>
      {/* Project Section (appears after scrolling) */}
      <section className="text-center my-12 pt-12 pb-8">
        <div className="flex justify-center mb-1">
          <div className="w-7 h-0.5 bg-gray-900"></div>{" "}
        </div>
        <h2 className="text-3xl text-purple-950 font-bold uppercase">
          Projets
        </h2>
      </section>
      <ProjectCard />
      <div
        id="projets"
        className="border border-gray-100 bg-white max-w-full rounded-lg shadow-md overflow-hidden"></div>
      <section className="text-center my-12 pt-12 pb-8">
        <div className="flex justify-center mb-1">
          <div className="w-12 h-0.5 bg-gray-900"></div>{" "}
        </div>
        <h2 className="text-3xl text-purple-950 font-bold uppercase">
          Mon Stack
        </h2>
      </section>
      <div className="flex items-center justify-center flex-wrap gap-6 py-6 pb-32">
        {/* Font Awesome icons */}
        <FaHtml5 className="w-12 h-12 text-orange-600 transition-transform duration-300 hover:scale-130 " />
        <FaCss3Alt className="w-12 h-12 text-blue-600 transition-transform duration-300 hover:scale-130 " />
        <FaJsSquare className="w-12 h-12 text-yellow-400 transition-transform duration-300 hover:scale-130 " />
        <FaReact className="w-12 h-12 text-blue-500 transition-transform duration-300 hover:scale-130 " />
        <FaNodeJs className="w-12 h-12 text-green-500 transition-transform duration-300 hover:scale-130 " />
        <FaGitAlt className="w-12 h-12 text-orange-500 transition-transform duration-300 hover:scale-130 " />
        <FaGithub className="w-12 h-12 text-black transition-transform duration-300 hover:scale-130 " />
        <FaSass className="w-12 h-12 text-pink-400 transition-transform duration-300 hover:scale-130 " />

        {/* Images for Vite, Green Code, and TailwindCSS */}
        <img
          src="/assets/redux.svg"
          alt="Redux"
          className="w-12 h-12 object-contain  transition-transform duration-300 hover:scale-130"
        />
        <img
          src="/assets/logoVite.svg"
          alt="Vite"
          className="w-12 h-12 object-contain  transition-transform duration-300 hover:scale-130"
        />
        <img
          src="/assets/greencode.svg"
          alt="Green Code"
          className="w-12 h-12 object-contain  transition-transform duration-300 hover:scale-130"
        />
        <img
          src="/assets/tailwindcss.svg"
          alt="TailwindCSS"
          className="w-12 h-12 object-contain  transition-transform duration-300 hover:scale-130"
        />
      </div>
    </div>
  );
};

export default Home;
