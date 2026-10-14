

import banner from '../assets/banner-stack.png'

 const HeroSection = () => {


     return (
         <section className ="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-80px)] items-center px-4 md:px-0 py-8 md:py-10 mt-0">

            {/* content */}
            
             <div className =" col-span-1 md:col-span-3  ">
                <h2 className ="font-bold text-4xl sm:text-5xl  md:text-6xl leading-tight tracking-tight text-center md:text-left"> <span>Build Your Ideal</span> <br /> <span className =' gradient_text'>Development Stack</span></h2>
              {/* <p className='my-5  text-[#475569]'><span>Explore frontend, backend, database, and tooling options,</span><br /> <span>compare them side by side, and put together the stack that fits your</span> <br /> <span>next project.</span>
             </p> */}


              <p className=' mt-4 max-w-xl  text-base md:text-lg leading-relaxed text-[#475569]  text-center md:text-left'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
             </p>
                  <div className='flex justify-center md:justify-start items-center gap-3 mt-7'>
                    <button className ='border border-gray-200 rounded-xl py-2 px-4  sm:px-8 btn_clr text-white font-semibold transition hover:-translate-y-1 '> <a href="#">Explore Technologies</a></button>
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