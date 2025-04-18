import LandingPage from "../Pages/Landing";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <div className="border border-gray-100 bg-white max-w-full rounded-lg shadow-md overflow-hidden"></div>
      {/* Project Section (appears after scrolling) */}
      <section className="text-center my-12 pt-12 pb-8">
        <div className="flex justify-center mb-1">
          <div className="w-7 h-0.5 bg-gray-900"></div>{" "}
        </div>
        <h2 className="text-3xl font-bold uppercase">Projets</h2>
      </section>
      <ProjectCard />
    </div>
  );
};

export default Home;
