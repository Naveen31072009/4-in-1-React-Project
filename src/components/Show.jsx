
import { useState } from "react"

function Show() {

    const [show, setshow] = useState(true)

    return (
        <div>
            <h1 className={`${show ? "text-2xl text-amber-200 capitalize" : "text-2xl text-blue-500 capitalize"}`}>
                {show ? "Hello Naveen" : "Good bye" }
            </h1>

    

            <button
                className="w-[5rem] h-[2.5rem]"
                onClick={() => setshow(!show)}
            >
                Mood off
            </button>
        </div>
    )
}

export default Show

