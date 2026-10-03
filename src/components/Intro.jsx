import React,{useState} from 'react'

function Intro() {

    const[getValue,setgetValue] = useState("")
    const [show, setshow] = useState("")


    const func = () => {
        setshow(((getValue-32)*5)/9)
    }
    

  return (
    <>
    <input type="text" className='border m-4' value={getValue} onChange={(e) => setgetValue(e.target.value)} />

    <button className='bg-blue-500 text-white px-2 py4 ' onClick={func}>Convert</button>
    <h1>{show}</h1>
    </>
  )
}

export default Intro