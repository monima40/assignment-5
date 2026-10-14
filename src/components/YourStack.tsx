import type { Type } from "./Type";
import { RxCross1 } from "react-icons/rx";


type YourStackProps = {
  completedIssues: Type[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};
const YourStack =  ({
  completedIssues,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
    return (
        <>
        
    <div className="sticky top-24 self-start">
      <div className="my-2 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm md:ml-5">

        <h2 className="mb-2 text-xl font-bold text-slate-900">Your Stack
        </h2>
        <p className="mb-3 text-sm text-slate-400">
          {completedIssues.length === 0
          ? "No technologies selected yet."
         : `${completedIssues.length} ${
           completedIssues.length === 1 ? "Technology" : "Technologies"
          } Selected`}
         </p>

        <div className="mt-2 space-y-2">
          {completedIssues.length === 0 ? (
          <div className="mt-4 flex min-h-17.5 items-center justify-center rounded-xl border border-dashed border-slate-300">
           <p className="text-sm text-slate-400 ">
           Your stack is empty.
           </p>
           </div>) : (
            completedIssues.map((issue) => (
              <div
                key={issue.id}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
                <img
                  src={issue.icon}
                  alt={issue.name}
                  className="h-8 w-8 shrink-0 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-800">
                    {issue.name}
                  </p>

                  <p className="truncate text-xs text-slate-500">
                    {issue.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(issue.id)}
                  aria-label={`Remove ${issue.name}`}
                  className="shrink-0 rounded-md px-2 py-1 text-lg leading-none text-slate-400 transition hover:bg-slate-100 hover:text-red-500"
                >
                  <RxCross1 />
                </button>
              </div>
            ))
          )}
        </div>

       {
        completedIssues.length > 0 && ( <button
          type="button"
          onClick={onRemoveAll}
          className="w-full cursor-pointer rounded-xl border border-red-700 bg-white p-2 font-semibold text-red-700 transition hover:bg-red-50"
        >
          Remove All
        </button>)
       }
      </div>
    </div>
  
        </>
    )
};

export default YourStack;