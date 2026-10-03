
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

function Navbar() {
  return (
    <div className='w-full h-screen bg-blue-200'>
        <div className="w-full h-[5rem] bg-black flex justify-between p-6">
            <h1 className='text-white text-2xl '>Logo Here.</h1>
            
            <h6 className=' text-white'>Home</h6>
            <h6 className=' text-white'>Catagory</h6>
            <h6 className=' text-white'>Collections</h6>
            <h6 className=' text-white'>Contact us</h6>
            
            <div className="flex space-x-5">
            <CiHeart className=' text-white text-2xl'  />
            <IoCartOutline className=' text-white text-2xl' />
            <MdOutlineAccountCircle className=' text-white text-2xl' />
            </div>

        </div>
        <div className="flex ">
            <h1 className=' text-6xl  capitalize pt-15 pl-25 '>make designs that<br /> engage, delight,<br /> and connect</h1>
            
        </div> 
        <p className=' text-xl  capitalize  pt-8 pl-27' >Hi.I'm Ezio! With more than 10 years of experience,<br />I'm ready to be a part of your wonderful project!</p>
        <button className='mt-12 ml-27 w-[8rem] h-[2.5rem] bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-4xl cursor-pointer'>Hire Me</button>
        <button className='mt-12 ml-10 bg-white w-[10rem] h-[2.5rem]  text-black rounded-4xl cursor-pointer'>Previous works</button>

        <div className="flex ">
          <h1 className='text-3xl mt-12 ml-28 '>
            650+
              <p className='text-base font-sans mt-2.5'>Projects Done</p>

          </h1>
        
          <h1 className='text-3xl mt-12 ml-15'>
            99%
            <p className='text-base font-sans mt-2.5'>Happy Client</p>
          </h1>
          <h1 className='text-3xl mt-12 ml-15 '>
            240+
            <p className='text-base font-sans mt-2.5'>Fine Artworks</p>

          </h1>
        </div>
        
    </div>
  )
}

export default Navbar