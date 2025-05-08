import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-pink-900 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link
        to="/"
        className="text-pink-900 hover:text-white border border-pink-900 hover:bg-pink-900 transition-colors duration-200 px-5 py-2 rounded-full">
        Retourner à l'accueil
      </Link>
    </div>
  );
}

export default Error;
