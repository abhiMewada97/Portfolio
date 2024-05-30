import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from '../../public/abhishek.jpg'

export default function Home() {
  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20' >
        <div className='flex flex-col md:flex-row '>
            
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                
                <span className='text-xl'>Welcome In My Feed</span>
                <div className='flex space-x-1 text-2xl md:text-4xl'>
                    <h1>Hello, I'm  </h1>
                    <ReactTyped 
                    className='text-red-700'
                      strings={["Abhishek","Developer","Programmer"]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop={true}
                    />
                </div>
                <br></br>
                
                <p className='text-sm md:text-md text-justify'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Illo nesciunt quia officia iusto delectus eligendi, 
                    molestiae id ea quis enim dolores harum magni, neque quos commodi? 
                    Tempora perferendis iure ea.
                </p>
                <br/>

                <div className='flex flex-col items-center md:flex-row justify-between space-y-5 md:space-y-0'>
                  {/* Social Media Icons */}
                  <div className='space-y-1'>
                    <h1 className='font-bold'>Available on</h1>
                    <ul className='flex space-x-5'>
                      <li> <a href='https://www.linkedin.com/in/abhishek-mewada/' target='_blank'> <FaLinkedin className='text-2xl cursor-pointer'/> </a></li>
                      <li> <a href='https://github.com/abhiMewada97' target='_blank'> <FaGithubSquare className='text-2xl cursor-pointer'/> </a></li>
                    </ul>
                  </div>

                  {/* Currently working on */}
                  <div className='space-y-2'>
                  <h1 className='font-bold'>Currently Working on</h1>
                    <div className='flex space-x-5'>
                      <SiMongodb className='text-xl md:text-3xl'/>
                      <SiExpress className='text-xl md:text-3xl'/>
                      <FaReact className='text-xl md:text-3xl'/>
                      <FaNodeJs className='text-xl md:text-3xl'/>
                    </div>
                  </div>
                </div>

            </div>
            
            <div className='md:w-1/2 md:ml-40 mt-8 order-1'>
              <img src={pic} alt='Abhishek' className='rounded-full w-[250px] md:w-[400px] md:h-[400px]'/>
            </div>
        </div>
      </div>
    </>
  );
}


