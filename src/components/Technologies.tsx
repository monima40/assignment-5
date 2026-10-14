
import { use, useState } from "react";
import type { Type } from './Type';
import AllIssues from './AllIssues'
import { Toaster } from "react-hot-toast";



const Technologies = ({ dataPromise }: { dataPromise: Promise<Type[]> }) => {

    const allIssues = use<Type[]>(dataPromise);
   

    const [completedIssues, setCompletedIssues] = useState<Type[]>([]);
    return (
        <div id="technology" className= "container mx-auto  my-10 px-4 md:px-0">
            <Toaster position="top-right" />
            <div>
                <h2 className="font-bold text-2xl  text-center md:text-left sm:text-3xl md:text-4xl">Explore the <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Technologies</span></h2>
                <p className = "mt-2  text-base md:text-lg leading-relaxed text-[#515d6e]  text-center md:text-left">Pick one technology per category to build your ideal stack.</p>
            </div>
           
             <div> <AllIssues setCompletedIssues={setCompletedIssues} completedIssues = {completedIssues} allIssues ={allIssues}/> </div>
           

        </div>
    )
};

export default Technologies;