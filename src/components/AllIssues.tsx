import Card from "./Card";
import type { Type } from "./Type";

const AllIssues = ({ allIssues }: { allIssues: Type[] }) => {
    // console.log(allIssues);
    return <div className ="grid  grid-cols-1 md:grid-cols-12  my-10 md:my-20" >

        <div className="col-span-12 md:col-span-9 ">
            
           <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
             {
                allIssues.map((issue) => (
                    <Card key ={issue.id} issue = {issue}/>

                ))
            }

           </div>

         </div>
         <div className=" col-span-12 md:col-span-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm my-2 md:ml-5">
                 <h2 className="mb-2 text-xl font-bold text-slate-900">Your Stack</h2>
                 <p className="mb-4 min-h-18 text-sm leading-5.5 text-slate-500" >No technologies selected yet.</p>
                 <button className="bg-white p-2 w-full border  border-red-700 rounded-xl font-semibold cursor-pointer text-red-700">Remove All</button>
              </div>
            </div>
           
       </div>;
};

export default AllIssues;