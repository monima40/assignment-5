 import logo from '../../assets/logo-text.png'

const Navbar =() =>{

    return (
        <nav className =" bg-white border-b border-[#e1e4e6] sticky top-0 z-50 ">
             <div className=" container mx-auto flex justify-between items-center h-20  text-[#475569]  ">
        
              <div>
                <a className ="flex items-center" href="#">
                    <img src={logo} alt="" />
                </a>
              </div>
       
             <ul className ='flex justify-center items-center gap-5' >
                <li className="text-[#DB2777]"><a href="#">Home</a></li>
                <li ><a href="#">Technologies</a></li>
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