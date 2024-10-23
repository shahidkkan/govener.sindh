import Link from "next/link";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faTiktok , faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Social icons


function Footer(){
    return(
        <div className="bg-gray-200 w-full  flex flex-col justify-center items-center mt-6">

        <div className=" w-[80%]  flex sm:flex-col md:flex-row lg:flex-row xl:flex justify-center items-start  ">
            <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15">
                 <ul> 
                    <li><h1 className="font-bold text-xl pb-4">Core Courses</h1></li>
                    <li><Link href="#">Programming Fundamentals</Link></li>
                    <li><Link href="#">Web2 Using NextJS</Link></li>
                    <li><Link href="#">Earn as You Learn</Link></li>
                 </ul>
            </div>
            <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15">
            <ul>
                    <li><h1 className="font-bold text-xl pb-4">Advanced Courses</h1></li>
                    <li><Link href="#">Web 3 and Metaverse</Link></li>
                    <li><Link href="#">Cloud-Native Computing</Link></li>
                    <li><Link href="#">Artificial Intelligence (AI) and Deep Learning</Link></li>
                    <li><Link href="#">Ambient Computing and IoT</Link></li>
                    <li><Link href="#">Genomics and Bioinformatics</Link></li>
                    <li><Link href="#">Network Programmability and Automation</Link></li>
                 </ul>
            </div>
    
            <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15 ">
            <h1 className="font-bold text-xl pb-4">Social Links</h1>
       <ul className="list-none flex">
     
      <li>
        <Link href="https://www.youtube.com/@KamranTessorikk"  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="text-red-500 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
        </Link>
      </li>

      <li>
        <Link href="https://www.linkedin.com/in/shahid-khan-874078290/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BAeuUt6IPQ1qzhxCYISrgbQ%3D%3D"  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
        </Link>
      </li>

      <li>
        <Link href=""  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} className="text-black text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/profile.php?id=100076095862479"  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-blue-500 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
        </Link>
      </li>
      <li>
        <Link href=""  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
        </Link>
       </li>
    </ul>
     </div>


        </div>
        </div>
    )
}

export default Footer