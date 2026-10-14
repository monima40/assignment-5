 import { useState } from 'react';
import logo from '../assets/logo-text.png'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar =() =>{

    const [isMenuOpen,setIsMenuOpen] = useState(false);

    return (
        <nav className =" bg-white border-b border-[#e1e4e6] sticky top-0 z-50 ">
             <div className=" container  relative mx-auto  px-4 md:px-0 flex justify-between items-center   h-15 md:h-20  text-[#475569]  ">
               <div onClick={() => setIsMenuOpen(!isMenuOpen)} className ="cursor-pointer md:hidden">
                {isMenuOpen?<RxCross1/>:<RxHamburgerMenu/>}
                   {
          isMenuOpen && (
          <ul className="flex flex-col gap-5 absolute top-20 left-0 w-full bg-white p-5 shadow-md md:hidden">
          <li className="text-[#DB2777]"><a href="#">Home</a></li>
           <li><a href="#technology" >Technologies</a></li>
           <li><a href="#">Projects</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Contact</a></li>
           </ul>
         )
          }
               </div>
              <div>
                <a className ="flex items-center" href="#">
                    <img src={logo} alt="" />
                </a>
              </div>
       
             <ul className ='hidden md:flex  justify-center items-center gap-5' >
                <li className="text-[#DB2777]"><a href="#">Home</a></li>
                <li ><a href="#technology">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li> <a href="#">About</a></li>
                <li> <a href="#">Contact</a></li>
             </ul>
            
               <div className="flex justify-center items-center gap-5">
            
                <a href="#">Sign In</a>
                <button className="border rounded-full  w-auto  px-2 py-1 border-solid bg-linear-to-r from-[#d91b7e] to-[#7C3AED] shadow-[0px_1px_2px_0px_#fbcfe8] text-white  transition hover:-translate-y-1  "> <a href="#">Sign Up</a></button>
            
               </div>
           

            </div>
   
        </nav>
    )
   
    

 }

 export default Navbar