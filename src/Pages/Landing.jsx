import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="rainbow-orb" />

      <section className="h-full flex items-center justify-center text-center relative z-10 px-4 sm:px-8">
        {/* Outer container for content + absolutely positioned link */}
        <div className="relative max-w-xl">
          <div>
            <h1 className="text-5xl font-bold uppercase tracking-wide text-gray-400 mb-6">
              Design et développement web
            </h1>
            <p className="text-xl text-gray-500 pt-12">
              Salut, je suis Basmah ALZENBAKE. Je conçois et développe des sites
              web centrés sur l’utilisateur — des sites réactifs, élégants,
              minimalistes et conçus avec intention.
            </p>
          </div>

          {/* Contact Me link lowered further */}
          <div className="absolute -bottom-42 right-0 border-l-4 pl-3 border-gray-300 space-y-3">
            <a
              href="https://github.com/Basmahx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-500 text-base flex items-center">
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                className="w-7 h-7 mr-2"
              />
            </a>

            <a
              href="mailto:your@email.com"
              className="flex items-center text-gray-500 text-lg border-b-2 border-transparent hover:border-gray-400 transition duration-200">
              Contactez-moi <FaArrowRight className="ml-2 text-gray-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
