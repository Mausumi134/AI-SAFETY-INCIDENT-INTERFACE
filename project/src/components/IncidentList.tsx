import React from 'react';
import IncidentCard from './IncidentCard';
import { Incident, SortDirection, SeverityFilter } from '../types/incident'; // might clean this up later

interface IncidentListProps {
  incidents: Incident[];
  sortDirection: SortDirection;
  severityFilter: SeverityFilter;
}

const IncidentList: React.FC<IncidentListProps> = ({
  incidents,
  sortDirection,
  severityFilter
}) => {
  
  // Apply severity filter 
  const visibleIncidents = severityFilter === 'All'
    ? incidents
    : incidents.filter(item => item.severity === severityFilter);

  // Sort incidents by reported date
  const sortedList = [...visibleIncidents].sort((a, b) => {
    const timeA = new Date(a.reported_at).getTime();
    const timeB = new Date(b.reported_at).getTime();
    return sortDirection === 'newest' ? timeB - timeA : timeA - timeB;
  });

  // Might want to memoize sortedList later if perf becomes an issue

  return (
    <div className="space-y-4">
      {sortedList.length === 0 ? (
        <div className="p-6 text-center bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-500">No incidents match your criteria.</p>
        </div>
      ) : (
        sortedList.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))
      )}
    </div>
  );
};


export default IncidentList;
