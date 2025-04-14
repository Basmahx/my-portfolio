import React from "react";
import logo from "/assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t border-gray-200 ">
      <div className="flex justify-between items-center py-4 px-8">
        {/* Left Section (Logo) */}
        <div className="flex items-center justify-center flex-1">
          <a href="./" className="relative rounded-full opacity-90">
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 object-contain rounded-full"
              loading="lazy"
            />
          </a>
        </div>

        {/* Divider between the sections */}
        <div className="h-8 border-l border-gray-200"></div>

        {/* Middle Section (Contact Information) */}
        <div className="flex flex-col items-center justify-center flex-1">
          {/* <p className="text-gray-600 text-sm font-semibold mb-4">CONTACT</p> */}

          <div className="flex flex-col items-center space-y-3">
            <a
              href="mailto:b.alzenbake@gmail.com"
              className="text-gray-800 hover:text-blue-500 text-sm flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-2" />
            </a>

            <a
              href="https://www.instagram.com/3d.basmah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-500 text-sm flex items-center">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 mr-2" />
            </a>

            <a
              href="https://github.com/Basmahx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-500 text-sm flex items-center">
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2" />
            </a>
          </div>
        </div>

        {/* Divider between the sections */}
        <div className="h-8 border-l border-gray-200"></div>

        <div className="flex flex-col items-center justify-center flex-1 space-y-2">
          <p className="text-sm  text-gray-700 flex items-center space-x-1">
            © 2025 Basmah Alzenbake. All Rights Reserved.
          </p>

          <p className="text-sm  text-gray-700 flex items-center space-x-1">
            <span>Made with</span>
            <span>♡</span>
            <span>and caramel macchiato</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
