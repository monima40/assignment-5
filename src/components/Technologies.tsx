
 import { use } from "react";
import AllIssues from './AllIssues'
const Technologies = ({ dataPromise }: { dataPromise: Promise<any> }) => {

    const allIssues = use(dataPromise);
    // console.log(allIssues);
    return (
        <div className= "container mx-auto  my-10 px-4 md:px-0">
            <div>
                <h2 className="font-bold text-2xl  text-center md:text-left sm:text-3xl md:text-4xl">Explore the <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Technologies</span></h2>
                <p className = "mt-2  text-base md:text-lg leading-relaxed text-[#515d6e]  text-center md:text-left">Pick one technology per category to build your ideal stack.</p>
            </div>
            {/* <div className="grid grid-cols-1  md:grid-cols-12  py-6 md:py-10 ">

                <div className="col-span-1 md:col-span-9">
                     <Card card ={card}/></div>
                <div className ="col-span-1 md:col-span-3">hello</div>
            </div> */}
             <div> <AllIssues allIssues ={allIssues}/> </div>
           

        </div>
    );
};

export default Technologies;