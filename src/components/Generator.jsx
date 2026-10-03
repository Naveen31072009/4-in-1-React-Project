import React, { useState } from 'react'

function Generator() {

  const [getValue,setgetValue] = useState(8)
  const [Uppercase,setUppercase] = useState(false)
  const [Lowercase,setlowercase] = useState(false)
  const [Numbers,setnumbers] = useState(false)
  const [Symbols,setsymbols] = useState(false)
  const [Output, setOutput] = useState("")

  const generatepassword = () =>
  {

    let characters = ""

    if(Uppercase){
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if(Lowercase){
      characters += "abcdefghijklmnopqrstuvwxyz"
    }

    if(Numbers){
      characters += "1234567890"
    }

    if(Symbols){
      characters += "`~!@#$%^&*()-_+={[}]|<,>.?/*"
    }

    let s="";
    for(let i=0;i<getValue;i++)
    {
      let r = Math.floor(Math.random() * characters.length)
      s+=characters[r]
    }

    setOutput(s)
  }

  
  return (

  

    <div className="w-full h-screen flex justify-center bg-[#0f0e14]">


        <div className="w-[23rem] h-[35rem] bg-[#24232b] mt-[5rem] p-8">
        <h1 className="text-gray-400 text-center text-xl mb-5 ">
          Password Generator
        </h1>
        
        <div className="w-full h-20 bg-[#2d2c35] flex items-center justify-between px-5 mb-6">

          <h1 className="text-gray-500 text-2xl font-bold">
            {Output}
          </h1>

          <button className="text-green-300 text-2xl">
            📋
          </button>

        </div>


        
        <div className="flex justify-center mb-5">

          <h1 className="text-white text-lg mr-35">
            Character Length
          </h1>

            <h1 className="text-green-300 text-2xl">
            {getValue}
          </h1>

        

        

        </div>

        <input
          type="range"
          className="w-full mb-7"
          
        value={getValue} max={10} onChange={(e) => setgetValue(e.target.value)}

      />


      
        <div className="flex items-center gap-4 mb-5">

          <input
            type="checkbox"
            className="w-5 h-5"
            checked={Uppercase}
            onChange={() => setUppercase(!Uppercase)}
          />

          <h1 className="text-white">
            Include Uppercase Letters
          </h1>

        </div>


    
        <div className="flex items-center gap-4 mb-5">

          <input
            type="checkbox"
            className="w-5 h-5"
            checked={Lowercase}
            onChange={() => setlowercase(!Lowercase)}
          />

          <h1 className="text-white">
            Include Lowercase Letters
          </h1>

        </div>


        
        <div className="flex items-center gap-4 mb-5">

          <input
            type="checkbox"
            className="w-5 h-5"
            checked={Numbers}
            onChange={() => setnumbers(!Numbers)}
            
          />

          <h1 className="text-white">
            Include Numbers
          </h1>

        </div>


        
        <div className="flex items-center gap-4 mb-7">

          <input
            type="checkbox"
            className="w-5 h-5"
            checked={Symbols}
            onChange={() => setsymbols(!Symbols)}
          />

          <h1 className="text-white">
            Include Symbols
          </h1>

        </div>


    
    <button className="w-full h-16 bg-green-300 text-black font-bold hover:bg-green-400" onClick={generatepassword}>
          GENERATE 
        </button>

    </div>


        
    

      </div>

    
  )
}

export default Generator