import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn, } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <hr />
      <footer name='Footer' className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            
            <div className="flex space-x-4">
              <a href="https://x.com/abhi_mewada97" target="_blank"><FaTwitter size={24} /></a>
              <a href="https://www.instagram.com/mr_abhishek_mewada__/" target="_blank"><FaInstagram size={24} /></a>
              <a href="https://www.linkedin.com/in/abhishek-mewada/" target="_blank"><FaLinkedinIn size={24} /></a>
            </div>
            
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 All rights reserved.
              </p>
              <p className="text-sm">Made with ❤️ by Abhishek</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}