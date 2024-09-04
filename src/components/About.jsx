import React from 'react';

export default function About() {
    return (
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p>
            Hello, I'm Abhishek, a passionate Web developer with a keen eye for MERN Stack.
            Looking forward to a challenging work environment where 
            I can refine my skills and expand my knowledge for the dynamic growth of the organization and self.
          </p>
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Education
          </h1>
          <span>
            Bachelor of Technology (2021-2025) <br/>
            <strong> College : </strong> Sagar Institute of Science & Technology, Bhopal <br/>
            <strong> Stream : </strong> Computer Science & Engineering
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Training & Certificates
          </h1>
          <span>
          •	Full Stack Development (MERN) <br />
          •	Basic Java skill certified by Hacker Rank <br />
          •	Data Structures and Algorithms with Java 
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Skills & Expertise
          </h1>
          <span>
          •	<strong>Frontend Development :</strong> HTML, CSS, React, Bootstrap, Java Script <br/>
          •	<strong>Backend Development :</strong> Node.js, Express.js, REST API  <br/>
          •	<strong>Database Technologies :</strong> MySQL  <br/>
          •	<strong>Data Structures and Algorithms</strong>  <br/>
          •	<strong>Languages :</strong> C, Java  <br/>
          •	<strong>Other :</strong> Git & GitHub, OOPs  <br/>

          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Internships
          </h1>
          <span>
            <strong>
            Web Development Intern, @The Sparks Foundation, Oct 2022 - Nov 2022 <br/>
            Task: ATM Machine <br/>
            </strong>
            •	Designed and built a secure ATM web app <br/>
            •	Developed backend functionalities for ATM transactions <br/>
            •	Engineered robust data validation and account management <br/>
            •	Technology used: HTML, CSS Java Script, Node, Express, MongoDB <br/>
          </span>
          <br/>
          <span>
            <strong>
            Web Development Intern, @IBM SkillsBuild Internship Program with CSRBOX, Jun 2024 – Aug 2024 <br/>
            Task: Ocean Guardians <br/>
            </strong>
            •	Developed <strong>Ocean Guardians</strong> using React and MongoDB for marine conservation awareness <br/>
            •	Implemented secure user authentication with JWT and bcrypt <br/>
            •	Integrated APIs for real-time marine conservation data and volunteer opportunities <br/>
          </span>
        </div>
      </div>
    );
  }