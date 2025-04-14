import React, { useState } from "react";
import ToggleIcon from "../components/Toggle";

const ToggleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 flex-grow">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <ToggleIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      {/* The dropdown section */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden`}
        style={{
          maxHeight: isOpen ? "1000px" : "0", // Transition height (open/close)
          opacity: isOpen ? "1" : "0", // Fade-in/fade-out effect (optional)
          marginTop: isOpen ? "1rem" : "0", // Optional: gives space above when opened
        }}>
        {/* Only render children when open */}
        {isOpen && <div>{children}</div>}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className=" p-12 flex-grow">
      <div className="flex flex-col items-center justify-start p-2 pt-62">
        <section className="w-full max-w-4xl ">
          <div className="w-full text-left pb-12 ">
            <h1 className="text-3xl font-bold mb-6">Basmah Alzenbake</h1>
          </div>
          {/* Journey Section */}
          <ToggleSection title="Mon Parcours">
            <p className="text-[rgb(97,97,97)]">
              <span>Entrepreneuriat • Animation 3D • Design graphique </span>
              <br />
              J'ai dirigé une boutique en ligne où mes designs étaient imprimés
              sur des produits physiques, dont certains sont devenus des
              best-sellers. Grâce à la combinaison de créativité, d'une solide
              compréhension du <strong>SEO</strong> et du marketing numérique,
              j'ai pu atteindre et engager efficacement des publics cibles dans
              un marché compétitif. Ces compétences, en plus de mes études en{" "}
              <strong>développement web avec OPC</strong>, me permettent
              d'aborder la conception et le développement web en me concentrant
              sur la création de solutions visuellement attractives et centrées
              sur l'utilisateur, en parfaite adéquation avec les objectifs
              commerciaux et générant des résultats concrets.
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
          <ToggleSection title="Mon stack">
            <ul className="text-[rgb(97,97,97)]">
              <li className="relative pl-6">
                <span className="absolute left-0 top-0 text-[rgb(97,97,97)]">
                  &#8226;
                </span>
                Développement web : HTML, CSS, JavaScript, React, Node.js, et
                plus
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-0 text-[rgb(97,97,97)]">
                  &#8226;
                </span>
                Conception & Prototypage : Figma, pour créer des interfaces et
                des expériences utilisateur intuitives
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-0 text-[rgb(97,97,97)]">
                  &#8226;
                </span>
                Modélisation 3D : Blender, pour créer des éléments visuels et
                des animations
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-0 text-[rgb(97,97,97)]">
                  &#8226;
                </span>
                Gestion de projet : Notion, pour organiser et rationaliser les
                flux de travail
              </li>
            </ul>
          </ToggleSection>
        </section>
      </div>
    </div>
  );
};

export default About;
