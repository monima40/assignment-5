

import banner from '../assets/banner-stack.png'

 const HeroSection = () => {


     return (
         <section className =" container mx-auto grid md:grid-cols-5 gap-4 min-h-screen  py-6 md:py-10  mt-6 md:mt-10 px-4">

            {/* content */}
            
             <div className =" col-span-1 md:col-span-3  ">
                <h2 className ="font-bold text-4xl sm:text-5xl  md:text-6xl leading-tight tracking-tight text-center md:text-left"> <span>Build Your Ideal</span> <br /> <span className =' bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h2>
              {/* <p className='my-5  text-[#475569]'><span>Explore frontend, backend, database, and tooling options,</span><br /> <span>compare them side by side, and put together the stack that fits your</span> <br /> <span>next project.</span>
             </p> */}


              <p className=' mt-4 max-w-xl  text-base md:text-lg leading-relaxed text-[#475569]  text-center md:text-left'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
             </p>
                  <div className='flex justify-center md:justify-start items-center gap-3 mt-7'>
                    <button className ='border border-gray-200 rounded-xl py-2 px-4  sm:px-8 bg-linear-to-r from-[#eb6942] to-[#e93793] text-white font-semibold transition hover:-translate-y-1 '> <a href="#">Explore Technologies</a></button>
                  <button className='border border-gray-200 rounded-xl py-2  px-4 sm:px-8  font-semibold text-gray-500 hover:bg-gray-200'> <a href="#">Learn More</a></button>
                  </div>
             </div>    
             <div className ="col-span-1 md:col-span-2 ">
                <img src={banner} alt="" />
                
             </div>
        
         </section>
    )
 }

 export default HeroSection