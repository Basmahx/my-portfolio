import React, { useState } from "react";
import ToggleIcon from "../components/Toggle";

const ToggleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <ToggleIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}>
        {isOpen && children}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Name</h1>

      <section className="w-full max-w-4xl">
        {/* Journey Section */}
        <ToggleSection title="My Journey">
          <p className="text-[rgb(97,97,97)]">
            Your personal journey and story goes here...
          </p>
        </ToggleSection>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gray-300 mb-6"></div>

        {/* Philosophy Section */}
        <ToggleSection title="My Philosophy">
          <p className="text-[rgb(97,97,97)]">
            What drives you, your values, and your approach to your work...
          </p>
        </ToggleSection>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gray-300 mb-6"></div>

        {/* Goals Section */}
        <ToggleSection title="Future Goals">
          <p className="text-[rgb(97,97,97)]">
            Share your future aspirations and what you're working toward...
          </p>
        </ToggleSection>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gray-300 mb-6"></div>

        {/* Hobbies Section */}
        <ToggleSection title="Personal Interests">
          <p className="text-[rgb(97,97,97)]">
            Your hobbies, side projects, or passions outside of your work...
          </p>
        </ToggleSection>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gray-300 mb-6"></div>

        {/* Work Approach Section */}
        <ToggleSection title="My Approach to Work">
          <p className="text-[rgb(97,97,97)]">
            Work ethic, problem-solving methods, or collaboration style...
          </p>
        </ToggleSection>
      </section>
    </div>
  );
};

export default About;
