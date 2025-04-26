import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { Incident } from '../types/incident'; 

interface IncidentFormProps {
  onAddIncident: (incident: Omit<Incident, 'id'>) => void;
  onCancel: () => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ onAddIncident, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Quick field validation
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return; 

    const incidentData: Omit<Incident, 'id'> = {
      title,
      description,
      severity,
      reported_at: new Date().toISOString()
    };

    onAddIncident(incidentData);

    setTitle('');
    setDescription('');
    setSeverity('Low');
    setErrors({});
  };

  const getSeverityButtonStyles = (level: string) => {
    const selected = severity === level;
    switch (level) {
      case 'High':
        return selected ? 'bg-red-600 text-white shadow-md' : 'bg-red-50 text-black hover:bg-red-100';
      case 'Medium':
        return selected ? 'bg-amber-600 text-white shadow-md' : 'bg-amber-50 text-black hover:bg-amber-100';
      case 'Low':
        return selected ? 'bg-emerald-600 text-white shadow-md' : 'bg-emerald-50 text-black hover:bg-emerald-100';
      default:
        return selected ? 'bg-gray-600 text-white shadow-md' : 'bg-gray-50 text-black hover:bg-gray-100';
    }
  };

  return (
    <div className="glass-effect rounded-xl shadow-lg border border-white/50 p-6 mb-6 animate-slideIn">
      
      {/* Top Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />
          Report New Incident
        </h2>
        <button 
          onClick={onCancel}
          className="text-white hover:text-gray-300 transition-colors duration-200 p-1 hover:bg-white/10 rounded-full"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* The Form */}
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Title input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-white mb-1">
            Title
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter incident title"
            className={`w-full px-4 py-2.5 bg-white text-black border ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
          />
          {errors.title && (
            <p className="mt-1.5 text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        {/* Description input */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-white mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Describe the incident in detail"
            className={`w-full px-4 py-2.5 bg-white text-black border ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
          />
          {errors.description && (
            <p className="mt-1.5 text-sm text-red-500">{errors.description}</p>
          )}
        </div>

        {/* Severity buttons */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Severity
          </label>
          <div className="flex space-x-4">
            {['Low', 'Medium', 'High'].map((lvl) => (
              <label key={lvl} className="relative flex items-center">
                <input
                  type="radio"
                  name="severity"
                  value={lvl}
                  checked={severity === lvl}
                  onChange={() => setSeverity(lvl as 'Low' | 'Medium' | 'High')}
                  className="sr-only"
                />
                <div
                  className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${getSeverityButtonStyles(lvl)}`}
                >
                  {lvl}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Form actions */}
        <div className="flex justify-end space-x-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
          >
            Submit Report
          </button>
        </div>

      </form>
    </div>
  );
};


export default IncidentForm;
