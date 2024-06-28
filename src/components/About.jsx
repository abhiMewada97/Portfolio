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
            <strong> Steam : </strong> Computer Science & Engineering
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
            Professional Experience
          </h1>
          <span>
            [Job Title], [Company/Organization], [Dates] [Brief description of
            responsibilities and achievements] [Job Title],
            [Company/Organization], [Dates] [Brief description of responsibilities
            and achievements] [Freelance/Contract Work], [Client/Organization],
            [Dates] [Brief description of projects and contributions]
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Achievements & Awards
          </h1>
          <span>
            [Award/Recognition], [Organization/Institution], [Year] [Achievement],
            [Organization/Platform], [Year]
          </span>
        </div>
      </div>
    );
  }