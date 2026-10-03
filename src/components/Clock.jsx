import React, { useState, useEffect } from 'react'

function Clock() {

  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {

    if(!running) return

    const interval = setInterval(() => {
      setTime(time + 1)
    }, 100)
    return () => clearInterval(interval)

  }, [running, time])


    


  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  
  

  return (
    <div className="w-full min-h-screen bg-[#425B9A] flex justify-center items-center">

      <div className="w-[50rem] h-[15rem] rounded-2xl bg-[#080616] text-white flex flex-col justify-center items-center">

        <h1 className="text-6xl font-bold">
          {minutes}:{seconds}
        </h1>

        <div className="flex gap-3 mt-8">

          <button
            onClick={() => setRunning(true)}
            className="w-[5rem] h-[2.5rem] bg-green-500 text-white rounded-full"
          >
            Start
          </button>

          <button
            onClick={() => setRunning(false)}
            className="w-[5rem] h-[2.5rem] bg-red-500 text-white rounded-full"
          >
            Stop
          </button>

          <button
            onClick={() => {
              setRunning(false)
              setTime(0)
            }}
            className="w-[5rem] h-[2.5rem] bg-blue-500 text-white rounded-full"
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  )
}

export default Clock