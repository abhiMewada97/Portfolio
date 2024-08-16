import React from "react";
import mern from "../../public/mern.png";
import reactjs from "../../public/reactjs.png";
import javascript from "../../public/javascript.png";

export default function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: reactjs,
      name: "Portfolio",
      description: "Showcase my projects, skills, and achievements. The site features a clean, user-friendly, and responsive design for an enhanced user experience and is hosted on Netlify, demonstrating my web development skills",
      projectLink: "https://hilarious-quokka-b78a3a.netlify.app/",
      sourseCodeLink: "https://github.com/abhiMewada97/Portfolio",
    },
    {
      id: 2,
      logo: mern,
      name: "Cozyabode",
      description: "Facilitated property owner-traveler connections through an online marketplace by developing a full-stack website with MVC architecture, featuring a user-friendly, dynamic, and responsive JavaScript interface",
      projectLink: "https://wanderlust-kt0t.onrender.com/listings",
      sourseCodeLink: "https://github.com/abhiMewada97/Cozyabode",
    },
    {
      id: 3,
      logo: reactjs,
      name: "Algorithm Visualizer",
      description: "Designed visual representations of sorting techniques and created an intuitive user interface using React.js, enabling users to effortlessly explore and understand algorithmic intricacies through visualizations",
      projectLink: "",
      sourseCodeLink: "",
    },
    {
      id: 4,
      logo: reactjs,
      name: "React Weather App",
      description: "Developed a React.js weather app with real-time updates and forecasts, integrating third-party APIs for accurate weather data, and implemented features for location-based weather tracking and alerts",
      projectLink: "",
      sourseCodeLink: "https://github.com/abhiMewada97/React-Weather-App",
    },
    {
      id: 5,
      logo: javascript,
      name: "Snake Game",
      description: "Utilized HTML5 canvas for dynamic rendering and smooth animations, implementing user input handling, game logic, and collision detection to create an engaging gaming experience",
      projectLink: "https://abhimewada97.github.io/Snake-Game/",
      sourseCodeLink: "https://github.com/abhiMewada97/Snake-Game",
    },
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-5">
          {cardItem.map(({ id, logo, name, description, projectLink, sourseCodeLink }) => (
            <div
              className="md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {description}
                </p>
              </div>
              <div className="px-4 py-4 space-x-3 justify-around">
                
                <a href={sourseCodeLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white px-2 py-2 rounded">
                    Source Code
                  </button>
                </a>

                { projectLink.length > 0 &&
                  <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-2 rounded">
                      View Project
                    </button>
                  </a>
                }

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
