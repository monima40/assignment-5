import Card from "./Card";
import type { Type } from "./Type";
import toast from "react-hot-toast";
import YourStack from "./YourStack";



type AllIssuesProps = {
    allIssues: Type[];
    completedIssues: Type[];
    setCompletedIssues: React.Dispatch<
    React.SetStateAction<Type[]>>;
};

const AllIssues = ({ allIssues,completedIssues,setCompletedIssues }: AllIssuesProps) => {
   
     
      const handleAdd = (tech: Type) => {
      setCompletedIssues([...completedIssues, tech]);
      toast.success(`${tech.name} added to stack`);};

      const handleRemove = (id: string) => 
      {
        const removedTech = completedIssues.find(
        (tech) => tech.id === id);

        setCompletedIssues(
        completedIssues.filter((tech) => tech.id !== id) );

        if (removedTech) {
        toast.success(`${removedTech.name} removed from stack`);}
      };

    const handleRemoveAll = () => {
    setCompletedIssues([]); 
  toast.success("All technologies removed from stack");};

      
      
    return (

      <>
       
    <div className ="grid  grid-cols-1 md:grid-cols-12  my-10 md:my-20" >

        <div className="col-span-12 md:col-span-9 ">
            
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {
                    allIssues.map((issue) => ( <Card key={issue.id} issue={issue} 
                    isAdded={completedIssues.some((tech) => tech.id === issue.id)}
                    onAdd={handleAdd} onRemove={handleRemove}/> ))
                  }

                </div>

            </div>
               <div className=" col-span-12 md:col-span-3">
                <YourStack
                 completedIssues={completedIssues}
                 onRemove={handleRemove}
                  onRemoveAll={handleRemoveAll} />
               </div>
           
          </div>

    
      </>
    )

        
};

export default AllIssues;