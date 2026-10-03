import React, { useState, useEffect } from 'react'
import { FaRegMoon, FaRegSun } from "react-icons/fa";

function Time() {

  const [theme, setTheme] = useState(false)
  const [first, setfirst] = useState(new Date())
  const [hour, setHour] = useState()
  const [is24hour, set24hour] = useState(true)

  useEffect(() => {

    const Interval = setInterval(() => {
      setfirst(new Date());
    }, 1000)

    return () => clearInterval(Interval)

  }, [])



  const displayHour = is24hour
    ? first.getHours()
    : first.getHours() % 12 || 12


  return (
    <>

      <div
        className={`w-full min-h-screen flex justify-center items-center px-4 ${ 
          theme ? "bg-white" : "bg-[#425B9A]"
        }`}
      >

        <div
          className={`w-full max-w-[50rem] min-h-[15rem] md:h-[15rem] rounded-2xl p-5 ${ 
            theme ? "bg-gray-200" : "bg-[#080616]"
          }`}
        >

  
          <div className="flex justify-end items-center">

            <div className="mr-3">
              <p
                className={`text-xl ${
                  theme ? "text-black" : "text-white"
                }`}
              >
                24
              </p>
            </div>

            <label className="relative block aspect-[2/0.75] w-14 rounded-full bg-gradient-to-br from-purple-100 via-violet-600 shadow-2xl shadow-purple-300 transition-all duration-300 mr-3">

              <input
                className="peer/input hidden"
                type="checkbox"
                checked={!is24hour}
                onChange={() => set24hour(!is24hour)}
              />

              <div
                className="
                  absolute
                  left-[3%]
                  top-1/2
                  aspect-square
                  h-[90%]
                  -translate-y-1/2
                  rotate-180
                  rounded-full
                  bg-white
                  bg-gradient-to-t
                  transition-all
                  duration-500
                  peer-checked/input:left-[63%]
                  peer-checked/input:-rotate-6
                "
              ></div>

            </label>


            {/* 12 */}
            <div className="mr-auto">
              <p
                className={`text-xl ${
                  theme ? "text-black" : "text-white"
                }`}
              >
                12
              </p>
            </div>


            {theme ? (

              <FaRegSun
                className="text-black w-[1.5rem] h-[1.5rem] cursor-pointer"
                onClick={() => setTheme(false)}
              />

            ) : (

              <FaRegMoon
                className="text-white w-[1.5rem] h-[1.5rem] cursor-pointer"
                onClick={() => setTheme(true)}
              />

            )}

          </div>


          <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4 md:gap-0">


       
            <div
              className={`${
                theme ? "text-black" : "text-white"
              } text-center`}
            >

              <h1 className="text-4xl font-semibold">
                {first.toLocaleDateString("en-US", {
                  weekday: "short"
                })}
              </h1>

              <p>Day</p>

            </div>


            <div className="hidden md:block">

              <h1
                className={`${
                  theme ? "text-black" : "text-white"
                } text-4xl font-bold`}
              >
                :
              </h1>

            </div>


            <div
              className={`${
                theme ? "text-black" : "text-white"
              } text-center`}
            >

              <h1 className="text-4xl font-bold">
                {displayHour}
              </h1>

              <p>Hours</p>

            </div>


            <div className="hidden md:block">

              <h1
                className={`${
                  theme ? "text-black" : "text-white"
                } text-4xl font-bold`}
              >
                :
              </h1>

            </div>


            <div
              className={`${
                theme ? "text-black" : "text-white"
              } text-center`}
            >

              <h1 className="text-4xl font-bold">
                {first.getMinutes()}
              </h1>

              <p>Minutes</p>

            </div>


            <div className="hidden md:block">

              <h1
                className={`${
                  theme ? "text-black" : "text-white"
                } text-4xl font-bold`}
              >
                :
              </h1>

            </div>

            <div
              className={`${
                theme ? "text-black" : "text-white"
              } text-center`}
            >

              <h1 className="text-4xl font-bold">
                {first.getSeconds()}
              </h1>

              <p>Seconds</p>

            </div>

          </div>


          {!is24hour && (

            <div className="flex justify-center mt-6">

              <button
                className="w-[5rem] h-[2.5rem] bg-[#425B9A] text-white rounded-full"
              >
                {first.getHours() >= 12 ? "PM" : "AM"}
              </button>

            </div>

          )}

        </div>

      </div>

    </>
  )
}

export default Time