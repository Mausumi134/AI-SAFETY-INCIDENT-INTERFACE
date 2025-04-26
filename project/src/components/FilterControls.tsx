import React from 'react';
import { Filter, Clock, PlusCircle } from 'lucide-react';
import { SortDirection, SeverityFilter } from '../types/incident';

// props interface (might move elsewhere later if it grows bigger)
interface FilterControlsProps {
  sortDirection: SortDirection;
  setSortDirection: (dir: SortDirection) => void;
  severityFilter: SeverityFilter;
  setSeverityFilter: (severity: SeverityFilter) => void;
  onAddNewClick: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  sortDirection,
  setSortDirection,
  severityFilter,
  setSeverityFilter,
  onAddNewClick
}) => {
  // Might split these into smaller components if things get messy later

  return (
    <div className="glass-effect rounded-xl shadow-lg border border-white/50 p-5 mb-6">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          
          {/* Severity filter */}
          <div className="flex items-center bg-white/50 rounded-lg px-3 py-2">
            <Filter className="h-4 w-4 text-blue-600 mr-2" />
            <label 
              htmlFor="severity-filter" 
              className="text-sm font-medium text-black mr-2"
            >
              Severity:
            </label>

            <select
              id="severity-filter"
              value={severityFilter}
              onChange={(e) => {
                const val = e.target.value as SeverityFilter;
                setSeverityFilter(val); // explicit assignment feels safer
              }}
              className="rounded-md bg-white border-0 shadow-sm text-sm focus:ring-2 focus:ring-blue-500 py-1 pl-2 pr-8 text-black"
            >
             
              <option value="All">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Sort Direction */}
          <div className="flex items-center bg-white/50 rounded-lg px-3 py-2">
            <Clock className="h-4 w-4 text-blue-600 mr-2" />
            <label 
              htmlFor="sort-direction" 
              className="text-sm font-medium text-black mr-2"
            >
              Sort:
            </label>

            <select
              id="sort-direction"
              value={sortDirection}
              onChange={(e) => {
                const newDir = e.target.value as SortDirection; // casting... not the cleanest but works
                setSortDirection(newDir);
              }}
              className="rounded-md bg-white border-0 shadow-sm text-sm focus:ring-2 focus:ring-blue-500 py-1 pl-2 pr-8 text-black"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

        </div>

        {/* Add New Incident Button */}
        <button
          onClick={() => {
            // not sure if we need extra validation here but whatever
            onAddNewClick();
          }}
          className="px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2 group"
        >
          <PlusCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
          <span>Report New Incident</span>
        </button>

      </div>
    </div>
  )
}


export default FilterControls;
