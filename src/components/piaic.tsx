import Image from "next/image"
import React from "react"
function Piaic(){
    return(
        <div className="w-full] flex flex-col justify-center items-center border-b-4 border-double border-gray-500">
        <div className="w-[80%] flex sm:flex-col md:flex-col lg:flex-row xl:flex-row p-10 justify-center items-center gap-3">
            <div className=" bg-slate-900 rounded-lg overflow-hidden">
            <Image src='/piaic.jpg' alt="AI" className="rounded-t-lg" width={200} height={200}/>
           
            </div>
            <div className=" bg-slate-900 rounded-lg overflow-hidden">
            <Image src='/piaic.jpg' alt="AI" className="rounded-t-lg" width={200} height={200}/>
            </div>
        </div>
        <hr />
        </div>
    )
}
export default Piaic