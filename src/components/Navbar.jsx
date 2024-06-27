import React, { useState } from 'react'
import pic from '../../public/abhishek.jpg'
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const navbarItems = [
        {
            id:1,
            text:'Home'
        },
        {
            id:2,
            text:'About'
        },
        {
            id:3,
            text:'Potfolio'
        },
        {
            id:4,
            text:'Experiance'
        },
        {
            id:5,
            text:'Contacts'
        }
    ]

  return (
    <>
        <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
            
            <div className='flex justify-between items-center h-16'>
                <div className='flex space-x-2'>
                    <img src={pic} alt='Abhishek' className='h-12 w-12 rounded-full' />
                    <h1 className='font-semibold text-xl cursor-pointer'>Abhi<span className='text-green-500'>Shek</span>
                    <p className='text-sm'>Web Developer</p>
                    </h1>
                </div>

                {/* Desktop Navbar */}                    
                <div>
                    <ul className='hidden md:flex space-x-8'>
                        {
                            navbarItems.map(({id, text})=>(
                                <li className='hover:scale-110 duration-200 cursor-pointer' key={id}>{text}</li>
                            ))
                        }
                    </ul>
                    <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                        {menu==false ? <FiMenu size={24}/> : <IoCloseSharp size={24}/>}
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div>
                {menu && (
                    <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-2 text-xl'>
                        {  navbarItems.map(({id, text})=>(
                            <li className='hover:scale-110 duration-200 cursor-pointer font-semibold' key={id}>{text}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </>
  )
}
