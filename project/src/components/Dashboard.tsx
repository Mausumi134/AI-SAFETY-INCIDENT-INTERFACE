import React, { useState } from 'react';

// Mock data and types... probably should fetch from API later
import { mockIncidents } from '../data/mockIncidents';
import { Incident, SortDirection, SeverityFilter } from '../types/incident';

// Components (maybe organize these imports later)
import Header from './Header';
import FilterControls from './FilterControls';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';

const Dashboard: React.FC = () => {
  // State to keep track of our incidents
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);

  // Sorting (newest first by default, makes sense for reports)
  const [sortDir, setSortDir] = useState<SortDirection>('newest');

  // Filtering by severity (initially show everything)
  const [filterBySeverity, setFilterBySeverity] = useState<SeverityFilter>('All');

  const [isAddFormVisible, setIsAddFormVisible] = useState(false); // bit wordier but clearer maybe?

  // Function to add a new incident into the list
  const handleAddIncident = (newIncidentData: Omit<Incident, 'id'>) => {
    // Find the current max id (could optimize later with UUIDs)
    const currentMaxId = incidents.reduce((highestId, currIncident) => {
      return Math.max(highestId, currIncident.id)
    }, 0);

    const incidentToAdd: Incident = {
      ...newIncidentData,
      id: currentMaxId + 1, // Simple auto-increment
    };

    const updatedIncidents = [incidentToAdd, ...incidents]; // Decided to put the newest on top
    setIncidents(updatedIncidents);

    // Hide the form once added (Maybe show a toast in future?)
    setIsAddFormVisible(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-400 mb-1">Incident Reports</h2>
          <p className="text-gray-400 text-sm">
            View and manage reported AI safety incidents across all systems
          </p>
        </div>

        {/* Filters */}
        <FilterControls 
          sortDirection={sortDir}
          setSortDirection={setSortDir}
          severityFilter={filterBySeverity}
          setSeverityFilter={setFilterBySeverity}
          onAddNewClick={() => {
            setIsAddFormVisible(true);
            // could focus the form input field here too
          }}
        />

        {/* Conditionally show form to add new incident */}
        {isAddFormVisible && (
          <IncidentForm 
            onAddIncident={handleAddIncident}
            onCancel={() => {
              setIsAddFormVisible(false);
              // maybe confirm with user before cancelling in future
            }}
          />
        )}

        {/* Incident list based on current filters */}
        <IncidentList 
          incidents={incidents}
          sortDirection={sortDir}
          severityFilter={filterBySeverity}
        />
      </main>
    </div>
  );
};

export default Dashboard; 
