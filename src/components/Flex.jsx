import React from "react";
import { MdLocationOn } from "react-icons/md";

import pic from '../assets/pic.jpg'


function Flex() {
return (
<>
<div className="w-full h-screen flex justify-center items-center bg-[#525EA7]">

    <div className="w-[20rem] h-[30rem] bg-[#281C59] rounded-xl">

        <div className="w-full h-[11rem] object-contain bg-amber-50 rounded-t-xl flex justify-center">
        <div class="w-35 h-35 rounded-full border-4 border-[#281C59] mt-5 ">

        <img src={pic} alt="profile" className=" w-32 h-32 rounded-full  object-cover mt-0.5 ml-0.5 "  />
        </div>
        </div>

    <div className="flex justify-center text-white text-xl pt-2.5">
        <h1>Whiskers Whiskerton</h1>
    </div>

    <div className="flex justify-center text-white mr-5 mt-5">

        <MdLocationOn />
        
        <h6>NEW YORK</h6>
    </div>

        <p className="text-gray-400 p-4">UI/UX designer and front-end developer</p>

        <div className="flex justify-center gap-3.5">
        
        <button className="bg-[#121358] px-2 py-2 text-white w-[6rem] h-[2.5rem] rounded-xl cursor-pointer">Message</button>
        <button className="bg-[#121358] px-2 py-2 text-white w-[6rem] h-[2.5rem] rounded-xl cursor-pointer">Follow</button>

        </div>

        <div className="w-full h-0.5 bg-[#0a0b3a] mt-2.5 flex justify-center">
        </div>

        <h1 className="text-white p-2.5">SKILLS</h1>

        <div className="flex justify-center gap-3 ">
            <p className="text-gray-400">UI/UX</p>
            <p className="text-gray-400">Front End Development</p>
            <p className="text-gray-400">HTML</p>

        </div>

        <div className="flex justify-center gap-8 ">
            <p className="text-gray-400">CSS</p>
            <p className="text-gray-400 capitalize">javascript react</p>
            <p className="text-gray-400 capitalize">bootstap</p>

        </div>
            
    

    </div>
</div>


</>
)
}

export default Flex