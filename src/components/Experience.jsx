import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.webp";
import javascript from "../../public/javascript.png";
import bootstrap from "../../public/bootstrap.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/react.png";
import node from "../../public/node.png";
import c from "../../public/c.png";
import cpp from "../../public/cppa.png";
import java from "../../public/java.png";
import dsa from "../../public/dsa.png";

export default function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      sourseCodeLink: "https://github.com/abhiMewada97/MERN-Stack-Web-Development/tree/main/FrontEnd",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      sourseCodeLink: "https://github.com/abhiMewada97/MERN-Stack-Web-Development/tree/main/FrontEnd",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
      sourseCodeLink: "https://github.com/abhiMewada97/MERN-Stack-Web-Development/tree/main/FrontEnd",
    },
    {
      id: 4,
      logo: bootstrap,
      name: "Bootstrap",
      sourseCodeLink: "",
    },
    
    {
      id: 5,
      logo: c,
      name: "C",
      sourseCodeLink: "https://github.com/abhiMewada97/c-programming",
    },
    {
      id: 6,
      logo: mongodb,
      name: "MongoDB",
      sourseCodeLink: "https://github.com/abhiMewada97/MERN-Stack-Web-Development/tree/main/Mongo",
    },
    {
      id: 7,
      logo: express,
      name: "Express",
      sourseCodeLink: "https://github.com/abhiMewada97/MERN-Stack-Web-Development/tree/main/Express",
    },
    {
      id: 8,
      logo: reactjs,
      name: "Rect",
      sourseCodeLink: "https://github.com/abhiMewada97/MERN-Stack-Web-Development/tree/main/REACT_Delta",
    },
    {
      id: 9,
      logo: node,
      name: "Node",
      sourseCodeLink: "https://github.com/abhiMewada97/MERN-Stack-Web-Development/tree/main/Backend",
    },
    {
      id: 10,
      logo: cpp,
      name: "C++",
      sourseCodeLink: "https://github.com/abhiMewada97/cpp",
    },
    {
      id: 11,
      logo: java,
      name: "Java",
      sourseCodeLink: "https://github.com/abhiMewada97/Java",
    },
    {
      id: 12,
      logo: dsa,
      name: "DSA",
      sourseCodeLink: "https://github.com/abhiMewada97/Java-with-DSA",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience & Skills</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name, sourseCodeLink }) => (
            <a href={sourseCodeLink} target="_blank">

              <div
                className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
                >
                <img src={logo} className="w-[150px] rounded-full" alt="" />
                <div>
                  <div className="">{name}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}