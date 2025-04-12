import React from "react";

const ToggleIcon = ({ isOpen, toggle }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={toggle}
        className="p-2 bg-transparent border-none focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-600 transform transition-transform duration-300 ease-in-out"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor">
          <path
            d="M12 5v14m7-7H5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <path
            d="M6 18L18 6M6 6l12 12"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100 rotate-90" : "opacity-0 rotate-0"
            }`}
            style={{ transformOrigin: "center" }}
          />
        </svg>
      </button>
    </div>
  );
};

export default ToggleIcon;
