import React from "react";

import pic from "../../public/abhishek.jpg";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Hey! I am a Computer Science & Engineering student at Sagar Institute of Science & Technology, Bhopal, with a solid academic record and a CGPA of 7.15. 
            Passionate about both <b>frontend and backend development</b>, 
            I has honed my skills in HTML, CSS, React, Node.js, and MySQL, among others. 
            <br/><br/>
            I has successfully completed various <b>projects</b>, such as developing a portfolio website, an online marketplace, and an algorithm visualizer, showcasing his adeptness in full-stack development and problem-solving. 
            I also gained practical experience as a Web Development 
            <br/>
            <br/>
            Having completed an <b>IBM SkillsBuild Summer Internship with CSRBOX</b>, where I gained valuable industry experience and honed my technical expertise, 
            and an internship at <b>The Sparks Foundation</b>, where I built a secure ATM web app, 
            <b> my achievements</b> include winning <b>1st place</b> in a college coding contest and earning <b>certifications in Full Stack Development and Data Structures and Algorithms</b>. 
            
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/abhishek-mewada/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mr_abhishek_mewada__/" target="_blank">
                      <FaInstagramSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            {/* <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            /> */}
              <img src={pic} alt='Abhishek' className='rounded-full w-[250px] md:w-[400px] md:h-[400px]'/>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}
