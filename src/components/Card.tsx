import type { Type } from "./Type";

type CardProps = {
  issue: Type;
  isAdded: boolean;
  onAdd: (issue: Type) => void;
  onRemove: (id: string) => void;
};

const Card = ({ issue, isAdded,onAdd, onRemove,}: CardProps) => {
  return (
      <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Icon and Badge */}
       <div className="mb-5 flex items-center justify-between">
            <img
             src={issue.icon}
             alt={issue.name}
             className="h-9 w-9 object-contain"
            />

           { issue.badge && (
              <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-500">
                    {issue.badge}
              </span>)
            }
        </div>

          {/* Title */}
          <h2 className="mb-2 text-xl font-bold text-slate-900">{issue.title}</h2>
 
           {/* Description */}
           <p className="mb-4 min-h-18 text-sm leading-5.5 text-slate-500">{issue.description}</p>

          {/* Category, Difficulty and Rating */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">

           <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
               {issue.category}
            </span>

           <span className="whitespace-nowrap  text-xs text-slate-500">{issue.difficulty} </span>

            <span className="flex items-center gap-1 text-sm font-semibold text-slate-700">
            <span className="text-amber-400">★</span>
             {issue.rating} </span>
        </div>

         {/* Button */}
          <button type="button" disabled={isAdded}
             onClick={() => isAdded ? onRemove(issue.id) : onAdd(issue) }
             className=" mt-auto w-full rounded-lg bg-slate-950 px-4 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-70" >
             {isAdded ? "✓ Added to Stack" : "Add to Stack"}
          </button>

   

    </div>
  )
};

export default Card;
