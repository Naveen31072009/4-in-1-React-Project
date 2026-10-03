import React, { useState } from 'react'

function In() {

    const [time, setTime] = useState(0)
    const [running,setRunning] = useState(false)

    useEffect(() => {
      
    
      return () => {
        second
      }
    }, [third])
    



  return (
    

    <div className='flex justify-center w-full h-screen bg-[#1d2552]'>
        <div className="w-[23rem] h-auto  bg-white rounded mt-16">

            <div className="flex justify-center">
            <h1 className='text-3xl font-semibold text-black mt-3'>
                {first ? "Sign Up" : "Login"}
                
                </h1>
            </div>

            <p className='ml-18 mt-5' >It's free and only takes a minute</p>
            {
                first ? 
                <>
                <h2 className='ml-7 mt-5 text-xl text-gray-500'>First name</h2>

            <input type="text" className='border w-80 h-7 ml-7  ' />

            <h2 className='ml-7 mt-5 text-xl text-gray-500'>Last name</h2>

            <input type="text" className='border w-80 h-7  ml-7 ' />

                </>
                :<></>
            }
            
            <h2 className='ml-7 mt-5 text-xl text-gray-500'>Email</h2>

            <input type="text" className='border w-80 h-7  ml-7' />

            <h2 className='ml-7 mt-5 text-xl text-gray-500'>Password</h2>

            <input type="text" className='border w-80 h-7  ml-7 ' />

            
        

            <button className='w-82 h-10 bg-[#36ADA3] text-white mt-5 text-xl rounded-xl ml-6 '>Submit</button>

            <p className='flex justify-center mt-7 text-white'>
                Already have an account?
              
                <a href='#' className='text-blue-600 ml-1' onClick={() => setfirst(!first)} > Login Here </a>
             
              
            </p>


        </div>
        

     {/* <div className="w-[23rem] h-auto bg-white rounded mt-18">

            <div className="flex justify-center">
            <h1 className='text-3xl font-semibold text-black mt-3'>Login</h1>
            </div>

            
            <h2 className='ml-7 mt-5 text-xl text-gray-500'>Email</h2>

            <input type="text" className='border w-80 h-7  ml-7' />

            <h2 className='ml-7 mt-5 text-xl text-gray-500'>Password</h2>

            <input type="text" className='border w-80 h-7  ml-7 ' />

            <button className='w-82 h-10 bg-[#36ADA3] text-white mt-5 text-xl rounded-xl ml-6 '>Submit</button>

            <p className='flex justify-center mt-17 text-white'>
                Not have an account?
                <a href='#' className='text-blue-600 ml-1' >Sign up Here </a>
                
            </p>

        </div>
         */}




  
    </div>


  )
}

export default In