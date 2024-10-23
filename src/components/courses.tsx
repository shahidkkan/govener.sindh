import Image from "next/image"
import React from "react"
function Courses(){
    return(
        <div id="courses" className="w-[100%] flex flex-col justify-center items-center">
            <h1  className="sm:text-2xl md:text-2xl lg:text-3xl font-bold p-5 text-[#044e83] ">Core Courses Sequence</h1>
          <div className="w-[80%] flex sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-center gap-4 rounded-lg">
            
            <div className="w-full bg-white rounded-lg shadow-2xl shadow-black  cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in ">
            <Image src='/programming_fundamentals.jpg' alt="AI" className="rounded-t-lg" width={200} height={200}/>                <h1 className="sm:text-2xl md:text-2xl lg:text-sm xl:text-lg font-bold text-center p-5 text-gray-600">programming fundamentals</h1>
            </div>
            <div className="w-full bg-white rounded-lg shadow-2xl shadow-black  cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in ">
            <Image src='/nextjs.jpg' alt="AI" className="rounded-t-lg" width={200} height={200}/>
                <h1 className="sm:text-2xl md:text-2xl lg:text-sm xl:text-lg font-bold text-center p-5 text-gray-600">Web2 Using NextJS</h1>
            </div>
            <div className="w-full bg-white rounded-lg shadow-2xl shadow-black  cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in ">
            <Image src='/programming_fundamentals.jpg' alt="AI" className="rounded-t-lg" width={200} height={200}/>                <h1 className="sm:text-2xl md:text-2xl lg:text-sm xl:text-lg font-bold text-center p-5 text-gray-600">Earn as You Learn</h1>
            </div>
          </div>
        </div>


    )
}
export default Courses